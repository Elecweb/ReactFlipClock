import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    globals: {
      jquery: "$"
    }
  },
  external: ["react", "jquery"],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
