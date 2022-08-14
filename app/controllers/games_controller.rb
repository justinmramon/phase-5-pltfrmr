class GamesController < ApplicationController
 
  # GET /games
  def index
    render json: Game.all
  end

  # GET /games/1
  def show
    render json: @game
  end
end
