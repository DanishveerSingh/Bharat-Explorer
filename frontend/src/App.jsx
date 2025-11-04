import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./components/HomePage/HomePage.jsx";
import Map from "./components/Map/Map.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Logout from "./components/Logout/Logout.jsx";
import ChangePassword from "./components/ChangePassword/ChangePassword.jsx";
import StateDetail from "./components/StateDetails/StateDetail.jsx";

const backgroundByRoute = (pathname) => {
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/change-password" ||
    pathname === "/quiz"
  ) {
    return "#1a1a1a";
  }
  return "transparent";
};

function AnimatedRoutes() {
  const location = useLocation();
  const variantsExit = {
    blurred: {
      filter: "blur(10px)",
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const variantsEnter = {
    initial: { opacity: 0, x: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        background: backgroundByRoute(location.pathname),
        transition: "background 0.4s",
      }}
    >
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/map"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <Map />
              </motion.div>
            }
          />
          <Route
            path="/:stateName/:category"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <StateDetail />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <Register />
              </motion.div>
            }
          />
          <Route
            path="/quiz"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              </motion.div>
            }
          />
          <Route
            path="/change-password"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <ChangePassword />
              </motion.div>
            }
          />
          <Route
            path="/logout"
            element={
              <motion.div
                variants={variantsExit}
                exit="blurred"
                initial="initial"
                animate="animate"
                style={{ position: "absolute", width: "100%" }}
              >
                <Logout />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;