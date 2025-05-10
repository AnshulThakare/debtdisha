import { ExpoConfig, ConfigContext } from 'expo/config';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Dept Disha',
  slug: 'deptdisha',
  version: '1.0.0',
  orientation: 'portrait',
  icon: 'assets/images/app-logo.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: 'assets/images/cover.jpg',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
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
      foregroundImage: 'assets/images/app-logo.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.deptdisha.app'
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: 'assets/images/app-logo.png'
  },
  extra: {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    eas: {
      projectId: 'a3a29a31-c51f-4b03-a955-7ef0380e397f'
    }
  },
  plugins: [
    'expo-router',
    'expo-splash-screen'
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