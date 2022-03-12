class Catagory < ApplicationRecord
    has_many :items, dependent: :destroy
end
