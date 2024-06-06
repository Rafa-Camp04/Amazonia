# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true

# 3a5f919b022defb0ba3de3cffb48376 old master key