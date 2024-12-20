import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import AnimatedCursor from "react-animated-cursor";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/Login";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Git from "./pages/Git";
import View from "./pages/View";

import { AuthProvider, AuthContext } from "./context/AuthContext";

/** 관리자 전용 페이지 */
import PostWrite from "./pages/admin/PostWrite";

/** 인증 상태에 따라 라우팅 제어 */
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, role } = useContext(AuthContext);

  if (!isAuthenticated) {
    // 로그인하지 않은 경우 로그인 페이지로 리디렉션
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && role !== "admin") {
    // 관리자가 아닌 경우 메인 페이지로 리디렉션
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <AnimatedCursor />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* 메인 페이지 */}
              <Route index element={<Main />} />

              {/* 일반 라우트 */}
              <Route path="post" element={<Post />} />
              <Route path="about" element={<About />} />
              <Route path="git" element={<Git />} />
              <Route path="contact" element={<Contact />} />
              <Route path="view/:post" element={<View />} />
              <Route path="login" element={<Login />} />

              {/* 관리자 전용 라우트 */}
              <Route
                path="postwrite"
                element={
                  <PrivateRoute adminOnly={true}>
                    <PostWrite />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
