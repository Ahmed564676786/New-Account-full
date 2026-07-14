import {
  pgSchema,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

const accounting = pgSchema("accounts");

export const journals = accounting.table("journals", {
  id: serial("id").primaryKey(),

  code: varchar("code", { length: 20 }).notNull().unique(),

  name: varchar("name", { length: 100 }).notNull(),

  description: text("description"),

  isSystem: boolean("is_system").default(false).notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
