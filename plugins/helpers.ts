import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      welcome: (param: string): string => `Welcome, ${param}`
    }
  }
})