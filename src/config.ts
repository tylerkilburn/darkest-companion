export type ValueOf<T> = T[keyof T]

const IMAGE = {
  ANTIVENOM: "antivenom" as "antivenom",
  BLEED: "bleed" as "bleed",
  BLIGHT: "blight" as "blight",
  CRATE: "crate" as "crate",
  DISCARDED_PACK: "discarded-pack" as "discarded-pack",
  ELDRITCH_ALTER: "eldritch-alter" as "eldritch-alter",
  GOLD: "gold" as "gold",
  HEIRLOOM: "heirloom" as "heirloom",
  HEIRLOOM_CHEST: "heirloom-chest" as "heirloom-chest",
  HOLY_WATER: "holy-water" as "holy-water",
  NOTHING: "nothing" as "nothing",
  REMOVE_NEGATIVE_QUIRK: "remove-negative-quirk" as "remove-negative-quirk",
  SACK: "sack" as "sack",
  SCONCE: "sconce" as "sconce",
  SCOUTING: "scouting" as "scouting",
  SHOVEL: "shovel" as "shovel",
  SKELETON_KEY: "skeleton-key" as "skeleton-key",
  STRESS: "stress" as "stress",
  TORCH: "torch" as "torch",
}

const DUNGEON = {
  ANY: "any" as "any",
  RUINS: "ruins" as "ruins",
}

type IDungeonType = ValueOf<typeof DUNGEON>
type ImageType = ValueOf<typeof IMAGE>

interface IConfig {
  curios: {
    dungeon: IDungeonType
    name: string
    subtext: string
    description: string
    location: string
    imageName: ImageType
    shouldIgnore?: true
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
      dungeon: DUNGEON.ANY,
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
      dungeon: DUNGEON.ANY,
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
      dungeon: DUNGEON.ANY,
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
    {
      dungeon: DUNGEON.ANY,
      name: "Heirloom Chest (First Variant)",
      imageName: IMAGE.HEIRLOOM_CHEST,
      subtext: "Treasure.",
      description: "A chest with your family's sigil.",
      location: "This curio can only appear inside rooms.",
      cleansing: [
        {
          item: "Skeleton Key",
          itemImage: IMAGE.SKELETON_KEY,
          outcome: "Heirloom x4.",
          outcomeDescription: "The key unlocks a hidden compartment!",
          outcomeImage: IMAGE.HEIRLOOM,
        },
        {
          item: "Antivenom",
          itemImage: IMAGE.ANTIVENOM,
          outcome: "Heirloom x3.",
          outcomeDescription:
            "The antivenom neutralizes a poison trap in a hidden compartment!",
          outcomeImage: IMAGE.HEIRLOOM,
        },
      ],
      withoutCleansing: [
        {
          outcome: "Heirloom x2.",
          outcomeDescription: "The contents are yours!",
          outcomeImage: IMAGE.HEIRLOOM,
          probability: 0.75,
        },
        {
          outcome: "Bleed",
          outcomeDescription: "It's trapped!",
          outcomeImage: IMAGE.BLEED,
          probability: 0.125,
        },
        {
          outcome: "Blight",
          outcomeDescription: "It's trapped!",
          outcomeImage: IMAGE.BLIGHT,
          probability: 0.125,
        },
      ],
    },
    {
      dungeon: DUNGEON.ANY,
      name: "Heirloom Chest (Second Variant)",
      imageName: IMAGE.HEIRLOOM_CHEST,
      subtext: "Treasure.",
      description: "A chest with your family's sigil.",
      location: "This curio can only appear inside rooms.",
      cleansing: [
        {
          item: "Skeleton Key",
          itemImage: IMAGE.SKELETON_KEY,
          outcome: "Any Loot x3.",
          outcomeDescription: "The key unlocks a hidden compartment!",
          outcomeImage: IMAGE.GOLD,
        },
        {
          item: "Shovel",
          itemImage: IMAGE.SHOVEL,
          outcome: "Any Loot x2. (66%) / Nothing (33%)",
          outcomeDescription: "The contents are yours!",
          outcomeImage: IMAGE.GOLD,
        },
      ],
      withoutCleansing: [
        {
          outcome: "Any Loot x2.",
          outcomeDescription: "The contents are yours!",
          outcomeImage: IMAGE.GOLD,
          probability: 0.5,
        },
        {
          outcome: "Bleed",
          outcomeDescription: "It's trapped!",
          outcomeImage: IMAGE.BLEED,
          probability: 0.25,
        },
        {
          outcome: "Blight",
          outcomeDescription: "It's trapped!",
          outcomeImage: IMAGE.BLIGHT,
          probability: 0.25,
        },
      ],
    },
    {
      dungeon: DUNGEON.ANY,
      name: "Sack",
      subtext: "Scrounging",
      description: "No description.",
      location: "This curio can only appear along corridors.",
      imageName: IMAGE.SACK,
      cleansing: [],
      withoutCleansing: [
        {
          outcome: "Gold",
          outcomeDescription: "The sack's contents are yours...",
          outcomeImage: IMAGE.GOLD,
          probability: 0.75,
        },
        {
          outcome: "Nothing",
          outcomeDescription: "The sack is empty.",
          outcomeImage: IMAGE.NOTHING,
          probability: 0.25,
        },
      ],
    },
    {
      dungeon: DUNGEON.ANY,
      name: "Sconce",
      subtext: "Scrounging",
      description: "No description.",
      location: "This curio can only appear along corridors.",
      imageName: IMAGE.SCONCE,
      cleansing: [],
      withoutCleansing: [
        {
          outcome: "Torch x1",
          outcomeDescription: "You salvage the unburned torch.",
          outcomeImage: IMAGE.TORCH,
          probability: 1,
        },
      ],
    },
  ],
}

const imageMap: Record<ImageType, string> = {
  [IMAGE.ANTIVENOM]: "/image/antivenom.png",
  [IMAGE.BLEED]: "/image/bleed.png",
  [IMAGE.BLIGHT]: "/image/blight.png",
  [IMAGE.CRATE]: "/image/crate.png",
  [IMAGE.DISCARDED_PACK]: "/image/discarded-pack.png",
  [IMAGE.ELDRITCH_ALTER]: "/image/eldritch-alter.png",
  [IMAGE.GOLD]: "/image/gold.png",
  [IMAGE.HEIRLOOM]: "/image/portrait.png",
  [IMAGE.HEIRLOOM_CHEST]: "/image/heirloom-chest.png",
  [IMAGE.HOLY_WATER]: "/image/holy-water.png",
  [IMAGE.NOTHING]: "/image/nothing.png",
  [IMAGE.REMOVE_NEGATIVE_QUIRK]: "/image/remove-negative-quirk.png",
  [IMAGE.SACK]: "/image/sack.png",
  [IMAGE.SCONCE]: "/image/sconce.png",
  [IMAGE.SCOUTING]: "/image/scouting.png",
  [IMAGE.SHOVEL]: "/image/shovel.png",
  [IMAGE.SKELETON_KEY]: "/image/skeleton-key.png",
  [IMAGE.STRESS]: "/image/stress.png",
  [IMAGE.TORCH]: "/image/torch.png",
}
