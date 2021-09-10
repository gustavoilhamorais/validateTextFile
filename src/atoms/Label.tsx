import { ReactElement } from "react";

interface LabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: LabelProps): ReactElement => (
  <>
    <label htmlFor={htmlFor}>{children}</label>
    <br />
  </>
);

export default Label;
