import type { NavLink } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "nav.home" },
  { href: "/products", label: "nav.products" },
  { href: "/pricing", label: "nav.pricing" },
  { href: "/faq", label: "nav.faq" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export const PRODUCTS = [
    {
        slug: "inscription-faq",
        title: "products.inscriptionFaq.title",
        description: "products.inscriptionFaq.description",
        image: PlaceHolderImages.find(img => img.id === "2"),
    },
    {
        slug: "parent-portal",
        title: "products.parentPortal.title",
        description: "products.parentPortal.description",
        image: PlaceHolderImages.find(img => img.id === "3"),
    },
    {
        slug: "dentist-booking",
        title: "products.dentistBooking.title",
        description: "products.dentistBooking.description",
        image: PlaceHolderImages.find(img => img.id === "4"),
    },
];

export const UPCOMING_PRODUCTS = [
    {
        title: "upcomingProducts.aiTutoring.title",
        description: "upcomingProducts.aiTutoring.description",
    },
    {
        title: "upcomingProducts.ecommerceSuite.title",
        description: "upcomingProducts.ecommerceSuite.description",
    },
];

export const CURRENCY_RATES = {
  USD: 1,
  MAD: 10,
  EUR: 0.9,
};

export const PRICING_PLANS = {
  "parent-portal": {
    name: "pricing.plans.parentPortal.name",
    description: "pricing.plans.parentPortal.description",
    setup: { min: 800, max: 1500 },
    monthly: { min: 100, max: 200 },
    features: ["pricing.features.attendance", "pricing.features.grades", "pricing.features.announcements", "pricing.features.messaging"],
  },
  "inscription-faq": {
    name: "pricing.plans.inscriptionFaq.name",
    description: "pricing.plans.inscriptionFaq.description",
    yearly: { min: 500, max: 1000 },
    monthly: { min: 50, max: 100 },
    features: ["pricing.features.registration", "pricing.features.upload", "pricing.features.aiFaq", "pricing.features.payment"],
  },
  "school-bundle": {
    name: "pricing.plans.schoolBundle.name",
    description: "pricing.plans.schoolBundle.description",
    yearly: { min: 2000, max: 2000 },
    monthly: { min: 150, max: 250 },
    features: ["pricing.features.allParentPortal", "pricing.features.allInscriptionFaq", "pricing.features.prioritySupport", "pricing.features.accountManager"],
  },
  "dentist-booking": {
    name: "pricing.plans.dentistBooking.name",
    description: "pricing.plans.dentistBooking.description",
    yearly: { min: 600, max: 1200 },
    monthly: { min: 50, max: 120 },
    features: ["pricing.features.onlineBooking", "pricing.features.googleCalendar", "pricing.features.reminders", "pricing.features.patientManagement"],
  },
};

export const FAQ_DATA = [
  {
    question: "faq.whatIs.question",
    answer: "faq.whatIs.answer"
  },
  {
    question: "faq.whatDoes.question",
    answer: "faq.whatDoes.answer"
  },
  {
    question: "faq.whoBenefits.question",
    answer: "faq.whoBenefits.answer"
  },
  {
    question: "faq.howHelp.question",
    answer: "faq.howHelp.answer"
  },
  {
    question: "faq.techSkills.question",
    answer: "faq.techSkills.answer"
  },
  {
    question: "faq.whyChoose.question",
    answer: "faq.whyChoose.answer"
  }
];
