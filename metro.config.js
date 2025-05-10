// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

/** @type {import('@react-native/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

// Add platform-specific file extensions
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'jsx', 'js', 'ts', 'tsx', 'json', 'cjs',
  // Add platform-specific extensions
  'android.js', 'android.jsx', 'android.ts', 'android.tsx',
  'ios.js', 'ios.jsx', 'ios.ts', 'ios.tsx',
  'web.js', 'web.jsx', 'web.ts', 'web.tsx'
];

defaultConfig.resolver.assetExts = [
  ...defaultConfig.resolver.assetExts,
  'ttf', 'woff', 'woff2', 'eot', 'svg', 'png', 'jpg', 'jpeg', 'gif'
];

// Ensure AsyncStorage is properly linked
defaultConfig.resolver.extraNodeModules = {
  '@react-native-async-storage/async-storage': path.resolve(__dirname, 'node_modules/@react-native-async-storage/async-storage'),
};

// Add platform-specific module resolver for web
defaultConfig.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = defaultConfig; 