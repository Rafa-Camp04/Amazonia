class Api::SearchController < ApplicationController

  def products

    if params[:q].present?
      @products = Product.where('name LIKE ? OR description LIKE ?', "%#{params[:q]}%", "%#{params[:q]}%")
    else
      @products = Product.all 
    end

  end

end
