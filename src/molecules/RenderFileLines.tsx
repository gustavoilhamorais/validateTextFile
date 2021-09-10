import { ReactElement } from "react";
import FileLine         from "../atoms/FileLine";
import FileContainer    from "../atoms/FileContainer";
import NoFileSelected   from "../atoms/NoFileSelected";

interface RenderFileLinesProps {
  render: boolean;
  content: string[];
}

const RenderFileLines = (props: RenderFileLinesProps): ReactElement => {
  const { render = true, content } = props;

  if (!render) return <></>;

  return content.length ? (
    <FileContainer id="file-contents">
      {content.map((domain: string) => (
        <FileLine key={domain} line={domain} />
      ))}
    </FileContainer>
  ) : (
    <NoFileSelected />
  );
};

export default RenderFileLines;
