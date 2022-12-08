# Minimal reproduction project

This is a bare Astro project. When I add React to it and create a small component with the `react-syntax-highlighter` library, it crashes on `astro build`.

Weird is, that in dev mode (`yarn dev`) it works fine.

## Steps to reproduce

1. run `yarn` to install packages
2. run `yarn build` - ends with error

### Note:

When opting for SSR instead of static build (vercel adapter), the build command succeeds. Check out the [SSR branch](https://github.com/VojtaStruhar/astro-react-syntax-highlighter-buildcrash/tree/ssr).

## My build error

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

