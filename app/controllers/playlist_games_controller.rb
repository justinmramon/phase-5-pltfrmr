class PlaylistGamesController < ApplicationController

    def index
        render json: PlaylistGames.all
    end

    def create
        playlist_game = PlaylistGames.create!(playlistgames_params)
        render json: playlist_game, status: :created
    end

    private
    def set_playlistgames
        @playlistgames = PlaylistGames.find(params[:id])
    end
  
  
    def playlistgames_params
        params.permit(:playlist_id, :game_id)
    end
end
