#!/bin/bash
echo "📦 依存パッケージをインストール中..."
npm install
echo ""
echo "🚀 開発サーバーを起動します..."
echo "   ブラウザで http://localhost:5173 にアクセスしてください"
echo ""
npm run dev
