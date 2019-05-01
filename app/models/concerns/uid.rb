module Uid
  extend ActiveSupport::Concern

  included do
    before_create -> {
      self.uid ||= Devise.friendly_token
    }
  end
end
