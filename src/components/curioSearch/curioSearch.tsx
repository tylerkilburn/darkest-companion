import styles from "./curioSearch.module.scss"

import type { Dispatch, FC } from "react"

export interface ICurioSearchProps {
  curioSearch: string
  setCurioSearch: Dispatch<string>
}

export const CurioSearch: FC<ICurioSearchProps> = ({
  curioSearch,
  setCurioSearch,
}) => {
  return (
    <div className={styles.root}>
      <label htmlFor="curioSearch" className={styles.searchLabel}>
        Search for curio:{"  "}
      </label>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for curio..."
        aria-label="Search curios"
        onChange={(e) => setCurioSearch(e.target.value)}
        value={curioSearch}
      />
    </div>
  )
}
