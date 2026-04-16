# Reproduction

## Steps

1. `npx tiged kong-dev/reproductions/nuxt-modules-strapi-v5-throws-undefined`
2. `cd nuxt-modules-strapi-v5-throws-undefined`
3. `pnpm install`
4. `pnpm dev`
5. open browser

## Expected

The app should build and run without errors.

## Actual

The app crashes with the following error:

```
Cannot read properties of undefined (reading 'statusText')
```
