import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
const MediaFileDownload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | undefined>(
    fileInputRef.current?.value
  );
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };
  // type UploadImage = {
  //   file: File;
  //   thumbnail: string;
  //   type: string;
  // };
  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target;
    // 파일 첨부 도중에 취소를 누를 경우 에러가 발생하지 않도록 return 처리
    if (files.length <= 0) {
      return;
    }
    const file = files[0];
    // file 객체에서 타입 확인
    const fileType = file.type;
    if (!fileType.includes("m4a")) {
      alert(
        `해당 파일은 이미지 파일이 아닙니다.\n이미지(JPG,JPEG,GIF,PNG)나 PDF 파일을 업로드 해주세요.`
      );
      e.target.value = "";
      setSelectedFile(fileInputRef.current?.value);
      return;
    }
    setSelectedFile(file.name);
  };
  return (
    <FileUploadContainer>
      <FileUploadForm>
        <FileInput
          type="file"
          accept="audio/*"
          ref={fileInputRef}
          onChange={uploadProfile}
        />
        <FileUploadButton type="button" onClick={handleClickFileInput}>
          파일 업로드 버튼
        </FileUploadButton>
        등록할 음악 : {selectedFile}
      </FileUploadForm>
    </FileUploadContainer>
  );
};

export default MediaFileDownload;

const FileUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileUploadForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadButton = styled.button`
  color: white;
  display: block;
  width: 150px;
  height: 50px;
  background-color: #651fff;
  border-radius: 16px;
  margin-top: 8px;
`;

const FileName = styled.div`
  display: block;
`;