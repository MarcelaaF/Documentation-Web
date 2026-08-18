#!/usr/bin/env python3
"""Static file server for local preview.

Deliberately avoids `python -m http.server`, which calls os.getcwd() while
building its argparse defaults even when -d/--directory is passed explicitly
- that call fails under this tool's sandbox. Passing `directory=` straight to
SimpleHTTPRequestHandler skips that code path entirely.
"""

import functools
import http.server
import socketserver

PORT = 5960
# Hardcoded rather than derived from __file__/os.getcwd() - both can touch
# the cwd-resolution code path this script exists to avoid.
DIRECTORY = "/Users/marcellaaf/Documents/Claude work/Documentation-Web"

handler = functools.partial(
    http.server.SimpleHTTPRequestHandler, directory=DIRECTORY
)

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
    httpd.serve_forever()
