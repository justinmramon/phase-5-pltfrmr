class ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]

    def index
        render json: Review.all
    end

    # def show
    #     render json: @review 
    # end

    def showReviews
        game = Game.find(params[:id])
        reviews = game.reviews
        render json: reviews
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        if @review.update(review_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @review.destroy
      end

    private
    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.permit(:user_id, :game_id, :comment, :liked)
    end

    # ^^^^ liked?

end
