import { Certification } from "./certifications";

export interface CertificationGroup {
  id: string;
  title: string;
  certifications: Certification[];
}
