import { db } from "../config/db.js";

import { company } from "../db/schema/company.js";

import { eq } from "drizzle-orm";



// Get all companies
export const getAllCompanies = async () => {

  return await db.query.company.findMany({

    with: {

      users: true,

    },

  });

};




// Get company by ID
export const getCompanyById = async (

  id: number

) => {


  const result = await db.query.company.findFirst({

    where: eq(company.id, id),

    with: {

      users: true,

    },

  });



  return result ?? null;

};





// Create company
export const createCompany = async (

  name: string,

  email?: string,

  phone?: string,

  address?: string,

) => {


  const result = await db
    .insert(company)
    .values({

      name,

      email,

      phone,

      address,

      isActive: true,

    })

    .returning();



  return result[0];

};






// Update company
export const updateCompany = async (

  id: number,

  data: {

    name?: string;

    email?: string;

    phone?: string;

    address?: string;

    isActive?: boolean;

  }

) => {


  const result = await db
    .update(company)

    .set({

      ...data,

      updatedAt: new Date(),

    })

    .where(eq(company.id, id))

    .returning();



  return result[0] ?? null;

};






// Delete company
export const deleteCompany = async (

  id:number

) => {


  const result = await db
    .delete(company)

    .where(eq(company.id,id))

    .returning();



  return result[0] ?? null;

};