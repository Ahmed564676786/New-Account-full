import { db } from "../config/db.js";

import { userRole } from "../db/schema/user-role.js";

import { eq } from "drizzle-orm";




// Get all roles
export const getAllRoles = async () => {

  return await db.query.userRole.findMany({

    with: {
      users: true,
    },

  });

};





// Get role by ID
export const getRoleById = async (

  id: number

) => {


  const result = await db.query.userRole.findFirst({

    where: eq(userRole.id, id),

    with: {

      users: true,

    },

  });



  return result ?? null;

};







// Create role
export const createRole = async (

  name: string,

  description?: string,

) => {


  const result = await db
    .insert(userRole)

    .values({

      name,

      description,

    })

    .returning();



  return result[0];

};








// Update role
export const updateRole = async (

  id:number,

  data: {

    name?: string;

    description?: string;

  }

) => {


  const result = await db
    .update(userRole)

    .set({

      ...data,

    })

    .where(eq(userRole.id,id))

    .returning();



  return result[0] ?? null;

};








// Delete role
export const deleteRole = async (

  id:number

) => {


  const result = await db
    .delete(userRole)

    .where(eq(userRole.id,id))

    .returning();



  return result[0] ?? null;

};