import { ICurio, ImageType } from "@/src/types"
import styles from "./curio.module.scss"
import { CONFIG } from "@config"
import type { FC } from "react"
import { formatPercent } from "@utils/format"

export interface ICurioProps {
  curio: ICurio
}

export const Curio: FC<ICurioProps> = ({ curio }) => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <img className={styles.curioImage} src={curio.image} alt={curio.name} />
        <div className={styles.info}>
          <div className={styles.name}>{curio.name}</div>
          <div className={styles.subtext}>{curio.subtext}</div>
          <div className={styles.description}>{curio.description}</div>
          <div className={styles.location}>{curio.location}</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.with}>
          <div className={styles.outcomeTitle}>Cleansing</div>
          {curio.cleansing.map((cleansingItem) => (
            <CleansingOutcome key={cleansingItem.item} {...cleansingItem} />
          ))}
        </div>
        <div className={styles.without}>
          <div className={styles.outcomeTitle}>No Cleansing</div>
          {curio.withoutCleansing.map((possibility) => (
            <NonCleansingOutcome key={possibility.outcome} {...possibility} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ICleansingOutcomeProps {
  item: string
  itemImage: ImageType
  outcome: string
  outcomeDescription: string
  outcomeImage: ImageType
}
const CleansingOutcome: FC<ICleansingOutcomeProps> = ({
  item,
  itemImage,
  outcome,
  outcomeDescription,
  outcomeImage,
}) => {
  return (
    <div className={styles.cleansingOutcome}>
      <img className={styles.cleansingImage} src={itemImage} alt={item} />
      <div>
        <div className={styles.cleansingItem}>{item}</div>
        <div className={styles.outcomeItem}>
          <img
            className={styles.outcomeImage}
            src={outcomeImage}
            alt={outcome}
          />
          <div>{outcome}</div>
        </div>
        <div className={styles.outcomeDescription}>{outcomeDescription}</div>
      </div>
    </div>
  )
}

interface INonCleansingOutcomeProps {
  probability: number
  outcome: string
  outcomeDescription: string
  outcomeImage: ImageType
}
const NonCleansingOutcome: FC<INonCleansingOutcomeProps> = ({
  probability,
  outcome,
  outcomeDescription,
  outcomeImage,
}) => {
  return (
    <div className={styles.nonCleansingOutcome}>
      <div className={styles.outcomeItem}>
        <div>{formatPercent(probability)}</div>
        <img className={styles.outcomeImage} src={outcomeImage} alt={outcome} />
        <div>{outcome}</div>
      </div>
      <div className={styles.outcomeDescription}>
        <div>{outcomeDescription}</div>
      </div>
    </div>
  )
}
