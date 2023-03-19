import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.tsx",
  output: {
    dir: "dist",
  },
  plugins: [typescript()],
};
