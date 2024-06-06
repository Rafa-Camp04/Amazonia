class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        if @reviews
            render :index
        else
            render json: { error: 'No reviews found' }, status: 404
        end
    end

    def create
        @review = Review.create(reviews_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: 422
        end

    end

    def update
        review = Review.find_by(id: params[:id])

        if item
            if item.update(title: params[:review][:title],
                           body: params[:review][:body],
                           rating: params[:review][:rating] 
                           )
                render :show
            else
                render json: review.errors, status: 422
            end
        else
            render json: { error: 'Review not found' }, status: 404
        end

    end

    def destroy
        review = Review.find_by(id: params[:id])

        if review
            review.destroy
            render json: { message: 'Review successfully removed from cart' }, status: 200
        else
            render json: { error: 'Review not found' }, status: 404
        end

    end

    private

    def reviews_params
        params.require(:review).permit(:title, :body, :rating, :product_id, :user_id)
    end

end