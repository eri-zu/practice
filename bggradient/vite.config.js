import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { findAllFiles } from "./plugins/CustomBuildFunctions";
import sassGlobImports from "vite-plugin-sass-glob-import";
import { ViteMinifyPlugin } from "vite-plugin-minify";
const root = "./src/pages";
import glsl from "vite-plugin-glsl";

export default defineConfig(async () => {
  const rollupOptionsInput = await findAllFiles(root, ".html");
  return {
    root,
    base: "/",
    publicDir: "../../public",
    css: {
      devSourcemap: true,
    },
    build: {
      outDir: "../../dist",
      emptyOutDir: true,

      rollupOptions: {
        input: rollupOptionsInput,
        output: {
          entryFileNames: `common/scripts/common.js`,
          chunkFileNames: `common/scripts/[name].js`,
          assetFileNames: (assetInfo) => {
            if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
              return "assets/[name].[ext]";
            }
            if (/\.css$/.test(assetInfo.name)) {
              return "common/css/style.[ext]";
            }
            return "assets/[name].[ext]";
          },
        },
      },
    },

    plugins: [
      ViteEjsPlugin((config) => {
        return {
          root: resolve(__dirname, "src"),
          compPath: "../components",
        };
      }),
      sassGlobImports(),
      glsl(),
      ViteMinifyPlugin({
        ignoreCustomComments: [
          new RegExp("<include-footer>"),
          new RegExp("<include-newslist>"),
          new RegExp("Google Tag Manager"),
        ],
      }),
    ],
    server: {
      port: 3000,
      host: true,
    },
    resolve: {
      alias: [
        {
          find: "@BALANCeLibs/",
          replacement: `${__dirname}/src/js/BALANCeLibs/`,
        },
        {
          find: "@/",
          replacement: `${__dirname}/src/js/src/`,
        },
      ],
    },
  };
});
