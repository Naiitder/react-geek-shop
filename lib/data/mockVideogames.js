import { videogamesCategory } from "../utils/categoryTypes";

export const MOCK_VIDEOGAMES = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      price: 59.99,
      discountPrice: 49.99,
      platforms: ["Switch"],
      categories: [videogamesCategory.action, videogamesCategory.adventure],
      rating: 4.9,
      stock: 15,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      title: "Elden Ring",
      price: 69.99,
      discountPrice: null,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: [videogamesCategory.rpg, videogamesCategory.action, videogamesCategory.openworld],
      rating: 4.8,
      stock: 8,
      image: "/api/placeholder/300/400",
      isNew: true,
      isBestseller: true
    },
    {
      id: 3,
      title: "Cyberpunk 2077",
      price: 59.99,
      discountPrice: 29.99,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: ["RPG", "Action", "Open World"],
      rating: 4.1,
      stock: 20,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      title: "Super Mario Odyssey",
      price: 49.99,
      discountPrice: null,
      platforms: ["Switch"],
      categories: ["Platformer", "Adventure"],
      rating: 4.7,
      stock: 12,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      title: "Red Dead Redemption 2",
      price: 59.99,
      discountPrice: 39.99,
      platforms: ["PS4", "Xbox One", "PC"],
      categories: ["Action", "Adventure", "Open World"],
      rating: 4.9,
      stock: 7,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      title: "Hogwarts Legacy",
      price: 69.99,
      discountPrice: 59.99,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: ["RPG", "Adventure", "Open World"],
      rating: 4.5,
      stock: 10,
      image: "/api/placeholder/300/400",
      isNew: true,
      isBestseller: false
    },
    {
      id: 7,
      title: "FIFA 24",
      price: 69.99,
      discountPrice: null,
      platforms: ["PS5", "Xbox Series X", "PC", "Switch"],
      categories: ["Deportes", "Simulación"],
      rating: 4.3,
      stock: 25,
      image: "/api/placeholder/300/400",
      isNew: true,
      isBestseller: true
    },
    {
      id: 8,
      title: "Minecraft",
      price: 29.99,
      discountPrice: null,
      platforms: ["PC", "Switch", "PS4", "Xbox One", "Mobile"],
      categories: ["Sandbox", "Adventure"],
      rating: 4.8,
      stock: 50,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: true
    },
    {
      id: 9,
      title: "League of legends",
      price: 29.99,
      discountPrice: null,
      platforms: ["PC", "Switch", "PS4", "Xbox One", "Mobile"],
      categories: ["Sandbox", "Aventura"],
      rating: 4.8,
      stock: 50,
      image: "/api/placeholder/300/400",
      isNew: false,
      isBestseller: true
    }
  ];
  