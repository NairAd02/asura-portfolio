interface Path {
  root: string;
  isProtected: boolean;
}

interface ApplicationPath {
  home: Path & {
    projectsSection: string;
    experiencesSection: string;
    skillsSection: string;
    certificationsSection: string;
    blogsSection: string;
    heroSection: string;
    aboutSection: string;
    contactSection: string;
  };
  projectDetails: (
    params?: Record<string, string>,
    query?: Record<string, string>
  ) => Path;
}

function buildQueryString(query: Record<string, string> = {}): string {
  const params = new URLSearchParams(query);
  return params.toString();
}

function replaceParamsInPath(
  path: string,
  params: Record<string, string> = {}
): string {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(`[${key}]`, value);
  }, path);
}

export const paths: ApplicationPath = {
  home: {
    root: "/",
    projectsSection: "/@projects",
    experiencesSection: "/@experiences",
    skillsSection: "/@skills",
    certificationsSection: "/@certifications",
    blogsSection: "/@blogs",
    heroSection: "/@hero",
    aboutSection: "/@about",
    contactSection: "/@contact",
    isProtected: false,
  },
  projectDetails: (params = {}, query = {}) => {
    const basePath = "/project/[id]";
    const pathWithParams = replaceParamsInPath(basePath, params);
    const queryString = buildQueryString(query);
    return {
      root: queryString ? `${pathWithParams}?${queryString}` : pathWithParams,
      isProtected: false,
    };
  },
} as const;

export const isProtectedRoute = (route: string): boolean => {
  const [routeWithoutQuery, _] = route.split("?");

  // First we try to match with static routes
  for (const key in paths) {
    const path = paths[key as keyof ApplicationPath];

    if (typeof path !== "function") {
      if (path.root === routeWithoutQuery) {
        return path.isProtected;
      }
    }
  }

  // Luego intentamos con rutas dinámicas
  for (const key in paths) {
    const path = paths[key as keyof ApplicationPath];

    if (typeof path === "function") {
      // Get the base path without replaced parameters
      const basePath = path({} as any).root.split("?")[0];

      // Create a regex to match with the parameters
      const regexPattern =
        basePath.replace(/\[([^\]]+)\]/g, "([^/]+)").replace(/\//g, "\\/") +
        "$";

      const regex = new RegExp(regexPattern);

      if (regex.test(routeWithoutQuery)) {
        const pathObj = path({} as any);
        return pathObj.isProtected;
      }
    }
  }

  return false;
};
