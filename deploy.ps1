# Azure Deployment Script
param(
    [Parameter(Mandatory=$true)]
    [string]$resourceGroup,
    [Parameter(Mandatory=$true)]
    [string]$appServiceName
)

# Build the project 
Write-Output "Building the React TypeScript application..."
npm install
npm run build

# Verify dist directory exists
if (!(Test-Path -Path ".\dist")) {
    Write-Error "Build failed! The dist directory does not exist."
    exit 1
}

# Install express in the dist folder for server.js
Write-Output "Installing Express in the dist folder..."
Push-Location .\dist
npm init -y
npm install express --save
Pop-Location

# Create a temporary deployment package
Write-Output "Creating deployment package..."
$deploymentPackage = ".\dist.zip"
if (Test-Path -Path $deploymentPackage) {
    Remove-Item $deploymentPackage -Force
}

# Create a zip file from the dist folder
Compress-Archive -Path ".\dist\*", ".\web.config", ".\server.js", ".\package.json", ".\.azure-deploy-config.json" -DestinationPath $deploymentPackage

# Configure Azure App Service to use Node.js 18.x
Write-Output "Configuring Node.js version for App Service..."
az webapp config appsettings set --resource-group $resourceGroup --name $appServiceName --settings WEBSITE_NODE_DEFAULT_VERSION="~18"

# Deploy to Azure App Service
Write-Output "Deploying to Azure App Service: $appServiceName in resource group: $resourceGroup..."
az webapp deployment source config-zip --resource-group $resourceGroup --name $appServiceName --src $deploymentPackage

Write-Output "Deployment completed!"
