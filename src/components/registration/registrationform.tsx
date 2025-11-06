"use client";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { AnimatedButton } from "../ui/AnimatedComponents";

const firebaseConfig = {
  apiKey: "AIzaSyB6xSNB6LNRneOzkUcpfLIY5wmHwtd-khI",
  authDomain: "stallion-classic.firebaseapp.com",
  projectId: "stallion-classic",
  storageBucket: "stallion-classic.firebasestorage.app",
  messagingSenderId: "304093197633",
  appId: "1:304093197633:web:031b2d29a457892de59dc0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface SelectedCategory {
  mainCategory: string;
  mainCategoryTitle: string;
  subcategory: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  age: string;
  gender: string;
  selectedCategories: SelectedCategory[];
  address: string;
  city: string;
  state: string;
  pincode: string;
  emergencyContact: string;
  emergencyRelation: string;
  agreeTerms: boolean;
}

interface RegistrationFormProps {
  category: string;
}

const StyledRegistrationForm = ({ category }: RegistrationFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // For adding additional categories
  const [currentMainCategory, setCurrentMainCategory] = useState('');
  const [currentSubcategory, setCurrentSubcategory] = useState('');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    age: '',
    gender: '',
    selectedCategories: [],
    address: '',
    city: '',
    state: '',
    pincode: '',
    emergencyContact: '',
    emergencyRelation: '',
    agreeTerms: false
  });

  const categoryConfig = {
    junior: {
      title: 'JUNIOR CATEGORIES (Under 23 Years)',
      subcategories: [
        'Men\'s Physique (160-170 cm)',
        'Men\'s Physique (Above 170 cm)',
        'Bodybuilding 55-60 kg',
        'Bodybuilding 60-65 kg',
        'Bodybuilding 70-75 kg',
        'Bodybuilding Above 75 kg'
      ],
    },
    senior: {
      title: 'SENIOR CATEGORIES (Above 23 Years)',
      subcategories: [
        'Classic Physique (Under 170cm)',
        'Classic Physique (Above 170cm)',
        'Men Physique (Under 165 cm)',
        'Men Physique (Above 170 cm)',
        'Bodybuilding 55-60 kg',
        'Bodybuilding 60-65 kg',
        'Bodybuilding 65-70 kg',
        'Bodybuilding 70-75 kg',
        'Bodybuilding 75-80 kg',
        'Bodybuilding 80-85 kg',
        'Bodybuilding 85-90 kg',
        'Bodybuilding 90-95 kg'
      ],
    },
    womens: {
      title: 'WOMEN\'S CATEGORIES',
      subcategories: [
        'Bikini (Open)',
        'Women\'s Body Building (Open)',
      ],
    },
    star: {
      title: 'STAR CATEGORIES',
      subcategories: [
        'Denim Jeans (Open)'
      ],
    }
  };

  const currentCategory = categoryConfig[category as keyof typeof categoryConfig];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Add a category to the list
  const handleAddCategory = () => {
    if (!currentMainCategory || !currentSubcategory) {
      alert('Please select both main category and subcategory');
      return;
    }

    const categoryExists = formData.selectedCategories.some(
      cat => cat.mainCategory === currentMainCategory && cat.subcategory === currentSubcategory
    );

    if (categoryExists) {
      alert('This category is already added!');
      return;
    }

    const newCategory: SelectedCategory = {
      mainCategory: currentMainCategory,
      mainCategoryTitle: categoryConfig[currentMainCategory as keyof typeof categoryConfig].title,
      subcategory: currentSubcategory
    };

    setFormData(prev => ({
      ...prev,
      selectedCategories: [...prev.selectedCategories, newCategory]
    }));

    setCurrentMainCategory('');
    setCurrentSubcategory('');
  };

  const handleRemoveCategory = (index: number) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.selectedCategories.length === 0) {
      alert('Please add at least one category');
      return;
    }

    setLoading(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, 'registrations'), {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        whatsappNumber: formData.whatsappNumber,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        selectedCategories: formData.selectedCategories,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        emergencyContact: formData.emergencyContact,
        emergencyRelation: formData.emergencyRelation,
        registrationDate: serverTimestamp(),
        status: 'pending',
        paymentStatus: 'pending'
      });

      setSuccess(true);
    
      // Send WhatsApp message
      const cleanedNumber = formData.phoneNumber.replace(/\D/g, "");
      const last10Digits = cleanedNumber.slice(-10);

      const categoriesText = formData.selectedCategories.map(
        cat => `${cat.mainCategoryTitle} - ${cat.subcategory}`
      ).join(', ');

      const res = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: last10Digits,
          name: formData.fullName,
          category: categoriesText,
          subCategory: `${formData.selectedCategories.length} categories`,
        }),
      });

      if (!res.ok) {
        console.error("WhatsApp send failed", await res.json());
        alert("Registration saved, but failed to send WhatsApp message.");
      }
      
      router.push('/register?success=true');

    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Error submitting registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!currentCategory) {
    return (
      <div className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-[impact] text-[#282828] mb-4">CATEGORY NOT FOUND</h1>
          <AnimatedButton>
            <button
              onClick={() => router.push('/register')}
              className="bg-[#dc4a26] hover:bg-opacity-90 text-white px-8 py-3 font-bold font-[CreatoDisplay] tracking-wider transition-colors"
            >
              BACK TO CATEGORIES
            </button>
          </AnimatedButton>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-5xl sm:text-6xl mb-4">🎉</div>
            <h2 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-4">REGISTRATION SUCCESSFUL!</h2>
            <p className="text-gray-700 font-[CreatoDisplay] mb-6">
              Thank you for registering for Stallion Classic 2025.
              We&aposll contact you soon with further details.
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#dc4a26] mx-auto"></div>
            <p className="text-sm text-gray-500 mt-4 font-[CreatoDisplay]">Redirecting to homepage...</p>
          </div>
        </div>
      </div>
    );
  }

  const availableSubcategories = currentMainCategory 
    ? categoryConfig[currentMainCategory as keyof typeof categoryConfig]?.subcategories || []
    : [];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#282828] mb-3 font-[impact]">
            REGISTRATION FORM
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 font-[CreatoDisplay]">
            Complete your registration for Stallion Classic 2025
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-6 flex items-center">
                <span className="text-[#dc4a26] mr-3">👤</span>
                PERSONAL INFORMATION
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Gender *</label>
                  <select
                    title="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Competition Categories - UPDATED SECTION */}
            <div>
              <div className="border-t border-gray-200 my-8"></div>
              <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-6 flex items-center">
                <span className="text-[#dc4a26] mr-3">🏆</span>
                COMPETITION CATEGORIES
              </h3>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-[CreatoDisplay]">
                  💡 You can register for multiple categories! Add all the categories you want to compete in.
                </p>
              </div>

              {/* Add Category Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-[#282828] mb-4 font-[CreatoDisplay]">Add Category</h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Main Category</label>
                    <select
                      title="Main Category"
                      value={currentMainCategory}
                      onChange={(e) => {
                        setCurrentMainCategory(e.target.value);
                        setCurrentSubcategory('');
                      }}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    >
                      <option value="">Select Main Category</option>
                      {Object.entries(categoryConfig).map(([key, config]) => (
                        <option key={key} value={key}>{config.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Subcategory</label>
                    <select

                      title="Subcategory"
                      value={currentSubcategory}
                      onChange={(e) => setCurrentSubcategory(e.target.value)}
                      disabled={!currentMainCategory}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay] disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select Subcategory</option>
                      {availableSubcategories.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 font-bold font-[CreatoDisplay] tracking-wider transition-colors rounded-sm"
                >
                  + ADD THIS CATEGORY
                </button>
              </div>

              {/* Selected Categories List */}
              {formData.selectedCategories.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-[#282828] mb-4 font-[CreatoDisplay]">
                    Selected Categories ({formData.selectedCategories.length})
                  </h4>
                  <div className="space-y-3">
                    {formData.selectedCategories.map((cat, index) => (
                      <div key={index} className="bg-white border-2 border-[#dc4a26] rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <p className="font-bold text-[#282828] font-[CreatoDisplay]">{cat.mainCategoryTitle}</p>
                          <p className="text-sm text-gray-600 font-[CreatoDisplay]">{cat.subcategory}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveCategory(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm font-bold font-[CreatoDisplay] transition-colors"
                        >
                          REMOVE
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {formData.selectedCategories.length === 0 && (
                <div className="text-center py-8 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500 font-[CreatoDisplay]">No categories added yet. Add at least one category above.</p>
                </div>
              )}
            </div>

            {/* Address Information */}
            <div>
              <div className="border-t border-gray-200 my-8"></div>
              <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-6 flex items-center">
                <span className="text-[#dc4a26] mr-3">📍</span>
                ADDRESS INFORMATION
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Full Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Enter your complete address..."
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                      placeholder="Enter your state"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                      placeholder="Enter PIN code"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <div className="border-t border-gray-200 my-8"></div>
              <h3 className="text-2xl sm:text-3xl font-[impact] text-[#282828] mb-6 flex items-center">
                <span className="text-[#dc4a26] mr-3">🚨</span>
                EMERGENCY CONTACT
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Emergency Contact Number *</label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                    placeholder="Emergency contact number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium font-[CreatoDisplay]">Relation *</label>
                  <select
                    title="Relation"
                    name="emergencyRelation"
                    value={formData.emergencyRelation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-gray-800 focus:outline-none focus:border-[#dc4a26] transition-colors font-[CreatoDisplay]"
                  >
                    <option value="">Select Relation</option>
                    <option value="parent">Parent</option>
                    <option value="spouse">Spouse</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="border-t border-gray-200 my-8"></div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 text-[#dc4a26] bg-white border border-gray-300 rounded focus:ring-[#dc4a26] focus:ring-2"
                />
                <label htmlFor="agreeTerms" className="text-gray-700 text-sm font-[CreatoDisplay]">
                  I agree to the <span className="text-[#dc4a26] hover:text-[#b83920] cursor-pointer">terms and conditions</span> and
                  confirm that all information provided is accurate. I understand that false information may lead to disqualification. *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <AnimatedButton>
                <button
                  type="submit"
                  disabled={loading || !formData.agreeTerms || formData.selectedCategories.length === 0}
                  className={`w-full py-4 px-6 font-bold text-white text-lg font-[CreatoDisplay] tracking-wider transition-all duration-300 ${
                    loading || !formData.agreeTerms || formData.selectedCategories.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#dc4a26] hover:bg-opacity-90'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>SUBMITTING REGISTRATION...</span>
                    </div>
                  ) : (
                    `COMPLETE REGISTRATION (${formData.selectedCategories.length} ${formData.selectedCategories.length === 1 ? 'CATEGORY' : 'CATEGORIES'})`
                  )}
                </button>
              </AnimatedButton>
            </div>
          </form>
        </div>

        {/* Important Notes */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-xl sm:text-2xl font-[impact] text-[#282828] mb-4">📋 IMPORTANT NOTES:</h4>
            <ul className="space-y-2 text-gray-700 text-sm font-[CreatoDisplay]">
              <li>• All fields marked with (*) are mandatory</li>
              <li>• You can register for multiple categories in a single registration</li>
              <li>• Ensure your phone number and WhatsApp number are active</li>
              <li>• Keep your required documents ready for verification</li>
              <li>• Registration fee payment details will be shared after form submission</li>
              <li>• For any queries, contact us at +91 9966369842 or +91 7995181677</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledRegistrationForm;