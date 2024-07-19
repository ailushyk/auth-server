# Keycloak server

This is a simple Keycloak server that can be used for testing purposes.

## Start in development mode

`command: start-dev`

## Start in production mode

`command: start --optimized`

import realm from file during [startup](https://www.keycloak.org/server/importExport#_importing_a_realm_during_startup)

`command: start --optimized --import-realm`

## Theme

### Dev mode

Testing in [Docker container](https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container)

```bash
pnpm run dev
```

### Build production theme

```bash
pnpm run build-keycloak-theme
```