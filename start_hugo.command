#!/bin/bash
cd "$(dirname "$0")"
echo "正在启动 Hugo 服务器..."
hugo server --bind 0.0.0.0 --port 1313
