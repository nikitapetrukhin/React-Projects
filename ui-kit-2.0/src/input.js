import clsx from "clsx";

export const Input = ({ type = "text", className, ...rest }) => (
  <input {...rest} className={clsx("ui-textfield", className)} type={type} />
);
