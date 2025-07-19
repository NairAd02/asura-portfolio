import { CertificationGroup } from "@/lib/types/certification-groups";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { formatDate } from "@/lib/format-date";

interface Props {
  certificationGroup: CertificationGroup;
}

export default function CertificationGroupCard({ certificationGroup }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{certificationGroup.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certificationGroup.certifications.map((certification, index) => (
            <div className="space-y-2" key={index}>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{certification.title}</p>
                  <Badge variant="outline">
                    {formatDate(certification.startDate)} -
                    {formatDate(certification.endDate)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {certification.institution}
                </p>
              </div>
              {index < certificationGroup.certifications.length - 1 && (
                <Separator />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
