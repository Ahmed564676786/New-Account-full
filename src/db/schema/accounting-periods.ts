import {
  pgSchema,
  serial,
  integer,
  varchar,
  date,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

import { fiscalYears } from "./fiscal-year.js";

const accounting = pgSchema("accounts");

export const accountingPeriods = accounting.table("accounting_periods", {
  id: serial("id").primaryKey(),

  fiscalYearId: integer("fiscal_year_id")
    .notNull()
    .references(() => fiscalYears.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  name: varchar("name", { length: 50 }).notNull(),

  periodNumber: integer("period_number").notNull(),

  startDate: date("start_date").notNull(),

  endDate: date("end_date").notNull(),

  isActive: boolean("is_active").default(false).notNull(),

  isClosed: boolean("is_closed").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
