import * as userRoleRepository from "../repositories/user-role.repository.js";


// Get all roles
export const getAllRoles = async () => {
  return await userRoleRepository.getAllRoles();
};


// Get role by ID
export const getRoleById = async (id: number) => {
  return await userRoleRepository.getRoleById(id);
};


// Create role
export const createRole = async (
  name: string,
  description?: string
) => {
  return await userRoleRepository.createRole(
    name,
    description
  );
};


// Update role
export const updateRole = async (
  id: number,
  data: {
    name?: string;
    description?: string;
  }
) => {
  return await userRoleRepository.updateRole(
    id,
    data
  );
};


// Delete role
export const deleteRole = async (id: number) => {
  return await userRoleRepository.deleteRole(id);
};