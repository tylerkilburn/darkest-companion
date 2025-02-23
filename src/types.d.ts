export type ValueOf<T> = T[keyof T]

export type DungeonLengthKeyType = "SHORT" | "MEDIUM" | "LONG"

export type DungeonLengthType = "Short" | "Medium" | "Long"

export interface ICurio {
  dungeon: IDungeonType
  name: string
  subtext: string
  description: string
  location: string
  image: IImage
  shouldIgnore?: true
  cleansing: {
    item: string
    itemImage: IImage
    outcome: string
    outcomeDescription: string
    outcomeImage: IImage
  }[]
  withoutCleansing: {
    probability: number
    outcome: string
    outcomeDescription: string
    outcomeImage: IImage
  }[]
}

export interface IProvisionSuggestion {
  provision: IProvision
  min: number
  max: number
}

export interface IDungeonProvision {
  dungeon: DungeonType
  dungeonLength: DungeonLengthType
  provisionSuggestions: IProvisionSuggestion[]
}

export interface IProvision {
  name: string
  price: number
  description: string
  effect: string
  stack: number
  image: IImage
}

export type DungeonKeyType =
  | "ANY"
  | "COURTYARD"
  | "COVE"
  | "DARKEST_DUNGEON"
  | "FARMSTEAD"
  | "RUINS"
  | "WARRENS"
  | "WEALD"

export type DungeonType =
  | "any"
  | "Courtyard"
  | "Cove"
  | "Darkest Dungeon"
  | "Farmstead"
  | "Ruins"
  | "Warrens"
  | "Weald"

export type ProvisionKeyType =
  | "ANTIVENOM"
  | "BANDAGE"
  | "DOG_TREATS"
  | "FIREWOOD"
  | "FOOD"
  | "LAUDANUM"
  | "HOLY_WATER"
  | "MEDICINAL_HERBS"
  | "SHOVEL"
  | "SKELETON_KEY"
  | "TORCH"

export type ImageKeyType =
  | "ANTIVENOM"
  | "BANDAGE"
  | "BLEED"
  | "BLIGHT"
  | "CRATE"
  | "DISCARDED_PACK"
  | "DOG_TREATS"
  | "ELDRITCH_ALTER"
  | "FIREWOOD"
  | "FOOD"
  | "GOLD"
  | "HEIRLOOM"
  | "HEIRLOOM_CHEST"
  | "HOLY_WATER"
  | "LAUDANUM"
  | "MEDICINAL_HERBS"
  | "NOTHING"
  | "REMOVE_NEGATIVE_QUIRK"
  | "SACK"
  | "SCONCE"
  | "SCOUTING"
  | "SHOVEL"
  | "SKELETON_KEY"
  | "STRESS"
  | "TORCH"
