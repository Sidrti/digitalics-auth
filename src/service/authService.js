import { API_URL } from "../config/utils";
import axios from 'axios'
import store from "../store/store";

export const getLogin = async (formData) => {
  try {
    let res = await axios({
      method: "post",
      url: `${API_URL}/V1/login`,
      data: formData,
    });

    let data = res.data;
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getGoogleLogin = async (formData) => {
  try {
    let res = await axios({
      method: "post",
      url: `${API_URL}/V1/google-login`,
      data: formData,
    });

    let data = res.data;
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getRegister = async (formData) => {
  try {
    let res = await axios({
      method: "post",
      url: `${API_URL}/V1/register`,
      data: formData,
    });

    let data = res.data;
    return data;
  } catch (error) {
    return error.response;
  }
};
export const createCheckoutSession = async (formData) => {
  try {
    let res = await axios({
      method: "post",
      url: `${API_URL}/V1/create-checkout-session`,
      data: formData,
    });

    let data = res.data;
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getUserDetails = async () => {

  try {
    let res = await axios({
      method: "get",
      url: `${API_URL}/V1/me`,
      headers:{Authorization:'Bearer '+store.getters.getLoginUserInfo.token}
      
    });

    let data = res.data;
    return data;
  } catch (error) {
    return error.response;
  }
};