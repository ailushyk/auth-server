# Build theme
FROM node:22-alpine as theme_builder

RUN apk update && apk add maven

COPY ./package.json ./pnpm-lock.yaml /opt/app/

WORKDIR /opt/app

RUN npm install -g pnpm
RUN pnpm i

COPY ./ /opt/app/

RUN pnpm run build-keycloak-theme

# Build Keycloak
FROM quay.io/keycloak/keycloak:25.0.2 as base

FROM base as builder

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=postgres

WORKDIR /opt/keycloak
# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN #keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
COPY --from=theme_builder /opt/app/dist_keycloak/*-theme.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build

# Run Keycloak with the theme and configuration files
FROM base
COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY config /opt/keycloak/data/import

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]