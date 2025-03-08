#!/bin/sh

# Create the config file with the environment variables
cat <<EOF > /usr/share/nginx/html/config/env-config.js
window.ENV = {
  VITE_CLERK_PUBLISHABLE_KEY: "${VITE_CLERK_PUBLISHABLE_KEY}"
};
EOF 