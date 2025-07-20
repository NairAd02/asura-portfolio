import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const sections = [
  "inicio",
  "acerca",
  "proyectos",
  "experiencia",
  "habilidades",
  "educacion",
  "blogs",
  "contacto",
];

export default function HeaderNav() {
  return (
    <nav className="flex flex-col lg:flex-row items-center gap-2 text-sm font-medium">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="active"
          className="group w-full"
        >
          <Button
            variant="outline"
            className="transition-all w-full lg:w-auto group-[.active]:bg-primary group-[.active]:text-white hover:text-primary-foreground duration-200 hover:shadow-md hover:bg-primary"
          >
            {capitalize(section)}
          </Button>
        </Link>
      ))}
    </nav>
  );
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
