# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

https://vitejs.dev/guide/

## UI library

https://ui.shadcn.com/docs

# setup the vite project

https://ui.shadcn.com/docs/installation/vite

# zode library

https://dev.to/franciscomendes10866/schema-validation-with-zod-and-expressjs-111p
https://zod.dev/?id=error-handling

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```
