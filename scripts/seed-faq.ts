import mongoose from 'mongoose';
import FAQ from '../src/models/FAQ';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const dummyFaqs = [
  { question: "What services do you provide?", answer: "We provide comprehensive solutions in Construction & Engineering, Import & Export, Business Consultancy, General Supply, and Logistics.", order: 1 },
  { question: "Are you a government registered company?", answer: "Yes, SS Ruma International Ltd is a fully government registered and compliant company.", order: 2 },
  { question: "How can I contact your support team?", answer: "You can reach out to us via our Contact Form, email us directly, or call our dedicated support hotline.", order: 3 },
  { question: "Do you offer international standard services?", answer: "Absolutely. We strictly adhere to global benchmarks to ensure our services match international standards.", order: 4 },
  { question: "What makes you different from competitors?", answer: "Our professional team, fast service, competitive pricing, and strict commitment to quality assurance set us apart.", order: 5 }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log('Connected to MongoDB');

    // Clear existing FAQs
    await FAQ.deleteMany({});
    console.log('Cleared existing FAQs');

    // Insert dummy FAQs
    await FAQ.insertMany(dummyFaqs);
    console.log('Successfully seeded FAQs');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seed();
