import {
  pgSchema,
  serial,
  integer,
  numeric,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { journalEntries } from "./journal-entries.js";
import { accounts } from "./accounts.js";

const accounting = pgSchema("accounts");

export const journalEntryLines = accounting.table("journal_entry_lines", {
  id: serial("id").primaryKey(),

  journalEntryId: integer("journal_entry_id")
    .notNull()
    .references(() => journalEntries.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),

  accountId: integer("account_id")
    .notNull()
    .references(() => accounts.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  debit: numeric("debit", {
    precision: 18,
    scale: 2,
  })
    .default("0.00")
    .notNull(),

  credit: numeric("credit", {
    precision: 18,
    scale: 2,
  })
    .default("0.00")
    .notNull(),

  description: text("description"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
