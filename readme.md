<p align="center">
  <img width="100px" src=".github/images/higher-edu-morocco.png" alt="Higher-Ed Morocco logo" />
</p>

<h2 align="center">🔶 Higher education institutions <br> in Morocco</h2>

---

# Higher-Ed Morocco 🇲🇦

> A simple, zero-dependency Node.js package providing structured and typed data about universities and higher-education institutions in Morocco.

---

## 📦 Installation

```bash
npm install higher-edu-morocco
```

Or via yarn/pnpm:

```bash
yarn add higher-edu-morocco
pnpm add higher-edu-morocco
```

---

## 🚀 Usage

### JavaScript/TypeScript

```ts
import {
  getAllInstitutions,
  filterInstitutionsByType,
  filterInstitutionsByCity,
  searchInstitutions,
} from "higher-edu-morocco";

// List all institutions
console.log(getAllInstitutions());

// Filter by type
console.log(filterInstitutionsByType("engineering_school"));

// Find by city
console.log(filterInstitutionsByCity("Rabat"));

// Find by state recognition

console.log(filterInstitutionsByRecognition(true));

// Fuzzy search
console.log(searchInstitutions("ENSA"));
```

---

### CLI Usage

Run commands directly using npx:

```bash
npx higher-edu-ma list
npx higher-edu-ma list --type engineering_school
npx higher-edu-ma list --city Casablanca
npx higher-edu-ma search ENSA
```

---

## 📖 API

### `getAllInstitutions(): Institution[]`

Returns an array of all Moroccan higher-education institutions.

### `filterInstitutionsByType(id: string): Institution | undefined`

Fetches a single institution by its unique `id`.

### `filterInstitutionsByType(type: InstitutionType): Institution[]`

Returns institutions filtered by type (`public_university`, `private_university`, `engineering_school`, etc.).

### `filterInstitutionsByCity(city: string): Institution[]`

Returns institutions located in a specified city.

### `filterInstitutionsByRecognition(recognized: boolean | undefined): Institution[]`

Returns institutions with a specified state recognition status (`true`, `false`, or `undefined`).

### `searchInstitutions(term: string): Institution[]`

Fuzzy searches institutions by name or city.

---

## 🔍 Data Schema

Each institution has:

```ts
interface Institution {
  id: string; // Unique slug identifier
  name: string; // Official institution name
  city: string; // Main campus city
  type: InstitutionType;
  website: string; // Official website URL
  phone: string; // Phone number
  recognized_by_state: boolean | undefined; // State recognition status
  address: string; // Street address
  lat: number; // Latitude
  lng: number; // Longitude
}
```

---

## 🛠 CLI Reference

Commands:

```bash
higher-edu-ma list          # Lists all institutions
higher-edu-ma search <term> # Searches institutions by name or city
```

Options:

- `--type, -t`: Filter by institution type.
- `--city, -c`: Filter by city.
- `--json, -j`: Output as JSON.

Example:

```bash
higher-edu-ma list --type public_university
higher-edu-ma search Rabat --json
```

---

## 🚨 Issues & Contributions

Report issues or contribute on GitHub:

- [GitHub Issues](https://github.com/anasbehhari/higher-edu-morocco/issues)
- [Pull Requests](https://github.com/anasbehhari/higher-edu-morocco/pulls)

---

## 📜 License

MIT © [Anas Behhari](https://github.com/anasbehhari)
