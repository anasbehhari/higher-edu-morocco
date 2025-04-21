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

/** Default export: full list of institutions */
export default institutions as Institution[];
