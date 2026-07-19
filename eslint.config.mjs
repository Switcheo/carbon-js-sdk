import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "lib/**",
      "esm/**",
      "src/codec/**",
      "scripts/**",
      "examples/**",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    rules: {
      camelcase: "off",
      "comma-dangle": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
