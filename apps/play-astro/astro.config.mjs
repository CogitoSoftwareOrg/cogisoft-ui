// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  vite: {
    resolve: {
      alias: {
        "@cogisoft/ui-svelte-daisy": fileURLToPath(
          new URL(
            "../../packages/ui-svelte-daisy/src/lib/index.ts",
            import.meta.url
          )
        ),
      },
    },
    plugins: [tailwindcss()],

    ssr: {
      noExternal: ["lucide-svelte", "@cogisoft/ui-svelte-daisy"],
    },
  },
});
