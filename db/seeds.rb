require 'rest-client'
require 'pry'

puts "Seeding Games..."
def api_key
    ENV["API_KEY"]
end

def get_games
    api_data = { key: api_key }
    games = RestClient.get("https://api.rawg.io/api/games?key=#{api_data[:key]}")
    games_array = JSON.parse(games)["results"]
    games_array.each do |g|
        Game.create(
            title: g["name"],
            genre: g["genres"][0]["name"],
            metacritic: g["metacritic"],
            platform: g["parent_platforms"][0]["name"],
            playtime: g["playtime"],
            esrb_rating: g["esrb_rating"]["name"],
            image: g["background_image"],
            released: g["released"]
        )
    end
end

get_games()

puts "Seeding Users..."
10.times do
    User.create(email: Faker::Internet.email, username: Faker::Internet.username(specifier: 5..12), password_digest: Faker::Internet.password)
end

puts "Seeding Reviews..."
500.times do
    Review.create(comment: Faker::TvShows::Seinfeld.quote, liked: [true, false].sample, user_id: User.all.ids.sample, game_id: Game.all.ids.sample)
end

# needs to seed games for each user 
puts "Seeding Playlists..."
10.times do 
    Playlist.create(user_id: User.all.ids.sample, title: Faker::Music::Prince.song, description: Faker::Music::Prince.lyric)
end

puts "Seeding Playlist Games..."
30.times do
    PlaylistGame.create(game_id: Game.all.ids.sample, playlist_id: Playlist.all.ids.sample)
end