import s from "./Input.module.scss";
import { ComponentPropsWithRef, forwardRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return <input className={clsx(s.input, className)} ref={ref} {...rest} />;
  }
);
