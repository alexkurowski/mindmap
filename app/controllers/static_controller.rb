class StaticController < ApplicationController
  def app
    return redirect_to root_path unless user_signed_in?
    render :app, layout: 'app'
  end
end
