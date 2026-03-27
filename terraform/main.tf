
module "naming" {
  source = "Azure/naming/azurerm"
  suffix = ["hello", "itsjack", "cloud", var.environment]
}


resource "azurerm_static_web_app" "main" {
  name                = module.naming.static_web_app.name
  resource_group_name = data.azurerm_resource_group.existing.name
  location            = "westeurope" # Static web app only available in 'westus2,centralus,eastus2,westeurope,eastasia'.
  sku_tier            = "Free"
  sku_size            = "Free"
  tags                = local.tags
}


resource "azurerm_static_web_app_custom_domain" "main" {
  static_web_app_id = azurerm_static_web_app.main.id
  domain_name       = var.domain_name
  validation_type   = "cname-delegation"
}
