import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],

    beverages: [] as { name: string; temp: string; base: string; creamer: string; syrup: string }[],
    currentBeverage: {} as { name: string; temp: string; base: string; creamer: string; syrup: string } | null,
  }),

  actions: {
    makeBeverage(name: string) {
      if (!name) return;
      const newBeverage = {
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverages.push(newBeverage);
      this.currentBeverage = newBeverage;
    },
    showBeverage(name: string) {
      const beverage = this.beverages.find((bev) => bev.name === name);
      if (beverage) {
        this.currentBeverage = beverage;
        this.currentBase = beverage.base;
        this.currentCreamer = beverage.creamer;
        this.currentSyrup = beverage.syrup;
        this.currentTemp = beverage.temp;
      }
    },
  },
  persist: true,
});
