export type ValueOf<T> = T[keyof T]

const IMAGE = {
  CRATE: "crate" as "crate",
  DISCARDED_PACK: "discarded-pack" as "discarded-pack",
  ELDRITCH_ALTER: "eldritch-alter" as "eldritch-alter",
  GOLD: "gold" as "gold",
  HEIRLOOM: "heirloom" as "heirloom",
  HOLY_WATER: "holy-water" as "holy-water",
  NOTHING: "nothing" as "nothing",
  REMOVE_NEGATIVE_QUIRK: "remove-negative-quirk" as "remove-negative-quirk",
  SCOUTING: "scouting" as "scouting",
  STRESS: "stress" as "stress",
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
      outcome: string
      outcomeDescription: string
      outcomeImage: ImageType
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
          outcome: "Heirloom",
          outcomeDescription: "The crate contains stashed heirlooms!",
          outcomeImage: IMAGE.HEIRLOOM,
          probability: 0.75,
        },
        {
          outcome: "Nothing",
          outcomeDescription: "The crate is empty.",
          outcomeImage: IMAGE.NOTHING,
          probability: 0.25,
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
          outcome: "Supplies x1 + Gold/Gems x2 + Journal Entry.",
          outcomeDescription: "The pack contains loot!",
          outcomeImage: IMAGE.GOLD,
          probability: 0.6,
        },
        {
          outcome: "Scouting",
          outcomeDescription: "The pack has a map inside it!",
          outcomeImage: IMAGE.SCOUTING,
          probability: 0.2,
        },
        {
          outcome: "Nothing",
          outcomeDescription: "The pack has already been looted.",
          outcomeImage: IMAGE.NOTHING,
          probability: 0.2,
        },
      ],
    },
    {
      name: "Eldritch Altar",
      imageName: IMAGE.ELDRITCH_ALTER,
      subtext: "Haunted; Unholy.",
      description:
        "An altar dedicated to unholy abominations. Perhaps a great power lies within.",
      location: "This curio can only appear inside rooms.",
      cleansing: [
        {
          item: "Holy Water",
          itemImage: IMAGE.HOLY_WATER,
          outcome: "Purge Negative Quirk",
          outcomeDescription: "The holy water purifies the altar!",
          outcomeImage: IMAGE.REMOVE_NEGATIVE_QUIRK,
        },
      ],
      withoutCleansing: [
        {
          outcome: "Stress +25.",
          outcomeDescription: "A terrifying presence is felt nearby!",
          outcomeImage: IMAGE.STRESS,
          probability: 0.4,
        },
        {
          outcome: "Purge Negative Quirk.",
          outcomeDescription: "The hero is absolved of a sin.",
          outcomeImage: IMAGE.REMOVE_NEGATIVE_QUIRK,
          probability: 0.1,
        },
        {
          outcome: "Nothing",
          outcomeDescription: "The altar's purpose is purely decorative.",
          outcomeImage: IMAGE.NOTHING,
          probability: 0.5,
        },
      ],
    },
  ],
}

const imageMap: Record<ImageType, string> = {
  [IMAGE.CRATE]: "/image/crate.png",
  [IMAGE.DISCARDED_PACK]: "/image/discarded-pack.png",
  [IMAGE.ELDRITCH_ALTER]: "/image/eldritch-alter.png",
  [IMAGE.GOLD]: "/image/gold.png",
  [IMAGE.HEIRLOOM]: "/image/portrait.png",
  [IMAGE.HOLY_WATER]: "/image/holy-water.png",
  [IMAGE.NOTHING]: "/image/nothing.png",
  [IMAGE.REMOVE_NEGATIVE_QUIRK]: "/image/remove-negative-quirk.png",
  [IMAGE.SCOUTING]: "/image/scouting.png",
  [IMAGE.STRESS]: "/image/stress.png",
}
