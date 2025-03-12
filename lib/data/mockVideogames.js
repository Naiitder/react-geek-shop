import { videogamesCategory } from "../utils/categoryTypes";

const {action, adventure, rpg, openworld, sports, simulation, strategy, platformer} = videogamesCategory;

export const MOCK_VIDEOGAMES = [
    {
      id: 19,
      title: "The Legend of Zelda: Breath of the Wild",
      price: 59.99,
      discountPrice: 49.99,
      platforms: ["Switch"],
      categories: [action, adventure],
      rating: 4.9,
      stock: 15,
      image: "/images/the_legend_of_zelda_breath_of_the_wild.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 20,
      title: "Elden Ring",
      price: 69.99,
      discountPrice: null,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: [rpg, action, openworld],
      rating: 4.8,
      stock: 8,
      image: "/images/elden_ring.jpg",
      isNew: true,
      isBestseller: true
    },
    {
      id: 21,
      title: "Cyberpunk 2077",
      price: 59.99,
      discountPrice: 29.99,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: [adventure, action, openworld],
      rating: 4.1,
      stock: 20,
      image: "/images/cyberpunk_2077.avif",
      isNew: false,
      isBestseller: false
    },
    {
      id: 22,
      title: "Super Mario Odyssey",
      price: 49.99,
      discountPrice: null,
      platforms: ["Switch"],
      categories: [platformer, adventure],
      rating: 4.7,
      stock: 12,
      image: "/images/super_mario_odyssey.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 23,
      title: "Red Dead Redemption 2",
      price: 59.99,
      discountPrice: 39.99,
      platforms: ["PS4", "Xbox One", "PC"],
      categories: [action, adventure, openworld],
      rating: 4.9,
      stock: 7,
      image: "/images/red_dead_redemption_2.avif",
      isNew: false,
      isBestseller: true
    },
    {
      id: 24,
      title: "Hogwarts Legacy",
      price: 69.99,
      discountPrice: 59.99,
      platforms: ["PS5", "Xbox Series X", "PC"],
      categories: [rpg, adventure, openworld],
      rating: 4.5,
      stock: 10,
      image: "/images/hogwarts_legacy.webp",
      isNew: true,
      isBestseller: false
    },
    {
      id: 25,
      title: "FIFA 24",
      price: 69.99,
      discountPrice: null,
      platforms: ["PS5", "Xbox Series X", "PC", "Switch"],
      categories: [sports, simulation],
      rating: 4.3,
      stock: 25,
      image: "/images/fifa_24.jpeg",
      isNew: true,
      isBestseller: true
    },
    {
      id: 26,
      title: "Minecraft",
      price: 29.99,
      discountPrice: null,
      platforms: ["PC", "Switch", "PS4", "Xbox One", "Mobile"],
      categories: [adventure, openworld],
      rating: 4.8,
      stock: 50,
      image: "/images/minecraft.avif",
      isNew: false,
      isBestseller: true
    },
    {
      id: 27,
      title: "Pokemon Mundo Misterioso Exploradores del Cielo",
      price: 29.99,
      discountPrice: null,
      platforms: ["Switch"],
      categories: [adventure,strategy, rpg],
      rating: 4.8,
      stock: 50,
      image: "/images/pokemon_mystery_dungeon_explorers_of_sky.jpg",
      isNew: false,
      isBestseller: true
    }
  ];
  