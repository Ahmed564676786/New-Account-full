import {
  pgSchema,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

const accounting = pgSchema("accounts");

export const costCenters = accounting.table("cost_centers", {
  id: serial("id").primaryKey(),

  code: varchar("code", { length: 20 }).notNull().unique(),

  name: varchar("name", { length: 100 }).notNull(),

  description: text("description"),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
