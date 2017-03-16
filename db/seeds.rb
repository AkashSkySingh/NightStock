# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

x = User.create({username: "Guest", password: "asd123", description:"Hello world, I am a professional photographer", email: "guestdemo@helper.com"})

y = User.create({username: "JoannesPhilippe", password: "asd123", description:"Bonjour friends", email: "bonjour@helper.com"})

z = User.create({username: "MichellePham", password: "asd123", description:"Check out my page!", email: "helper@helper.com"})
