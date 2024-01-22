import clsx from "clsx";

export const Button = ({ label, className, ...rest }) => (
  <button {...rest} className={clsx("ui-button", className)}>
    {label}
  </button>
);
