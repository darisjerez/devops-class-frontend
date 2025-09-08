module.exports = {
  env: { browser: true, es2022: true, jest: true },
  extends: ["eslint:recommended","plugin:react/recommended","plugin:react-hooks/recommended","prettier"],
  plugins: ["react","react-hooks"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "detect" } },
  rules: { "react/prop-types": "off" }
}