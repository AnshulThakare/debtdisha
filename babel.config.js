module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
      // Support for path aliases
      ["module-resolver", {
        "root": ["."],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "alias": {
          "@": "./"
        }
      }]
    ],
  };
}; 