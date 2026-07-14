import {
  pgSchema,
  serial,
  integer,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

import { fiscalYears } from "./fiscal-year.js";
import { accounts } from "./accounts.js";
import { costCenters } from "./cost-center.js";

const accounting = pgSchema("accounts");

export const closingBalances = accounting.table("closing_balances", {
  id: serial("id").primaryKey(),

  fiscalYearId: integer("fiscal_year_id")
    .notNull()
    .references(() => fiscalYears.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  accountId: integer("account_id")
    .notNull()
    .references(() => accounts.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  costCenterId: integer("cost_center_id").references(() => costCenters.id, {
    onDelete: "set null",
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

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("created_at").defaultNow().notNull(),
});
