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

export const FAQ_DATA = [
  {
    question: "What is Infynia?",
    answer: "Infynia is an AI-powered automation agency that helps individuals and businesses streamline their workflows. We design smart systems that take care of repetitive tasks, so you can focus on creating, innovating, and growing."
  },
  {
    question: "What does Infynia do?",
    answer: "We build custom automation solutions that connect your tools, organize your processes, and reduce manual work. Whether it’s managing data, handling communication, or simplifying operations, Infynia makes your workflow run smoothly in the background."
  },
  {
    question: "Who can benefit from Infynia?",
    answer: "- Entrepreneurs who want to save time and scale their projects\n- Small businesses looking to boost efficiency without hiring extra staff\n- Creators & freelancers who want to focus on their craft instead of admin work\n- Teams that need better collaboration and less repetitive busywork"
  },
  {
    question: "How does Infynia help me “make something great”?",
    answer: "By removing the friction of repetitive tasks, Infynia frees up your energy for what really matters — building, innovating, and achieving your goals. We believe automation isn’t just about efficiency; it’s about unlocking your potential."
  },
  {
    question: "Do I need technical skills to use Infynia?",
    answer: "Not at all. We handle the technical setup and design everything to be user-friendly. You’ll simply enjoy the benefits of a system that works for you, not the other way around."
  },
  {
    question: "Why choose Infynia?",
    answer: "- Tailored automation built around your needs\n- AI-driven solutions that adapt and scale with you\n- More time, less stress, and greater impact"
  }
];

export const FAQ_CATEGORIES = {
  General: FAQ_DATA
};