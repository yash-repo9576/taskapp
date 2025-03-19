#!/bin/bash

# Replace environment variables in nginx configuration
if [ -n "$BACKEND_URL" ]; then
    echo "Setting backend URL to: $BACKEND_URL"
    sed -i "s|http://localhost:5000|$BACKEND_URL|g" /etc/nginx/conf.d/default.conf
fi

# Execute the original Docker CMD
exec "$@"