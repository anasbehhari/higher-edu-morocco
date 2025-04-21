#!/usr/bin/env node
import { program } from "commander";
import {
  filterInstitutionsByCity,
  filterInstitutionsByRecognition,
  filterInstitutionsByType,
  getAllInstitutions,
  searchInstitutions,
} from "./lib/index.js"; // .js for bundled output

program
  .name("higher-edu-ma")
  .description("CLI for Moroccan higher‑education dataset")
  .version("0.1.0");

program
  .command("list")
  .description("List institutions (with optional filters)")
  .option(
    "-t, --type <slug>",
    "Filter by type (e.g. private_university, engineering_school)"
  )
  .option("-c, --city <name>", "Filter by city (exact match)")
  .option(
    "-r, --recognized <boolean>",
    "Filter by state recognition (true | false)"
  )
  .option("-j, --json", "Output raw JSON")
  .action((opts) => {
    let data = getAllInstitutions();

    if (opts.type) {
      data = filterInstitutionsByType(opts.type);
    }
    if (opts.city) {
      data = filterInstitutionsByCity(opts.city);
    }
    if (opts.recognized !== undefined) {
      const value =
        opts.recognized === "true"
          ? true
          : opts.recognized === "false"
            ? false
            : undefined;
      data = filterInstitutionsByRecognition(value);
    }

    if (opts.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.table(
        data.map(({ id, name, city, type, recognized_by_state }) => ({
          id,
          name,
          city,
          type,
          recognized_by_state,
        }))
      );
    }
  });

program
  .command("search <term>")
  .description("Fuzzy search institutions by name or city")
  .option("-j, --json", "Output raw JSON")
  .action((term, opts) => {
    const data = searchInstitutions(term);
    if (opts.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.table(
        data.map(({ id, name, city, type, recognized_by_state }) => ({
          id,
          name,
          city,
          type,
          recognized_by_state,
        }))
      );
    }
  });

program.parse();
