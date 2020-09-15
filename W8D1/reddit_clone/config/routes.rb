Rails.application.routes.draw do
 
 resource :session, only:[:new,:create,:destroy]
 resources :users do 
   resources :subs, only: [:create]
 end

 resources :subs do 
    resources :posts, except:[:index]
 end

end
