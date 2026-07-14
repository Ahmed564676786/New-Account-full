import { db } from "../config/db.js";

import { users } from "../db/schema/users.js";
import { company } from "../db/schema/company.js";
import { userRole } from "../db/schema/user-role.js";

import { eq } from "drizzle-orm";


// Get all users with company and role information
export const getAllUsers = async () => {

  return await db.query.users.findMany({

    with: {
      company: true,
      role: true,
    },

  });

};



// Get single user by ID with relations
export const getUserById = async (
  id: number
) => {

  const result = await db.query.users.findFirst({

    where: eq(users.id, id),

    with: {
      company: true,
      role: true,
    },

  });


  return result ?? null;

};




// Create user
export const createUser = async (

  firstName: string,

  lastName: string,

  email: string,

  passwordHash: string,

  roleId: number,

  companyId: number,

) => {


  const result = await db
    .insert(users)
    .values({

      firstName,

      lastName,

      email,

      passwordHash,

      roleId,

      companyId,

      isActive: true,

    })
    .returning();



  return result[0];

};





// Update user
export const updateUser = async (

  id: number,

  data: {

    firstName?: string;

    lastName?: string;

    email?: string;

    passwordHash?: string;

    roleId?: number;

    companyId?: number;

    isActive?: boolean;

  }

) => {


  const result = await db
    .update(users)
    .set({

      ...data,

      updatedAt: new Date(),

    })

    .where(eq(users.id, id))

    .returning();



  return result[0] ?? null;

};





// Delete user
export const deleteUser = async (

  id: number

) => {


  const result = await db
    .delete(users)
    .where(eq(users.id, id))
    .returning();



  return result[0] ?? null;

};