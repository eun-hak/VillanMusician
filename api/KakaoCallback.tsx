"use client";
// 참고자료
// https://stonesy927.tistory.com/232
// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api
// https://2dowon.github.io/docs/react/social_login/

// import styles from './KakaoOAuth2RedirectPage.module.css';
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import JwtInterceptors from "./ApiController";

function KakaoOAuth2RedirectPage() {
  const { instance } = JwtInterceptors();
  //   const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  // 2. access Token 요청
  const getToken = async (code: string) => {
    const KAKAO_REST_API_KEY = process.env.KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URI = process.env.REDIRECT_URI;

    try {
      const response = await instance.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`
      );
      return response.data;
    } catch (error) {
      console.error("Error getting access token:", error);
      throw error;
    }
  };

  //인가코드 받아서 백엔드에 넘김 -> 백엔드에서 엑세스토큰 , 리프레시토큰  받아옴 , 토큰을 스토리지에 저장
  //로그인 유무는 로컬스토리지에서 처리

  //   useEffect(() => {
  //     if (code) {
  //       getToken(code).then((res) => {
  //         console.log(res.access_token);
  //         router.push("/main");
  //       });
  //     }
  //   }, []);

  return <div>로그인 처리 중...</div>;
}

export default KakaoOAuth2RedirectPage;