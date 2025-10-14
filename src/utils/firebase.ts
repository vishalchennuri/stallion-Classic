import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6xSNB6LNRneOzkUcpfLIY5wmHwtd-khI",
  authDomain: "stallion-classic.firebaseapp.com",
  projectId: "stallion-classic",
  storageBucket: "stallion-classic.firebasestorage.app",
  messagingSenderId: "304093197633",
  appId: "1:304093197633:web:031b2d29a457892de59dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

// Type definitions for registration data
export interface RegistrationData {
  id?: string;
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  age: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  emergencyContact: string;
  emergencyRelation: string;
  category: string;
  categoryTitle: string;
  registrationDate: Timestamp | Date | string;
  status: 'pending' | 'approved' | 'rejected';
  paymentStatus: 'pending' | 'paid' | 'failed';
  agreeTerms: boolean;
}