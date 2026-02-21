#!/bin/bash

# Start a local HTTP server for previewing the site
PORT=3000

echo "Starting local server on port $PORT..."
echo "Open http://localhost:$PORT in your browser"
echo "Press Ctrl+C to stop the server"
echo ""

python3 -m http.server $PORT