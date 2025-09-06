// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADGauMW5WI8n0aWd-vNp1XELrxE0GJHMQ",
  authDomain: "stallion-classic1.firebaseapp.com",
  projectId: "stallion-classic1",
  storageBucket: "stallion-classic1.firebasestorage.app",
  messagingSenderId: "1073175922783",
  appId: "1:1073175922783:web:354294abe65cd8e88533ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Types for registration data
export interface Registration {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  height: number; // in cm
  weight: number; // in kg
  category: string;
  division: string;
  experience: string;
  medicalConditions?: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  profilePhoto?: string; // URL after upload
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

// Database operations
export const registrationService = {
  // Add new registration
  async addRegistration(registration: Omit<Registration, 'id' | 'createdAt' | 'status'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'registrations'), {
        ...registration,
        createdAt: new Date(),
        status: 'pending'
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding registration:', error);
      throw error;
    }
  },

  // Get all registrations
  async getAllRegistrations(): Promise<Registration[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'registrations'));
      const registrations: Registration[] = [];
      
      querySnapshot.forEach((doc) => {
        registrations.push({
          id: doc.id,
          ...doc.data()
        } as Registration);
      });
      
      return registrations;
    } catch (error) {
      console.error('Error getting registrations:', error);
      throw error;
    }
  },

  // Update registration status
  async updateRegistrationStatus(id: string, status: 'approved' | 'rejected'): Promise<void> {
    try {
      const docRef = doc(db, 'registrations', id);
      await updateDoc(docRef, { status });
    } catch (error) {
      console.error('Error updating registration status:', error);
      throw error;
    }
  },

  // Delete registration
  async deleteRegistration(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'registrations', id));
    } catch (error) {
      console.error('Error deleting registration:', error);
      throw error;
    }
  },

  // Upload profile photo
  async uploadProfilePhoto(file: File, registrationId: string): Promise<string> {
    try {
      const storageRef = ref(storage, `profile-photos/${registrationId}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading profile photo:', error);
      throw error;
    }
  }
};

export default app;