import { createContext } from "react";

const UserContext = createContext({
    userData: '',
    changingUserData: () => {}
});

export default UserContext;