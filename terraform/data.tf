data "azurerm_resource_group" "existing" {
  name = module.naming.resource_group.name
}

data "azurerm_client_config" "current" {}