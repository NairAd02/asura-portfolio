import { Blog } from "@/lib/types/blogs";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import NavigationComponent from "../navigation-component/navigation-component";
import { formatDate } from "@/lib/format-date";
import { Badge } from "../ui/badge";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{blog.name}</CardTitle>
        <CardDescription>{formatDate(blog.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{blog.description}</p>
        {blog.link ? (
          <NavigationComponent href={blog.link}>
            <Button variant="outline" size="sm">
              Leer más
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </NavigationComponent>
        ) : (
          <Badge variant="secondary">
            No está disponible el enlace asociado al artículo
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
