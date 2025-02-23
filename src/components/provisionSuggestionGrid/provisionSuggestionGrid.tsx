import styles from "./provisionSuggestionGrid.module.scss"

import type { FC } from "react"
import { generateStaticArray } from "@utils/generateStaticArray"
import { IProvisionSuggestion } from "@types"

const CELL_COUNT = 16

export interface IProvisionSuggestionGridProps {
  provisionSuggestions: IProvisionSuggestion[]
}

export const ProvisionSuggestionGrid: FC<IProvisionSuggestionGridProps> = ({
  provisionSuggestions,
}) => (
  <div className={styles.root}>
    {generateStaticArray(CELL_COUNT).map((idx) => {
      const provisionSuggestion: IProvisionSuggestion | undefined =
        provisionSuggestions[idx]

      const count =
        provisionSuggestion?.min === provisionSuggestion?.max
          ? provisionSuggestion?.min
          : `${provisionSuggestion?.min} - ${provisionSuggestion?.max}`

      return (
        <div className={styles.cell} key={provisionSuggestion?.provision?.name}>
          <img
            alt={provisionSuggestion?.provision?.name}
            className={styles.image}
            src={provisionSuggestion?.provision?.image}
          />
          <div className={styles.provisionCount}>{count}</div>
        </div>
      )
    })}
  </div>
)
