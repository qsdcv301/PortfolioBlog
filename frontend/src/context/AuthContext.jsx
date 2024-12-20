import React, { createContext, useState, useEffect } from "react";

// AuthContext 생성
export const AuthContext = createContext(null);

// AuthProvider 구현
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 사용자 정보
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 상태
  const [role, setRole] = useState("guest"); // 권한 - guest, user, admin

  // 앱이 로드되면 로컬 스토리지에서 user 정보와 token을 가져와 인증 상태 설정
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser); // JSON 문자열 파싱
      setUser(parsedUser);
      setToken(storedToken);
      setIsAuthenticated(true);
      setRole(parsedUser.email === "rlaxoguszld@naver.com" ? "admin" : "user"); // 관리자 권한 부여
    }
  }, []);

  // 로그인 함수
  const login = ({ userInfo, token }) => {
    setUser(userInfo);
    setToken(token);
    setIsAuthenticated(true);
    setRole(userInfo.email === "rlaxoguszld@naver.com" ? "admin" : "user"); // 권한 설정
    localStorage.setItem("user", JSON.stringify(userInfo)); // 로컬스토리지에 저장
    localStorage.setItem("token", token);
    console.log(localStorage.getItem("user"));
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    setRole("guest");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
