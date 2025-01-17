import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './CardInput.module.scss'

type Props = {
  onChange(value: string): void
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'type'>

export const CardInput = ({ className, onChange, ...rest }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <input
      className={clsx(s.input, className)}
      onChange={onChangeHandler}
      type={'text'}
      {...rest}
    />
  )
}
