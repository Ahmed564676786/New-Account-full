import * as userRepository from "../repositories/users.repository.js";

export const getUsers = async () => {
  return await userRepository.getAllUsers();
};

export const getUser = async (id: number) => {
  return await userRepository.getUserById(id);
};

// export const createUser = async (
//   name: string,
//   email: string,
//   password: string,
// ) => {
//   return await userRepository.createUser(name, email, password);
// };


export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  passwordHash: string,
  roleId: number,
  companyId: number,
) => {
  return await userRepository.createUser(
    firstName,
    lastName,
    email,
    passwordHash,
    roleId,
    companyId
  );
};




export const deleteUser = async (id: number) => {
  return await userRepository.deleteUser(id);
};
