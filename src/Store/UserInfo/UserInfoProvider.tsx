import { useReducer } from "react";
import { UserInfo } from "../../Models/UserInfo";
import UserInfoContext, { ActionProps } from "./UserInfoContext";
import UserInfoReducer from "./UserInfoReducer";

type Props = {
  children: JSX.Element;
};

const UserInfoContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UserInfoReducer, {
    userId: "",
    name: "",
    token: "",
    phone: "",
  });

  const userInfoValue = {
    userInfo: state,
    changeName: (name: string) => {
      dispatch({
        type: "CHANGE_EMAIL",
        payload: name,
      });
    },
    makeLogin: (userInfo: UserInfo) => {
      dispatch({
        type: "MAKE_LOGIN",
        payload: userInfo,
      });
    },
    makeLogOut: () => {
      dispatch({
        type: "MAKE_LOGOUT",
        payload: null,
      });
    },
  };

  return (
    <UserInfoContext.Provider value={userInfoValue}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;