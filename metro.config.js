// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add platform-specific file extensions
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'jsx', 'js', 'ts', 'tsx', 'json', 'cjs',
  // Add platform-specific extensions
  'android.js', 'android.jsx', 'android.ts', 'android.tsx',
  'ios.js', 'ios.jsx', 'ios.ts', 'ios.tsx',
  'web.js', 'web.jsx', 'web.ts', 'web.tsx'
];

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'ttf', 'woff', 'woff2', 'eot', 'svg', 'png', 'jpg', 'jpeg', 'gif'
];

module.exports = config; 