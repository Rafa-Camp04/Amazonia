class Api::CartItemsController < ApplicationController

    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def create 
        @cart_item = CartItem.new(cart_items_params)
        @cart_item.customer_id = current_user.id

        product_already_in_cart = false

        current_user.cart_items.each do |item|
            if item.product_id == params[:product_id]
                item.quantity += 1
                product_already_in_cart = true
                item.save
            end
        end

        if product_already_in_cart

            render json: { success: "Product quantity updated in the cart!" }
        elsif @cart_item.save
            render :show
        else
            render json: @cart_item.errors, status: 422
        end

    end

    def update
        item = CartItem.find_by(id: params[:id])
        @cart_item = item

        if item
            if item.update(quantity: params[:cart_item][:quantity])
                render :show
            else
                render json: item.errors, status: 422
            end
        else
            render json: { error: 'Item not found' }, status: 404
        end
    end

    def destroy
        item = CartItem.find_by( id: params[:id])

        if item
            item.destroy
            render json: { message: 'Item successfully removed from cart' }, status: 200
        else
            render json: { error: 'Item not found' }, status: 404
        end
    end

    private

    def cart_items_params
        params.require(:cart_item).permit(:product_id, :quantity, :customer_id)
    end

end