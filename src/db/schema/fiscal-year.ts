import {
  pgSchema,
  serial,
  varchar,
  date,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

const accounting = pgSchema("accounts");

export const fiscalYears = accounting.table("fiscal_years", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 50 }).notNull().unique(),

  startDate: date("start_date").notNull(),

  endDate: date("end_date").notNull(),

  isActive: boolean("is_active").default(false).notNull(),

  isClosed: boolean("is_closed").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
