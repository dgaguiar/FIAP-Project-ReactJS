import { Context, createContext } from "react";
import { UserInfo } from "../../Models/UserInfo";

export type ActionProps = {
  type: string;
  payload: any;
};

export type UserInfoContextType = {
  userInfo: UserInfo;
  changeName: (name: string) => void;
  makeLogin: (userInfo: UserInfo) => void;
  makeLogOut: () => void;
};

const UserInfoContext: Context<UserInfoContextType> =
  createContext<UserInfoContextType>({
    userInfo: {
      userId: "",
      name: "",
      token: "",
      phone: "",
    },
    changeName: (name: string) => { },
    makeLogin: (userInfo: UserInfo) => { },
    makeLogOut: () => { },
  });

export default UserInfoContext;