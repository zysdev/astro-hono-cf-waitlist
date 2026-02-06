import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // 1. Use the recommended TS configs for everything
  ...tseslint.configs.recommended,

  // 2. Use the Astro recommended config (handles .astro files)
  ...eslintPluginAstro.configs.recommended,

  {
    // 3. ONLY apply the processor to .astro files
    files: ["*.astro"],
    processor: "astro/client-side-ts",
    rules: {
      // Astro-specific overrides
    },
  },

  {
    // 4. Standard TS/TSX logic
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true, // Highly recommended for type-aware linting
      },
    },
    rules: {
      // Your custom TS/React rules
    },
  },
];
