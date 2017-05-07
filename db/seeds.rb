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
    description:"Hello world, I am a Professional Photographer for hire!",
    email: "guestdemo@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--JlV88ebH--/v1490056565/Desktop-download-california-wallpapers-HD_ddmmy2.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/s--OY9oInfN--/v1490065061/3331467084_13b583b888_b_z2u2rx.jpg"
  })

ub = User.create({
    username: "JoannesPhilippe",
    password: "asd123",
    description:"Bonjour Friends",
    email: "Jaonnes@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--cU3EUKJ1--/v1490055906/f9ff137a00dfac3af502bdb75cf9555d_fgjbff.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489786686/images_fyh3rz.jpg"
  })

uc = User.create({
    username: "MichelleKun",
    password: "asd123",
    description:"Check out my page!",
    email: "Michelle@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--TC4lP8SW--/c_scale,h_1080/v1490053783/9517-wallpapers-landscape_bnipga.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489786899/9203867789_680abdd0eb_b_gsa6hv.jpg"
  })

ud = User.create({
    username: "KenWong",
    password: "asd123",
    description:"Hello all, come see my pictures.",
    email: "Ken@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--S1CgtX3K--/c_scale,h_1080/v1490056971/RtobAkb_hpmler.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489788429/600_432702483_gu6ooz.jpg"
  })

ue = User.create({
    username: "JackWelding",
    password: "asd123",
    description:"Nothing, but skylight.",
    email: "Jack@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--ZIDNd9MC--/v1490056366/46786944-night-wallpapers_q3ab0x.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489786575/279201ae399017b5d7c2dd7e881c2d46_fd4ogi.jpg"
  })

uf = User.create({
    username: "KarySiking",
    password: "asd123",
    description:"Maybe I can be the best.",
    email: "Kary@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--C6VVnnjz--/c_scale,h_1080/v1490056296/45453381-night-wallpapers_wc8rlr.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489786625/images_aadzc4.jpg"
  })

ug = User.create({
    username: "SituNam",
    password: "asd123",
    description:"Life flies when you're having fun.",
    email: "Situ@helper.com",
    cover_photo_url:"https://res.cloudinary.com/nightstock/image/upload/s--v2Qr5LHC--/v1490056230/45219919-night-wallpapers_coyztb.jpg",
    user_image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489786795/30996643164_a9c48dcd80_b_keoccv.jpg"
  })
#
# uh = User.create({
#     username: "",
#     password: "asd123",
#     description:"",
#     email: "@helper.com",
#     cover_photo_url:"",
#     user_image_url: ""
#   })
#
# ui = User.create({
#     username: "",
#     password: "=",
#     description:"=",
#     email: "=@helper.com",
#     cover_photo_url:"",
#     user_image_url: ""
#   })
#
# uj = User.create({
#     username: "",
#     password: "asd123",
#     description:"",
#     email: "@helper.com",
#     cover_photo_url:"",
#     user_image_url: ""
#   })
#
# uk = User.create({
#     username: "",
#     password: "asd123",
#     description:"",
#     email: "@helper.com",
#     cover_photo_url:"",
#     user_image_url: ""
#   })
#
# ul = User.create({
#     username: "",
#     password: "",
#     description:"",
#     email: "",
#     cover_photo_url:"",
#     user_image_url: ""
#   })
#
# um = User.create({
#     username: "",
#     password: "",
#     description:"",
#     email: "",
#     cover_photo_url:"",
#     user_image_url: ""
#   })

fa = Follow.create({
      followee_id: 2,
      follower_id: 1
    })

fb = Follow.create({
      followee_id: 3,
      follower_id: 1
    })

fc = Follow.create({
      followee_id: 4,
      follower_id: 1
    })

  fd = Follow.create({
      followee_id: 5,
      follower_id: 1
    })

  fe = Follow.create({
      followee_id: 6,
      follower_id: 1
    })

  ff = Follow.create({
      followee_id: 7,
      follower_id: 1
    })

  fg = Follow.create({
      followee_id: 5,
      follower_id: 2
    })

  fh = Follow.create({
      followee_id: 6,
      follower_id: 2
    })

  fi = Follow.create({
      followee_id: 1,
      follower_id: 3
    })

  fj = Follow.create({
      followee_id: 6,
      follower_id: 3
    })

  fk = Follow.create({
      followee_id: 2,
      follower_id: 4
    })

  fl = Follow.create({
      followee_id: 5,
      follower_id: 4
    })

  fm = Follow.create({
      followee_id: 7,
      follower_id: 4
    })

  fn = Follow.create({
      followee_id: 4,
      follower_id: 5
    })

  fo = Follow.create({
      followee_id: 2,
      follower_id: 5
    })

  fp = Follow.create({
      followee_id: 1,
      follower_id: 6
    })

  fq = Follow.create({
      followee_id: 3,
      follower_id: 6
    })

  fr = Follow.create({
      followee_id: 7,
      follower_id: 6
    })

  fs = Follow.create({
      followee_id: 1,
      follower_id: 7
    })

  ft = Follow.create({
      followee_id: 2,
      follower_id: 7
    })
  #
  # fu = Follow.create({
  #     followee_id: ,
  #     follower_id:
  #   })
  #
  # fv = Follow.create({
  #     followee_id: ,
  #     follower_id:
  #   })
  #
  # fw = Follow.create({
  #     followee_id: ,
  #     follower_id:
  #   })
  #
  # fx = Follow.create({
  #     followee_id: ,
  #     follower_id:
  #   })
  #
  # fy = Follow.create({
  #     followee_id: ,
  #     follower_id:
  #   })
  #
  # fz = Follow.create({
  #     followee_id: ,
  #     follower_id:
    # })


pa = Post.create({
    title: "Colors in SF",
    description: "Join me at the lounge in the city!",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489788959/San-Francisco-Nightclub-SF-Lounge-nightlife-AsiaSF-00-Studios_piltat.jpg",
    user_id: 3
  })


pb = Post.create({
    title: "Drinks Palette",
    description: "Night in the town!",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489788913/Bars-in-Al-Nahda-Dubai_s4hiss.jpg",
    user_id: 3
  })


pc = Post.create({
    title: "Merry goes Around",
    description: "Round and round until we see the sun!",
    location: "Berlin, Germany",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489788936/1_wsm4co.jpg",
    user_id: 6
  })

pd = Post.create({
    title: "Busy Streets",
    description: "Metro life is something else...",
    location: "Hong Kong, Japan",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489788996/1.jpg_v89btn.jpg",
    user_id: 4
  })

pe = Post.create({
    title: "Ride Along",
    description: "Options are always present!",
    location: "New York City, New York, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489789021/scenic_bicycle_1920x1080_ykiiuh.jpg",
    user_id: 7
  })


pf = Post.create({
    title: "Fog in lights...",
    description: "NYC at dusk.",
    location: "New York City, New York, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489789045/New-York-by-Night_lz7kod.jpg",
    user_id: 7
  })


pg = Post.create({
    title: "Life in the Metro",
    description: "Night time is a wonder.",
    location: "Honk Kong, Japan",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489789142/433e319ee49f89edc49f080e0d304737_n8hhsh.jpg",
    user_id: 4
  })


ph = Post.create({
    title: "Waterfront lights!",
    description: "Photography is still a wonder...",
    location: "Chicago, Michigan, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489789163/f6847c936e68db93caa02fa075ea4ba4_wxmb8n.jpg",
    user_id: 5
  });


pi = Post.create({
    title: "Lights to the Door",
    description: "Traffic in the City of Lights",
    location: "Paris, France",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489896529/wallpaper-2865990_upfaza.jpg",
    user_id: 2
  });


pj = Post.create({
    title: "The Tower of Lights",
    description: "Iconic water front shot.",
    location: "Paris, France",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/s--gmXW2tSu--/c_scale,h_1080/v1489896564/eiffel_tower_paris_night_lights_france_bridge_river_hdr_36870_3840x2160_btmltm.jpg",
    user_id: 2
  });


pk = Post.create({
    title: "City Life has its Moments",
    description: "Bay Bridge at Night",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489896833/san-francisco-nightlife_cmdo8o.png",
    user_id: 1
  });


pl = Post.create({
    title: "Iconic moments are not made overnight!",
    description: "The urban bustle.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489896932/15674892061_6c1a569151_k-1024x512_rirzve.jpg",
    user_id: 1
  });


pm = Post.create({
    title: "Palace of Fine Arts and Lights",
    description: "SF Has its sites.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897025/palace-of-fine-arts_opnadl.jpg",
    user_id: 1
  });


pn = Post.create({
    title: "Ferry Reflection",
    description: "The ferry building at night.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/s--DR7HtImC--/c_scale,h_1080/v1489897140/san-francisco-streets-at-night-wallpaper-3_eo6tvd.jpg",
    user_id: 1
  });


po = Post.create({
    title: "Tramway in The City",
    description: "Public transportation has its moments.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897221/tram-sanfrancisco-night-street_yfp732.jpg",
    user_id: 1
  });


pp = Post.create({
    title: "A moment in time.",
    description: "Wine at night is a pleasure in and of itself.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897354/iStock_000031901936_Small_nufxgx.jpg",
    user_id: 3
  });


pq = Post.create({
    title: "Twin Peaks is gorgeous!",
    description: "Twin peaks in a storm.",
    location: "San Francisco, California, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897615/maxresdefault_c0wzot.jpg",
    user_id: 3
  });


pr = Post.create({
    title: "A sight of recovery.",
    description: "Chicago is recovering!",
    location: "Chicago, Michigan, USA",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/c_limit,h_1080/v1489898039/Chicago_River_night_3_nonc1v.jpg",
    user_id: 5
  });


ps = Post.create({
    title: "Sometimes, public views have their special appeal.",
    description: "Berlin's iconic tower at night.",
    location: "Berlin, Germany",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897962/The-Fernsehturm-Tower-In-Alexanderplatz-Berlin-At-Night_devdbd.jpg",
    user_id: 6
  })


pt = Post.create({
    title: "Berlin is Colorful",
    description: "Night life in Europe is wonderful!",
    location: "Berlin, Germany",
    image_url: "https://res.cloudinary.com/nightstock/image/upload/v1489897884/katerholzig_mku7h5.jpg",
    user_id: 6
  })


pu = Post.create({
    title: "Mission Peaks is something else",
    description: "Starlight gazing",
    location: "Fremont, California, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--Z4BZGaYw--/v1490380964/dftvvvwaj0zidojnxzy3.jpg",
    user_id: 1
  })

#
px = Post.create({
    title: "Christmas Lights",
    description: "Fun in the Town Square",
    location: "Berlin, Germany",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--QHVPfPKg--/v1490394987/khpg6qavhpzwm70dh7us.jpg",
    user_id: 6
  })


py = Post.create({
    title: "Camping under the Stars",
    description: "Great Lakes!",
    location: "Great Lakes",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--ilaTmhsb--/v1490394988/jwa92mvgnaxgsfxr8uj8.jpg",
    user_id: 5
  })


pz = Post.create({
    title: "Pond Wonder",
    description: "Walking with my Parents",
    location: "London, United Kingdom",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--GJoy6_ig--/v1490394990/ky3mxng4xq3y4y68z6ma.jpg",
    user_id: 6
  })


paa = Post.create({
    title: "Dine and Site",
    description: "Dinner by the Pier",
    location: "Great Lakes, Michigan",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--lt6N5LLe--/v1490394993/pscd9ps7hkcmvwmxduhl.jpg",
    user_id: 5
  })

pab = Post.create({
    title: "Starlight in Big Basin",
    description: "Sites at Night",
    location: "Big Basin, California, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--IzA7INva--/v1490394995/ndem7ahrgkdpl1juyfia.jpg",
    user_id: 3
  })

pac = Post.create({
    title: "Flames in night",
    description: "Prolonged photography!",
    location: "San Francisco, California, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--AQ1YJBaQ--/v1490394997/ea3ohvfrbx6pkxp07h2z.jpg",
    user_id: 3
  })

pad = Post.create({
    title: "Campfire and stories",
    description: "Travels and camps",
    location: "Nice, France",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--uDc_sTU1--/v1490395000/svs7q88lfozc5rjo21ed.jpg",
    user_id: 2
  })

pae = Post.create({
    title: "Desert Nights",
    description: "Nomad travels",
    location: "Itanigar, Bangladesh",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--n7NObWjx--/v1490395002/ejfybx40zhir2mlxsabw.jpg",
    user_id: 7
  })

paf = Post.create({
    title: "Icon of Lights",
    description: "The one and only tower of lights",
    location: "Paris, France",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--zHWPC-bo--/v1490395003/hcirjan6th5kwpdezyfh.jpg",
    user_id: 2
  })

pag = Post.create({
    title: "Quick snap at night",
    description: "Hilltop sights",
    location: "Kymera, China",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--ORYn77yq--/v1490395006/pd6mgg1ebuzqp2auujwh.jpg",
    user_id: 4
  })

pah = Post.create({
    title: "Remembrance",
    description: "Night weddings!",
    location: "San Jose, California, USA",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--TTVnglJG--/v1490395008/cbhvredelvtyi52taijy.jpg",
    user_id: 3
  })

pai = Post.create({
    title: "Travels at Night",
    description: "Traveling is wonderous",
    location: "Desert Flats, South Africa",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--QBiNvJ33--/v1490395009/cqqaptjvabntgrtwj7r1.jpg",
    user_id: 7
  })

paj = Post.create({
    title: "Night Life",
    description: "The sites are wonderous",
    location: "Chicago, Michigan",
    image_url: "http://res.cloudinary.com/nightstock/image/upload/s--esGOJowz--/v1490395011/mklk4t2ndfvoav0uxadq.jpg",
    user_id: 5
  })
