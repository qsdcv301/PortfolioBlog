import React, { createContext, useContext, useState, useEffect } from "react";

//AuthCOntext 생성
const AuthContext = createContext(null);

//AuthProvider 구현
const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState("홍길동"); //사용자 정보
  const [isLogged, setIsLogged] = useState(null); //로그인 상태
  const [role, setRole] = useState("guest"); //권한- guest, user, admin

  //로그인 상태 구현
  useEffect(() => {
    const storedUser = localStorage.getItem("userAuth");
    if (storedUser) {
      const parasedUser = JSON.parse(storedUser);
      setUserAuth(parasedUser);
      setIsLogged(true);
      setRole(parasedUser.email === "qsdcv301@naver.com" ? "admin" : "user"); //관리자 권한 부여
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

  return (
    <AuthContext.Provider value={{ userAuth, isLogged, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//cutom hook
const useAuthValue = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthValue };
