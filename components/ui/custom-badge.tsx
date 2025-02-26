import { Badge, type BadgeProps } from "aceternity-ui";
import clsx from "clsx";

const CustomBadge = ({ variant, className, ...props }: BadgeProps & { variant?: "secondary" }) => {
  const customClass = variant === "secondary" ? "bg-gray-500 text-white" : "";
  
  return <Badge className={clsx(customClass, className)} {...props} />;
};

export { CustomBadge };
