# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ua = User.create({
    username: "Guest",
    password: "asd123",
    description:"Hello world, I am a professional photographer",
    email: "guestdemo@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787439/night-hd-wallpapers-26_dynjsd.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489787225/unknown-user_dc4ike.png"
  })

ub = User.create({
    username: "JoannesPhilippe",
    password: "asd123",
    description:"Bonjour friends",
    email: "Jaonnes@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787898/22a7760b284310c6f41bd7666c58b059_xjth7d.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489786686/images_fyh3rz.jpg"
  })

uc = User.create({
    username: "MichelleKun",
    password: "asd123",
    description:"Check out my page!",
    email: "Michelle@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787921/bridge-bokeh-lights_ir9bto.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489786899/9203867789_680abdd0eb_b_gsa6hv.jpg"
  })

ud = User.create({
    username: "KenWong",
    password: "asd123",
    description:"Hello all, see my pictures.",
    email: "Ken@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787838/138260-city-lights-city-night-cityscapes-new-york-state-rain-the-bronx-urban_gb0v8x.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489788429/600_432702483_gu6ooz.jpg"
  })

ue = User.create({
    username: "JackWelding",
    password: "asd123",
    description:"Nothing, but skylight.",
    email: "Jack@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787469/night-wallpapers-hd-2_cqlkhs.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489786575/279201ae399017b5d7c2dd7e881c2d46_fd4ogi.jpg"
  })

uf = User.create({
    username: "KarySiking",
    password: "asd123",
    description:"Maybe I can be the best.",
    email: "Kary@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787552/Spinning_the_light_Ultra_HD_znnvkm.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489786625/images_aadzc4.jpg"
  })

ug = User.create({
    username: "SituNam",
    password: "asd123",
    description:"Life flies when you're having fun.",
    email: "Situ@helper.com",
    cover_photo_url:"http://res.cloudinary.com/nightstock/image/upload/v1489787484/wallpaper_for_night_008_lj26pp.jpg",
    user_image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489786795/30996643164_a9c48dcd80_b_keoccv.jpg"
  })

pa = Post.new({
    title: "Colors in SF",
    description: "Join me at the lounge in the city!",
    location: "San Francisco, CA, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489788959/San-Francisco-Nightclub-SF-Lounge-nightlife-AsiaSF-00-Studios_piltat.jpg",
    user_id: 3
  })


pb = Post.new({
    title: "Drinks palette",
    description: "Night in the town!",
    location: "San Francisco, CA, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489788913/Bars-in-Al-Nahda-Dubai_s4hiss.jpg",
    user_id: 3
  })


pc = Post.new({
    title: "Merry go round and round",
    description: "Round and round until we see the sun!",
    location: "Berlin, Germany",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489788936/1_wsm4co.jpg",
    user_id: 6
  })

pd = Post.new({
    title: "Busy streets",
    description: "Metro life is something else",
    location: "Hong Kong, Japan",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/v1489788996/1.jpg_v89btn.jpg",
    user_id: 4
  })

pe = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pf = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pg = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


ph = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pi = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pj = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pk = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pl = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pm = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pn = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


po = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pp = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pq = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pr = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


ps = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pt = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pu = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


px = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


py = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


pz = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:


paa = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pab = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pac = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pad = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pae = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

paf = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pag = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pah = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })

pai = Post.new({
    title: "",
    description: "",
    location: "",
    image_url: "",
    user_id:
  })
