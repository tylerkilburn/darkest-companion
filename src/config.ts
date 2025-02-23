import {
  DungeonKeyType,
  DungeonLengthKeyType,
  DungeonLengthType,
  DungeonType,
  ICurio,
  IDungeonProvision,
  IImage,
  ImageKeyType,
  IProvision,
  ProvisionKeyType,
} from "./types"

export const IMAGE: Record<ImageKeyType, IImage> = {
  ANTIVENOM: {
    name: "Antivenom",
    path: "/image/antivenom.png",
  },
  BANDAGE: {
    name: "Bandage",
    path: "/image/bandage.png",
  },
  BLEED: {
    name: "Bleed",
    path: "/image/bleed.png",
  },
  BLIGHT: {
    name: "Blight",
    path: "/image/blight.png",
  },
  CRATE: {
    name: "Crate",
    path: "/image/crate.png",
  },
  DISCARDED_PACK: {
    name: "Discarded Pack",
    path: "/image/discarded-pack.png",
  },
  DOG_TREATS: {
    name: "Dog Treats",
    path: "/image/dog-treats.png",
  },
  ELDRITCH_ALTER: {
    name: "Eldritch Alter",
    path: "/image/eldritch-alter.png",
  },
  FIREWOOD: {
    name: "Firewood",
    path: "/image/firewood.png",
  },
  FOOD: {
    name: "Food",
    path: "/image/food.png",
  },
  GOLD: {
    name: "Gold",
    path: "/image/gold.png",
  },
  HEIRLOOM: {
    name: "Heirloom",
    path: "/image/portrait.png",
  },
  HEIRLOOM_CHEST: {
    name: "Heirloom Chest",
    path: "/image/heirloom-chest.png",
  },
  HOLY_WATER: {
    name: "Holy Water",
    path: "/image/holy-water.png",
  },
  LAUDANUM: {
    name: "Laudanum",
    path: "/image/laudanum.png",
  },
  MEDICINAL_HERBS: {
    name: "Medicinal Herbs",
    path: "/image/medicinal-herbs.png",
  },
  NOTHING: {
    name: "Nothing",
    path: "/image/nothing.png",
  },
  REMOVE_NEGATIVE_QUIRK: {
    name: "Remove Negative Quirk",
    path: "/image/remove-negative-quirk.png",
  },
  SACK: {
    name: "Sack",
    path: "/image/sack.png",
  },
  SCONCE: {
    name: "Sconce",
    path: "/image/sconce.png",
  },
  SCOUTING: {
    name: "Scouting",
    path: "/image/scouting.png",
  },
  SHOVEL: {
    name: "Shovel",
    path: "/image/shovel.png",
  },
  SKELETON_KEY: {
    name: "Skeleton Key",
    path: "/image/skeleton-key.png",
  },
  STRESS: {
    name: "Stress",
    path: "/image/stress.png",
  },
  TORCH: {
    name: "Torch",
    path: "/image/torch.png",
  },
}

export const DUNGEON: Record<DungeonKeyType, DungeonType> = {
  ANY: "any" as "any",
  COURTYARD: "Courtyard" as "Courtyard",
  COVE: "Cove" as "Cove",
  DARKEST_DUNGEON: "Darkest Dungeon" as "Darkest Dungeon",
  FARMSTEAD: "Farmstead" as "Farmstead",
  RUINS: "Ruins" as "Ruins",
  WARRENS: "Warrens" as "Warrens",
  WEALD: "Weald" as "Weald",
}

const DUNGEON_LENGTH: Record<DungeonLengthKeyType, DungeonLengthType> = {
  SHORT: "Short" as "Short",
  MEDIUM: "Medium" as "Medium",
  LONG: "Long" as "Long",
}

const PROVISION: Record<ProvisionKeyType, IProvision> = {
  ANTIVENOM: {
    name: "antivenom",
    price: 150,
    description: "Use to counter Blights, Poisons, and Toxins.",
    effect: "Cures Blight",
    stack: 6,
    image: IMAGE.ANTIVENOM,
  },
  BANDAGE: {
    name: "bandage",
    price: 150,
    description: "Use to staunch the flow of Bleeding.",
    effect: "Cures Bleed",
    stack: 6,
    image: IMAGE.BANDAGE,
  },
  DOG_TREATS: {
    name: "Dog Treats",
    price: 0,
    description:
      "Automatically placed in the inventory when embarking with a Houndmaster. Can be consumed in battle for: +50% DMG +15 ACC The buff lasts for 3 rounds. Only usable by a Houndmaster.",
    effect: "Buff",
    stack: 2,
    image: IMAGE.DOG_TREATS,
  },
  FIREWOOD: {
    name: "Firewood",
    price: 0,
    description:
      "Use to Camp. Cannot be bought but is instead given to the party based on the size of the dungeon that is explored: Short: 0 Medium: 1 Long: 2",
    effect: "Begin Camp",
    stack: 1,
    image: IMAGE.FIREWOOD,
  },
  FOOD: {
    name: "Food",
    price: 75,
    description: "Food is consumed to restore health and stave off hunger.",
    effect: "Small Heal",
    stack: 12,
    image: IMAGE.FOOD,
  },
  LAUDANUM: {
    name: "Laudanum",
    price: 100,
    description:
      "A soothing tincture to inure one's mind against the horrors of the dark.",
    effect: "Cures Horror ",
    stack: 6,
    image: IMAGE.LAUDANUM,
  },
  HOLY_WATER: {
    name: "Holy Water",
    price: 150,
    description: "Use to purge evil and restore purity.",
    effect: "Resists Debuff",
    stack: 6,
    image: IMAGE.HOLY_WATER,
  },
  MEDICINAL_HERBS: {
    name: "Medicinal Herbs",
    price: 200,
    description: "Use to cure Diseases and Maladies.",
    effect: "Cures Debuff",
    stack: 6,
    image: IMAGE.MEDICINAL_HERBS,
  },
  SHOVEL: {
    name: "Shovel",
    price: 250,
    description: "Removes any obstacle out of the way.",
    effect: "Removes Obstacles",
    stack: 4,
    image: IMAGE.SHOVEL,
  },
  SKELETON_KEY: {
    name: "Skeleton Key",
    price: 200,
    description: "Use to unlock Strongboxes and Doors.",
    effect: "Curios Only",
    stack: 4,
    image: IMAGE.SKELETON_KEY,
  },
  TORCH: {
    name: "Torch",
    price: 75,
    description:
      "Increases the Light level. In the Courtyard, it bestows the party with a +3 ACC buff for 1 battle.",
    effect: "Light +25",
    stack: 8,
    image: IMAGE.TORCH,
  },
}

const DUNGEON_PROVISIONS: IDungeonProvision[] = [
  {
    dungeon: DUNGEON.RUINS,
    length: DUNGEON_LENGTH.SHORT,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 8,
        max: 12,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 1,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 0,
        max: 1,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.TORCH,
        min: 8,
        max: 8,
      },
    ],
  },
  {
    dungeon: DUNGEON.RUINS,
    length: DUNGEON_LENGTH.MEDIUM,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 16,
        max: 20,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 3,
        max: 3,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 4,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.TORCH,
        min: 10,
        max: 13,
      },
    ],
  },
  {
    dungeon: DUNGEON.RUINS,
    length: DUNGEON_LENGTH.LONG,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 24,
        max: 28,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 3,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 0,
        max: 3,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 3,
        max: 5,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 3,
        max: 5,
      },
      {
        provision: PROVISION.TORCH,
        min: 14,
        max: 16,
      },
    ],
  },
  {
    dungeon: DUNGEON.WARRENS,
    length: DUNGEON_LENGTH.SHORT,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 8,
        max: 12,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 1,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 1,
        max: 3,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.TORCH,
        min: 8,
        max: 10,
      },
    ],
  },
  {
    dungeon: DUNGEON.WARRENS,
    length: DUNGEON_LENGTH.MEDIUM,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 12,
        max: 18,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 3,
        max: 3,
      },
      {
        provision: PROVISION.TORCH,
        min: 10,
        max: 16,
      },
    ],
  },
  {
    dungeon: DUNGEON.WARRENS,
    length: DUNGEON_LENGTH.LONG,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 16,
        max: 20,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 2,
        max: 4,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 3,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 3,
        max: 5,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 4,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.TORCH,
        min: 16,
        max: 20,
      },
    ],
  },
  {
    dungeon: DUNGEON.WEALD,
    length: DUNGEON_LENGTH.SHORT,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 8,
        max: 12,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 1,
        max: 1,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 1,
        max: 1,
      },
      {
        provision: PROVISION.TORCH,
        min: 8,
        max: 8,
      },
    ],
  },
  {
    dungeon: DUNGEON.WEALD,
    length: DUNGEON_LENGTH.MEDIUM,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 16,
        max: 20,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 4,
        max: 5,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 3,
        max: 3,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.TORCH,
        min: 12,
        max: 12,
      },
    ],
  },
  {
    dungeon: DUNGEON.WEALD,
    length: DUNGEON_LENGTH.LONG,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 20,
        max: 24,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 4,
        max: 6,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 4,
        max: 5,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 4,
        max: 4,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 4,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.TORCH,
        min: 12,
        max: 16,
      },
    ],
  },
  {
    dungeon: DUNGEON.COVE,
    length: DUNGEON_LENGTH.SHORT,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 8,
        max: 12,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 1,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 2,
        max: 2,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 1,
        max: 2,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 0,
        max: 1,
      },
      {
        provision: PROVISION.TORCH,
        min: 8,
        max: 8,
      },
    ],
  },
  {
    dungeon: DUNGEON.COVE,
    length: DUNGEON_LENGTH.MEDIUM,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 16,
        max: 20,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 4,
        max: 5,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 3,
        max: 4,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 3,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.TORCH,
        min: 12,
        max: 12,
      },
    ],
  },
  {
    dungeon: DUNGEON.COVE,
    length: DUNGEON_LENGTH.LONG,
    provisions: [
      {
        provision: PROVISION.FOOD,
        min: 20,
        max: 24,
      },
      {
        provision: PROVISION.SHOVEL,
        min: 4,
        max: 6,
      },
      {
        provision: PROVISION.ANTIVENOM,
        min: 0,
        max: 3,
      },
      {
        provision: PROVISION.BANDAGE,
        min: 4,
        max: 6,
      },
      {
        provision: PROVISION.MEDICINAL_HERBS,
        min: 3,
        max: 5,
      },
      {
        provision: PROVISION.SKELETON_KEY,
        min: 2,
        max: 4,
      },
      {
        provision: PROVISION.HOLY_WATER,
        min: 0,
        max: 2,
      },
      {
        provision: PROVISION.TORCH,
        min: 16,
        max: 16,
      },
    ],
  },
]

interface IConfig {
  curios: ICurio[]
  dungeon: Record<DungeonKeyType, DungeonType>
  dungeonLength: Record<DungeonLengthKeyType, DungeonLengthType>,
  dungeonProvisions: IDungeonProvision[]
  provision: Record<ProvisionKeyType, IProvision>
}

export const CONFIG: IConfig = {
  curios: [
    {
      dungeon: DUNGEON.ANY,
      name: "Crate",
      subtext: "Treasure",
      description: "No description.",
      location: "This curio can only appear along corridors.",
      image: IMAGE.CRATE,
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
      image: IMAGE.DISCARDED_PACK,
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
      image: IMAGE.ELDRITCH_ALTER,
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
      image: IMAGE.HEIRLOOM_CHEST,
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
      image: IMAGE.HEIRLOOM_CHEST,
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
      image: IMAGE.SACK,
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
      image: IMAGE.SCONCE,
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
  dungeon: DUNGEON,
  dungeonLength: DUNGEON_LENGTH,
  dungeonProvisions: DUNGEON_PROVISIONS,
  provision: PROVISION,
}
