class Api::BoardsController < ApplicationController
    def index
        render json: Board.all.where(user_id: current_user.id)
    end

    def show
        render json: Todo.find(params[:id])
    end

    def create
        
    end

    def update
    end

    def destroy
    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :public, :user_id)
    end
end