# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

let x = User.new({username: "Guest", password: "asd123", description:"Hello world, I am a professional photographer", email: "guestdemo@helper.com"})

let y = User.new({username: "Joannes Philippe", password: "qwe123", description:"Bonjour ", email: "guestdemo@helper.com"})
