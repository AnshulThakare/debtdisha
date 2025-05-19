import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Debt Disha',
  slug: 'deptdisha',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/app-logo.png',
  scheme: 'deptdisha',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#121212'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.deptdisha.app'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/app-logo.png',
      backgroundColor: '#121212'
    },
    package: 'com.deptdisha.app'
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/app-logo.png'
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: 'a3a29a31-c51f-4b03-a955-7ef0380e397f'
    }
  },
  plugins: [
    'expo-router',
    'expo-font'
  ],
  experiments: {
    typedRoutes: true
  },
  runtimeVersion: {
    policy: 'appVersion'
  },
  updates: {
    url: 'https://u.expo.dev/a3a29a31-c51f-4b03-a955-7ef0380e397f'
  }
}); 