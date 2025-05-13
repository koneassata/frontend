const products = [
   {
     id: 1,
     title: "Tomates",
     description: "Parfaites pour la santé.",
     price: 500,
     image: "https://cdn.wikifarmer.com/images/detailed/2020/11/La-valeur-nutritive-des-tomates.jpg",
      category: "Légumes"
   },
   {
     id: 2,
     title: "pomme rouge",
     description: "renforce les calories.",
     price: 700,
     image: "https://previews.123rf.com/images/smonika2017/smonika20171907/smonika2017190700021/126762564-acheter-des-fruits-et-l%C3%A9gumes-dans-un-supermarch%C3%A9.jpg",
      category: "Fruits"
   },
   {
     id: 3,
     title: "Légumes",
     description: "Bonne digestion.",
     price: 350,
     image: "https://cdn.pixabay.com/photo/2014/09/17/20/24/vegetables-449950_1280.jpg",
      category: "Légumes"
   },
   {
       id: 4,
       title: "Légumes",
       description: "Bonne digestion.",
       price: 400,
       image: "https://media.gettyimages.com/id/139496979/fr/photo/assortiment-de-fruits-et-l%C3%A9gumes-de-fond.jpg?s=612x612&w=gi&k=20&c=oc1ActP_FgGMqyvdVexVXbhdtIy0Kn_VGAqS4RH0XtI=",
        category: "Légumes"
     },
     {
       id: 5,
       title: "gombo",
       description: "Bonne digestion.",
       price: 190,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPr1hmQ6KlWV16p7ktVcANRiANls_QtYXRDfGGZw0q4MDxWtigN__0v0OomFfMFxjuvhGJ5HAbsWm7vC9nQn1WVirZUyiSV7qqr5xu_I",
        category: "Légumes"
     },
     {
       id: 6,
       title: "aubergine violet",
       description: "L’aubergine est originaire d’Inde et a été amenée en Europe par des marins arabes.",
       price: 200,
       image: "https://www.gemuese.ch/media/033dh51k/aubergine_010919.png?width=720&height=720&quality=80",
        category: "Légumes-fruits"
     },
     {
       id: 7,
       title: "Légumes",
       description: "Bonne digestion.",
       price: 2300,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM2JDFKrzvYT7PiCHHVWrABB0JvJeXRXPRQ&s",
        category: "Fruits"
     },
     {
       id: 8,
       title: "Légumes",
       description: "Bonne digestion.",
       price: 300,
       image: "https://img.freepik.com/photos-gratuite/vue-dessus-fruits-legumes-poivrons-pommes-carotte-coriandre-chou-fleur-kaki-radis-tomates-cerises-chou-rouge-tomates-piment-vert_140725-145407.jpg?uid=R85595916&ga=GA1.1.1381172831.1742720203&semt=ais_hybrid&w=740",
        category: "Légumes"
     },
     {
       id: 9,
       title: "carrotte",
       description: "Bonne digestion.",
       price: 200,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPtHLOe5qyu3QqppBWErT2pCmvm4wP1i0kQ&s",
        category: "Légumes"
     },
     {
       id: 10,
       title: "Aubergine",
       description: "Bonne digestion.",
       price: 400,
       image: "https://grandexotique.com/cdn/shop/files/IMG_0172.jpg?v=1721475374",
        category: "Légumes"
     },
     {
       id: 11,
       title: "gnangnan",
       description: "Bonne digestion.",
       price: 300,
       image: "https://www.fratmat.info/uploads/images/2024/03/04/190012.jpg",
        category: "Légumes"
     },
     {
       id: 12,
       title: "piments",
       description: "Bonne digestion.",
       price: 200,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_9OUhLdycDu4jCkQRNQGrJT9oP8i15PVUe8uKHxzZvjx0rxHjNSOsynvcbZk2zrwTPE&usqp=CAU",
        category: "Légumes"
     },
     {
       id: 13,
       title: "bananes",
       description: "Bonne digestion.",
       price: 1000,
       image: "https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2022~01~17~393a6013-7844-4178-89e6-6585de5a5ef5.jpeg/1200x675/quality/80/crop-from/center/focus-point/1828%2C1754/que-faire-avec-de-la-banane-plantain-a-part-des-chips.jpeg",
        category: "Légumes"
     },
     {
       id: 14,
       title: "pomme de terre",
       description: "Bonne digestion.",
       price: 700,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXqWGe3vEA4OM_Lt3GOSZDb7XgIkWpKXakw&s",
        category: "Légumes"
     },
     {
       id: 15,
       title: "pomme",
       description: "Bonne digestion.",
       price: 1000,
       image: "https://blog.mon-marche.fr/wp-content/uploads/2021/10/Sans-titre-2021-10-29T144152.518.jpg",
        category: "Fruits"
     },
     {
       id: 16,
       title: "mangue",
       description: "Bonne digestion.",
       price: 500,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fGA-cPpMMA7xFPSh2wKT4VrXjimWDkwGWg&s",
        category: "Fruits"
     },
     {
       id: 17,
       title: "papaye",
       description: "Bonne digestion.",
       price: 190,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYf4qYvXEYcAn8WwgdTJF-3NrqH8161m1Kw&s",
        category: "Fruits"
     },
     {
       id: 18,
       title: "goyave",
       description: "Bonne digestion.",
       price: 600,
       image: "https://cache.marieclaire.fr/data/photo/w1200_h630_ci/1h3/recettes-goyave.jpg",
        category: "Fruits"
     },{
       id: 19,
       title: "choux",
       description: "Bonne digestion.",
       price: 500,
       image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVGt5uG8_jVqUP60ndwiUZsi3hIoigHQGM6qL4VQDQwoSVqtc11SfxQ30wJuFbTS58hUO_39aXe8LiZCYD5G7Pz5zZ8Ex0Lbjt4UCNkQ",
        category: "Légumes"
     },
     {
       id: 20,
       title: "ail",
       description: "Bonne digestion.",
       price: 500,
       image: "https://ichef.bbci.co.uk/ace/ws/509/cpsprodpb/3690/live/e1eb2a80-6f47-11ed-94b2-efbc7109d3dd.jpg.webp",
        category: "Légumes"
     },
     {
       id: 21,
       title: "avocat",
       description: "Bonne digestion.",
       price: 200,
       image: "https://iod.keplrstatic.com/api/ar_1,c_crop,g_north/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/7807_AVOCAT_TROPICAL2.jpg",
        category: "Fruits"
     },
     {
       id: 22,
       title: "feuille de patâte",
       description: "Bonne digestion.",
       price: 500,
       image: "https://www.foodbaked.ci/wp-content/uploads/2023/07/Feuilles-de-patate-1.jpg",
        category: "Légumes"
     },
     {
       id: 23,
       title: "huile-rouge",
       description: "Bonne digestion.",
       price: 2500,
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAXQ8k0e_HfW8MAv-huWkRnO8LyuhTROrkw&s",
        category: "Légumes"
     },
     {
       id: 24,
       title: "graine de palme",
       description: "Bonne digestion.",
       price: 700,
       image: "https://www.fratmat.info/uploads/images/2024/03/24/192370.jpg",
        category: "Légumes"
     },
     {
       id: 25,
       title: "gombo-sec",
       description: "Bonne digestion.",
       price: 250,
       image: "https://media.istockphoto.com/id/1034920286/fr/photo/gombo-frais-et-sec.jpg?s=1024x1024&w=is&k=20&c=TpGKUvLkdf8F8WF9Vknc0u9IS7jRFIl-50PwQ90Peyo=",
        category: "Légumes"
     },
     {
      id: 26,
      title: "crabes",
      description: "Bonne digestion.",
      price: 2500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSar0x-cp5Suh9n_78eQAmNE8vGGCgn6SYbww&s",
       category: "Viande/Poisson"
    },
    {
      id: 27,
      title: "crevettes",
      description: "Bonne digestion.",
      price: 2000,
      image: "https://www.lamer.ca/cdn/shop/products/crevettes-nordiques-entieres-186730.jpg?v=1615580636&width=800",
       category: "Viande/Poisson"
    },
    {
      id: 28,
      title: "thon",
      description: "Bonne digestion.",
      price: 2000,
      image: "https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/1415/thon-produit-AdobeStock_109030346.jpg",
       category: "Viande/Poisson"
    },
    {
      id: 29,
      title: "capitaine",
      description: "Bonne digestion.",
      price: 3000,
      image: "https://www.papillesetpupilles.fr/wp-content/uploads/2020/04/Capitaines-2-Copyright-Massafood.jpg",
       category: "Viande/Poisson"
    },
    {
      id: 30,
      title: "viande-boeuf",
      description: "Bonne digestion.",
      price: 3500,
      image: "https://doumgba-marche.com/admin/_files/categories/IMG_CAT_TX5JTD.jpeg",
       category: "Viande/Poisson"
    },
    {
      id: 31,
      title: "poulet",
      description: "Bonne digestion.",
      price: 3000,
      image: "https://img.freepik.com/photos-gratuite/haut-regime-repas-sain-frais_1203-5874.jpg?uid=R85595916&ga=GA1.1.1381172831.1742720203&semt=ais_hybrid&w=740",
       category: "Viande/Poisson"
    },
    {
      id: 32,
      title: "escargo",
      description: "Bonne digestion.",
      price: 5000,
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF647XcL3JinSNc1V_nzEgnwUxW9QGij6qNf9nQRDYVs_Xij44IlKgbWvBw5V16c64YdeCXocCGm6xQYx7of8PrtnswEaxKtc5x6K0lutD3NPHzTX2oD1XPAZ9e17P6bleLx00zfPYJHsr/s1600/escargots-afrique.jpg",
       category: "Viande/Poisson"
    },
    {
      id: 33,
      title: "capes",
      description: "Bonne digestion.",
      price: 2500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPmlWeUX6tnLtPiEnlZKuXp_cbTPYQ6UEHg&s",
       category: "Viande/Poisson"
    },
    {
      id: 34,
      title: "viande-mouton",
      description: "Bonne digestion.",
      price: 4000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VHttIT6gCbJ9qqMIJtAWK4Kohs9VadkSZQ&s",
       category: "Viande/Poisson"
    },
    {
      id: 35,
      title: "poisson-sec",
      description: "Bonne digestion.",
      price: 1000,
      image: "https://www.shutterstock.com/image-photo/mixed-dried-fish-displayed-sold-260nw-2504180099.jpg",
       category: "Viande/Poisson"
    },
 ];
 
 
 
 export default products;
 