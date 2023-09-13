"use client";
import styled from "@emotion/styled";
import "../globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "../ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "빌런 노래방",
//   description: "Generated by create next app",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BodyStyle>
      <BgStyle>
        {/* <RecoilRoot> */}
        <ReactQueryProvider>{children}</ReactQueryProvider>
        {/* </RecoilRoot> */}
      </BgStyle>
    </BodyStyle>
  );
};

export default RootLayout;

const BodyStyle = styled.body`
  ${inter.className};
`;

const BgStyle = styled.div`
  background-color: #fff;
  min-height: calc(100vh * 1);
`;
