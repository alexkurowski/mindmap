class Document < ApplicationRecord
  include Uid

  belongs_to :board

  def to_js
    {
      uid: uid,
      title: title,
      body: body,
    }
  end
end
