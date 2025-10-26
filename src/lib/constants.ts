import type { NavLink } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const PRODUCTS = [
    {
        slug: "inscription-faq",
        title: "Inscription & FAQ",
        description: "A streamlined school registration system designed for efficiency and ease of use. Our platform simplifies the enrollment process for administrators, parents, and students. It features an intelligent, AI-powered FAQ module that learns from user interactions to provide instant, accurate answers, reducing administrative workload.",
        image: PlaceHolderImages.find(img => img.id === "2"),
    },
    {
        slug: "parent-portal",
        title: "Parent Portal",
        description: "A comprehensive portal that bridges the communication gap between school and home. Parents can access real-time information on their child's attendance, grades, assignments, and school announcements. Secure messaging and progress tracking tools foster a collaborative educational environment.",
        image: PlaceHolderImages.find(img => img.id === "3"),
    },
    {
        slug: "dentist-booking",
        title: "Dentist Booking",
        description: "An effortless appointment scheduling and management system for dental practices. Patients can book appointments online 24/7, receive automated reminders, and manage their bookings. The system integrates seamlessly with Google Calendar, helping to optimize the clinic's schedule and reduce no-shows.",
        image: PlaceHolderImages.find(img => img.id === "4"),
    },
];

export const UPCOMING_PRODUCTS = [
    {
        title: "AI Tutoring Platform",
        description: "Personalized learning paths and adaptive assessments for students.",
    },
    {
        title: "E-commerce Suite",
        description: "A complete toolkit for building and scaling online stores.",
    },
];

export const CURRENCY_RATES = {
  USD: 1,
  MAD: 10,
  EUR: 0.9,
};

export const PRICING_PLANS = {
  "parent-portal": {
    name: "Parent Portal",
    setup: { min: 800, max: 1500 },
    monthly: { min: 100, max: 200 },
    features: ["Attendance Tracking", "Grades & Notes", "School Announcements", "Secure Messaging"],
  },
  "inscription-faq": {
    name: "Inscription & FAQ",
    yearly: { min: 500, max: 1000 },
    monthly: { min: 50, max: 100 },
    features: ["Online Registration Forms", "Document Upload", "AI-Powered FAQ", "Payment Integration"],
  },
  "school-bundle": {
    name: "School Bundle",
    yearly: { min: 2000, max: 2000 },
    monthly: { min: 150, max: 250 },
    features: ["All Parent Portal features", "All Inscription & FAQ features", "Priority Support", "Dedicated Account Manager"],
  },
  "dentist-booking": {
    name: "Dentist Booking",
    yearly: { min: 600, max: 1200 },
    monthly: { min: 50, max: 120 },
    features: ["Online Appointment Booking", "Google Calendar Sync", "Automated Reminders", "Patient Management"],
  },
};

export const FAQ_CATEGORIES = {
  General: [
    {
      question: "What is Infynia?",
      answer: "Infynia specializes in creating modern, multilingual, and user-friendly software solutions. Our goal is to provide scalable tools that enhance efficiency and communication for various sectors, including education and healthcare.",
    },
    {
      question: "Are your products customizable?",
      answer: "Yes, absolutely. We understand that each organization has unique needs. All our products are designed to be highly customizable to fit your specific workflow and requirements.",
    },
  ],
  Inscription: [
    {
      question: "How does the Inscription & FAQ system work?",
      answer: "Our system provides a digital platform for schools to manage student registrations. Parents can fill out forms, upload documents, and make payments online. The integrated FAQ uses AI to answer common questions, reducing the burden on administrative staff.",
    },
  ],
  "Parent Portal": [
    {
      question: "What information can I access in the Parent Portal?",
      answer: "The Parent Portal provides a secure, centralized location to view your child's academic progress, including attendance records, grades, teacher notes, and upcoming assignments. You can also receive important announcements from the school.",
    },
  ],
  Dentist: [
    {
      question: "Does the Dentist Booking system sync with my existing calendar?",
      answer: "Yes, our booking system offers seamless two-way integration with Google Calendar. This ensures your availability is always up-to-date and helps prevent double bookings.",
    },
  ],
};
