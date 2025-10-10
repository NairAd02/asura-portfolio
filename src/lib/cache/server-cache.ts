// lib/cache/server-cache.ts
"use server";

import { cookies } from "next/headers";

const PREFIX = "filters:";

/**
 * Guarda los filtros de una sección en cookies
 */
export async function setSectionFilters<T>(section: string, filters: T) {
  const cookiesStorage = await cookies();
  const cookieKey = `${PREFIX}${section}`;
  cookiesStorage.set(cookieKey, JSON.stringify(filters), {
    path: "/",
    httpOnly: false, // ✅ accesible también desde el cliente si lo necesitas
    sameSite: "lax",
  });
}

/**
 * Obtiene los filtros actuales de una sección desde cookies
 */
export async function getSectionFilters<T>(section: string): Promise<T | null> {
  const cookiesStorage = await cookies();
  const cookieKey = `${PREFIX}${section}`;
  const cookieValue = cookiesStorage.get(cookieKey)?.value;
  if (!cookieValue) return null;

  try {
    return JSON.parse(cookieValue) as T;
  } catch {
    return null;
  }
}

/**
 * Limpia los filtros almacenados para una sección
 */
export async function clearSectionFilters(section: string) {
  const cookiesStorage = await cookies();
  const cookieKey = `${PREFIX}${section}`;
  cookiesStorage.set(cookieKey, "", { path: "/", maxAge: 0 });
}
