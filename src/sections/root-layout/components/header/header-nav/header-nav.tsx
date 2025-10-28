import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const sections = [
  {
    label: "Inicio",
    value: "inicio",
  },
  {
    label: "Acerca",
    value: "acerca",
  },
  {
    label: "Proyectos",
    value: "proyectos",
  },
  {
    label: "Experiencia",
    value: "experiencia",
  },
  {
    label: "Habilidades",
    value: "habilidades",
  },
  {
    label: "Educación",
    value: "educacion",
  },
  {
    label: "Contacto",
    value: "contacto",
  },
];

export default function HeaderNav() {
  return (
    <nav className="flex flex-col lg:flex-row items-center gap-2 text-sm font-medium">
      {sections.map((section) => (
        <Link
          key={section.value}
          to={section.value}
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
            {capitalize(section.label)}
          </Button>
        </Link>
      ))}
    </nav>
  );
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
