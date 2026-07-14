import {
  pgSchema,
  serial,
  varchar,
  text,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { accountTypes } from "./account-types.js";

const accounts = pgSchema("accounts");

export const accountCategories = accounts.table("account_categories", {
  id: serial("id").primaryKey(),

  accountTypeId: integer("account_type_id")
    .notNull()
    .references(() => accountTypes.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  name: varchar("name", { length: 100 }).notNull(),

  code: varchar("code", { length: 20 }).notNull().unique(),

  description: text("description"),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
