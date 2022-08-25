class PlaylistGamesController < ApplicationController
    skip_before_action :authorize

    def index
        render json: PlaylistGame.all
    end

    def show
        render json: @playlist_game
    end

    def create
        playlist_game = PlaylistGame.create!(playlistgames_params)
        render json: playlist_game, status: :created
    end

    private
    def set_playlistgames
        @playlist_game = PlaylistGame.find(params[:id])
    end
  
  
    def playlistgames_params
        params.permit(:playlist_id, :game_id)
    end
end
