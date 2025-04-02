import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, days: number = 7) => {
  cookies.set(name, value, {
    path: "/",
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const getCookie = (name: string): string => {
  return cookies.get(name) || "South Africa";
};

export const updateCookie = (name: string, value: string, days: number = 7) => {
  if (cookies.get(name)) {
    setCookie(name, value, days);
  }
};

export const deleteCookie = (name: string) => {
  cookies.remove(name, { path: "/" });
};

export const getAllCookies = (): Record<string, string> => {
  return cookies.getAll();
};
