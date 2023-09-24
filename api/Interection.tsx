import axios from "axios";
import JwtInterceptors, { baseURL } from "./ApiController";
import { getStorage } from "@/util/loginStorage";

interface Click_Type {
  feedId: string;
  memberId?: string;
}
const Interection = () => {
  const Interection_click = async (data: Click_Type) => {
    const token: any = getStorage("access");
    const token2 = `Bearer ${token.replace(/\"/gi, "")}`;
    try {
      const response = await axios.post(`${baseURL}interactions`, data, {
        headers: {
          Authorization: token2,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error getting access token:", error);
      throw error;
    }
  };

  return { Interection_click };
};

export default Interection;