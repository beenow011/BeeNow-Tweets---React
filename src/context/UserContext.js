
import { createContext, useContext } from "react";

export const UserContext = createContext({
  user: {
    userId: "@abhinav011",
    bio: `Use our Card to provide a flexible and extensible content container based on Tailwind CSS with multiple variants and options.`,
    img: `https://picsum.photos/id/123/40/40`
  },
  setUsers: (users) => {}
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = UserContext.Provider;
