locals {
  additional_tags = {}

  all_tags = merge(
    local.additional_tags,
    data.azurerm_resource_group.existing.tags
  )
}
