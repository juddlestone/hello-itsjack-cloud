terraform {
  required_version = ">= 1.5"

  backend "azurerm" {
    use_oidc         = true
    use_azuread_auth = true
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.66"
    }
  }
}

provider "azurerm" {
  features {}
  storage_use_azuread = true
}
