class PlaylistGamesController < ApplicationController

    def index
        render json: PlaylistGames.all
    end

    private
    def set_playlistgames
        @playlistgames = PlaylistGames.find(params[:id])
    end
  
  
    def playlistgames_params
        params.permit(:playlist_id, :game_id)
    end
end
