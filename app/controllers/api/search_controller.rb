class Api::SearchController < ApplicationController

    def products
        @products  = Product.where("name iLIKE '%#{params[:q]}%' OR description iLIKE '%#{params[:q]}%'")
        render :index
    end

end