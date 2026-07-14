// import { relations } from "drizzle-orm";

// import { users } from "./users.js";
// import { userRole } from "./user-role.js";
// import { company } from "./company.js";


// export const usersRelations = relations(users, ({ one }) => ({

//   role: one(userRole , {
//     fields: [users.roleId],
//     references: [userRole.id],
//   }),


//   company: one(company, {
//     fields: [users.companyId],
//     references: [company.id],
//   }),

// }));


// export const rolesRelations = relations(userRole, ({ many }) => ({

//   users: many(users),

// }));


// export const companiesRelations = relations(company, ({ many }) => ({

//   users: many(users),

// }));



import { relations } from "drizzle-orm";

import { users } from "./users.js";
import { company } from "./company.js";
import { userRole } from "./user-role.js";



export const usersRelations = relations(users, ({one}) => ({

    company: one(company, {
        fields:[users.companyId],
        references:[company.id],
    }),


    role: one(userRole,{
        fields:[users.roleId],
        references:[userRole.id],
    }),

}));





export const companyRelations = relations(company, ({many}) => ({

    users: many(users),

}));





export const userRoleRelations = relations(userRole, ({many}) => ({

    users: many(users),

}));