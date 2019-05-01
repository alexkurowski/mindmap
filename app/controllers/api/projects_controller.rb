class Api::ProjectsController < ApplicationController
  def index
    render json: current_user.projects.map(&:to_js)
  end
end
