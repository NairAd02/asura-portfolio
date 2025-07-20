import type { Blog } from "@/lib/types/blogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  ExternalLink,
  Calendar,
  ScrollText,
} from "lucide-react";
import NavigationComponent from "../navigation-component/navigation-component";
import { formatDate } from "@/lib/format-date";
import { Badge } from "../ui/badge";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-primary/40 hover:border-r-primary">
      {/* Content */}
      <div className="relative">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {blog.name}
            </CardTitle>
            <div className="p-1.5 rounded-full bg-primary/70 group-hover:bg-primary border-2 border-primary/20">
              <ScrollText className="w-3 h-3 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <CardDescription className="font-medium">
              {formatDate(blog.date)}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-black font-semibold leading-relaxed line-clamp-3">
            {blog.description}
          </p>

          <div className="pt-2">
            {blog.link ? (
              <NavigationComponent href={blog.link}>
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-md bg-transparent"
                >
                  Leer más
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </Button>
              </NavigationComponent>
            ) : (
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-muted/50 text-muted-foreground border-dashed"
                >
                  Próximamente disponible
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </Card>
  );
}
