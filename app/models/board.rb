class Board < ApplicationRecord
  include Uid

  belongs_to :project
  has_many :documents, dependent: :destroy

  def to_js
    {
      uid: uid,
      title: title,
      description: description,
      documents: documents.map(&:to_js)
    }
  end
end
