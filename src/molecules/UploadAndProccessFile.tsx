import { ReactElement } from "react";
import BtnProccessFile  from "../atoms/BtnProccessFile";
import InputUploadFile  from "../atoms/InputUploadFile";

interface UploadAndProccessFileProps {
  file: Blob;
  setFiles(file: object): void;
  setIsLoading(isLoading: boolean): void;
  setContent(domainList: string[]): void;
}

const UploadAndProccessFile = (
  props: UploadAndProccessFileProps
): ReactElement => {
  const { setFiles, file, setIsLoading, setContent } = props;

  return (
    <>
      <InputUploadFile setFiles={setFiles} />
      <BtnProccessFile
        file={file}
        setContent={setContent}
        setIsLoading={setIsLoading}
      />
    </>
  );
};

export default UploadAndProccessFile;
