import { ReactElement, useState } from "react";
import RenderFileLines            from "../molecules/RenderFileLines";
import SearchForWordOccurrences   from "../molecules/SearchForWordOccurrences";
import UploadAndProccessFile      from "../molecules/UploadAndProccessFile";

const UploadTxtFileAndCountStringOccurrences = (): ReactElement => {
  const [search, setSearch] = useState("");
  const [occurrences, setOccurrences] = useState(0);
  const [content, setContent] = useState([""]);
  const [file, setFiles] = useState(new Blob());
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <UploadAndProccessFile
        setFiles={setFiles}
        file={file}
        setIsLoading={setIsLoading}
        setContent={setContent}
      />
      <RenderFileLines render={false} content={content} />
      <br />
      <SearchForWordOccurrences
        setIsLoading={setIsLoading}
        content={content}
        search={search}
        setSearch={setSearch}
        occurrences={occurrences}
        setOccurrences={setOccurrences}
      />
    </div>
  );
};

export default UploadTxtFileAndCountStringOccurrences;
