class Api::CatagoriesController < ApplicationController

    before_action :set_catagory, only: [:show, :update, :destroy]


def index 
render json: Catagory.all
end

def show
render json: @catagory
end

def create
catagory = Catagory.new(catagory_params)
if(catagory.save)
    render json: catagory
else 
    render json: {error:catagory.errors.full_messages}, status:422
end 
end

def update
    if(@catagory.update(catagory_params))
        render json: @catagory
    else 
        render json: {error:@catagory.errors.full_messages}, status:422
    end 
    end

def destroy
render json: @catagory.destroy
end
private 

def set_catagory
@catagory = Catagory.find(params[:id])
end


def catagory_params
params.require(:catagory).permit(:name)
end

end
