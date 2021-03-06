class BandsController < ApplicationController
#    :index, :create, :new, :edit, :show, :update, :destroy
    before_action :require_logged_in

    def index
        @bands = Band.all
        render :index
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            render :show
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end

    def new
        render :new
    end

    def show
        @band  = Band.find(params[:id])
        render :show
    end

    def update
        @band = Band.find(params[:id])
        if @band.update(band_params)
            redirect_to band_url(@band)
        else
            flash.now[:errors] = @band.errors.full_messages
            render :update
        end

    end

    def destroy
        @band = Band.find(params[:id])
        @band.destroy
        redirect_to bands_url
    end

    private

    def band_params
        params.require(:band).permit(:name)
    end
end
