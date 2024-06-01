import {defineNuxtModule, addPlugin, createResolver, addTemplate} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  firstName : string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-nuxt3-sample',
    configKey: 'ghanavati',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    firstName:""
  },
  setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.alias['#well-known'] = addTemplate({
      filename: 'well-known.mjs',
      write: true,
      getContents: () => `export default ${JSON.stringify(options, undefined, 2)}`
    }).dst || ''

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all',
    })
  },
})
