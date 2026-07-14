import {
  pgSchema,
  serial,
  varchar,
  boolean,
  smallint,
  timestamp,
} from "drizzle-orm/pg-core";

const accounting = pgSchema("accounts");

export const currencies = accounting.table("currencies", {
  id: serial("id").primaryKey(),

  code: varchar("code", { length: 3 }).notNull().unique(),

  name: varchar("name", { length: 100 }).notNull(),

  symbol: varchar("symbol", { length: 10 }).notNull(),

  decimalPlaces: smallint("decimal_places").default(2).notNull(),

  isBaseCurrency: boolean("is_base_currency").default(false).notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
