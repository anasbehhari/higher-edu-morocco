export type InstitutionType =
  | "public_university"
  | "private_university"
  | "engineering_school"
  | "commerce_management_school"
  | "specialised_school"
  | "private_university_health"
  | "private_business_school"
  | "private_engineering_school"
  | "private_health_school"
  | "private_architecture_school"
  | "private_engineering_business_school"
  | "private_specialised_school";
export interface Institution {
  /** slug‑friendly identifier (e.g. "universite-internationale-de-rabat-uir") */
  id: string;

  /** official name of the establishment */
  name: string;

  /** broad category such as "private_university", "private_engineering_school", … */
  type: InstitutionType;

  /** main city (or “Casablanca / Rabat” when the school spans several campuses) */
  city: string;

  /** HTTPS URL of the public website ‑ optional because a few small institutes publish none */
  website?: string;

  /** public switchboard or admissions phone line when available */
  phone?: string;

  /**
   * `true`   → recognised by the Moroccan State
   * `false`  → recognition decree expired / was never granted
   * `undefined`  → information not (yet) verified
   */
  recognized_by_state?: boolean;

  /** street address or campus descriptor; useful for geocoding when available */
  address?: string;

  /** latitude of the main campus (WGS‑84); optional because geocoding is still in progress */
  lat?: number;

  /** longitude of the main campus (WGS‑84) */
  lng?: number;
}
