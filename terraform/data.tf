data "azurerm_resource_group" "existing" {
  name = module.naming.resource_group.name
}
