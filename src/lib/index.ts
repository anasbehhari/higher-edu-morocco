import { institutions } from "../data/institutions.js";
import type { Institution, InstitutionType } from "../types/Institution.js";

/** Return all institutions */
export const getAllInstitutions = (): Institution[] => institutions;

/** Get a single institution by its ID (slug) */
export const getInstitutionById = (id: string): Institution | undefined =>
  institutions.find((i) => i.id === id);

/** Filter institutions by type (e.g., private_university, private_business_school) */
export const filterInstitutionsByType = (
  type: InstitutionType
): Institution[] => institutions.filter((i) => i.type === type);

/** Filter institutions by city name (case-insensitive match) */
export const filterInstitutionsByCity = (city: string): Institution[] =>
  institutions.filter((i) => i.city.toLowerCase() === city.toLowerCase());

/** Filter institutions by recognition status (true, false, or undefined) */
export const filterInstitutionsByRecognition = (
  recognized: boolean | undefined
): Institution[] =>
  institutions.filter((i) => i.recognized_by_state === recognized);

/** Search institutions by partial name or city (case-insensitive) */
export const searchInstitutions = (term: string): Institution[] => {
  const t = term.toLowerCase();
  return institutions.filter(
    (i) => i.name.toLowerCase().includes(t) || i.city.toLowerCase().includes(t)
  );
};

/**
 * Filters institutions based on provided criteria with optimized performance.
 *
 * @param filter - Criteria for filtering institutions.
 * @param filter.city - Optional city name (case-insensitive).
 * @param filter.type - Optional institution type (e.g., private_university).
 * @param filter.recognized_by_state - Optional state recognition status.
 * @param filter.name - Optional partial institution name (case-insensitive).
 *
 * @returns Array of institutions matching provided filters.
 */
export const filterInstitutions = (filter: {
  city?: string;
  type?: InstitutionType;
  recognized_by_state?: boolean;
  name?: string;
}): Institution[] => {
  // Early return if no filters provided
  if (
    !filter.city &&
    !filter.type &&
    filter.recognized_by_state === undefined &&
    !filter.name
  ) {
    return institutions;
  }

  // Pre-process filter values once instead of on each iteration
  const lowercaseCity = filter.city?.toLowerCase();
  const lowercaseName = filter.name?.toLowerCase();

  return institutions.filter((institution) => {
    // Check most discriminating conditions first (likely to fail early)
    // Type check - exact match, very fast
    if (filter.type && institution.type !== filter.type) {
      return false;
    }

    // Recognition status - exact boolean match, very fast
    if (
      filter.recognized_by_state !== undefined &&
      institution.recognized_by_state !== filter.recognized_by_state
    ) {
      return false;
    }

    // City check - case-insensitive match, might be discriminating
    if (lowercaseCity && institution.city.toLowerCase() !== lowercaseCity) {
      return false;
    }

    // Name check - substring search is expensive, do it last
    if (
      lowercaseName &&
      !institution.name.toLowerCase().includes(lowercaseName)
    ) {
      return false;
    }

    return true;
  });
};

/** Default export: full list of institutions */
export default institutions as Institution[];
