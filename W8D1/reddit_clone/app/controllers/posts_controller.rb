class PostsController < ApplicationController
    before_action :require_logged_in, except: [:index, :show]
    before_action :require_author_power, only: [:update]
    def new
        @post = Post.new

        render :new
    end

    def create 
        
        @post = Post.new(post_params)
        @post.sub_id = params[:sub_id]
        @post.author_id = current_user.id

        if @post.save
            # debugger
            redirect_to sub_url(@post.sub_id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            redirect_to sub_url(@post.sub_id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    private

    def post_params
        params.require(:post).permit(:title, :url, :content)
    end
end
