terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1.0"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  region = "us-west-2"
}

variable "environment_name" {
  description = "The name of the deployment environment for your app, such as `dev` or `prod`"
  type        = string
  default     = "dev"
}

locals {
  app_name = "web-directory"
}

resource "random_pet" "bucket_name" {
  prefix = "${local.app_name}-${var.environment_name}"
}

module "frontend_dist" {
  source = "../../../infra/modules/frontend-serverless-dist"

  bucket_name    = random_pet.bucket_name.id
  dist_directory = "${path.module}/../../../dist/apps/${local.app_name}"
}

output "cloudfront_domain_name" {
  description = "The domain name to access the CloudFront distribution"
  value       = module.frontend_dist.cloudfront_domain_name
}
