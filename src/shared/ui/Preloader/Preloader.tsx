import clsx from "clsx";
import s from "./Preloader.module.scss";

type Props = {
  isHidden?: boolean;
};

export const Preloader = ({ isHidden }: Props) => {
  return (
    <div className={clsx(s.preloader, isHidden && s.hidden)}>
      <img src="/images/favicon.png" alt="preloader" className={s.image} />
    </div>
  );
};
