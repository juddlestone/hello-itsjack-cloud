variable "environment" {
  description = "The environment to deploy to (e.g. dev, test, prod)"
  type        = string
}

variable "domain_name" {
  description = "The custom domain name to use for the static web app"
  type        = string
}
