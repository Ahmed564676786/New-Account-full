import {
  serial,
  varchar,
  boolean,
  timestamp,
  integer,
  pgSchema,
} from "drizzle-orm/pg-core";

import { company } from "./company.js";
import { userRole } from "./user-role.js";


const accounts = pgSchema("accounts");


export const users = accounts.table("users", {

  id: serial("id").primaryKey(),

  firstName: varchar("first_name", {
    length: 100,
  }).notNull(),


  lastName: varchar("last_name", {
    length: 100,
  }).notNull(),


  email: varchar("email", {
    length: 255,
  })
    .notNull()
    .unique(),


  passwordHash: varchar("password_hash", {
    length: 255,
  }).notNull(),


  roleId: integer("role_id")
    .references(() => userRole.id)
    .notNull(),


  companyId: integer("company_id")
    .references(() => company.id)
    .notNull(),


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