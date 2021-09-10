import { ReactElement } from "react";
import styled           from "styled-components";

interface BtnProccessFileProps {
  setIsLoading(isLoading: boolean): void;
  setContent(domainList: string[]): void;
  file: Blob;
}

const Button = styled.button`
  margin-bottom: 50px;
`;

const BtnProccessFile = ({
  setIsLoading,
  setContent,
  file
}: BtnProccessFileProps): ReactElement => {
  function handleReadFileBtnClick(): void {
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (event: any): void => {
      const text: string = event?.target?.result;
      const domainList: string[] = text.split("\n");
      setContent(domainList);
    };

    reader.readAsText(file);

    setIsLoading(false);
  }

  return (
    <Button
      id="read-button"
      onClick={handleReadFileBtnClick}
    >
      Processar arquivo.
    </Button>
  );
};

export default BtnProccessFile;
