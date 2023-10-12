import { defineConfig } from "rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";


export default defineConfig({
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        }),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true })
    ],
    external: ['react', 'react-dom', 'prop-types'],
});
