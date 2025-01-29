import s from "./Input.module.scss";
import { ComponentPropsWithRef, forwardRef } from "react";
import clsx from "clsx";

type Props = {
  errorMessage?: string;
  label?: string;
  labelClassName?: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, label, labelClassName, className, ...rest }, ref) => {
    return (
      <>
        <label className={labelClassName}>
          {label}
          <input className={clsx(s.input, className)} ref={ref} {...rest} />
        </label>
        {!!errorMessage && (
          <span className={s.errorMessage}>{errorMessage}</span>
        )}
      </>
    );
  }
);
