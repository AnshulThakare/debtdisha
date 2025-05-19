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

# Clear caches and restart the app

Write-Host "Cleaning up caches and rebuilding Debt Disha..." -ForegroundColor Green

# Stop any running processes
Write-Host "Stopping any running processes..." -ForegroundColor Cyan
$processesToKill = @("node", "expo")
foreach ($process in $processesToKill) {
    $runningProcesses = Get-Process -Name $process -ErrorAction SilentlyContinue
    if ($runningProcesses) {
        Stop-Process -Name $process -Force
        Write-Host "Stopped $process processes." -ForegroundColor Yellow
    }
}

# Clear Metro bundler cache
Write-Host "Clearing Metro bundler cache..." -ForegroundColor Cyan
if (Test-Path -Path "./.expo") {
    Remove-Item -Path "./.expo" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Expo cache cleared." -ForegroundColor Yellow
}

# Clear node_modules cache if needed
Write-Host "Do you want to clear node_modules and reinstall? (y/n)" -ForegroundColor Magenta
$clearNodeModules = Read-Host
if ($clearNodeModules -eq "y") {
    Write-Host "Clearing node_modules..." -ForegroundColor Cyan
    if (Test-Path -Path "./node_modules") {
        Remove-Item -Path "./node_modules" -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "node_modules cleared, reinstalling packages..." -ForegroundColor Yellow
        npm install
    }
}

# Clear build directories
Write-Host "Clearing build directories..." -ForegroundColor Cyan
if (Test-Path -Path "./android/build") {
    Remove-Item -Path "./android/build" -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path -Path "./android/app/build") {
    Remove-Item -Path "./android/app/build" -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path -Path "./dist") {
    Remove-Item -Path "./dist" -Recurse -Force -ErrorAction SilentlyContinue
}

# Rebuild and start the app
Write-Host "Starting the app with a clean state..." -ForegroundColor Green
npm start -- --clear

Write-Host "Done! The app should now be running with a clean state." -ForegroundColor Green
