class Api::CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.all
        render json: @cart_items
    end

    def create 
        cart_item = CartItem.new(cart_items_params)

        if cart_item.save
            render json: cart_item
        else
            render json: cart_item.errors, status: 422
        end
    end

    def destroy
        item = CartItem.find(params[:id])
        item.destroy
    end

    def cart_items_params
        params.require(:cart_item).permit(:product_id, :quantity, :custumer_id)
    end

end