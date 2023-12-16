import { createContext } from "react";

export const UsersContext = createContext<{user:string}>({user:'Udi Mazor'});