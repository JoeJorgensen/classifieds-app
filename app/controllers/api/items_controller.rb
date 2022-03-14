class Api::ItemsController < ApplicationController
before_action :set_catagory, except: [:items_all]
before_action :set_item, only: [:show, :update, :destroy]


def index
render json: @catagory.items
end

def items_all
    render json: Item.all
end


def show
render json: @item
end

def create
item = @catagory.items.new(item_params)
if(item.save)
    render json: item
else
   render json: {errors:item.errors.full_messages}, status: 422
end
end

def update
    if(@item.update(item_params))
        render json: @item
    else
       render json: {errors:@item.errors.full_messages}, status: 422
    end
    end

def destroy
render json: @item.destroy
end

private

def set_catagory
@catagory = Catagory.find(params[:catagory_id])
end

def set_item
@item = @catagory.items.find(params[:id])
end


def item_params
    params.require(:item).permit(:name,:description,:price)
end
end
