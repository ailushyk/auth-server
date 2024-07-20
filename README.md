# Keycloak server

This is a simple Keycloak server that can be used for testing purposes.

## Auth server

Start in development mode

```bash
docker compose --profile dev up -d
```

Start in production mode

```bash
docker compose --profile prod up -d
```

After starting the server first time, you should set secret for the realm in admin console. Then you can use the realm in your application.

### Good to know
- Docker [profiles](https://docs.docker.com/compose/profiles/)
- import realm from file during [startup](https://www.keycloak.org/server/importExport#_importing_a_realm_during_startup)

## Theme

Dev mode in [Docker container](https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container)

```bash
pnpm run dev
```

Build production theme manually

```bash
pnpm run build-keycloak-theme
```