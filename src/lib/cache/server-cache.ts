import { createStorage, type StorageValue } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";

const storage = createStorage({
  driver: memoryDriver(),
});

const PREFIX = "filters:";

export async function setSectionFilters<T extends StorageValue>(
  section: string,
  filters: T
) {
  await storage.setItem(`${PREFIX}${section}`, filters);
}

export async function getSectionFilters<T extends StorageValue>(
  section: string
): Promise<T | null> {
  return (await storage.getItem(`${PREFIX}${section}`)) as T | null;
}

export async function clearSectionFilters(section: string) {
  await storage.removeItem(`${PREFIX}${section}`);
}
