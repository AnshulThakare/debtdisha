# fix-deptdisha.ps1
Write-Host "🧹 Cleaning project..."

# Navigate to your project folder (if needed)
# cd "C:\Users\ACER\deptdisha"

# Delete node_modules
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✅ node_modules deleted"
} else {
    Write-Host "ℹ️ No node_modules folder found"
}

# Delete lock files
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "✅ package-lock.json deleted"
}
if (Test-Path "yarn.lock") {
    Remove-Item -Force "yarn.lock"
    Write-Host "✅ yarn.lock deleted"
}

# Install correct packages
Write-Host "📦 Installing packages..."
npm install

# Upgrade navigation dependencies
Write-Host "🚀 Installing correct @react-navigation dependencies..."
npm install @react-navigation/native@^7.1.6
npm install @react-navigation/bottom-tabs@^7.3.10
npm install @react-navigation/native-stack@^7.8.10
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# Install expo-router if not installed
Write-Host "📦 Checking expo-router..."
npm install expo-router

# Clean Metro bundler cache
Write-Host "🧹 Resetting Metro bundler cache..."
npx react-native start --reset-cache
