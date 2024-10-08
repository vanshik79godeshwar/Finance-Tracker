import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact us", href: "/ContactUs" },
  { label: "About Us", href: "/About" },
  { label: "Services", href: "/Service" },
  { label: "News", href: "/News" },
  // { label: "Blogs", href: "/Blogs" },
  { label: "Career", href: "/Career" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at Captial Compass was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Advanced Financial Analytics",
    description:
      "Gain deep insights into your financial data with our advanced analytics tools, designed to help you make informed investment decisions.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Market Data",
    description:
      "Stay ahead of the market with real-time data updates, ensuring you always have the latest information to guide your financial strategies.",
  },
  {
    icon: <ShieldHalf />,
    text: "Personalized Budget Plans",
    description:
      "Create tailored investment plans that align with your financial goals and risk tolerance, giving you a clear path to success.",
  },
  {
    icon: <Fingerprint />,
    text: "Secure and Private",
    description:
      "Protect your financial information with top-tier security measures and ensure your data remains private and confidential.",
  },
  {
    icon: <PlugZap />,
    text: "Expert Support",
    description:
      "Access professional financial advice and support whenever you need it, ensuring you always have the guidance required to navigate complex financial landscapes.",
  },
  {
    icon: <GlobeLock />,
    text: "User-Friendly Dashboard",
    description:
      "Manage your investments with ease using our intuitive dashboard, designed to simplify your financial management tasks.",
  },
];

export const checklistItems = [
  {
    title: "Step 1: Sign Up and Set Up Your Profile",
    description: "Visit the website and click “Sign Up” to create an account by entering your personal information and setting a secure password. "  },
  {
    title: "Step 2: Explore the Dashboard",
    description: 
  "After logging in, familiarize yourself with the dashboard where you can see an overview of budget plans, stock prices, and expenses. "},
  {
    title: "Step 3: Utilize Personal Consulting Services",
    description:
      "Navigate to the Services section to schedule a meeting with a financial advisor for personalized guidance. Prepare specific questions or topics to discuss to make the most out of your consultation.",
  },
  {
    title: "Step 4: Set Up and Manage Your Budget Plan",
    description:" Go to the “Budget” section to enter your income and expenses, and create a personalized budget plan. " },
  {
    title: "Step 5: Track and Analyze Your Expenses",
    description:
  "Categorize your expenses to analyze spending patterns and identify areas for potential savings."},
  {
    title: "Step 6: Monitor Stock Prices and Investments",
    description: 
  " Visit the “ETF” section to view real-time stock prices and check your investment portfolio. " },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
