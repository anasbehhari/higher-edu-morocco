import { writeFile } from "fs/promises";
import slugify from "slugify";
import { institutions } from "../src/data/institutions";

const updated = institutions.map((i) => ({
  ...i,
  id: i.id || slugify(i.name, { lower: true, strict: true }),
}));

await writeFile(
  "src/data/institutions.ts",
  `import type { Institution } from "../types/Institution";

export const institutions: Institution[] = ${JSON.stringify(updated, null, 2)} satisfies Institution[];
`
);

console.log(`🔄  Re wrote institutions.ts with ${updated.length} records`);
