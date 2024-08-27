import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss"; // Import tailwindcss
import autoprefixer from "autoprefixer";

const packageJson = require("./package.json");
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonJs(),
      terser(),
      postcss({
        plugins: [tailwindcss(), autoprefixer()],
        extract: "styles.css",
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      file: packageJson.types,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [dts.default()],
    external: ["tailwindcss"],
  },
];
