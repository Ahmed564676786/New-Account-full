import {
  pgSchema,
  serial,
  integer,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { accountingPeriods } from "./accounting-periods.js";
import { users } from "./users.js";

const accounting = pgSchema("accounts");

export const periodCloses = accounting.table("period_closes", {
  id: serial("id").primaryKey(),

  accountingPeriodId: integer("accounting_period_id")
    .notNull()
    .references(() => accountingPeriods.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  closedBy: integer("closed_by")
    .notNull()
    .references(() => users.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),

  closedAt: timestamp("closed_at").defaultNow().notNull(),

  remarks: text("remarks"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
