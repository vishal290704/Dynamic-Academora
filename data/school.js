export const school = {
  name: "Dynamic English School",
  shortName: "Dynamic",
  established: "2009",
  address: "Phulwariya, Varanasi, Uttar Pradesh – 221106",
  phones: ["9653087078", "8960335883"],
  director: "Mr. Dilip Kumar Srivastava",
  principal: "Mrs. Madhu Pal",
  founder: "Late Avinash Srivastava",
  classes: "Nursery to Class 8",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dynamic+English+School+Phulwariya+Varanasi",
};

export const images = {
  logo: "/images/logo-placeholder.svg",
  hero: "/images/placeholders/hero.svg",
  campus: "/images/placeholders/campus.svg",
  classroom: "/images/placeholders/classroom.svg",
  learning: "/images/placeholders/learning.svg",
  activity: "/images/placeholders/activity.svg",
  director: "/images/placeholders/portrait.svg",
  principal: "/images/placeholders/portrait.svg",
  founder: "/images/placeholders/founder.svg",
};

export const gallery = [
  { src: images.classroom, title: "Bright classrooms", category: "Classrooms" },
  { src: images.learning, title: "Learning together", category: "Learning" },
  { src: images.campus, title: "A welcoming campus", category: "Campus" },
  { src: images.activity, title: "Creative activities", category: "Activities" },
  { src: images.hero, title: "Everyday discovery", category: "Learning" },
  {
    src: "/images/placeholders/community.svg",
    title: "Shared moments",
    category: "Celebrations",
  },
];

export const facilities = [
  { title: "Smart classrooms", text: "Thoughtfully equipped spaces that help lessons feel active and engaging.", icon: "MonitorPlay" },
  { title: "CCTV surveillance", text: "A more mindful school environment supported by on-site monitoring.", icon: "ShieldCheck" },
  { title: "Air-conditioned facilities", text: "Comfortable spaces designed to help children stay focused throughout the day.", icon: "Wind" },
  { title: "Fire safety systems", text: "Safety remains an essential part of a caring learning environment.", icon: "Flame" },
];

export const values = [
  ["Curiosity", "Asking questions, looking closer, and finding joy in discovery."],
  ["Discipline", "Building dependable habits that make growth feel possible."],
  ["Knowledge", "Growing a strong foundation for learning and life."],
  ["Confidence", "Helping every child find their voice and take the next step."],
  ["Respect", "Making space for kindness, listening, and shared responsibility."],
  ["Creativity", "Expressing ideas with imagination, courage, and care."],
];

export const faculty = [
  { name: "Faculty Name", role: "Designation to be added", subject: "Teaching responsibility to be added", image: images.director },
  { name: "Faculty Name", role: "Designation to be added", subject: "Teaching responsibility to be added", image: images.principal },
  { name: "Faculty Name", role: "Designation to be added", subject: "Teaching responsibility to be added", image: images.learning },
  { name: "Faculty Name", role: "Designation to be added", subject: "Teaching responsibility to be added", image: images.activity },
];

export const faqs = [
  ["Which classes does the school offer?", "Dynamic English School is registered for Nursery to Class 8."],
  ["How can I enquire about admission?", "Use the enquiry form on our Admissions page. It will prepare a message for WhatsApp using the school's contact number."],
  ["How can I contact the school?", "You can call 9653087078 or 8960335883, or send an enquiry through WhatsApp."],
  ["How can I arrange a school visit?", "Please contact the school directly so the team can guide you with the latest arrangements."],
];

export const navigation = [
  ["About Us", "/about"],
  ["Academics", "/academics"],
  ["Faculty", "/faculty"],
  ["Gallery", "/gallery"],
  ["Admissions", "/admissions"],
  ["Contact", "/contact"],
];
