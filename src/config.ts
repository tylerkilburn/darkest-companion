import abandonHopeImage from "../public/image/abandon-hope.png"
import alchemyTableImage from "../public/image/alchemy-table.png"
import altarOfLightImage from "../public/image/altar-of-light.png"
import antivenomImage from "../public/image/antivenom.png"
import bandageImage from "../public/image/bandage.png"
import bleedImage from "../public/image/bleed.png"
import blightImage from "../public/image/blight.png"
import bookshelfImage from "../public/image/bookshelf.png"
import buffImage from "../public/image/buff.png"
import crateImage from "../public/image/crate.png"
import discardedPackImage from "../public/image/discarded-pack.png"
import dogTreatsImage from "../public/image/dog-treats.png"
import eldritchAlterImage from "../public/image/eldritch-alter.png"
import firewoodImage from "../public/image/firewood.png"
import foodImage from "../public/image/food.png"
import goldImage from "../public/image/gold.png"
import journalEntry from "../public/image/journal-entry.png"
import portraitImage from "../public/image/portrait.png"
import heirloomChestImage from "../public/image/heirloom-chest.png"
import holyWaterImage from "../public/image/holy-water.png"
import laudanumImage from "../public/image/laudanum.png"
import medicinalHerbsImage from "../public/image/medicinal-herbs.png"
import nothingImage from "../public/image/nothing.png"
import negativeQuirkAddImage from "../public/image/negative-quirk-add.png"
import negativeQuirkRemovalImage from "../public/image/negative-quirk-removal.png"
import positiveQuirkAddImage from "../public/image/positive-quirk-add.png"
import sackImage from "../public/image/sack.png"
import shamblersAltarImage from "../public/image/shamblers-altar.png"
import summonImage from "../public/image/summon.png"
import sconceImage from "../public/image/sconce.png"
import scoutingImage from "../public/image/scouting.png"
import shovelImage from "../public/image/shovel.png"
import skeletonKeyImage from "../public/image/skeleton-key.png"
import stackOfBooksImage from "../public/image/stack-of-books.png"
import stressImage from "../public/image/stress.png"
import torchImage from "../public/image/torch.png"
import torchUpImage from "../public/image/torch-up.png"
import unlockedStrongboxImage from "../public/image/unlocked-strongbox.png"

import {
  DungeonKeyType,
  DungeonLengthKeyType,
  DungeonLengthType,
  DungeonType,
  ICurio,
  IDungeonProvision,
  ImageKeyType,
  IProvision,
  ProvisionKeyType,
} from "./types"

const IMAGE: Record<ImageKeyType, string> = {
  ABANDON_HOPE: abandonHopeImage.src,
  ALCHEMY_TABLE: alchemyTableImage.src,
  ALTAR_OF_LIGHT: altarOfLightImage.src,
  ANTIVENOM: antivenomImage.src,
  BANDAGE: bandageImage.src,
  BLEED: bleedImage.src,
  BLIGHT: blightImage.src,
  BOOKSHELF: bookshelfImage.src,
  BUFF: buffImage.src,
  CRATE: crateImage.src,
  DISCARDED_PACK: discardedPackImage.src,
  DOG_TREATS: dogTreatsImage.src,
  ELDRITCH_ALTER: eldritchAlterImage.src,
  FIREWOOD: firewoodImage.src,
  FOOD: foodImage.src,
  GOLD: goldImage.src,
  HEIRLOOM: portraitImage.src,
  HEIRLOOM_CHEST: heirloomChestImage.src,
  HOLY_WATER: holyWaterImage.src,
  JOURNAL_ENTRY: journalEntry.src,
  LAUDANUM: laudanumImage.src,
  MEDICINAL_HERBS: medicinalHerbsImage.src,
  NEGATIVE_QUIRK_ADD: negativeQuirkAddImage.src,
  NEGATIVE_QUIRK_REMOVAL: negativeQuirkRemovalImage.src,
  NOTHING: nothingImage.src,
  POSITIVE_QUIRK_ADD: positiveQuirkAddImage.src,
  SACK: sackImage.src,
  SCONCE: sconceImage.src,
  SCOUTING: scoutingImage.src,
  SHAMBLERS_ALTAR: shamblersAltarImage.src,
  SHOVEL: shovelImage.src,
  SKELETON_KEY: skeletonKeyImage.src,
  STACK_OF_BOOKS: stackOfBooksImage.src,
  STRESS: stressImage.src,
  SUMMON: summonImage.src,
  TORCH: torchImage.src,
  TORCH_UP: torchUpImage.src,
  UNLOCKED_STRONGBOX: unlockedStrongboxImage.src,
}

const DUNGEON: Record<DungeonKeyType, DungeonType> = {
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
    dungeonLength: DUNGEON_LENGTH.SHORT,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.MEDIUM,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.LONG,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.SHORT,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.MEDIUM,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.LONG,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.SHORT,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.MEDIUM,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.LONG,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.SHORT,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.MEDIUM,
    provisionSuggestions: [
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
    dungeonLength: DUNGEON_LENGTH.LONG,
    provisionSuggestions: [
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
const CURIOS: ICurio[] = [
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
        outcomeImage: IMAGE.NEGATIVE_QUIRK_REMOVAL,
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
        outcomeImage: IMAGE.NEGATIVE_QUIRK_REMOVAL,
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
  {
    dungeon: DUNGEON.ANY,
    name: "Shambler's Altar",
    subtext: "None.",
    description:
      'It says: "The sacrifice of fire is the gate to ruin! Place a torch if you crave the void!"',
    location: "This curio can only appear along corridors.",
    image: IMAGE.SHAMBLERS_ALTAR,
    cleansing: [
      {
        item: "Torch",
        itemImage: IMAGE.TORCH,
        outcome: "Summon Shambler",
        outcomeDescription: "A terrifying figure emerges from the darkness!",
        outcomeImage: IMAGE.SUMMON,
      },
    ],
    withoutCleansing: [
      {
        outcome: "Nothing",
        outcomeDescription: "Touching the altar has no effect.",
        outcomeImage: IMAGE.NOTHING,
        probability: 1,
      },
    ],
  },

  {
    dungeon: DUNGEON.ANY,
    name: "Stack of Books",
    subtext: "Knowledge",
    description: "A stack of literary treasures in an unlikely location.",
    location: "This curio can only appear along corridors.",
    image: IMAGE.STACK_OF_BOOKS,
    cleansing: [
      {
        item: "Torch",
        itemImage: IMAGE.TORCH,
        outcome: "Stress +100",
        outcomeDescription:
          "The hero destroyed knowledge, and now must bear the guilt of it!",
        outcomeImage: IMAGE.STRESS,
      },
    ],
    withoutCleansing: [
      {
        outcome: "Stress +25",
        outcomeDescription: "The hero reads a most unsettling passage.",
        outcomeImage: IMAGE.STRESS,
        probability: 0.222,
      },
      {
        outcome: "Random Positive Quirk (66.67%)",
        outcomeDescription:
          "Reading a few pages has a lasting effect on the hero...",
        outcomeImage: IMAGE.POSITIVE_QUIRK_ADD,
        probability: 0.222,
      },
      {
        outcome: "Random Negative Quirk (33.33%)",
        outcomeDescription:
          "Reading a few pages has a lasting effect on the hero...",
        outcomeImage: IMAGE.NEGATIVE_QUIRK_ADD,
        probability: 0.111,
      },
      {
        outcome: "Decrease Light Meter by 25",
        outcomeDescription: "The hero reads a most unsettling passage.",
        outcomeImage: IMAGE.ABANDON_HOPE,
        probability: 0.111,
      },
      {
        outcome: "Journal Entry",
        outcomeDescription: "",
        outcomeImage: IMAGE.JOURNAL_ENTRY,
        probability: 0.167,
      },
      {
        outcome: "Nothing",
        outcomeDescription: "The volumes are desiccated and unremarkable.",
        outcomeImage: IMAGE.NOTHING,
        probability: 0.167,
      },
    ],
  },
  {
    dungeon: DUNGEON.ANY,
    name: "Unlocked Strongbox",
    subtext: "Treasure",
    description:
      "A long-forgotten strongbox sits on the cold stone floor, its contents unknown.",
    location: "This curio can only appear inside rooms.",
    image: IMAGE.UNLOCKED_STRONGBOX,
    cleansing: [],
    withoutCleansing: [
      {
        outcome: "Any Loot x2",
        outcomeDescription: "The contents are yours!",
        outcomeImage: IMAGE.GOLD,
        probability: 0.75,
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
    dungeon: DUNGEON.RUINS,
    name: "Alchemy Table",
    subtext: "Knowledge",
    description: "A partially intact set of experimental equipment.",
    location: "This curio can only appear along corridors.",
    image: IMAGE.ALCHEMY_TABLE,
    cleansing: [
      {
        item: "Torch",
        itemImage: IMAGE.TORCH,
        outcome: "Increase Light Meter to 100",
        outcomeDescription:
          "The torch oil helps create a powerful blazing mixture!",
        outcomeImage: IMAGE.TORCH_UP,
      },
      {
        item: "Medicinal Herbs",
        itemImage: IMAGE.MEDICINAL_HERBS,
        outcome: "Gold/Gems x2",
        outcomeDescription:
          "The herbs disinfect the station, allowing for successful research.",
        outcomeImage: IMAGE.GOLD,
      },
    ],
    withoutCleansing: [
      {
        outcome: "BLIGHT",
        outcomeDescription: "An accident occurs during the experiment.",
        outcomeImage: IMAGE.BLIGHT,
        probability: 0.5,
      },
      {
        outcome: "Gold/Gems x1",
        outcomeDescription: "New metals are synthesized.",
        outcomeImage: IMAGE.GOLD,
        probability: 0.25,
      },
      {
        outcome: "Nothing",
        outcomeDescription: "The experiments do not yield any findings.",
        outcomeImage: IMAGE.NOTHING,
        probability: 0.25,
      },
    ],
  },
  {
    dungeon: DUNGEON.RUINS,
    name: "Altar of Light",
    subtext: "Worship",
    description:
      "A small holy altar seems out of place against the backdrop of corruption.",
    location: "This curio can only appear along corridors.",
    image: IMAGE.ALTAR_OF_LIGHT,
    cleansing: [
      {
        item: "Holy Water",
        itemImage: IMAGE.HOLY_WATER,
        outcome: "Buff DMG +30% Until Camp",
        outcomeDescription: "You have curried favor from the gods!",
        outcomeImage: IMAGE.BUFF,
      },
    ],
    withoutCleansing: [
      {
        outcome: "Buff DMG +20% Until Camp",
        outcomeDescription: "You have curried favor from the gods!",
        outcomeImage: IMAGE.BUFF,
        probability: 1,
      },
    ],
  },
  {
    dungeon: DUNGEON.RUINS,
    name: "Bookshelf",
    subtext: "Knowledge",
    description: "A bookshelf full of old, leather-bound books.",
    location: "This curio can only along corridors.",
    image: IMAGE.BOOKSHELF,
    cleansing: [],
    withoutCleansing: [
      {
        outcome: "Scouting",
        outcomeDescription: "A map is found tucked between the volumes.",
        outcomeImage: IMAGE.SCOUTING,
        probability: 0.2,
      },
      {
        outcome: "Stress +15",
        outcomeDescription: "The hero reads a most unsettling passage.",
        outcomeImage: IMAGE.STRESS,
        probability: 0.2,
      },
      {
        outcome: "Positive Quirk",
        outcomeDescription: "The knowledge forever changes the hero.",
        outcomeImage: IMAGE.POSITIVE_QUIRK_ADD,
        probability: 0.133,
      },
      {
        outcome: "Negative Quirk",
        outcomeDescription: "The knowledge forever changes the hero.",
        outcomeImage: IMAGE.NEGATIVE_QUIRK_ADD,
        probability: 0.067,
      },
      {
        outcome: "Journal Entry",
        outcomeDescription: "",
        outcomeImage: IMAGE.JOURNAL_ENTRY,
        probability: 0.2,
      },
      {
        outcome: "Nothing",
        outcomeDescription: "The volumes are dull and uninteresting.",
        outcomeImage: IMAGE.NOTHING,
        probability: 0.2,
      },
    ],
  },
]

interface IConfig {
  curios: ICurio[]
  dungeon: Record<DungeonKeyType, DungeonType>
  dungeonLength: Record<DungeonLengthKeyType, DungeonLengthType>
  dungeonProvisions: IDungeonProvision[]
  provision: Record<ProvisionKeyType, IProvision>
}

export const CONFIG: IConfig = {
  curios: CURIOS,
  dungeon: DUNGEON,
  dungeonLength: DUNGEON_LENGTH,
  dungeonProvisions: DUNGEON_PROVISIONS,
  provision: PROVISION,
}
