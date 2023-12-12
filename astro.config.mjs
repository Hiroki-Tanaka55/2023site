import { defineConfig } from 'astro/config';
const subfolder = '/test/'

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  //base: subfolder,
  //outDir: `./dist${subfolder}`,
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `@import "src/styles/mixin.scss";`
            }
          }
        }
      },
});
