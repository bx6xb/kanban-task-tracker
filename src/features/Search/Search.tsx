import { ChangeEvent } from "react";
import s from "./Search.module.scss";
import { Icon, useAppDispatch, useAppSelector } from "../../shared";
import { setSearchTerm } from "../../entities";

export const Search = () => {
  const searchTerm = useAppSelector(state => state.tasksState.searchTerm);
  const dispatch = useAppDispatch();

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchTerm(e.currentTarget.value));

  const clearInput = () => dispatch(setSearchTerm(""));

  return (
    <div className={s.container}>
      <Icon className={s.searchIcon} id={"search"} />

      <input
        className={s.input}
        onChange={onValueChange}
        placeholder={"поиск..."}
        type={"text"}
        value={searchTerm}
      />

      {!!searchTerm && (
        <Icon className={s.cross} id={"cross"} onClick={clearInput} />
      )}
    </div>
  );
};
