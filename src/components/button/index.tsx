import type { ReactNode, AnchorHTMLAttributes } from "react";
import "./style.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`btn btn--${variant} btn--${size}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
