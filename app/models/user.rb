class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable

  has_many :projects, dependent: :destroy
  has_many :boards, through: :projects

  after_create :create_project

  def to_js
    {
      username: email
    }
  end

  private

    def create_project
      Project.create user: self
    end
end
