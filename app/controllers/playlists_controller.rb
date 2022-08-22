class PlaylistsController < ApplicationController

    def index
        render json: Playlist.all
    end

    def show
    end

    def create
        playlist = Playlist.create!(playlist_params)
        render json: playlist, status: :created
    end

    def update
    end

    def destroy
    end


    private

    def set_playlist
      @playlistlist = Playlist.find(params[:id])
    end


    def playlist_params
      params.permit(:user_id, :game_id)
    end
    
end
