class Api::BoardsController < ApplicationController
    def index
        @boards = Board.all
        render :index
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)

        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render:show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find(params[:id])
        @board.destroy
        render :index
    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :public, :user_id)
    end
end