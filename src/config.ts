export type ValueOf<T> = T[keyof T]

const IMAGE = {
  CRATE: "crate" as "crate",
  DISCARDED_PACK: "discarded-pack" as "discarded-pack",
  GOLD: "gold" as "gold",
  HEIRLOOM: "heirloom" as "heirloom",
  NOTHING: "nothing" as "nothing",
  SCOUTING: "scouting" as "scouting",
}

type ImageType = ValueOf<typeof IMAGE>

interface IConfig {
  curios: {
    name: string
    subtext: string
    description: string
    location: string
    imageName: ImageType
    cleansing: {
      item: string
      itemImage: ImageType
      outcomseImage: ImageType
    }[]
    withoutCleansing: {
      probability: number
      outcome: string
      outcomeDescription: string
      outcomeImage: ImageType
    }[]
  }[]
}

export const CONFIG: IConfig = {
  curios: [
    {
      name: "Crate",
      subtext: "Treasure",
      description: "No description.",
      location: "This curio can only appear along corridors.",
      imageName: IMAGE.CRATE,
      cleansing: [],
      withoutCleansing: [
        {
          probability: 0.75,
          outcome: "Heirloom",
          outcomeDescription: "The crate contains stashed heirlooms!",
          outcomeImage: IMAGE.HEIRLOOM,
        },
        {
          probability: 0.25,
          outcome: "Nothing",
          outcomeDescription: "The crate is empty.",
          outcomeImage: IMAGE.NOTHING,
        },
      ],
    },

    {
      name: "Discarded Pack",
      subtext: "Scrounging; Treasure.",
      description: "No description.",
      location: "This curio can only appear along corridors.",
      imageName: IMAGE.DISCARDED_PACK,
      cleansing: [],
      withoutCleansing: [
        {
          probability: 0.6,
          outcome: "Supplies x1 + Gold/Gems x2 + Journal Entry.",
          outcomeDescription: "The pack contains loot!",
          outcomeImage: IMAGE.GOLD,
        },
        {
          probability: 0.2,
          outcome: "Scouting",
          outcomeDescription: "The pack has a map inside it!",
          outcomeImage: IMAGE.SCOUTING,
        },
        {
          probability: 0.2,
          outcome: "Nothing",
          outcomeDescription: "The pack has already been looted.",
          outcomeImage: IMAGE.NOTHING
        },
      ],
    },
  ],
}


const imageMap: Record<ImageType, string> = {
  [IMAGE.CRATE]: "/image/crate.png",
  [IMAGE.DISCARDED_PACK]: "/image/discarded-pack.png",
  [IMAGE.GOLD]: "/image/gold.png",
  [IMAGE.HEIRLOOM]: "/image/portrait.png",
  [IMAGE.NOTHING]: "/image/nothing.png",
  [IMAGE.SCOUTING]: "/image/scouting.png",
}
