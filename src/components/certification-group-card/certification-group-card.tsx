import type { CertificationGroup } from "@/lib/types/certification-groups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import CertificationsList from "./components/certifications-list";

interface Props {
  certificationGroup: CertificationGroup;
}

export default function CertificationGroupCard({ certificationGroup }: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-primary/40 hover:border-r-primary border-l-4 border-l-primary/40 hover:border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/70 group-hover:bg-primary transition-colors">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-black group-hover:text-primary">
            {certificationGroup.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CertificationsList
          certifications={certificationGroup.certifications}
        />
      </CardContent>
    </Card>
  );
}
