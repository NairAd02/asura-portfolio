import type { CertificationGroup } from "@/lib/types/certification-groups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format-date";
import {
  BadgeIcon as Certificate,
  Building,
  Calendar,
  FileText,
} from "lucide-react";

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

      <CardContent className="space-y-6">
        {certificationGroup.certifications.map((certification, index) => (
          <div key={index} className="relative">
            <div className="flex gap-4">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="p-1.5 rounded-full bg-primary/70 group-hover:bg-primary border-2 border-primary/20">
                  <Certificate className="w-3 h-3 text-white" />
                </div>
                {index < certificationGroup.certifications.length - 1 && (
                  <div className="w-px h-16 bg-gradient-to-b from-primary/20 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 pb-2">
                <div>
                  <h3 className="font-semibold text-black dark:text-white leading-tight">
                    {certification.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">
                      {certification.institution}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <Badge
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium shrink-0" variant="outline"
                  >
                    {formatDate(certification.startDate)} -{" "}
                    {formatDate(certification.endDate)}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
