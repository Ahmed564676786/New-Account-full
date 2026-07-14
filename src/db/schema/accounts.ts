import {
  pgSchema,
  serial,
  varchar,
  integer,
  boolean,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { accountCategories } from "./account-categories.js";

const accounting = pgSchema("accounts");

export const accounts = accounting.table("accounts", {
  id: serial("id").primaryKey(),

  accountCategoryId: integer("account_category_id")
    .notNull()
    .references(() => accountCategories.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  accountCode: varchar("account_code", { length: 20 }).notNull().unique(),

  accountName: varchar("account_name", { length: 150 }).notNull(),

  description: text("description"),

  isActive: boolean("is_active").default(true).notNull(),

  allowManualEntry: boolean("allow_manual_entry").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
