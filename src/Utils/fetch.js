import axios from "axios";
import { config } from "../config";


export async function signUp(url, payload) {
    try {

      const res = await axios.post(`${config.base_url}${url}`, payload);
  
      return res;
    } catch (err) {
      return err
    }
  }

  export async function signIn(url, payload) {
    try {
      const res = await axios.post(`${config.base_url}${url}`, payload);
      return res;
    } catch (err) {
      return err
    }
  }