# Created the custom domain outside of terraform due to race condition with cname validation
import {
  to = azurerm_static_web_app_custom_domain.main
  id = "/subscriptions/${data.azurerm_client_config.current.subscription_id}/resourceGroups/${data.azurerm_resource_group.existing.name}/providers/Microsoft.Web/staticSites/${azurerm_static_web_app.main.name}/domains/${var.domain_name}"
}