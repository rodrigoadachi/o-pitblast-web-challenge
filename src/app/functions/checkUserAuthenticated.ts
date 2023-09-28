"use client";

export const checkUserAuthenticated = () => {
  if (typeof window === "undefined") return;
  const token = window.localStorage.getItem("token");
  return !!token;
};
