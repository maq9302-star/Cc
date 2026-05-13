// Portfolio content — single source of truth
const PROFILE = {
  name: "Abdulmajeed Alqusayer",
  title: "PR & Communications · Account Executive",
  email: "alqusayer.a@gmail.com",
  phone: "+966 56 991 2728",
  linkedin: "LinkedIn",
  location: "Based in Riyadh, Saudi Arabia.",
  bio: [
    "Over the past year and a half, I've worked across PR, influencer management, and campaign execution — beginning as a co-op trainee at a communications firm and progressing into an Account Executive role at an integrated communications agency.",
    "My experience spans event communications, influencer-led campaigns, activations, and strategy research across hospitality, F&B, destination, and consumer sectors in Saudi Arabia."
  ],
  education: {
    degree: "BA in Public Relations",
    school: "Imam Mohammad Ibn Saud Islamic University",
    gpa: "4.85 / 5"
  }
};
const PROJECTS = [
  {
    slug: "world-class-talent",
    index: "01",
    title: "World Class Talent",
    client: "Salient KSA",
    discipline: "Event Communications",
    year: "2023",
    lede: "A discussion-led event exploring talent growth, retention, and professional development in Saudi Arabia.",
    sections: [
      {
        label: "Objective",
        body: "Create an event that positions the agency within conversations around talent, leadership, and professional growth."
      },
      {
        label: "Context",
        body: "Organizations across sectors were facing recurring challenges around retention, long-term growth, and sustaining strong teams. The project was developed as a platform for conversation rather than a traditional conference format."
      },
      {
        label: "Approach",
        body: "The event adopted a World Café-style format, bringing together business leaders and HR professionals through structured discussions instead of formal presentations."
      },
      {
        label: "Concept",
        kicker: "Find · Keep · Grow",
        body: "The identity explored different stages of professional growth through the visual language of hands — reaching, supporting, and nurturing.\n\nTo extend the idea beyond the event itself, attendees received a seed-planting kit as part of the experience, reinforcing the theme of long-term growth and development."
      },
      {
        label: "Scope",
        list: [
          "Event concept and thematic direction",
          "Visual identity development",
          "Print and goody bag production",
          "Eventbrite registration setup",
          "Invitation and email coordination",
          "On-ground event execution"
        ]
      },
      {
        label: "Outcome",
        body: "The event generated follow-up conversations and partnership opportunities, helping position the agency as an active contributor to conversations around talent and professional growth."
      },
      {
        label: "Responsibilities",
        list: [
          "Event concept development",
          "Visual identity support",
          "Print asset production",
          "Stakeholder coordination",
          "Registration management",
          "On-ground execution support"
        ]
      }
    ],
    supportingImages: 2
  },
  { slug: "medina-destination-strategy", index: "02", title: "Medina Destination Strategy", client: "Confidential", discipline: "Strategy Research", year: "2024" },
  { slug: "baby-expo-riyadh", index: "03", title: "Baby Expo Riyadh", client: "Baby Expo", discipline: "Event Communications", year: "2024" },
  { slug: "address-jabal-omar-makkah", index: "04", title: "Address Jabal Omar Makkah", client: "Address Hotels", discipline: "Hospitality PR", year: "2024" },
  { slug: "cucina-nomas-riyadh", index: "05", title: "Cucina · Nomas Riyadh", client: "Cucina / Nomas", discipline: "F&B Launch", year: "2024" },
  { slug: "hotel-galleria-jeddah", index: "06", title: "Hotel Galleria Jeddah", client: "Hotel Galleria", discipline: "Hospitality PR", year: "2024" }
];
window.PROFILE = PROFILE;
window.PROJECTS = PROJECTS;