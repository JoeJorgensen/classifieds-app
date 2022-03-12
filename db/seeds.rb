# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
    Catagory.destroy_all
    
    
c1 = Catagory.create(name:'Computers')
c2 = Catagory.create(name:'Electronics')
c3 = Catagory.create(name:'Auto Parts')
c4 = Catagory.create(name:'Books')

c1.items.create(name:'Mac Book pro M1', description:'Great condition no issues', price: 650)
c2.items.create(name:'Iphone X', description:'Slightly used', price: 400)
c3.items.create(name:'Catalitic Converter', description:'Someone stole your catalitic converter?, good thing I have an extra brand new one', price: 350)
c4.items.create(name:'Harry potter', description:'In great condition', price: 13)






puts Catagory.all.count
puts Item.all.count
