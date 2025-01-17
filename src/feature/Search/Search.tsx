import { Icon } from '@/shared'

import s from './Search.module.scss'

export const Search = () => {
  return (
    <div className={s.container}>
      <Icon className={s.icon} id={'search'} />
      <input className={s.search} placeholder={'поиск...'} type={'text'} />
    </div>
  )
}
