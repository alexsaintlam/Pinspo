class Api::PinstoboardsController < ApplicationController
    def index
        @pinstoboards = Pinstoboard.all
        render :index
    end

    def create 
        @pinstoboard = Pinstoboard.new(pinstoboard_params)

        if @pinstoboard.save
            render :show
        else
            render json: @pinstoboard.errors.full_messages, status: 422
        end
    end

    def destroy
        @pinstoboard = Pinstoboard.find_by(id: params[:id])
        if @pinstoboard && @pinstoboard.destroy
            render :index
        else
            render json: @pinstoboard.errors.full_messages, status: 422
        end
    end

    private

    def pinstoboard_params
        params.require(:pinstoboard).permit(:pin_id, :board_id, :unorganized_id)
    end
end