import { mangaCategory } from "../utils/categoryTypes";


const {action, drama, fantasy, horror, superheroes,
     supernatural, romance, adventure, comedy, mistery} = mangaCategory;

export const MOCK_MANGAS = [
    {
      id: 10,
      title: "Attack on Titan Vol. 1",
      price: 12.99,
      discountPrice: 9.99,
      platforms: ["Shonen"],
      categories: [action, fantasy, horror],
      rating: 4.8,
      stock: 20,
      image: "/images/attack_on_titan_vol1.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 11,
      title: "My Hero Academia Vol. 5",
      price: 11.99,
      discountPrice: null,
      platforms: ["Shonen"],
      categories: [action, superheroes],
      rating: 4.7,
      stock: 15,
      image: "/images/my_hero_academia_vol5.jpg",
      isNew: true,
      isBestseller: true
    },
    {
      id: 12,
      title: "Chainsaw Man Vol. 3",
      price: 12.99,
      discountPrice: 10.99,
      platforms: ["Shonen"],
      categories: [action, horror, supernatural],
      rating: 4.9,
      stock: 8,
      image: "/images/chainsaw_man_vol3.jpg",
      isNew: true,
      isBestseller: true
    },
    {
      id: 13,
      title: "Fruits Basket Vol. 2",
      price: 13.99,
      discountPrice: null,
      platforms: ["Shojo"],
      categories: [romance, drama, supernatural],
      rating: 4.6,
      stock: 12,
      image: "/images/fruits_basket_vol2.jpeg",
      isNew: false,
      isBestseller: false
    },
    {
      id: 14,
      title: "Berserk Deluxe Edition Vol. 1",
      price: 49.99,
      discountPrice: 39.99,
      platforms: ["Seinen"],
      categories: [action, drama, horror],
      rating: 4.9,
      stock: 5,
      image: "/images/berserk_deluxe_edition_vol1.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 15,
      title: "One Piece Vol. 98",
      price: 11.99,
      discountPrice: null,
      platforms: ["Shonen"],
      categories: [adventure, action, comedy],
      rating: 4.8,
      stock: 25,
      image: "/images/one_piece_vol98.jpg",
      isNew: true,
      isBestseller: true
    },
    {
      id: 16,
      title: "Sailor Moon Vol. 1",
      price: 12.99,
      discountPrice: 11.99,
      platforms: ["Shojo"],
      categories: [romance, adventure],
      rating: 4.7,
      stock: 10,
      image: "/images/sailor_moon_vol1.jpg",
      isNew: false,
      isBestseller: false
    },
    {
      id: 17,
      title: "Death Note Black Edition Vol. 1",
      price: 14.99,
      discountPrice: null,
      platforms: ["Shonen"],
      categories: [mistery, supernatural],
      rating: 4.9,
      stock: 15,
      image: "/images/death_note_black_edition_vol1.jpg",
      isNew: false,
      isBestseller: true
    },
    {
      id: 18,
      title: "Vagabond Vol. 1",
      price: 19.99,
      discountPrice: 17.99,
      platforms: ["Seinen"],
      categories: [action, drama],
      rating: 4.9,
      stock: 7,
      image: "/images/vagabond_vol1.jpg",
      isNew: false,
      isBestseller: false
    }
  ];