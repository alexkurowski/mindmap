class Project < ApplicationRecord
  include Uid

  belongs_to :user
  has_many :boards, dependent: :destroy

  after_create :create_board

  def to_js
    {
      uid: uid,
      title: title,
      description: description,
      boards: boards.map(&:to_js)
    }
  end

  private

  def create_board
    Board.create project: self
  end
end
