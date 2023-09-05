import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { useRef, useState } from "react";

const MediaFileDownload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | undefined>(
    fileInputRef.current?.value
  );
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    getValues,
  } = useFormContext();
  const { onChange } = register("audio");
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
  const onSubmit = (data: any) => {
    // 제출 버튼을 클릭했을 때 실행되는 함수
    console.log(data); // 폼 데이터 출력
  };
  return (
    <FileUploadContainer>
      <FileUploadForm onSubmit={handleSubmit(onSubmit)}>
        <FileUploadLabel>
          파일 업로드
          <FileInput
            type="file"
            accept="audio/*"
            {...register("audio", {
              onChange: uploadProfile, // 커스텀 onChange 이벤트 핸들러를 등록
            })}
            // ref = { fileInputRef }
          />
        </FileUploadLabel>
        {errors.audio && <div>errors.audio.message</div>}
        {/* <FileUploadButton type="button" onClick={handleClickFileInput}>
          파일 업로드 버튼
        </FileUploadButton> */}
        등록할 음악 : {selectedFile}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </FileUploadForm>
    </FileUploadContainer>
  );
};

export default MediaFileDownload;

const FileUploadLabel = styled.label`
  color: white;
  display: block;
  width: 150px;
  height: 50px;
  background-color: #651fff;
  border-radius: 16px;
  margin-top: 8px;
  text-align: center;
`;
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
