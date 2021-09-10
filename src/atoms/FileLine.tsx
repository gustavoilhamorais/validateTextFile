import { ReactElement } from "react";

interface FileLineProps {
    key: string;
    line: string;
}

const FileLine = (props: FileLineProps): ReactElement => (
  <p key={props.key}>{props.line}</p>
);

export default FileLine;
