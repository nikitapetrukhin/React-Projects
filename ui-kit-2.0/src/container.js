import clsx from "clsx";

export const Container = ({ children, className, ...rest }) => (
  <div {...rest} className={clsx("ui-containter", className)}>
    {children}
  </div>
);
