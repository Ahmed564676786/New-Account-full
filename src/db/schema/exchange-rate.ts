import {
  pgSchema,
  serial,
  integer,
  numeric,
  date,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

import { currencies } from "./currency.js";

const accounting = pgSchema("accounts");

export const exchangeRates = accounting.table("exchange_rates", {
  id: serial("id").primaryKey(),

  fromCurrencyId: integer("from_currency_id")
    .notNull()
    .references(() => currencies.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  toCurrencyId: integer("to_currency_id")
    .notNull()
    .references(() => currencies.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  exchangeRate: numeric("exchange_rate", {
    precision: 18,
    scale: 6,
  }).notNull(),

  effectiveDate: date("effective_date").notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
