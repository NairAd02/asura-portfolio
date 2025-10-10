"use server";

import { revalidatePath } from "next/cache";
import {
  clearSectionFilters,
  getSectionFilters,
  setSectionFilters,
} from "../cache/server-cache";
import { StorageValue } from "unstorage";

export async function saveFilters(section: string, filters: any) {
  await setSectionFilters(section, filters);

  revalidatePath(`${section}`, "page");
}

export async function loadFilters<T extends StorageValue>(
  section: string
): Promise<T | null> {
  return await getSectionFilters<T>(section);
}

export async function resetFilters(section: string) {
  await clearSectionFilters(section);

  revalidatePath(`${section}`, "page");
}
