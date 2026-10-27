#!/usr/bin/env python3
"""Static file server for local preview.

Deliberately avoids `python -m http.server`, which calls os.getcwd() while
building its argparse defaults even when -d/--directory is passed explicitly
- that call fails under this tool's sandbox. Passing `directory=` straight to
SimpleHTTPRequestHandler skips that code path entirely.
"""

import functools
import http.server
import os
import socketserver

PORT = 5960
# Serve the folder this script lives in, so it works wherever the repo is cloned.
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

handler = functools.partial(
    http.server.SimpleHTTPRequestHandler, directory=DIRECTORY
)

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
    httpd.serve_forever()
