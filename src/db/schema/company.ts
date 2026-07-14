import {
  serial,
  varchar,
  timestamp,
  boolean,
  pgSchema
} from "drizzle-orm/pg-core";



const accounts = pgSchema("accounts");


export const company = accounts.table("company", {
  id: serial("id").primaryKey(),

  name: varchar("company_name", {
    length: 255,
  }).notNull(),

  email: varchar("email", {
    length: 255,
  }),

  phone: varchar("phone", {
    length: 50,
  }),

  address: varchar("address", {
    length: 500,
  }),

  isActive: boolean("is_active")
    .notNull()
    .default(true),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});