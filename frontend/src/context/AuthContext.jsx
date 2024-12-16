import React, { createContext, useContext, useState, useEffect } from "react";

//AuthContext 생성

const AuthContext = createContext(null);

//AuthProvider 구현
const AuthProvider = ({ childern }) => {
  const [userAuth, setUserAuth] = useState(null); //사용자 정보
  const [isLogged, setIsLogged] = useState(null); //로그인 상태
  const [role, setRole] = useState("guest"); //권한 guest, user, admin

  //로그인 상태 구현
  useEffect(() => {
    const storedUser = localStorage.getItem("userAuth");
    if (storedUser) {
      const paraseUser = JSON.parse(storedUser);
      setUserAuth(paraseUser);
      setIsLogged(true);
      setRole(paraseUser.email === "qsdcv301@naver.com" ? "admin" : "user");
    }
  }, []);

  const login = (user) => {
    setUserAuth(user);
    setIsLogged(true);
    setRole(user.email === "qsdcv301@naver.com" ? "admin" : "user");
    localStorage.setItem("userAuth", JSON.stringify(user)); //로컬스토리지에 저장
  };

  const logout = () => {
    setUserAuth(null);
    setIsLogged(false);
    setRole("guest");
    localStorage.removeItem("userAuth");
  };
  return <AuthContext></AuthContext>;
};
export default AuthContext;
