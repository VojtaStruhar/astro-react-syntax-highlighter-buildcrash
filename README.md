# Minimal reproduction project

This is a bare Astro project. When I add React to it and create a small component with the `react-syntax-highlighter` library, it crashes on `astro build`.

Weird is, that in dev mode (`yarn dev`) it works fine.

## Steps to reproduce

1. run `yarn` to install packages
2. run `yarn build` - ends with error

## My error

```
(...)
generating static routes 
▶ src/pages/index.astro
 error   Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
  File:
    /Users/vojtechstruhar/Development/React/react-syntax-astro-test/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:72:155
  Code:
[[It looks like a bunch of gibberish from here]]
```

