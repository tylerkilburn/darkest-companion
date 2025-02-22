import { describe } from "node:test"

interface IConfig {
  curios: {
    name: string
    subtext: string
    description: string
    location: string
    imageName: string
    cleansing: {
      item: string
      useDescription: string
      outcome: string
    }[]
    withoutCleansing: {
      probability: number
      description: string
      outcome: string
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
      imageName: "crate.png",
      cleansing: [],
      withoutCleansing: [
        {
          probability: 0.75,
          description: "The crate contains stashed heirlooms!",
          outcome: "Heirloom",
        },
        {
          probability: 0.25,
          outcome: "Nothing",
          description: "The crate is empty.",
        },
      ],
    },
  ],
}
