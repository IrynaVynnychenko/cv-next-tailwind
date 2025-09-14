#!/bin/bash

echo "Building static export..."
npm run build

echo "Build completed! Static files are in the 'prod' folder."
echo "You can serve them locally with:"
echo "npx serve prod"
echo ""
echo "Or push to GitHub to deploy automatically to GitHub Pages:"
echo "git add ."
echo "git commit -m 'Deploy to GitHub Pages'"
echo "git push origin main"
