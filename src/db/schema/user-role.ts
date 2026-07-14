import {
  serial,
  varchar,
  timestamp,
  pgSchema
} from "drizzle-orm/pg-core";


const accounts = pgSchema("accounts");

export const userRole = accounts.table("user-role", {
  id: serial("id").primaryKey(),

  name: varchar("role_name", {
    length: 100,
  })
    .notNull()
    .unique(),

  description: varchar("description", {
    length: 500,
  }),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});