class SubsController < ApplicationController
    before_action :require_moderator_power, only: [:update, :edit]
    before_action :require_logged_in, only: [:create, :new]
    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = params[:user_id]

        if @sub.save
            flash[:message] = ["congrats you controll reddit.#{@sub.title}"]
            redirect_to sub_url(@sub)
        else
            flash[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def stuff

    end

    def index   
        @subs = Sub.all
        render :index
    end
    
    def update
        
        @sub = Sub.find(params[:id])
        @sub.update(sub_params)
        
        redirect_to sub_url(@sub.id)
        
    end
    

    def edit
        @sub = Sub.find(params[:id])
        render :edit
    end

    private
    
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
    
end
