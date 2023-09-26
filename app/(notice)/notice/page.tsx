"use client";
import styled from "@emotion/styled";
import UploadHeader from "@/components/upload_header";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "@/recoil/recoilstore";
import NoticeForm from "@/components/noticeform";

const Mypage = () => {
  const methods = useForm();
  const [token, setToken] = useRecoilState(tokenState);
  useEffect(() => {
    console.log(token);
  }, []);
  return (
    <FormProvider {...methods}>
      <MainPageWrapper>
        <MainPageContainer>
          <UploadHeader name="알림" type="hidden"></UploadHeader>
          <NoticeForm></NoticeForm>
        </MainPageContainer>
      </MainPageWrapper>
    </FormProvider>
  );
};

export default Mypage;

const MainPageWrapper = styled.div`
  width: 100%;
  position: flex;
  top: 0;
  bottom: 0;
  height: 100%;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 117px);
  align-items: center;
  justify-content: center;
`;
