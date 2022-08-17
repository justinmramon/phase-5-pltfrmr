class GamesController < ApplicationController
  before_action :set_game, only: [:show]
 
  # GET /games
  def index
    render json: Game.all
  end

  # GET /games/1
  def show
    render json: @game
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_game
    @game = Game.find(params[:id])
  end



  # Only allow a list of trusted parameters through.
  def game_params
    params.require(:game).permit(:title, :genre, :metacritic, :platform, :playtime, :released, :esrb_rating, :image)
  end
end
