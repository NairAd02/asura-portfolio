export interface Certification {
  title: string;
  institution: string;
  startDate: string;
  endDate: string; // Optional, if the experience is current
  image?: string; // URL to the image of the certification
  link?: string; // URL to the certification or institution
}
