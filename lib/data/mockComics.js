import { comicCategory} from "../utils/categoryTypes";


const {superheroes, drama, fantasy, scifi, action, adventure,
     comedy, crime, mystery, horror, biography} = comicCategory;

export const MOCK_COMICS = [
    {
      id: 1,
      title: "Batman: The Killing Joke",
      price: 17.99,
      discountPrice: 14.99,
      platforms: ["DC Comics"],
      categories: [superheroes, drama, crime],
      rating: 4.9,
      stock: 12,
      image: "/images/batman_the_killing_joke.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      title: "Watchmen",
      price: 24.99,
      discountPrice: null,
      platforms: ["DC Comics"],
      categories: [superheroes, drama, mystery],
      rating: 4.8,
      stock: 8,
      image: "/images/watchmen.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      title: "The Amazing Spider-Man #1",
      price: 29.99,
      discountPrice: 25.99,
      platforms: ["Marvel"],
      categories: [superheroes, action, adventure],
      rating: 4.7,
      stock: 5,
      image: "/images/the_amazing_spider-man_1.jpg",
      isNew: true,
      isBestseller: false
    },
    {
      id: 4,
      title: "Saga Vol. 1",
      price: 14.99,
      discountPrice: null,
      platforms: ["Image Comics"],
      categories: [scifi, fantasy, drama],
      rating: 4.9,
      stock: 15,
      image: "/images/saga_vol1.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      title: "Sandman Vol. 1: Preludes & Nocturnes",
      price: 19.99,
      discountPrice: 16.99,
      platforms: ["DC Comics", "Vertigo"],
      categories: [fantasy, horror],
      rating: 4.8,
      stock: 10,
      image: "/images/sandman_vol1_preludes_and_nocturnes.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 6,
      title: "Maus",
      price: 18.99,
      discountPrice: null,
      platforms: ["Pantheon Books"],
      categories: [biography],
      rating: 4.9,
      stock: 7,
      image: "/images/maus.jpg",
      isNew: false,
      isBestseller: false
    },
    {
      id: 7,
      title: "X-Men: Dark Phoenix Saga",
      price: 21.99,
      discountPrice: 17.99,
      platforms: ["Marvel"],
      categories: [superheroes, scifi, drama],
      rating: 4.7,
      stock: 9,
      image: "/images/x-men_dark_phoenix_saga.jpg",
      isNew: true,
      isBestseller: false
    },
    {
      id: 8,
      title: "Sin City",
      price: 19.99,
      discountPrice: null,
      platforms: ["Dark Horse"],
      categories: [crime],
      rating: 4.6,
      stock: 6,
      image: "/images/sin_city.webp",
      isNew: false,
      isBestseller: false
    },
    {
      id: 9,
      title: "Invincible Vol. 1",
      price: 16.99,
      discountPrice: 14.99,
      platforms: ["Image Comics"],
      categories: [superheroes, action, drama],
      rating: 4.8,
      stock: 11,
      image: "/images/invincible_vol1.jpg",
      isNew: true,
      isBestseller: true
    }
  ];