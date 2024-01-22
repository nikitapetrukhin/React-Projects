import clsx from "clsx";

export const Link = ({ className, label, ...rest }) => (
  <a {...rest} className={clsx("ui-link", className)}>
    {label}
  </a>
);
