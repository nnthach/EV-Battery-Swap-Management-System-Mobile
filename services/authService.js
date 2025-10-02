import axiosClient from "../config/axiosConfig";

export const loginAPI = async (body) => {
  const res = await axiosClient.post("/auth/login", body);
  return res;
};

export const registerAPI = async (data) => {
  const res = await axiosClient.post("/auth/register", data);

  return res;
};

export const verifyEmailAPI = async (data) => {
  const res = await axiosClient.post("/auth/verify-email", data);

  return res;
};

export const refreshTokenAPI = async (data) => {
  const res = await axiosClient.post("/auth/refresh-token", data);

  return res;
};

export const forgotPasswordAPI = async (data) => {
  const res = await axiosClient.post("/auth/forgot-password", data);

  return res;
};

export const resendVerificationAPI = async (data) => {
  const res = await axiosClient.post("/auth/resend-verification", data);

  return res;
};

export const resetPasswordAPI = async (data) => {
  const res = await axiosClient.post("/auth/reset-password", data);

  return res;
};
