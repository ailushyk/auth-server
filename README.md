# Keycloak server

This is a simple Keycloak server that can be used for testing purposes.

Keycloak version: 25.0.2

## Auth server

Start in development mode

```bash
docker compose --profile dev up -d --build
```

Start in production mode

```bash
docker compose --profile prod up -d --build
```

### Setting Up the Realm Secret

After starting the server for the first time, you'll need to configure a secret for the realm in the Admin Console. Follow these steps to set up the secret and use the realm in your application:

1. Open the Keycloak Admin Console in your browser: http://localhost:8080.
2. Log in using the admin credentials. 
3. In the left-hand menu, navigate to the Clients section. 
4. Select the web client (or your specific client). 
5. Go to the Credentials tab. 
6. In the Client Secret field, enter and save the secret. 
7. Copy the secret from the Client Secret field. 
8. Use this secret in your application's .env file by setting it as the AUTH_KEYCLOAK_SECRET variable:

```
AUTH_KEYCLOAK_SECRET=your_copied_secret_here
```

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