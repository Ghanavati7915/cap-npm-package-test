import {defineNuxtPlugin} from '#app'

// @ts-ignore
import wellKnownOptions from '#well-known'

export default defineNuxtPlugin(({ nuxtApp, $config }) => {

  console.log('Plugin injected by my-module!')
  console.log('STEP 2 : ',wellKnownOptions)
})
