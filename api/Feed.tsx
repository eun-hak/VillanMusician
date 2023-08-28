import { AxiosError } from "axios";
import JwtInterceptors from "./ApiController";
// import { Feed } from "@/type/feedtype";
import { MainFeed2 } from "@/type/feedtype";
const Feed = () => {
  const { instance } = JwtInterceptors();

  //전체 피드
  const all = async (value = "고음괴물") => {
    try {
      const data: MainFeed2 = await instance.get(
        `/feeds/feedType?value=${value}`
      );
      // console.log(data.data.data);

      return data.data.data;
      // return data
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  return { all };
};

export default Feed;