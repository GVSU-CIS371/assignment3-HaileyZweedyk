<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
    <ul>
      <li>
        <label for="name">Name:</label>
        <input v-model="beverageName" id="name" placeholder="Enter beverage name" />
        <button @click="makeBeverage">Make Beverage</button>
      </li>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="(base, index) in bases" :key="index">
          <label>
            <input type="radio" :id="`r${index}`" name="base" :value="base" v-model="currentBase" />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="(creamer, index) in creamers" :key="index">
          <label>
            <input type="radio" :id="`r${index}`" name="creamer" :value="creamer" v-model="currentCreamer" />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="(syrup, index) in syrups" :key="index">
          <label>
            <input type="radio" :id="`r${index}`" name="syrup" :value="syrup" v-model="currentSyrup" />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from './stores/beverageStore'
import { temps, currentTemp, bases, creamers, syrups, currentBase, currentCreamer, currentSyrup } from "./stores/beverage";

const store = useBeverageStore()
const beverageName = ref('')

const makeBeverage = () => {
  store.makeBeverage(beverageName.value)
  beverageName.value = ''
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>

