import { BotMessageSquare } from "lucide-react";

import { ShieldAlert } from "lucide-react";
import { ShieldHalf } from "lucide-react";

import { MapPinned } from "lucide-react";
import { Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

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
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
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
    text: "Real-Time Report Submission",
    description:
      "Emergency Report Form: Users can quickly submit reports with details about disasters (e.g., type, severity, location).Photo and Video Upload: Attach media to reports for better visualization and verification.",
  },
  {
    icon: <MapPinned />,
    text: "Interactive Map",
    description:
      "Disaster Mapping: Visualize disaster reports on an interactive map with real-time updates.Geolocation: Automatically capture the location of reports and display it on the map.",
  },
  {
    icon: <ShieldHalf />,
    text: "Search and Filtering",
    description:
      "Disaster Type: Filter reports by type (e.g., floods, earthquakes, wildfires).Severity Levels: Filter reports based on severity (e.g., minor, major, catastrophic).Date and Location: Search and filter by date range and geographical location.",
  },
  {
    icon: <ShieldAlert />,

    text: "Emergency Alerts and Notifications",
    description:
      "Real-Time Alerts: Push notifications for critical updates and emergencies.Email Notifications: Alert users about new reports, updates, and emergency information.",
  },
  {
    icon: <Users />,
    text: "Community Engagement",
    description:
      "Discussion Forums: Facilitate community discussions and coordination.Commenting and Voting: Allow users to comment on and upvote reports for important updates.",
  },
  {
    icon: <ShieldHalf />,
    text: "Verification and Moderation",
    description:
      "Report Verification: Tools for verifying the authenticity of reports, possibly with user or admin moderation.Admin Review: Admin tools for managing, reviewing, and validating disaster reports.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Contact Information" },
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "FAQ" },
];

export const platformLinks = [
  { href: "#", text: "Discussion Forum" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Events" },
];
