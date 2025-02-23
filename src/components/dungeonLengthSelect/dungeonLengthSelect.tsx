// import styles from "./dungeonSelect.module.scss"
import { CONFIG } from "@config"

import type { Dispatch, FC } from "react"
import { DungeonLengthType } from "@types"

export interface IDungeonSelectProps {
  dungeonLength: DungeonLengthType
  setDungeonLength: Dispatch<DungeonLengthType>
}

export const DungeonLengthSelect: FC<IDungeonSelectProps> = ({
  dungeonLength,
  setDungeonLength,
}) => (
  <div>
    {Object.values(CONFIG.dungeonLength).map((dl) => (
      <div key={dl}>
        <input
          type="radio"
          id={dl}
          name="dungeon-length"
          value={dl}
          checked={dl === dungeonLength}
          onChange={() => setDungeonLength(dl)}
        />
        <label htmlFor={dl}>{dl}</label>
      </div>
    ))}
  </div>
)
