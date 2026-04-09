import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children }) {
  const { authenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!authenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}

