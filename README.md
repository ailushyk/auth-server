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

### GitHub Identity Provider

To set the secret for the GitHub Identity Provider in Keycloak, follow these steps:

1. Log in to the Keycloak Admin Console:
    - Open your browser and go to `http://localhost:8080` (or the appropriate URL for your Keycloak server).
    - Log in with your admin credentials.

2. Navigate to the Realm:
    - Select the realm where you want to configure the GitHub Identity Provider.

3. Add GitHub Identity Provider:
    - Go to the `Identity Providers` section in the left-hand menu.
    - Select `GitHub`.

4. Configure GitHub Identity Provider:
    - Fill in the required fields:
        - **Client ID**: Use the `GITHUB_CLIENT_ID` from your `.env` file.
        - **Client Secret**: Use the `GITHUB_CLIENT_SECRET` from your `.env` file.
    - Optionally, configure other settings as needed.

5. Save the Configuration:
    - Click the `Save` button to apply the changes.

This will configure the GitHub Identity Provider with the secret in your Keycloak server.

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