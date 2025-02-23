// import styles from "./dungeonSelect.module.scss"
import { CONFIG } from "@config"

import type { Dispatch, FC } from "react"
import { DungeonType } from "@types"

export interface IDungeonSelectProps {
  dungeon: DungeonType
  setDungeon: Dispatch<DungeonType>
}

const DUNGEONS = [
  CONFIG.dungeon.RUINS,
  CONFIG.dungeon.WARRENS,
  CONFIG.dungeon.WEALD,
  CONFIG.dungeon.COVE,
]

export const DungeonSelect: FC<IDungeonSelectProps> = ({
  dungeon,
  setDungeon,
}) => (
  <div>
    {DUNGEONS.map((d) => (
      <div key={d}>
        <input
          type="radio"
          id={d}
          name="dungeon"
          value={d}
          checked={d === dungeon}
          onChange={() => setDungeon(d)}
        />
        <label htmlFor={d}>{d}</label>
      </div>
    ))}
  </div>
)
