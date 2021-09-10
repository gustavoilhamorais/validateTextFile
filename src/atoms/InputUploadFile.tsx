import { ChangeEvent, ReactElement } from "react";

interface InputUploadFileProps {
  setFiles(files: File[]): void;
}

const InputUploadFile = ({ setFiles }: InputUploadFileProps): ReactElement => {
  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const fileList: any = event?.target?.files;
    fileList?.length && setFiles(fileList[0]);
  }

  return <input type="file" id="file-input" onChange={handleFileInputChange} />;
};

export default InputUploadFile;
