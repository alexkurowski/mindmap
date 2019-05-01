Rails.application.routes.draw do
  devise_for :users,
    path: '',
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations',
      passwords: 'users/passwords',
    },
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      sign_up: 'signup',
    }

  root 'static#index'
  get 'app' => 'static#app'

  namespace :api, defaults: { format: 'json' } do
    resources :projects
  end
end
