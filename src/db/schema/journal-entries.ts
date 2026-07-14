import {
  pgSchema,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  date,
  boolean,
} from "drizzle-orm/pg-core";

import { journals } from "./journals.js";

const accounting = pgSchema("accounts");

export const journalEntries = accounting.table("journal_entries", {
  id: serial("id").primaryKey(),

  journalId: integer("journal_id")
    .notNull()
    .references(() => journals.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  entryNumber: varchar("entry_number", { length: 30 }).notNull().unique(),

  entryDate: date("entry_date").notNull(),

  reference: varchar("reference", { length: 100 }),

  memo: text("memo"),

  isPosted: boolean("is_posted").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
