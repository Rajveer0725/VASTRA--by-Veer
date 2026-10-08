import { useEffect, useRef, useState } from "react";



import { gsap } from "gsap";



import {



  ArrowLeft,



  ArrowRight,



  ArrowUpRight,



  Search,



  ShoppingBag,



  Menu,



  X,

  Plus,

  Minus,

  Trash2,

  Check,
  Heart,



} from "lucide-react";







import menImage from "./assets/men.png";



import womenImage from "./assets/women.png";



import perfumesImage from "./assets/perfumes.png";
import watchCardImage from "./assets/WATCHSCLEAN.png";







import "./index.css";
import "./Vastra-hero-fixes.css";
import "./responsive.css";

/* =========================================================



   CATEGORY DATA



========================================================= */







const categories = {
  men: {
    title: "MEN",
    subtitle: "TAILORING FOR PRESENCE.",
    image: menImage,
    heroImage: menImage,
  },

  women: {
    title: "WOMEN",
    subtitle: "ELEGANCE, REDEFINED.",
    image: womenImage,
    heroImage: womenImage,
  },

  watches: {
    title: "WATCHES",
    subtitle: "TIME, REFINED.",
    image: watchCardImage,
    heroImage: watchCardImage,
  },

  perfumes: {
    title: "FRAGRANCE",
    subtitle: "SCENTS OF MEMORY.",
    image: perfumesImage,
    heroImage: perfumesImage,
  },
};







/* =========================================================



   PRODUCT DATA



========================================================= */







/* =========================================================



   PRODUCT DATA



========================================================= */







const products = (() => {



const menImages = [
  "/men-products/men-01.jpg",
  "/men-products/men-02.jpg",
  "/men-products/men-03.jpg",
  "/men-products/men-04.jpg",
  "/men-products/men-05.jpg",
  "/men-products/men-06.jpg",
  "/men-products/men-07.jpg",
  "/men-products/men-08.jpg",
  "/men-products/men-09.jpg",
  "/men-products/men-10.jpg",
  "/men-products/men-11.jpg",
  "/men-products/men-12.jpg",
  "/men-products/men-13.jpg",
  "/men-products/men-14.jpg",
  "/men-products/men-15.jpg",
  "/men-products/men-16.jpg",
  "/men-products/men-17.jpg",
  "/men-products/men-18.jpg",
  "/men-products/men-19.jpg",
  "/men-products/men-20.jpg",
];




const womenImages = [
  "/women-products/1.jpg",
  "/women-products/2.jpg",
  "/women-products/3.jpg",
  "/women-products/4.jpg",
  "/women-products/5.jpg",
  "/women-products/6.jpg",
  "/women-products/7.jpg",
  "/women-products/8.jpg",
  "/women-products/9.jpg",
  "/women-products/10.jpg",
  "/women-products/11.jpg",
  "/women-products/12.jpg",
  "/women-products/13.jpg",
  "/women-products/14.jpg",
  "/women-products/15.jpg",
  "/women-products/16.jpg",
  "/women-products/17.jpg",
  "/women-products/18.jpg",
  "/women-products/19.jpg",
  "/women-products/20.jpg",
];






const perfumeImages = [
  "/perfume-products/1.jpg",
  "/perfume-products/2.jpg",
  "/perfume-products/3.png",
  "/perfume-products/4.jpg",
  "/perfume-products/5.jpg",
  "/perfume-products/6.jpg",
  "/perfume-products/7.jpg",
  "/perfume-products/8.jpg",
  "/perfume-products/9.jpg",
  "/perfume-products/10.jpg",
  "/perfume-products/11.jpg",
  "/perfume-products/12.jpg",
  "/perfume-products/13.jpg",
  "/perfume-products/14.jpg",
  "/perfume-products/15.jpg",
  "/perfume-products/16.jpg",
  "/perfume-products/17.jpg",
  "/perfume-products/18.jpg",
  "/perfume-products/19.jpg",
  "/perfume-products/20.jpg",
];

const watchImages = Array.from(
  { length: 20 },
  (_, i) => `/watch-products/${i + 1}.jpg`
);




  return {



men: [
  {
    id: 1,
    brand: "Loro Piana-inspired",
    name: "Ivory Cashmere Crewneck",
    category: "Knitwear",
    price: "₹48,500",
    image: menImages[0],
    description:
      "A refined ivory crewneck sweater with a clean relaxed silhouette, paired effortlessly with tailored neutral trousers for understated luxury."
  },

  {
    id: 2,
    brand: "Brunello Cucinelli-inspired",
    name: "Ivory Linen Overshirt",
    category: "Shirts",
    price: "₹32,900",
    image: menImages[1],
    description:
      "A softly structured ivory overshirt crafted for an effortless resort-luxury look, featuring an open neckline, rolled sleeves and a relaxed fit."
  },

  {
    id: 3,
    brand: "Moncler-inspired",
    name: "Graphic Heritage Sweatshirt",
    category: "Sweatshirts",
    price: "₹15,800",
    image: menImages[2],
    description:
      "A relaxed white sweatshirt featuring a bold vintage-inspired graphic across the front, designed for elevated casual dressing."
  },

  {
    id: 4,
    brand: "Giorgio Armani-inspired",
    name: "Grey Fine-Knit Polo",
    category: "Knitwear",
    price: "₹39,800",
    image: menImages[3],
    description:
      "A sophisticated grey fine-knit polo with a soft collar and relaxed silhouette, designed for refined weekend and resort dressing."
  },

  {
    id: 5,
    brand: "Zegna-inspired",
    name: "Chocolate Striped Knit Polo",
    category: "Knitwear",
    price: "₹17,900",
    image: menImages[4],
    description:
      "A rich chocolate-brown knitted polo featuring subtle vertical striping and a relaxed silhouette, finished with a sophisticated open collar."
  },

  {
    id: 6,
    brand: "Brunello Cucinelli-inspired",
    name: "Espresso Striped Knit Shirt",
    category: "Knitwear",
    price: "₹28,500",
    image: menImages[5],
    description:
      "A contemporary espresso knit shirt with fine vertical stripes and a relaxed collar, combining sophisticated texture with effortless tailoring."
  },

  {
    id: 7,
    brand: "Ralph Lauren-inspired",
    name: "Ivory Resort Polo",
    category: "Polo Shirts",
    price: "₹13,500",
    image: menImages[6],
    description:
      "A clean ivory polo styled with a contrasting sweater draped over the shoulders, creating a polished preppy aesthetic."
  },

  {
    id: 8,
    brand: "Tommy Hilfiger-inspired",
    name: "Burgundy Varsity Jacket",
    category: "Jackets",
    price: "₹29,800",
    image: menImages[7],
    description:
      "A statement burgundy varsity jacket with contrasting cream sleeves, ribbed trims and a bold varsity-inspired chest emblem."
  },

  {
    id: 9,
    brand: "Zegna-inspired",
    name: "Blue Resort Shirt",
    category: "Shirts",
    price: "₹26,500",
    image: menImages[8],
    description:
      "A relaxed blue shirt with a softly textured finish, styled with white trousers for a sophisticated Mediterranean-inspired resort look."
  },

  {
    id: 10,
    brand: "Loro Piana-inspired",
    name: "Tobacco Suede Jacket",
    category: "Jackets",
    price: "₹31,500",
    image: menImages[9],
    description:
      "A luxurious tobacco-brown suede-style jacket with a relaxed silhouette and understated construction, designed for timeless transitional dressing."
  },

  {
    id: 11,
    brand: "Brunello Cucinelli-inspired",
    name: "Burgundy Suede Overshirt",
    category: "Jackets",
    price: "₹34,500",
    image: menImages[10],
    description:
      "A deep burgundy outer layer with a refined suede-like finish, styled over an ivory shirt for a sophisticated urban wardrobe."
  },

  {
    id: 12,
    brand: "Tom Ford-inspired",
    name: "Noir Technical Jacket",
    category: "Jackets",
    price: "₹42,500",
    image: menImages[11],
    description:
      "A sleek black technical jacket with a contemporary silhouette and understated detailing, designed for a sharp modern appearance."
  },

  {
    id: 13,
    brand: "Zegna-inspired",
    name: "Ocean Blue Overshirt",
    category: "Overshirts",
    price: "₹27,900",
    image: menImages[12],
    description:
      "A vibrant ocean-blue overshirt with a relaxed silhouette, paired with light trousers for a modern luxury resort aesthetic."
  },

  {
    id: 14,
    brand: "Armani-inspired",
    name: "Chocolate Leather Jacket",
    category: "Jackets",
    price: "₹39,500",
    image: menImages[13],
    description:
      "A sophisticated chocolate-brown leather-style jacket featuring a relaxed fit and minimal detailing for effortless contemporary dressing."
  },

  {
    id: 15,
    brand: "Canali-inspired",
    name: "Chocolate Tailored Blazer",
    category: "Blazers",
    price: "₹39,800",
    image: menImages[14],
    description:
      "A relaxed chocolate-brown blazer with a softly structured silhouette, designed to bring tailored elegance to everyday looks."
  },

  {
    id: 16,
    brand: "Brunello Cucinelli-inspired",
    name: "Emerald Silk-Blend Jacket",
    category: "Jackets",
    price: "₹36,500",
    image: menImages[15],
    description:
      "A rich emerald-green lightweight jacket with a refined finish and relaxed proportions, balanced with wide ivory trousers for modern luxury."
  },

  {
    id: 17,
    brand: "Burberry-inspired",
    name: "London Heritage Jacket",
    category: "Jackets",
    price: "₹29,800",
    image: menImages[16],
    description:
      "A casual heritage-inspired jacket layered over a graphic sweatshirt, combining relaxed streetwear proportions with classic British styling."
  },

  {
    id: 18,
    brand: "Ralph Lauren-inspired",
    name: "Navy Cable Knit Sweater",
    category: "Knitwear",
    price: "₹24,500",
    image: menImages[17],
    description:
      "A refined navy knit sweater with a classic textured finish, paired with tailored trousers and leather footwear for an elevated casual look."
  },

  {
    id: 19,
    brand: "Moncler-inspired",
    name: "Grey Ribbed Polo",
    category: "Polo Shirts",
    price: "₹21,500",
    image: menImages[18],
    description:
      "A fitted grey ribbed polo designed with a clean athletic silhouette, offering understated sophistication for relaxed everyday wear."
  },

  {
    id: 20,
    brand: "Armani-inspired",
    name: "Blue Striped Resort Shirt",
    category: "Shirts",
    price: "₹18,500",
    image: menImages[19],
    description:
      "A lightweight blue-and-white striped shirt with an open relaxed collar, designed for effortless resort dressing and warm-weather evenings."
  }
].map((product) => ({
  ...product,
  gender: "men",
})),







women: [
  {
    id: 31,
    brand: "Sabyasachi-inspired",
    name: "Violet Heritage Anarkali",
    category: "Anarkali Sets",
    price: "₹34,500",
    image: womenImages[0],
    description:
      "A regal violet Anarkali ensemble featuring a flowing silhouette, coordinated dupatta and traditional detailing. Designed for elegant festive occasions and refined evening gatherings.",
  },

  {
    id: 32,
    brand: "Manish Malhotra-inspired",
    name: "Crimson Embroidered Kurta",
    category: "Kurta Sets",
    price: "₹29,500",
    image: womenImages[1],
    description:
      "A rich crimson kurta ensemble with delicate embroidery and a graceful straight silhouette, finished with matching trousers for a sophisticated festive look.",
  },

  {
    id: 33,
    brand: "Anita Dongre-inspired",
    name: "Ivory Blue Printed Kurta",
    category: "Kurta Sets",
    price: "₹26,500",
    image: womenImages[2],
    description:
      "An ivory kurta set decorated with soft blue botanical motifs and subtle border detailing, offering an elegant balance of traditional Indian design and contemporary ease.",
  },

  {
    id: 34,
    brand: "Masaba-inspired",
    name: "Noir Graphic Sweatshirt",
    category: "Sweatshirts",
    price: "₹12,500",
    image: womenImages[3],
    description:
      "A relaxed black graphic sweatshirt paired with loose denim, creating a contemporary street-luxury silhouette designed for effortless everyday wear.",
  },

  {
    id: 35,
    brand: "Ritu Kumar-inspired",
    name: "Botanical Heritage Dress",
    category: "Dresses",
    price: "₹27,500",
    image: womenImages[4],
    description:
      "A sophisticated ivory botanical-print dress with long sleeves and a softly flowing silhouette, combining feminine elegance with heritage-inspired detailing.",
  },

  {
    id: 36,
    brand: "Anita Dongre-inspired",
    name: "Marigold Printed Kurta",
    category: "Ethnic Wear",
    price: "₹24,500",
    image: womenImages[5],
    description:
      "A vibrant marigold printed kurta ensemble featuring intricate traditional-inspired motifs and relaxed tailoring, perfect for daytime celebrations and festive occasions.",
  },

  {
    id: 37,
    brand: "Tarun Tahiliani-inspired",
    name: "Scarlet Sculpted Mini Dress",
    category: "Mini Dresses",
    price: "₹23,500",
    image: womenImages[6],
    description:
      "A bold scarlet mini dress with a clean sculpted silhouette and elegant neckline, designed to create a confident statement for contemporary evening occasions.",
  },

  {
    id: 38,
    brand: "Manish Malhotra-inspired",
    name: "Blue Denim Evening Mini",
    category: "Mini Dresses",
    price: "₹25,500",
    image: womenImages[7],
    description:
      "A sophisticated blue denim mini dress with a fitted silhouette and minimal detailing, creating a polished evening look with modern feminine appeal.",
  },

  {
    id: 39,
    brand: "Ritu Kumar-inspired",
    name: "Indigo Denim Waistcoat",
    category: "Layering",
    price: "₹19,500",
    image: womenImages[8],
    description:
      "A structured indigo waistcoat layered over a crisp white shirt, creating a contemporary tailored look that blends classic menswear influence with feminine styling.",
  },

  {
    id: 40,
    brand: "Sabyasachi-inspired",
    name: "Chocolate Relaxed Blazer",
    category: "Blazers",
    price: "₹32,500",
    image: womenImages[9],
    description:
      "A deep chocolate-brown blazer with a relaxed tailored silhouette, styled with denim and a crisp white shirt for understated contemporary sophistication.",
  },

  {
    id: 41,
    brand: "Falguni Shane Peacock-inspired",
    name: "Noir Tailored Mini Dress",
    category: "Evening Wear",
    price: "₹38,500",
    image: womenImages[10],
    description:
      "A striking black tailored mini dress with a structured silhouette and refined finish, designed for sophisticated dinners and contemporary evening occasions.",
  },

  {
    id: 42,
    brand: "Masaba-inspired",
    name: "Chocolate Resort Top",
    category: "Tops",
    price: "₹14,500",
    image: womenImages[11],
    description:
      "A fitted chocolate-brown sleeveless top styled with relaxed white trousers, creating an effortless resort-inspired look with a modern luxury feel.",
  },

  {
    id: 43,
    brand: "Tarun Tahiliani-inspired",
    name: "Noir Draped Gown",
    category: "Evening Gowns",
    price: "₹46,500",
    image: womenImages[12],
    description:
      "An elegant black evening gown featuring a fitted silhouette, dramatic side slit and refined draping, designed for sophisticated nighttime occasions.",
  },

  {
    id: 44,
    brand: "Anita Dongre-inspired",
    name: "Sunshine Off-Shoulder Top",
    category: "Tops",
    price: "₹16,500",
    image: womenImages[13],
    description:
      "A vibrant sunshine-yellow off-shoulder top paired with denim shorts, creating a fresh warm-weather silhouette for relaxed resort and summer dressing.",
  },

  {
    id: 45,
    brand: "Ritu Kumar-inspired",
    name: "Ivory Coastal Maxi",
    category: "Maxi Dresses",
    price: "₹28,500",
    image: womenImages[14],
    description:
      "A delicate ivory maxi dress with a softly flowing silhouette and feminine detailing, designed for elegant coastal evenings and intimate summer occasions.",
  },

  {
    id: 46,
    brand: "Sabyasachi-inspired",
    name: "Ivory Draped Saree",
    category: "Sarees",
    price: "₹36,500",
    image: womenImages[15],
    description:
      "A graceful ivory saree with an elegant flowing drape, styled with a refined sleeveless blouse for a timeless contemporary Indian evening look.",
  },

  {
    id: 47,
    brand: "Anita Dongre-inspired",
    name: "Olive Utility Jacket",
    category: "Jackets",
    price: "₹25,500",
    image: womenImages[16],
    description:
      "A relaxed olive-green utility jacket layered over a crisp white top and tailored trousers, combining practical detailing with a sophisticated contemporary silhouette.",
  },

  {
    id: 48,
    brand: "Ritu Kumar-inspired",
    name: "Burgundy Heritage Knit",
    category: "Knitwear",
    price: "₹18,500",
    image: womenImages[17],
    description:
      "A burgundy and ivory striped knit sweater with a relaxed silhouette, paired with wide-leg trousers for an effortlessly polished everyday look.",
  },

  {
    id: 49,
    brand: "Manish Malhotra-inspired",
    name: "Azure Floral Lehenga",
    category: "Lehengas",
    price: "₹52,500",
    image: womenImages[18],
    description:
      "A romantic powder-blue lehenga featuring delicate floral detailing, a coordinated blouse and flowing dupatta, designed for weddings, celebrations and grand festive occasions.",
  },

  {
    id: 50,
    brand: "Falguni Shane Peacock-inspired",
    name: "Noir Signature Gown",
    category: "Evening Gowns",
    price: "₹44,500",
    image: womenImages[19],
    description:
      "A timeless black floor-length gown with a clean fitted silhouette and understated elegance, designed for sophisticated evening events and formal occasions.",
  },
].map((product) => ({
  ...product,
  gender: "women",
})),

watches: [
  ["Richard Mille RM 011", "Luxury Watches", "₹22,918,898"],
  ["Richard Mille RM 011 Felipe Massa Limited Edition 8 von 10", "Limited Edition Watches", "₹28,693,119"],
  ["Jacob & Co. Bugatti Tourbillon Baguette", "Tourbillon Watches", "₹71,096,256"],
  ["Santos de Cartier", "Luxury Watches", "₹8,70,000"],
  ["Jacob & Co. Bugatti Chiron Tourbillon in white ceramic and 18K rose gold", "Tourbillon Watches", "₹29,623,440"],
  ["Jacob & Co. Bugatti Chiron Tourbillon Baguette Ruby", "Tourbillon Watches", "₹39,000,000"],
  ["Jacob & Co. Bugatti Chiron Tourbillon Rose Gold", "Tourbillon Watches", "₹39,174,805"],
  ["Jacob & Co. Oil Pump (49.5 mm Rose Gold)", "Luxury Watches", "₹49,000,000"],
  ["Jacob & Co. Casino Tourbillon", "Tourbillon Watches", "₹19,662,554"],
  ["Jacob & Co. Astronomia Solar Zodiac", "Luxury Watches", "₹62,000,000"],
  ["Jacob & Co. Astronomia Metaverso Mercury", "Luxury Watches", "₹35,548,128"],
  ["Patek Philippe Grandmaster Chime Ref. 5175R", "Luxury Watches", "₹28,92,50,000"],
  ["Patek Philippe Aquanaut Luce Haute Joaillerie with Rubies", "Haute Joaillerie Watches", "₹9,86,00,000"],
  ["Audemars Piguet Royal Oak Tourbillon Extra-Thin", "Tourbillon Watches", "₹31,195,736"],
  ["Cartier Santos Full Pavé Diamonds", "Diamond Watches", "₹13,61,305"],
  ["Daniel Wellington Rose Gold", "Rose Gold Watches", "₹37,00,000"],
  ["Bulgari Serpenti Tubogas", "Luxury Watches", "₹7,00,000"],
  ["Rolex Datejust 31", "Luxury Watches", "₹8,68,000"],
  ["Rolex Lady-Datejust 28", "Diamond Watches", "₹50,91,000"],
  ["Patek Philippe Nautilus Joaillerie", "Haute Joaillerie Watches", "₹45,230,459"],
].map(([name, category, price], i) => ({
  id: i + 101,
  name,
  category,
  price,
  image: watchImages[i],
})),



perfumes: [
  {
    id: 61,
    brand: "Azzaro",
    name: "Azzaro The Most Wanted Parfum",
    category: "Parfum",
    fragranceType: "Fougère Woody Ambery",
    collection: "The Most Wanted",
    concentration: "Parfum",
    family: "Fougère Woody Ambery",
    top: "Cardamom",
    heart: "Caramel",
    base: "Bourbon Vanilla · Vetiver",
    keyNotes: "Cardamom · Caramel · Bourbon Vanilla · Vetiver",
    description: "A spicy, addictive and magnetic fragrance built around cardamom, caramel and a woody amber accord.",
    volumes: ["50 ML", "100 ML"],
    volumePrices: { "50 ML": 6900, "100 ML": 9200 },
    price: "₹14,500",
    image: perfumeImages[0],
  },
  {
    id: 62,
    brand: "Giorgio Armani",
    name: "Giorgio Armani Acqua Di Giò Profumo",
    category: "Eau de Parfum",
    fragranceType: "Aquatic Woody",
    collection: "Acqua Di Giò",
    concentration: "Eau de Parfum",
    family: "Aquatic Woody",
    top: "Bergamot · Marine Accords",
    heart: "Rosemary · Cypress",
    base: "Incense · Patchouli",
    keyNotes: "Bergamot · Marine Accords · Incense",
    description: "A sophisticated aquatic woody fragrance combining fresh bergamot and marine accords with deep, captivating incense.",
    volumes: ["75 ML"],
    volumePrices: { "75 ML": 6600 },
    price: "₹16,900",
    image: perfumeImages[1],
  },
  {
    id: 63,
    brand: "Dior",
    name: "Dior Sauvage Elixir",
    category: "Elixir",
    fragranceType: "Spicy Fresh Woody",
    collection: "Sauvage",
    concentration: "Elixir",
    family: "Spicy Fresh Woody",
    top: "Grapefruit · Cinnamon · Nutmeg · Cardamom",
    heart: "AOP Lavender",
    base: "Rich Woods · Licorice · Haitian Vetiver · Patchouli",
    keyNotes: "Spicy Grapefruit · Lavender · Rich Woods",
    description: "An extraordinarily concentrated Sauvage interpretation with spicy grapefruit, lavender essence and rich woods.",
    volumes: ["60 ML", "100 ML", "150 ML"],
    volumePrices: { "60 ML": 24000, "100 ML": 33000, "150 ML": 42000 },
    price: "₹13,800",
    image: perfumeImages[2],
  },
  {
    id: 64,
    brand: "Versace",
    name: "Versace Eros Eau de Toilette",
    category: "Eau de Toilette",
    fragranceType: "Woody Oriental Fresh",
    collection: "Eros",
    concentration: "Eau de Toilette",
    family: "Woody · Oriental · Fresh",
    top: "Italian Lemon · Mandarin · Mint · Candied Apple",
    heart: "Geranium · Clary Sage · Amber",
    base: "Cedarwood · Vetiver · Patchouli · Sandalwood · Vanilla",
    keyNotes: "Mint · Green Apple · Tonka Bean · Vanilla",
    description: "A vibrant, fresh and sensual fragrance combining mint, citrus and green apple with warm woods, vanilla and tonka.",
    volumes: ["50 ML", "100 ML", "200 ML"],
    volumePrices: { "50 ML": 14300, "100 ML": 18000, "200 ML": 23100 },
    price: "₹15,900",
    image: perfumeImages[3],
  },
  {
    id: 65,
    brand: "Jean Paul Gaultier",
    name: "Jean Paul Gaultier Le Male Le Parfum",
    category: "Eau de Parfum Intense",
    fragranceType: "Amber Woody",
    collection: "Le Male",
    concentration: "Eau de Parfum Intense",
    family: "Amber Woody",
    top: "Cardamom",
    heart: "Lavender · Iris",
    base: "Vanilla",
    keyNotes: "Cardamom · Lavender · Iris · Vanilla",
    description: "An intense woody amber fragrance with cardamom, lavender and iris leading into an addictive vanilla base.",
    volumes: ["75 ML", "125 ML", "200 ML"],
    volumePrices: { "75 ML": 7850, "125 ML": 9910, "200 ML": 12300 },
    price: "₹18,500",
    image: perfumeImages[4],
  },
  {
    id: 66,
    brand: "Versace",
    name: "Versace Bright Crystal",
    category: "Eau de Toilette",
    fragranceType: "Floral Fruity Musky",
    collection: "Bright Crystal",
    concentration: "Eau de Toilette",
    family: "Floral · Fruity · Musky",
    top: "Yuzu · Iced Accord · Pomegranate",
    heart: "Peony · Magnolia · Lotus Flower",
    base: "Acajou · Vegetal Amber · Musk",
    keyNotes: "Yuzu · Pomegranate · Peony · Magnolia · Musk",
    description: "A sensual feminine fragrance with juicy yet delicate fruity, floral and musky notes.",
    volumes: ["50 ML", "90 ML", "200 ML"],
    volumePrices: { "50 ML": 16000, "90 ML": 19800, "200 ML": 25300 },
    price: "₹15,900",
    image: perfumeImages[5],
  },
  {
    id: 67,
    brand: "Chanel",
    name: "Chanel Coco Mademoiselle",
    category: "Eau de Parfum",
    fragranceType: "Ambery Woody",
    collection: "Coco Mademoiselle",
    concentration: "Eau de Parfum",
    family: "Ambery Woody",
    top: "Orange",
    heart: "Jasmine · Rose",
    base: "Patchouli · Vetiver",
    keyNotes: "Orange · Rose · Jasmine · Patchouli · Vetiver",
    description: "A bold and free feminine ambery fragrance with fresh orange, jasmine and rose, finished with patchouli and vetiver.",
    volumes: ["50 ML", "100 ML", "200 ML"],
    volumePrices: { "50 ML": 12500, "100 ML": 16750, "200 ML": 26300 },
    price: "₹17,500",
    image: perfumeImages[6],
  },
  {
    id: 68,
    brand: "Tom Ford",
    name: "Tom Ford Lost Cherry Eau de Parfum",
    category: "Eau de Parfum",
    fragranceType: "Fruity Amber",
    collection: "Lost Cherry",
    concentration: "Eau de Parfum",
    family: "Fruity Amber",
    top: "Black Cherry Accord · Bitter Almond",
    heart: "Griotte Syrup · Rose Absolute",
    base: "Peru Balsam · Roasted Tonka",
    keyNotes: "Black Cherry · Bitter Almond · Griotte Syrup · Roasted Tonka",
    description: "A luscious, full-bodied scent pairing black cherry and bitter almond with cherry liqueur, rose, woods and roasted tonka.",
    volumes: ["10 ML", "30 ML", "50 ML", "100 ML"],
    volumePrices: { "10 ML": 9000, "30 ML": 19500, "50 ML": 31200, "100 ML": 40500 },
    price: "₹21,500",
    image: perfumeImages[7],
  },
  {
    id: 69,
    brand: "Valentino",
    name: "Valentino Uomo Born In Roma Intense Eau de Parfum",
    category: "Eau de Parfum",
    fragranceType: "Warm Spicy",
    collection: "Born in Roma",
    concentration: "Eau de Parfum",
    family: "Warm & Spicy",
    top: "Vanilla Bourbon",
    heart: "Lavandin",
    base: "Smoked Vetiver",
    keyNotes: "Vanilla · Lavandin · Vetiver",
    description: "A seductive ambery fougère built around a powerful vanilla infusion, vibrant lavandin and smoked vetiver.",
    volumes: ["50 ML", "100 ML"],
    volumePrices: { "50 ML": 7600, "100 ML": 9400 },
    price: "₹22,900",
    image: perfumeImages[8],
  },
  {
    id: 70,
    brand: "Creed",
    name: "Creed Aventus",
    category: "Eau de Parfum",
    fragranceType: "Dry Woods Fresh Citrus Fruity",
    collection: "Aventus",
    concentration: "Eau de Parfum",
    family: "Dry Woods · Fresh · Citrus & Fruity",
    top: "Calabrian Bergamot · Pineapple Accord",
    heart: "Birch",
    base: "Smoky Birch · Woods",
    keyNotes: "Bergamot · Pineapple · Birch",
    description: "A bold and timeless Creed fragrance uniting fresh Calabrian bergamot, pineapple and smoky birch.",
    volumes: ["30 ML", "50 ML", "100 ML", "240 ML", "490 ML"],
    volumePrices: { "30 ML": 12500, "50 ML": 18500, "100 ML": 29500, "240 ML": 59000, "490 ML": 105000 },
    price: "₹23,500",
    image: perfumeImages[9],
  },
  {
    id: 71,
    brand: "Giorgio Armani",
    name: "Giorgio Armani Acqua Di Giò Eau de Toilette",
    category: "Eau de Toilette",
    fragranceType: "Fresh Aquatic Woody",
    collection: "Acqua Di Giò",
    concentration: "Eau de Toilette",
    family: "Fresh & Aquatic",
    top: "Bergamot · Neroli · Green Tangerine",
    heart: "Marine Notes · Rosemary · Persimmon",
    base: "Patchouli · Cedarwood",
    keyNotes: "Bergamot · Marine Notes · Cedarwood",
    description: "A fresh and relaxed men's fragrance opening with bergamot, neroli and green tangerine before moving into aquatic and woody facets.",
    volumes: ["30 ML", "50 ML", "100 ML", "150 ML", "200 ML"],
    volumePrices: { "30 ML": 7000, "50 ML": 9000, "100 ML": 12900, "150 ML": 16000, "200 ML": 19500 },
    price: "₹12,900",
    image: perfumeImages[10],
  },
  {
    id: 72,
    brand: "Chanel",
    name: "Chanel N°5",
    category: "Eau de Parfum",
    fragranceType: "Floral Aldehyde",
    collection: "N°5",
    concentration: "Eau de Parfum",
    family: "Floral Aldehyde",
    top: "Citrus · Aldehydes",
    heart: "May Rose · Jasmine",
    base: "Vanilla",
    keyNotes: "May Rose · Jasmine · Aldehydes · Vanilla",
    description: "A timeless floral aldehyde bouquet centered on May Rose and jasmine, brightened by citrus and softened with vanilla.",
    volumes: ["35 ML", "50 ML", "100 ML", "200 ML"],
    volumePrices: { "35 ML": 11000, "50 ML": 14500, "100 ML": 16750, "200 ML": 26300 },
    price: "₹14,500",
    image: perfumeImages[11],
  },
  {
    id: 73,
    brand: "Yves Saint Laurent",
    name: "Yves Saint Laurent MYSLF Eau de Parfum",
    category: "Eau de Parfum",
    fragranceType: "Woody Floral",
    collection: "MYSLF",
    concentration: "Eau de Parfum",
    family: "Woody Floral",
    top: "Bergamot",
    heart: "Orange Blossom Absolute",
    base: "Indonesian Patchouli · Ambrofix",
    keyNotes: "Bergamot · Orange Blossom · Patchouli · Ambrofix",
    description: "A refillable woody floral fragrance built around bergamot, orange blossom absolute and textured woods.",
    volumes: ["40 ML", "60 ML", "100 ML", "150 ML"],
    volumePrices: { "40 ML": 6500, "60 ML": 8200, "100 ML": 13700, "150 ML": 18000 },
    price: "₹16,500",
    image: perfumeImages[12],
  },
  {
    id: 74,
    brand: "Yves Saint Laurent",
    name: "Yves Saint Laurent Libre Berry Crush Eau de Parfum",
    category: "Eau de Parfum",
    fragranceType: "Fruity Floral",
    collection: "Libre",
    concentration: "Eau de Parfum",
    family: "Fruity Floral",
    top: "Raspberry · Fresh Lavender",
    heart: "Orange Blossom",
    base: "Coconut Accord · Vanilla",
    keyNotes: "Raspberry · Coconut · Orange Blossom · Lavender",
    description: "A fruity floral reinterpretation of Libre combining juicy raspberry with lavender, orange blossom and creamy coconut.",
    volumes: ["10 ML", "30 ML", "50 ML", "90 ML"],
    volumePrices: { "10 ML": 2100, "30 ML": 6500, "50 ML": 9500, "90 ML": 14500 },
    price: "₹17,900",
    image: perfumeImages[13],
  },
  {
    id: 75,
    brand: "Versace",
    name: "Versace Crystal Noir Parfum",
    category: "Parfum",
    fragranceType: "Floral Oriental",
    collection: "Crystal Noir",
    concentration: "Parfum",
    family: "Floral Oriental",
    top: "Cardamom · Pepper · Ginger",
    heart: "Gardenia · Peony · Orange Flower",
    base: "Amber · Sandalwood · Musk",
    keyNotes: "Cardamom · Pepper · Gardenia · Amber · Musk",
    description: "A sensual floral-oriental fragrance with spicy top notes and a warm amber, sandalwood and musk base.",
    volumes: ["50 ML", "90 ML"],
    volumePrices: { "50 ML": 23300, "90 ML": 29100 },
    price: "₹18,900",
    image: perfumeImages[14],
  },
  {
    id: 76,
    brand: "Gucci",
    name: "Gucci Bloom",
    category: "Eau de Parfum",
    fragranceType: "Floral",
    collection: "Gucci Bloom",
    concentration: "Eau de Parfum",
    family: "Floral",
    top: "Tuberose",
    heart: "Jasmine Bud Extract",
    base: "Rangoon Creeper",
    keyNotes: "Tuberose · Jasmine · Rangoon Creeper",
    description: "A rich white floral fragrance blended by Alberto Morillas, unfolding with tuberose, jasmine and Rangoon Creeper.",
    volumes: ["50 ML", "100 ML"],
    volumePrices: { "50 ML": 14300, "100 ML": 16800 },
    price: "₹19,500",
    image: perfumeImages[15],
  },
  {
    id: 77,
    brand: "Prada",
    name: "Prada Paradoxe Radical Essence Parfum",
    category: "Parfum",
    fragranceType: "Floral Ambery Woody",
    collection: "Paradoxe",
    concentration: "Parfum",
    family: "Floral Ambery Woody",
    top: "Sweet Neroli · Orange Blossom",
    heart: "Salted Pistachio Accord",
    base: "Creamy Sandalwood",
    keyNotes: "Sweet Neroli · Salted Pistachio · Sandalwood",
    description: "The most concentrated expression of Paradoxe, with sweet neroli, a salted pistachio accord and creamy sandalwood.",
    volumes: ["10 ML", "30 ML", "50 ML", "90 ML", "100 ML Refill"],
    volumePrices: { "10 ML": 4100, "30 ML": 12000, "50 ML": 17200, "90 ML": 20500, "100 ML Refill": 20800 },
    price: "₹22,500",
    image: perfumeImages[16],
  },
  {
    id: 78,
    brand: "Viktor&Rolf",
    name: "Viktor & Rolf Spicebomb Infrared",
    category: "Eau de Parfum",
    fragranceType: "Warm Spicy Woody",
    collection: "Spicebomb",
    concentration: "Eau de Parfum",
    family: "Warm · Spicy · Woody",
    top: "Red Pepper",
    heart: "Leather",
    base: "Resinous Wood Accord",
    keyNotes: "Red Pepper · Leather · Resinous Wood",
    description: "A high-heat men's fragrance built around red pepper, smooth leather and a powerful resinous wood accord.",
    volumes: ["90 ML"],
    price: "₹23,500",
    image: perfumeImages[17],
  },
  {
    id: 79,
    brand: "Jean Paul Gaultier",
    name: "Jean Paul Gaultier Le Male Le Parfum Eau de Parfum Intense",
    category: "Eau de Parfum Intense",
    fragranceType: "Amber Woody",
    collection: "Le Male",
    concentration: "Eau de Parfum Intense",
    family: "Amber Woody",
    top: "Cardamom",
    heart: "Lavender · Iris",
    base: "Vanilla",
    keyNotes: "Cardamom · Lavender · Iris · Vanilla",
    description: "An intense amber woody fragrance combining cardamom, lavender and iris with a prominent vanilla base.",
    volumes: ["75 ML", "125 ML", "200 ML"],
    volumePrices: { "75 ML": 7850, "125 ML": 9910, "200 ML": 12300 },
    price: "₹24,500",
    image: perfumeImages[18],
  },
  {
    id: 80,
    brand: "Dolce&Gabbana",
    name: "Dolce & Gabbana Pour Homme Intenso",
    category: "Eau de Parfum",
    fragranceType: "Fougère Woody",
    collection: "Pour Homme",
    concentration: "Eau de Parfum",
    family: "Fougère Woody",
    top: "Citrus Notes",
    heart: "Lavender · Cypress",
    base: "Woody Notes",
    keyNotes: "Citrus · Lavender · Cypress",
    description: "A richly sensual modern fragrance combining citrus notes with lavender and cypress in a bold fougère woody composition.",
    volumes: ["125 ML"],
    price: "₹18,900",
    image: perfumeImages[19],
  },
],

  };

})();







/* =========================================================



   NAVIGATION



========================================================= */







function Navigation({



  menuOpen,



  setMenuOpen,



  openCategory,



  cartCount,



  onCartOpen,



  onSearchOpen,

  wishlistCount,

  onWishlistOpen,



}) {



  return (



    <header className="navbar">



      <button



        className="brand"



        onClick={() => {



          window.location.hash = "";



          setMenuOpen(false);



        }}



      >



        VASTRA



      </button>







      <nav className="desktop-nav">



        <button



          className="nav-link"



          onClick={() => openCategory("men")}



        >



          MEN



        </button>






<button
  className="nav-link"
  onClick={() => openCategory("women")}
>
  WOMEN
</button>

<button
  className="nav-link"
  onClick={() => openCategory("watches")}
>
  WATCHES
</button>









        <button



          className="nav-link"



          onClick={() => openCategory("perfumes")}



        >



          PERFUMES



        </button>



      </nav>







      <div className="nav-actions">



        <button

          className="nav-action"

          aria-label="Search"

          onClick={onSearchOpen}

        >

          <Search size={17} strokeWidth={1.5} />

        </button>







        <button
          className="nav-action"
          aria-label="Wishlist"
          onClick={onWishlistOpen}
          style={{ position: "relative" }}
        >
          <Heart size={17} strokeWidth={1.5} />
          {wishlistCount > 0 && <span style={{ position: "absolute", top: "-5px", right: "-7px", minWidth: "15px", height: "15px", padding: "0 4px", borderRadius: "50%", background: "#111", color: "#fff", fontSize: "9px", lineHeight: "15px", textAlign: "center", fontWeight: 600 }}>{wishlistCount}</span>}
        </button>

        <button

          className="nav-action"

          aria-label="Shopping Bag"

          onClick={onCartOpen}

          style={{ position: "relative" }}

        >

          <ShoppingBag size={17} strokeWidth={1.5} />

          {cartCount > 0 && (

            <span

              style={{

                position: "absolute",

                top: "-5px",

                right: "-7px",

                minWidth: "15px",

                height: "15px",

                padding: "0 4px",

                borderRadius: "50%",

                background: "#111",

                color: "#fff",

                fontSize: "9px",

                lineHeight: "15px",

                textAlign: "center",

                fontWeight: 600,

              }}

            >

              {cartCount}

            </span>

          )}

        </button>







        <button



          className="mobile-menu-button"



          onClick={() => setMenuOpen(!menuOpen)}



        >



          {menuOpen ? (



            <X size={20} />



          ) : (



            <Menu size={20} />



          )}



        </button>



      </div>







      {menuOpen && (



        <div className="mobile-menu">



          <button



            onClick={() => {



              openCategory("men");



              setMenuOpen(false);



            }}



          >



            MEN



          </button>







          <button



            onClick={() => {



              openCategory("women");



              setMenuOpen(false);



            }}



          >



            WOMEN



          </button>







          <button



            onClick={() => {



              openCategory("perfumes");



              setMenuOpen(false);



            }}



          >



            PERFUMES



          </button>



        </div>



      )}



    </header>



  );



}







/* =========================================================



   HERO



========================================================= */







function Hero() {



  const heroRef = useRef(null);



  const modelRef = useRef(null);



  const contentRef = useRef(null);







  const kickerRef = useRef(null);



  const titleRef = useRef(null);



  const descriptionRef = useRef(null);



  const buttonRef = useRef(null);



  const sideIndexRef = useRef(null);







  useEffect(() => {



    const ctx = gsap.context(() => {



      const timeline = gsap.timeline({



        defaults: {



          ease: "power3.out",



        },



      });







      gsap.set(



        [



          kickerRef.current,



          titleRef.current,



          descriptionRef.current,



          buttonRef.current,



          sideIndexRef.current,



        ],



        {



          opacity: 0,



          y: 30,



        }



      );







      gsap.set(modelRef.current, {



        opacity: 0,



        scale: 1.08,



      });







      timeline



        .to(modelRef.current, {



          opacity: 1,



          scale: 1,



          duration: 1.45,



        })



        .to(



          kickerRef.current,



          {



            opacity: 1,



            y: 0,



            duration: 0.6,



          },



          "-=1"



        )



        .to(



          titleRef.current,



          {



            opacity: 1,



            y: 0,



            duration: 0.7,



          },



          "-=0.45"



        )



        .to(



          descriptionRef.current,



          {



            opacity: 1,



            y: 0,



            duration: 0.6,



          },



          "-=0.4"



        )



        .to(



          buttonRef.current,



          {



            opacity: 1,



            y: 0,



            duration: 0.6,



          },



          "-=0.35"



        )



        .to(



          sideIndexRef.current,



          {



            opacity: 1,



            y: 0,



            duration: 0.7,



          },



          "-=0.45"



        );







      gsap.to(modelRef.current, {



        scale: 1.025,



        duration: 7,



        repeat: -1,



        yoyo: true,



        ease: "sine.inOut",



      });



    }, heroRef);







    return () => ctx.revert();



  }, []);







  useEffect(() => {



    const handleMouseMove = (event) => {



      if (!modelRef.current || !contentRef.current) {



        return;



      }







      const x =



        (event.clientX / window.innerWidth - 0.5) * 2;







      const y =



        (event.clientY / window.innerHeight - 0.5) * 2;







      gsap.to(modelRef.current, {



        x: x * 8,



        y: y * 5,



        duration: 1.2,



        ease: "power3.out",



      });







      gsap.to(contentRef.current, {



        x: x * -3,



        y: y * -2,



        duration: 1.2,



        ease: "power3.out",



      });



    };







    window.addEventListener(



      "mousemove",



      handleMouseMove



    );







    return () => {



      window.removeEventListener(



        "mousemove",



        handleMouseMove



      );



    };



  }, []);







  return (



    <section



      ref={heroRef}



      className="hero"



      id="home"



    >



      <div className="hero-background">



        <video
          ref={modelRef}
          className="hero-model"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        >
          <source src="/videos/vastra-editorial.mp4" type="video/mp4" />
        </video>







        <div className="hero-overlay" />



        <div className="hero-vignette" />



      </div>







      <div



        ref={contentRef}



        className="hero-content"



      >



        <div



          ref={kickerRef}



          className="hero-kicker"



        >



          VASTRA / 2026



        </div>







        <h1



          ref={titleRef}



          className="hero-title"



        >



          <span className="hero-title-mask">



            <span className="hero-title-line">



              THE NEW



            </span>



          </span>







          <span className="hero-title-mask">



            <span className="hero-title-line">



              STANDARD



            </span>



          </span>



        </h1>







        <p



          ref={descriptionRef}



          className="hero-description"



        >



          A study in modern luxury.



          <br />



          Designed with intention.



        </p>







        <button
  ref={buttonRef}
  className="hero-button"
  onClick={() => {
    document.getElementById("collections-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
>
  DISCOVER COLLECTION
  <ArrowUpRight size={16} />
</button>



      </div>







      <div className="scroll-indicator">



        <span>SCROLL TO EXPLORE</span>



        <div className="scroll-line" />



      </div>



    </section>



  );



}







/* =========================================================



   INTRO



========================================================= */







function IntroSection() {
  return (
    <section
      className="intro-section"
      style={{
        position: "relative",
        minHeight: "78vh",
        overflow: "hidden",
        isolation: "isolate",
        background: "#171411",
        color: "#f5f1eb",
      }}
    >
      <video
        className="vastra-intro-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
        }}
      >
        <source src="/videos/intro-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(8,7,6,0.72) 0%, rgba(8,7,6,0.42) 38%, rgba(8,7,6,0.12) 72%, rgba(8,7,6,0.20) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 45%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "78vh",
          padding: "clamp(90px, 13vw, 170px) 5vw 70px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          className="intro-small"
          style={{
            color: "#fff",
            marginBottom: "20px",
            fontSize: "10px",
            letterSpacing: "0.28em",
            fontWeight: 500,
            opacity: 0.86,
          }}
        >
          THE HOUSE OF VASTRA
        </div>

        <div
          className="intro-heading"
          style={{
            maxWidth: "760px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#fff",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 85px)",
              lineHeight: 0.82,
              letterSpacing: "-0.055em",
              fontWeight: 400,
              textShadow: "0 4px 30px rgba(0,0,0,0.22)",
            }}
          >
            QUIET
            <br />
            LUXURY.
          </h2>

          <p
            style={{
              maxWidth: "610px",
              margin: "30px 0 0",
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(12px, 1.1vw, 15px)",
              lineHeight: 1.7,
              letterSpacing: "0.015em",
            }}
          >
            VASTRA is an expression of contemporary luxury shaped by precision,
            restraint and timeless design.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            marginTop: "clamp(70px, 10vw, 120px)",
            color: "rgba(255,255,255,0.68)",
            fontSize: "9px",
            letterSpacing: "0.22em",
          }}
        >

        </div>
      </div>
    </section>
  );
}


/* =========================================================

   CATEGORY CARDS

========================================================= */

/* =========================================================



   CATEGORY CARDS



========================================================= */







function CategoryCard({ category, id, onClick }) {
  const imageRef = useRef(null);

  const handleEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.045,
      duration: 1.1,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
    });
  };

  const title = id === "perfumes" ? "FRAGRANCE" : category.title;

  return (
    <article
      className="vastra-category-card"
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 5",
        minHeight: 0,
        overflow: "hidden",
        background: "#171513",
        cursor: "pointer",
        isolation: "isolate",
      }}
    >
      <div
  ref={imageRef}
  aria-hidden="true"
  style={{
    position: "absolute",
    inset: id === "women" ? "0" : "-2%",
    backgroundImage: `url(${category.image})`,
    backgroundPosition: id === "women" ? "center top" : "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transform: "scale(1)",
    willChange: "transform",
  }}
/>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.03) 20%, rgba(0,0,0,0.10) 42%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "12px",
          zIndex: 2,
          border: "1px solid rgba(255,255,255,0.42)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "28px",
          right: "28px",
          bottom: "28px",
          zIndex: 3,
          color: "#fff",
          textAlign: "left",
        }}
      >
        <span
          style={{
            display: "block",
            height: "10px",
            marginBottom: "9px",
            fontSize: "9px",
            lineHeight: 1,
            letterSpacing: "0.28em",
            fontWeight: 500,
            opacity: 0.82,
          }}
        >
          VASTRA
        </span>

        <h3
          style={{
            margin: 0,
            height: "91px",
            display: "flex",
            alignItems: "flex-start",
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "clamp(30px, 3vw, 48px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            overflow: "visible",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            height: "14px",
            display: "flex",
            alignItems: "flex-start",
            fontSize: "9px",
            lineHeight: 1.5,
            letterSpacing: "0.19em",
            opacity: 0.82,
            fontWeight: 500,
          }}
        >
          {category.subtitle}
        </p>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            marginTop: "18px",
            paddingBottom: "7px",
            borderBottom: "1px solid rgba(255,255,255,0.72)",
            fontSize: "9px",
            letterSpacing: "0.20em",
            fontWeight: 600,
          }}
        >
          EXPLORE
          <ArrowUpRight size={13} strokeWidth={1.4} />
        </span>
      </div>
    </article>
  );
}


/* =========================================================
   CATEGORY SECTION
========================================================= */

function CollectionsTransition() {
  return (
    <section
      className="vastra-collections-transition"
      aria-label="Vastra collections introduction"
      style={{
  width: "100%",
  height: "30vh",
  minHeight: "260px",
  padding: "0 5vw",
  background: "#0d0c0b",
  color: "#f4efe7",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}}
     id="collections-section">
      <div
        style={{
          borderTop: "1px solid rgba(244,239,231,0.28)",
          paddingTop: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            fontSize: "9px",
            lineHeight: 1,
            letterSpacing: "0.24em",
            fontWeight: 500,
            opacity: 0.62,
          }}
        >
          <span>01</span>
          <span>COLLECTIONS</span>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "0.32em",
              fontWeight: 500,
              opacity: 0.58,
              marginBottom: "14px",
            }}
          >
            THE HOUSE OF VASTRA
          </div>

          <h2
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(30px, 4vw, 54px)",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "-0.035em",
            }}
          >
            DISCOVER VASTRA
          </h2>

          <p
            style={{
              margin: "15px 0 0",
              fontSize: "9px",
              letterSpacing: "0.25em",
              lineHeight: 1.6,
              opacity: 0.62,
            }}
          >
            FOUR EXPRESSIONS OF MODERN LUXURY
          </p>
        </div>
      </div>
    </section>
  );
}


function CategorySection({ openCategory }) {
  return (
    <section
      id="collections"
      style={{
  width: "100%",
  height: "70vh",
  minHeight: "520px",
  padding: "0 5vw 4vh",
  background: "#0d0c0b",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
}}
    >
      <style>{`
html { scroll-behavior: smooth; }

        .vastra-category-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
        }

        .vastra-category-card {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vastra-category-card:hover {
          transform: translateY(-4px);
        }

        .vastra-category-card:focus-visible {
          outline: 1px solid rgba(255,255,255,0.8);
          outline-offset: 4px;
        }

        @media (max-width: 1000px) {
          .vastra-category-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .vastra-category-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

      <div className="vastra-category-grid">
        <CategoryCard
          id="men"
          category={categories.men}
          onClick={() => openCategory("men")}
        />

        <CategoryCard
          id="women"
          category={categories.women}
          onClick={() => openCategory("women")}
        />

        <CategoryCard
          id="watches"
          category={categories.watches}
          onClick={() => openCategory("watches")}
        />

        <CategoryCard
          id="perfumes"
          category={categories.perfumes}
          onClick={() => openCategory("perfumes")}
        />
      </div>
    </section>
  );
}

  /* =========================================================
     PRODUCT CARD



========================================================= */







function ProductCard({ product, onAddToCart, onQuickView, onOpenProduct, isWishlisted, onToggleWishlist }) {
  const imageRef = useRef(null);
  const handleEnter = () => gsap.to(imageRef.current, { scale: 1.04, duration: 0.8, ease: "power3.out" });
  const handleLeave = () => gsap.to(imageRef.current, { scale: 1, duration: 0.8, ease: "power3.out" });
  return (
    <article className="product-card" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="product-image" style={{ position: "relative" }}>
        <img ref={imageRef} src={product.image} alt={product.name} />
        <button type="button" aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} onClick={(event) => { event.preventDefault(); event.stopPropagation(); onToggleWishlist(product); }} style={{ position: "absolute", top: "14px", right: "14px", zIndex: 25, width: "38px", height: "38px", border: "1px solid rgba(255,255,255,0.65)", borderRadius: "50%", background: "rgba(17,17,17,0.48)", color: isWishlisted ? "#e11d2e" : "#fff", display: "grid", placeItems: "center", cursor: "pointer", backdropFilter: "blur(5px)" }}>
          <Heart size={16} strokeWidth={1.5} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
        <button className="product-quick-view" onClick={() => onQuickView(product)}>QUICK VIEW <ArrowUpRight size={14} /></button>
      </div>
      <div
        className="product-details"
        style={{
          minHeight: "94px",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
        </div>
        <span className="product-price">{formatVastraPrice(getDisplayPrice(product))}</span>
      </div>
    </article>
  );
}

/* =========================================================



   COLLECTION PAGE



========================================================= */







const getWatchFilterMeta = (product) => {
  const name = String(product?.name || "");
  const lowerName = name.toLowerCase();
  const details = getProductDetails(product) || {};

  let brand = "Other";
  if (lowerName.includes("richard mille")) brand = "Richard Mille";
  else if (lowerName.includes("jacob & co")) brand = "Jacob & Co.";
  else if (lowerName.includes("patek philippe")) brand = "Patek Philippe";
  else if (lowerName.includes("audemars piguet")) brand = "Audemars Piguet";
  else if (lowerName.includes("cartier") || lowerName.includes("santos de cartier")) brand = "Cartier";
  else if (lowerName.includes("bulgari")) brand = "Bulgari";
  else if (lowerName.includes("rolex")) brand = "Rolex";

  let movement = "Automatic";
  if (/quartz/.test(String(details.movement || "").toLowerCase()) || lowerName.includes("daniel wellington")) {
    movement = "Quartz";
  } else if (/hand-wound|manual/.test(String(details.movement || "").toLowerCase())) {
    movement = "Manual";
  }

  const materialsText = String(details.materials || "").toLowerCase();
  const materials = [];
  if (/gold|rose gold|everose/.test(materialsText) || /gold/.test(lowerName)) materials.push("Gold");
  if (/steel|stainless/.test(materialsText) || lowerName.includes("santos")) materials.push("Steel");
  if (/ceramic/.test(materialsText) || lowerName.includes("ceramic")) materials.push("Ceramic");

  return {
    brand,
    movement,
    materials,
    price: priceNumber(product?.price),
  };
};


function FilterGroup({ title, values, selected, onToggle }) {
  const [open, setOpen] = useState(false);
  if (!values.length) return null;

  return (
    <div style={{ padding: "22px 0", borderTop: "1px solid rgba(17,17,17,0.10)" }}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(17,17,17,0.18)",
          background: "transparent",
          color: "#111",
          padding: "12px",
          fontSize: "11px",
          letterSpacing: "0.16em",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: "18px",
            lineHeight: 1,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div
          style={{
            marginTop: "8px",
            border: "1px solid rgba(17,17,17,0.12)",
            padding: "12px",
            display: "grid",
            gap: "10px",
          }}
        >
          {values.map((value) => (
            <label
              key={value}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={selected.includes(value)}
                onChange={() => onToggle(value)}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}


function CollectionPage({



  categoryKey,



  onBack,



  openCategory,
  onAddToCart,
  onQuickView,
  onOpenProduct,

  isWishlisted,

  onToggleWishlist,



}) {



  const category = categories[categoryKey];



  const categoryProducts = products[categoryKey];

  const [filterOpen, setFilterOpen] = useState(false);
  const [collectionLoading, setCollectionLoading] = useState(true);
  const [filterValues, setFilterValues] = useState({
    brand: [],
    category: [],
    color: [],
    family: [],
    concentration: [],
    movement: [],
    material: [],
    price: "all",
    sort: "featured",
  });

  useEffect(() => {
    setCollectionLoading(true);
    const loadingTimer = window.setTimeout(() => setCollectionLoading(false), 480);
    setFilterValues({
      brand: [],
      category: [],
      color: [],
      family: [],
      concentration: [],
      movement: [],
      material: [],
      price: "all",
      sort: "featured",
    });
    setFilterOpen(false);
    return () => window.clearTimeout(loadingTimer);
  }, [categoryKey]);

  const toggleFilter = (group, value) => {
    setFilterValues((current) => ({
      ...current,
      [group]: current[group].includes(value)
        ? current[group].filter((item) => item !== value)
        : [...current[group], value],
    }));
  };

  const clearFilters = () => {
    setFilterValues({
      brand: [],
      category: [],
      color: [],
      family: [],
      concentration: [],
      movement: [],
      material: [],
      price: "all",
      sort: "featured",
    });
  };

  const getAvailableFilterValues = (group) => {
    const values = new Set();
    categoryProducts.forEach((product) => {
      if (group === "brand") {
        const brandValue =
          categoryKey === "watches"
            ? getWatchFilterMeta(product)?.brand
            : product.brand;
        if (brandValue) values.add(brandValue);
      }
      if (group === "category") {
        const categoryValue =
          categoryKey === "perfumes"
            ? product.fragranceType
            : product.category;
        if (categoryValue) values.add(categoryValue);
      }
      if (group === "color" && product.color) values.add(product.color);
      if (group === "family" && product.family) values.add(product.family);
      if (group === "concentration" && product.concentration) values.add(product.concentration);
      if (group === "movement") {
        const movement = getWatchFilterMeta(product)?.movement;
        if (movement) values.add(movement);
      }
      if (group === "material") {
        const materials = getWatchFilterMeta(product)?.materials || [];
        materials.forEach((material) => values.add(material));
      }
    });
    return [...values].sort((a, b) => a.localeCompare(b));
  };

  // Price ranges are category-specific so customers only see useful
  // price bands for the products they are browsing.
  const priceRangesByCategory = {
    men: [
      { key: "all", label: "All prices", min: 0, max: Number.POSITIVE_INFINITY },
      { key: "under-20k", label: "Under ₹20K", min: 0, max: 20000 },
      { key: "20k-30k", label: "₹20K — ₹30K", min: 20000, max: 30000 },
      { key: "30k-40k", label: "₹30K — ₹40K", min: 30000, max: 40000 },
      { key: "40k-50k", label: "₹40K — ₹50K", min: 40000, max: 50000 },
      { key: "over-50k", label: "Over ₹50K", min: 50000, max: Number.POSITIVE_INFINITY },
    ],
    women: [
      { key: "all", label: "All prices", min: 0, max: Number.POSITIVE_INFINITY },
      { key: "under-20k", label: "Under ₹20K", min: 0, max: 20000 },
      { key: "20k-30k", label: "₹20K — ₹30K", min: 20000, max: 30000 },
      { key: "30k-40k", label: "₹30K — ₹40K", min: 30000, max: 40000 },
      { key: "40k-50k", label: "₹40K — ₹50K", min: 40000, max: 50000 },
      { key: "over-50k", label: "Over ₹50K", min: 50000, max: Number.POSITIVE_INFINITY },
    ],
    watches: [
      { key: "all", label: "All prices", min: 0, max: Number.POSITIVE_INFINITY },
      { key: "under-10l", label: "Under ₹10L", min: 0, max: 1000000 },
      { key: "10l-25l", label: "₹10L — ₹25L", min: 1000000, max: 2500000 },
      { key: "25l-50l", label: "₹25L — ₹50L", min: 2500000, max: 5000000 },
      { key: "50l-1cr", label: "₹50L — ₹1Cr", min: 5000000, max: 10000000 },
      { key: "over-1cr", label: "Over ₹1Cr", min: 10000000, max: Number.POSITIVE_INFINITY },
    ],
    perfumes: [
      { key: "all", label: "All prices", min: 0, max: Number.POSITIVE_INFINITY },
      { key: "under-15k", label: "Under ₹15K", min: 0, max: 15000 },
      { key: "15k-20k", label: "₹15K — ₹20K", min: 15000, max: 20000 },
      { key: "20k-25k", label: "₹20K — ₹25K", min: 20000, max: 25000 },
      { key: "over-25k", label: "Over ₹25K", min: 25000, max: Number.POSITIVE_INFINITY },
    ],
  };

  const priceRanges = priceRangesByCategory[categoryKey] || priceRangesByCategory.men;

  const displayedProducts = [...categoryProducts]
    .filter((product) => {
      const meta = categoryKey === "watches" ? getWatchFilterMeta(product) : null;
      const price = priceNumber(product.price);
      const range = priceRanges.find((item) => item.key === filterValues.price) || priceRanges[0];

      if (price < range.min) return false;
      if (Number.isFinite(range.max) && price >= range.max) return false;
      if (filterValues.brand.length) {
        const productBrandValue =
          categoryKey === "watches"
            ? getWatchFilterMeta(product)?.brand
            : product.brand;
        if (!filterValues.brand.includes(productBrandValue)) return false;
      }
      const productCategoryValue =
        categoryKey === "perfumes"
          ? product.fragranceType
          : product.category;
      if (filterValues.category.length && !filterValues.category.includes(productCategoryValue)) return false;
      if (filterValues.color.length && !filterValues.color.includes(product.color)) return false;
      if (filterValues.family.length && !filterValues.family.includes(product.family)) return false;
      if (filterValues.concentration.length && !filterValues.concentration.includes(product.concentration)) return false;

      if (categoryKey === "watches") {
        if (filterValues.movement.length && !filterValues.movement.includes(meta?.movement)) return false;
        if (filterValues.material.length && !filterValues.material.some((material) => (meta?.materials || []).includes(material))) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filterValues.sort === "price-low") return priceNumber(a.price) - priceNumber(b.price);
      if (filterValues.sort === "price-high") return priceNumber(b.price) - priceNumber(a.price);
      if (filterValues.sort === "newest") return b.id - a.id;
      return 0;
    });

  const filterCount = Object.values(filterValues).reduce(
    (count, value) => count + (Array.isArray(value) ? value.length : value !== "all" && value !== "featured" ? 1 : 0),
    0
  );






  const pageRef = useRef(null);







  useEffect(() => {



    window.scrollTo({



      top: 0,



      behavior: "instant",



    });







    const ctx = gsap.context(() => {



      gsap.from(".collection-hero-content", {



        opacity: 0,



        y: 40,



        duration: 1,



        ease: "power3.out",



      });







      gsap.from(".product-card", {



        opacity: 0,



        y: 40,



        duration: 0.8,



        stagger: 0.08,



        delay: 0.2,



        ease: "power3.out",



      });



    }, pageRef);







    return () => ctx.revert();



  }, [categoryKey]);







  return (



    <div



      ref={pageRef}



      className="collection-page"



    >



      {/* COLLECTION HERO */}







      <section
        className="collection-hero"
        style={{
          backgroundImage:
            ["men", "women", "watches", "perfumes"].includes(categoryKey)
              ? "none"
              : `url(${category.heroImage})`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {["men", "women", "watches", "perfumes"].includes(categoryKey) && (
          <video
            key={categoryKey}
            className="collection-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "#0d0c0b",
              objectPosition: "center center",
              display: "block",
              zIndex: 0,
            }}
          >
            <source
              src={
                categoryKey === "men"
                  ? "/videos/men-collection.mp4"
                  : categoryKey === "women"
                  ? "/videos/women-collection.mp4"
                  : categoryKey === "watches"
                  ? "/videos/watch-collection.mp4"
                  : "/videos/perfume-collection.mp4"
              }
              type="video/mp4"
            />
          </video>
        )}

        <div
          className="collection-hero-overlay"
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        />







        <button
          className="collection-back"
          style={{ position: "relative", zIndex: 3 }}



          onClick={onBack}



        >



          <ArrowLeft size={17} />



          BACK TO VASTRA



        </button>











      </section>







      {/* COLLECTION NAVIGATION */}







      <section className="collection-navigation">

        <span>THE COLLECTION</span>

      </section>




      {/* PRODUCTS */}







      <section className="products-section">



        <div className="products-header">



          <div>



            <span>VASTRA / {category.title}</span>







            <h2>



              {categoryKey === "men" &&
  "THE ART OF TAILORING"}

{categoryKey === "women" &&
  "THE ART OF ELEGANCE"}

{categoryKey === "watches" &&
  "THE ART OF TIME"}

{categoryKey === "perfumes" &&
  "THE ART OF SCENT"}



            </h2>



          </div>







          <p>



            {displayedProducts.length} pieces



          </p>



        </div>







        <div style={{ margin: "0 0 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(17,17,17,0.22)", background: "transparent", color: "#111", padding: "12px 18px", fontSize: "10px", letterSpacing: "0.16em", fontWeight: 600, cursor: "pointer", textTransform: "uppercase" }}
          >
            FILTER{filterCount > 0 ? ` (${filterCount})` : ""}
          </button>
        </div>

        {filterOpen && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: 1500, background: "rgba(13,12,11,0.55)", backdropFilter: "blur(6px)", display: "flex", justifyContent: "flex-end" }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setFilterOpen(false); }}
          >
            <aside className="filter-drawer" style={{ width: "min(440px, 100%)", height: "100%", overflowY: "auto", background: "#f7f4ef", color: "#111", padding: "28px", boxSizing: "border-box", boxShadow: "-20px 0 60px rgba(0,0,0,0.18)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "34px" }}>
                <div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.22em", opacity: 0.5, marginBottom: "8px" }}>VASTRA / {category.title}</div>
                  <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "30px" }}>FILTER</div>
                </div>
                <button type="button" onClick={() => setFilterOpen(false)} aria-label="Close filters" style={{ width: "36px", height: "36px", border: "1px solid rgba(17,17,17,0.18)", background: "transparent", color: "#111", cursor: "pointer", display: "grid", placeItems: "center" }}><X size={18} strokeWidth={1.4} /></button>
              </div>

              <FilterGroup title="BRAND" values={getAvailableFilterValues("brand")} selected={filterValues.brand} onToggle={(value) => toggleFilter("brand", value)} />

              <FilterGroup title={categoryKey === "perfumes" ? "FRAGRANCE TYPE" : "CATEGORY"} values={getAvailableFilterValues("category")} selected={filterValues.category} onToggle={(value) => toggleFilter("category", value)} />

              {categoryKey === "perfumes" && (
                <>
                  <FilterGroup title="FRAGRANCE FAMILY" values={getAvailableFilterValues("family")} selected={filterValues.family} onToggle={(value) => toggleFilter("family", value)} />
                  <FilterGroup title="CONCENTRATION" values={getAvailableFilterValues("concentration")} selected={filterValues.concentration} onToggle={(value) => toggleFilter("concentration", value)} />
                </>
              )}

              {categoryKey !== "watches" && categoryKey !== "perfumes" && (
                <FilterGroup title="COLOUR" values={getAvailableFilterValues("color")} selected={filterValues.color} onToggle={(value) => toggleFilter("color", value)} />
              )}

              {categoryKey === "watches" && (
                <>
                  <FilterGroup title="MOVEMENT" values={getAvailableFilterValues("movement")} selected={filterValues.movement} onToggle={(value) => toggleFilter("movement", value)} />
                  <FilterGroup title="CASE MATERIAL" values={getAvailableFilterValues("material")} selected={filterValues.material} onToggle={(value) => toggleFilter("material", value)} />
                </>
              )}

              <div style={{ padding: "22px 0", borderTop: "1px solid rgba(17,17,17,0.10)" }}>
                <div style={{ fontSize: "9px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "12px" }}>PRICE</div>
                <select value={filterValues.price} onChange={(event) => setFilterValues((current) => ({ ...current, price: event.target.value }))} style={{ width: "100%", border: "1px solid rgba(17,17,17,0.18)", background: "transparent", color: "#111", padding: "12px", fontSize: "11px" }}>
                  {priceRanges.map((range) => <option key={range.key} value={range.key}>{range.label}</option>)}
                </select>
              </div>

              <div style={{ padding: "22px 0", borderTop: "1px solid rgba(17,17,17,0.10)" }}>
                <div style={{ fontSize: "9px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "12px" }}>SORT</div>
                <select value={filterValues.sort} onChange={(event) => setFilterValues((current) => ({ ...current, sort: event.target.value }))} style={{ width: "100%", border: "1px solid rgba(17,17,17,0.18)", background: "transparent", color: "#111", padding: "12px", fontSize: "11px" }}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low → High</option>
                  <option value="price-high">Price: High → Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button type="button" onClick={clearFilters} style={{ flex: 1, border: "1px solid rgba(17,17,17,0.20)", background: "transparent", color: "#111", padding: "13px", fontSize: "9px", letterSpacing: "0.14em", cursor: "pointer" }}>CLEAR ALL</button>
                <button type="button" onClick={() => setFilterOpen(false)} style={{ flex: 1, border: "1px solid #111", background: "#111", color: "#f7f4ef", padding: "13px", fontSize: "9px", letterSpacing: "0.14em", cursor: "pointer" }}>VIEW {displayedProducts.length} PIECES</button>
              </div>
            </aside>
          </div>
        )}

        <div className="products-grid">

          {collectionLoading ? (
            Array.from({ length: Math.min(3, Math.max(1, categoryProducts.length)) }).map((_, index) => (
              <div key={`skeleton-${index}`} aria-hidden="true" style={{ minWidth: 0 }}>
                <div className="vastra-product-skeleton" style={{ aspectRatio: "0.78", width: "100%" }} />
                <div className="vastra-product-loading-copy" />
                <div className="vastra-product-loading-price" />
              </div>
            ))
          ) : (
            displayedProducts.map((product) => (



            <ProductCard



              key={product.id}



              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            onOpenProduct={onOpenProduct}
              isWishlisted={isWishlisted(product)}
              onToggleWishlist={onToggleWishlist}
            />

          ))
          )}

        </div>



      </section>











    </div>



  );



}







/* =========================================================



   FOOTER



========================================================= */







function Footer({ openCategory, onAboutOpen, onPhilosophyOpen, onPrivateClientOpen }) {
  return (
    <footer className="footer" style={{ paddingTop: "125px" }}>
      <div
        className="footer-columns"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "0 18vw",
          marginTop: "40px",
          alignItems: "start",
        }}
      >
        <div className="footer-column footer-explore" style={{ gap: "22px" }}>
                    
          
                  </div>
        <div className="footer-column" style={{ gap: "22px" }}>
                  </div>
      </div>
      <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "end",
  gap: "24px",
  marginBottom: "3px",
}}>
  <div style={{ textAlign: "left", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
    <button type="button" onClick={onAboutOpen} style={{ fontSize: "14px", lineHeight: 1.2 }}>About</button>
    <a
      href="mailto:rajveerarora0725@gmail.com"
      style={{
        fontSize: "14px",
        lineHeight: 1.2,
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
      }}
      aria-label="Email VASTRA via Gmail"
    >
      Gmail
    </a>
  </div>
  <div style={{ textAlign: "right" }}><button type="button" onClick={onPhilosophyOpen} style={{ fontSize: "14px", lineHeight: 1.2, whiteSpace: "nowrap" }}>Our Philosophy</button></div>
</div>
<div className="footer-bottom">
        <span>© 2026 VASTRA</span><span>CRAFTED WITH INTENTION</span>
      </div>
    </footer>
  );
}


/* =========================================================

   SEARCH OVERLAY

========================================================= */



const getProductBrand = (product) => {
  if (product?.brand) return String(product.brand).replace(/-inspired$/i, "").trim();
  const name = String(product?.name || "");
  const brands = [
    "Richard Mille", "Jacob & Co.", "Patek Philippe", "Audemars Piguet",
    "Cartier", "Daniel Wellington", "Bulgari", "Rolex",
  ];
  return brands.find((brand) => name.toLowerCase().includes(brand.toLowerCase())) || "";
};

const getProductCollection = (product) => {
  const category = String(product?.category || "");
  if (product?.id >= 101) return "Watches";
  if (product?.id >= 61) return "Perfumes";
  if (product?.gender === "men") return "Men";
  if (product?.gender === "women") return "Women";
  return category;
};

function SearchOverlay({

  open,

  onClose,

  onAddToCart,

  onQuickView,

}) {

  const [query, setQuery] = useState("");



  useEffect(() => {

    if (open) {

      setQuery("");

    }

  }, [open]);



  if (!open) {

    return null;

  }



  const allProducts = [
  ...products.men,
  ...products.women,
  ...products.watches,
  ...products.perfumes,
];



  const normalizedQuery = query.trim().toLowerCase();

  const searchableText = (product) =>
    `${product.name || ""} ${getProductBrand(product)} ${product.category || ""} ${getProductCollection(product)} ${product.fragranceType || ""} ${product.family || ""}`
      .toLowerCase();

  const results = normalizedQuery
    ? allProducts.filter((product) => {
        const haystack = searchableText(product);
        const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
        return tokens.every((token) => haystack.includes(token));
      })
    : allProducts.slice(0, 8);

  const suggestions = normalizedQuery ? results.slice(0, 6) : [];



  return (

    <div

      className="search-overlay"
      style={{

        position: "fixed",

        inset: 0,

        zIndex: 1200,

        background: "rgba(15, 15, 15, 0.58)",

        backdropFilter: "blur(8px)",

        WebkitBackdropFilter: "blur(8px)",

        display: "flex",

        justifyContent: "center",

        alignItems: "flex-start",

        padding: "80px 20px 20px",

      }}

      onMouseDown={(event) => {

        if (event.target === event.currentTarget) {

          onClose();

        }

      }}

    >

      <div
        className="search-panel"
        style={{

          width: "min(760px, 100%)",

          maxHeight: "calc(100vh - 100px)",

          overflow: "hidden",

          background: "#f7f4ef",

          color: "#111",

          boxShadow: "0 30px 80px rgba(0,0,0,0.28)",

          display: "flex",

          flexDirection: "column",

        }}

      >

        <div

          style={{

            padding: "22px 24px",

            borderBottom: "1px solid rgba(17,17,17,0.12)",

            display: "flex",

            alignItems: "center",

            gap: "14px",

          }}

        >

          <Search size={18} strokeWidth={1.5} />



          <input

            autoFocus

            value={query}

            onChange={(event) => setQuery(event.target.value)}

            placeholder="SEARCH VASTRA"

            style={{

              flex: 1,

              border: 0,

              outline: 0,

              background: "transparent",

              color: "#111",

              fontSize: "13px",

              letterSpacing: "0.12em",

              textTransform: "uppercase",

            }}

          />



          <button

            type="button"

            onClick={onClose}

            aria-label="Close search"

            style={{

              border: 0,

              background: "transparent",

              cursor: "pointer",

              color: "#111",

              display: "grid",

              placeItems: "center",

            }}

          >

            <X size={20} strokeWidth={1.5} />

          </button>

        </div>

        {normalizedQuery && (
          <div style={{ padding: "18px 24px 12px", borderBottom: "1px solid rgba(17,17,17,0.08)" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.18em", opacity: 0.55 }}>SEARCH RESULTS FOR</div>
            <div style={{ marginTop: "7px", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <strong style={{ fontSize: "18px", fontWeight: 500, textTransform: "uppercase" }}>&quot;{query.trim()}&quot;</strong>
              <span style={{ fontSize: "10px", opacity: 0.55 }}>{results.length} {results.length === 1 ? "RESULT" : "RESULTS"}</span>
            </div>
          </div>
        )}

        {normalizedQuery && suggestions.length > 0 && (
          <div
            className="search-suggestions"
            style={{
              borderBottom: "1px solid rgba(17,17,17,0.12)",
              background: "#fbf9f5",
              padding: "6px 10px",
              boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            }}
          >
            {suggestions.map((product) => (
              <button
                key={`suggestion-${product.id}`}
                type="button"
                onClick={() => onQuickView(product)}
                style={{
                  width: "100%",
                  border: 0,
                  borderBottom: "1px solid rgba(17,17,17,0.07)",
                  background: "transparent",
                  color: "#111",
                  padding: "10px 12px",
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(event) => { event.currentTarget.style.background = "rgba(17,17,17,0.045)"; }}
                onMouseLeave={(event) => { event.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ width: "48px", height: "58px", overflow: "hidden", background: "#e8e4dd", display: "block" }}>
                  <img src={product.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: "12px", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.name}</span>
                  <span style={{ display: "block", marginTop: "5px", fontSize: "8px", letterSpacing: "0.12em", opacity: 0.5, textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {getProductBrand(product) || product.category} · {getProductCollection(product)}
                  </span>
                </span>
                <ArrowUpRight size={14} strokeWidth={1.4} />
              </button>
            ))}
          </div>
        )}

        {normalizedQuery && suggestions.length === 0 && (
          <div
            className="search-no-results"
            style={{
              borderBottom: "1px solid rgba(17,17,17,0.12)",
              background: "#fbf9f5",
              padding: "18px 24px",
              fontSize: "10px",
              letterSpacing: "0.14em",
              opacity: 0.58,
              textTransform: "uppercase",
            }}
          >
            No matching products
          </div>
        )}

        <div style={{ overflowY: "auto", padding: "22px 24px 28px" }}>

          <div

            style={{

              fontSize: "10px",

              letterSpacing: "0.18em",

              opacity: 0.55,

              marginBottom: "18px",

            }}

          >

            {normalizedQuery

              ? `${results.length} RESULT${results.length === 1 ? "" : "S"}`

              : "POPULAR VASTRA PIECES"}

          </div>



          {results.length === 0 ? (

            <div

              style={{

                padding: "55px 10px",

                textAlign: "center",

                fontSize: "12px",

                letterSpacing: "0.12em",

                opacity: 0.6,

              }}

            >

              NO RESULTS FOUND

            </div>

          ) : (

            <div

              style={{

                display: "grid",

                gridTemplateColumns:

                  "repeat(auto-fill, minmax(180px, 1fr))",

                gap: "18px",

              }}

            >

              {results.map((product) => (

                <article key={product.id}>

                  <button

                    type="button"

                    onClick={() => onQuickView(product)}

                    style={{

                      width: "100%",

                      border: 0,

                      padding: 0,

                      background: "transparent",

                      cursor: "pointer",

                      textAlign: "left",

                    }}

                  >

                    <div

                      style={{

                        aspectRatio: "0.8",

                        overflow: "hidden",

                        background: "#e8e4dd",

                      }}

                    >

                      <img

                        src={product.image}

                        alt={product.name}

                        style={{

                          width: "100%",

                          height: "100%",

                          objectFit: "cover",

                          display: "block",

                        }}

                      />

                    </div>

                  </button>



                  <div

                    style={{

                      display: "flex",

                      justifyContent: "space-between",

                      gap: "10px",

                      paddingTop: "10px",

                    }}

                  >

                    <div>

                      <div

                        style={{

                          fontSize: "9px",

                          letterSpacing: "0.14em",

                          opacity: 0.55,

                          textTransform: "uppercase",

                          marginBottom: "5px",

                        }}

                      >

                        {product.category}

                      </div>



                      <div

                        style={{

                          fontSize: "12px",

                          letterSpacing: "0.02em",

                        }}

                      >

                        {product.name}

                      </div>



                      <div

                        style={{

                          fontSize: "11px",

                          marginTop: "5px",

                        }}

                      >

                        {formatVastraPrice(getDisplayPrice(product))}

                      </div>

                    </div>



                    <button

                      type="button"

                      onClick={(event) => {

                        event.preventDefault();

                        event.stopPropagation();

                        onAddToCart(product);

                      }}

                      style={{

                        alignSelf: "flex-end",

                        border: "1px solid rgba(17,17,17,0.2)",

                        background: "transparent",

                        padding: "8px 9px",

                        cursor: "pointer",

                        fontSize: "9px",

                        letterSpacing: "0.12em",

                        whiteSpace: "nowrap",

                      }}

                    >

                      ADD

                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );

}





/* =========================================================
   VASTRA PRODUCT SIZE / VOLUME DATA
========================================================= */

const formatVastraPrice = (value) => {
  const raw = String(value ?? "").trim();

  const formatNumber = (part) => {
    const numeric = Number(String(part).replace(/[₹,\s]/g, ""));
    return Number.isFinite(numeric) ? numeric.toLocaleString("en-IN") : part.trim();
  };

  // Supports single prices and ranges such as ₹9,300–₹9,650.
  const rangeParts = raw.split(/\s*[–—-]\s*/);
  if (rangeParts.length === 2 && rangeParts.every((part) => /\d/.test(part))) {
    return `₹${formatNumber(rangeParts[0])}–₹${formatNumber(rangeParts[1])}`;
  }

  return `₹${formatNumber(raw)}`;
};

const priceNumber = (price) => {
  const raw = String(price ?? "0").replace(/[₹,\s]/g, "");
  const firstNumber = raw.match(/\d+(?:\.\d+)?/);
  return firstNumber ? Number(firstNumber[0].replace(/,/g, "")) : 0;
};

const measurement = (cm) => ({
  cm,
  in: Number(cm / 2.54).toFixed(1),
});

const measurementRange = (minCm, maxCm) => ({
  cm: `${minCm}–${maxCm}`,
  in: `${(minCm / 2.54).toFixed(1)}–${(maxCm / 2.54).toFixed(1)}`,
});

const VASTRA_CLOTHING_OPTIONS = {
  men: [
    { key: "36", label: "36 / S", uk: "36", us: "36", surcharge: 0 },
    { key: "38", label: "38 / M", uk: "38", us: "38", surcharge: 500 },
    { key: "40", label: "40 / L", uk: "40", us: "40", surcharge: 1000 },
    { key: "42", label: "42 / XL", uk: "42", us: "42", surcharge: 1500 },
    { key: "44", label: "44 / XXL", uk: "44", us: "44", surcharge: 2000 },
  ],
  women: [
    { key: "XS", label: "XS", uk: "6", us: "2", surcharge: 0 },
    { key: "S", label: "S", uk: "8", us: "4", surcharge: 500 },
    { key: "M", label: "M", uk: "10", us: "6", surcharge: 1000 },
    { key: "L", label: "L", uk: "12", us: "8", surcharge: 1500 },
    { key: "XL", label: "XL", uk: "14", us: "10", surcharge: 2000 },
    { key: "2XL", label: "2XL", uk: "16", us: "12", surcharge: 2500 },
  ],
};

const MEN_TOP_ROWS = [
  { size: "36 / S", uk: "36", us: "36", chest: measurementRange(89, 95), shoulder: measurement(43), sleeve: measurement(61), length: measurement(70) },
  { size: "38 / M", uk: "38", us: "38", chest: measurementRange(97, 102), shoulder: measurement(44), sleeve: measurement(62), length: measurement(72) },
  { size: "40 / L", uk: "40", us: "40", chest: measurementRange(104, 109), shoulder: measurement(46), sleeve: measurement(63), length: measurement(74) },
  { size: "42 / XL", uk: "42", us: "42", chest: measurementRange(112, 117), shoulder: measurement(47), sleeve: measurement(65), length: measurement(76) },
  { size: "44 / XXL", uk: "44", us: "44", chest: measurementRange(119, 125), shoulder: measurement(48), sleeve: measurement(66), length: measurement(78) },
];

const MEN_SET_ROWS = [
  { size: "36 / S", uk: "36", us: "36", chest: measurementRange(89, 95), waist: measurement(76), hip: measurement(91), topLength: measurement(70) },
  { size: "38 / M", uk: "38", us: "38", chest: measurementRange(97, 102), waist: measurement(81), hip: measurement(97), topLength: measurement(72) },
  { size: "40 / L", uk: "40", us: "40", chest: measurementRange(104, 109), waist: measurement(86), hip: measurement(102), topLength: measurement(74) },
  { size: "42 / XL", uk: "42", us: "42", chest: measurementRange(112, 117), waist: measurement(91), hip: measurement(107), topLength: measurement(76) },
  { size: "44 / XXL", uk: "44", us: "44", chest: measurementRange(119, 125), waist: measurement(97), hip: measurement(112), topLength: measurement(78) },
];

const WOMEN_DRESS_ROWS = [
  { size: "XS", uk: "6", us: "2", bust: measurement(83), waist: measurement(67), hip: measurement(91), length: measurement(84) },
  { size: "S", uk: "8", us: "4", bust: measurement(88), waist: measurement(72), hip: measurement(96), length: measurement(85) },
  { size: "M", uk: "10", us: "6", bust: measurement(93), waist: measurement(77), hip: measurement(101), length: measurement(86) },
  { size: "L", uk: "12", us: "8", bust: measurement(98), waist: measurement(82), hip: measurement(106), length: measurement(87) },
  { size: "XL", uk: "14", us: "10", bust: measurement(103), waist: measurement(87), hip: measurement(111), length: measurement(88) },
  { size: "2XL", uk: "16", us: "12", bust: measurement(108), waist: measurement(92), hip: measurement(116), length: measurement(89) },
];

const WOMEN_SET_ROWS = [
  { size: "XS", uk: "6", us: "2", bust: measurement(83), waist: measurement(67), hip: measurement(91), topLength: measurement(74) },
  { size: "S", uk: "8", us: "4", bust: measurement(88), waist: measurement(72), hip: measurement(96), topLength: measurement(75) },
  { size: "M", uk: "10", us: "6", bust: measurement(93), waist: measurement(77), hip: measurement(101), topLength: measurement(76) },
  { size: "L", uk: "12", us: "8", bust: measurement(98), waist: measurement(82), hip: measurement(106), topLength: measurement(77) },
  { size: "XL", uk: "14", us: "10", bust: measurement(103), waist: measurement(87), hip: measurement(111), topLength: measurement(78) },
  { size: "2XL", uk: "16", us: "12", bust: measurement(108), waist: measurement(92), hip: measurement(116), topLength: measurement(79) },
];

const WOMEN_SAREE_ROWS = [
  { size: "XS", uk: "6", us: "2", bust: measurement(83), waist: measurement(67), blouseLength: measurement(36), sareeLength: measurement(550) },
  { size: "S", uk: "8", us: "4", bust: measurement(88), waist: measurement(72), blouseLength: measurement(37), sareeLength: measurement(550) },
  { size: "M", uk: "10", us: "6", bust: measurement(93), waist: measurement(77), blouseLength: measurement(38), sareeLength: measurement(550) },
  { size: "L", uk: "12", us: "8", bust: measurement(98), waist: measurement(82), blouseLength: measurement(39), sareeLength: measurement(550) },
  { size: "XL", uk: "14", us: "10", bust: measurement(103), waist: measurement(87), blouseLength: measurement(40), sareeLength: measurement(550) },
  { size: "2XL", uk: "16", us: "12", bust: measurement(108), waist: measurement(92), blouseLength: measurement(41), sareeLength: measurement(550) },
];

const WOMEN_LEHENGA_ROWS = [
  { size: "XS", uk: "6", us: "2", bust: measurement(83), waist: measurement(67), hip: measurement(91), blouseLength: measurement(36), skirtLength: measurement(105) },
  { size: "S", uk: "8", us: "4", bust: measurement(88), waist: measurement(72), hip: measurement(96), blouseLength: measurement(37), skirtLength: measurement(105) },
  { size: "M", uk: "10", us: "6", bust: measurement(93), waist: measurement(77), hip: measurement(101), blouseLength: measurement(38), skirtLength: measurement(105) },
  { size: "L", uk: "12", us: "8", bust: measurement(98), waist: measurement(82), hip: measurement(106), blouseLength: measurement(39), skirtLength: measurement(105) },
  { size: "XL", uk: "14", us: "10", bust: measurement(103), waist: measurement(87), hip: measurement(111), blouseLength: measurement(40), skirtLength: measurement(105) },
  { size: "2XL", uk: "16", us: "12", bust: measurement(108), waist: measurement(92), hip: measurement(116), blouseLength: measurement(41), skirtLength: measurement(105) },
];

const VASTRA_SIZE_CHARTS = {
  menTop: {
    title: "MEN / TOPWEAR",
    note: "For standard men’s numeric clothing sizes, UK and US use the same size number here. Measurements shown are chest, shoulder, sleeve and garment length only — no waist measurement is used for topwear.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["chest", "Chest"], ["shoulder", "Shoulder"], ["sleeve", "Sleeve"], ["length", "Length"],
    ],
    rows: MEN_TOP_ROWS,
  },
  menSet: {
    title: "MEN / LOUNGE & ATHLEISURE SETS",
    note: "Standard men’s UK and US numeric sizes are the same in this chart. Chest is for the upper piece and waist/hip for the lower piece; top length is shown separately.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["chest", "Chest"], ["waist", "Waist"], ["hip", "Hip"], ["topLength", "Top Length"],
    ],
    rows: MEN_SET_ROWS,
  },
  womenDress: {
    title: "WOMEN / DRESSES & JUMPSUITS",
    note: "Bust, waist, hip and garment length for fitted one-piece products.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["bust", "Bust"], ["waist", "Waist"], ["hip", "Hip"], ["length", "Length"],
    ],
    rows: WOMEN_DRESS_ROWS,
  },
  womenSet: {
    title: "WOMEN / SETS",
    note: "Bust, waist and hip cover the complete coordinated set; top length is shown for the upper piece.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["bust", "Bust"], ["waist", "Waist"], ["hip", "Hip"], ["topLength", "Top Length"],
    ],
    rows: WOMEN_SET_ROWS,
  },
  womenSaree: {
    title: "WOMEN / SAREE",
    note: "Measurements are for the blouse and saree length; the saree itself is not sized by hip or waist.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["bust", "Bust"], ["waist", "Waist"], ["blouseLength", "Blouse Length"], ["sareeLength", "Saree Length"],
    ],
    rows: WOMEN_SAREE_ROWS,
  },
  womenLehenga: {
    title: "WOMEN / LEHENGA",
    note: "Bust, waist and hip are for the fitted pieces; blouse and skirt lengths are shown separately.",
    columns: [
      ["size", "Size"], ["uk", "UK"], ["us", "US"],
      ["bust", "Bust"], ["waist", "Waist"], ["hip", "Hip"], ["blouseLength", "Blouse Length"], ["skirtLength", "Skirt Length"],
    ],
    rows: WOMEN_LEHENGA_ROWS,
  },
};

const getProductSizing = (product) => {
  const category = String(product?.category || "").toLowerCase();
  const name = String(product?.name || "").toLowerCase();

  // WATCHES
  // Watches are individual products. Do not invent case-size variants or
  // add generic size surcharges when the manufacturer does not offer them.
  if (product?.id >= 101 || /watch/.test(category) || /watch/.test(name)) {
    return {
      kind: "watch",
      label: "ITEM",
      options: [{ key: "ONE SIZE", label: "ONE SIZE", surcharge: 0 }],
      chart: null,
    };
  }

  // PERFUMES
  if (product?.id >= 61 || /parfum|extrait|toilette|perfume|eau de/.test(category)) {
    const volumes = Array.isArray(product?.volumes) && product.volumes.length
      ? product.volumes
      : ["50 ML"];

    return {
      kind: "perfume",
      label: "VOLUME",
      options: volumes.map((volume) => ({
        key: volume,
        label: volume,
        surcharge: 0,
      })),
      chart: null,
    };
  }

  if (product?.id < 31) {
    const isMenSet = /athleisure|lounge set|track set|tracksuit/.test(
      `${category} ${name}`
    );

    return {
      kind: "clothing",
      label: "SIZE",
      options: VASTRA_CLOTHING_OPTIONS.men,
      chart: isMenSet ? VASTRA_SIZE_CHARTS.menSet : VASTRA_SIZE_CHARTS.menTop,
    };
  }

  if (/saree/.test(category) || /saree/.test(name)) {
    return {
      kind: "clothing",
      label: "SIZE",
      options: VASTRA_CLOTHING_OPTIONS.women,
      chart: VASTRA_SIZE_CHARTS.womenSaree,
    };
  }

  if (/lehenga/.test(category) || /lehenga/.test(name)) {
    return {
      kind: "clothing",
      label: "SIZE",
      options: VASTRA_CLOTHING_OPTIONS.women,
      chart: VASTRA_SIZE_CHARTS.womenLehenga,
    };
  }

  if (/set|co-ord|kurta|tunic|ethnic fusion|ethnic wear|casual wear/.test(category)) {
    return {
      kind: "clothing",
      label: "SIZE",
      options: VASTRA_CLOTHING_OPTIONS.women,
      chart: VASTRA_SIZE_CHARTS.womenSet,
    };
  }

  return {
    kind: "clothing",
    label: "SIZE",
    options: VASTRA_CLOTHING_OPTIONS.women,
    chart: VASTRA_SIZE_CHARTS.womenDress,
  };
};

const getVariantPrice = (product, option) => {
  const volumeKey = String(option?.key || "").trim();
  const volumePrice = product?.volumePrices?.[volumeKey];

  if (volumePrice != null) {
    return priceNumber(volumePrice);
  }

  return priceNumber(product?.price) + Number(option?.surcharge || 0);
};

const getDisplayPrice = (product) => {
  const firstVolume = Array.isArray(product?.volumes) ? product.volumes[0] : null;
  const firstVolumePrice = firstVolume ? product?.volumePrices?.[firstVolume] : null;
  return firstVolumePrice != null ? priceNumber(firstVolumePrice) : priceNumber(product?.price);
};

const getCartItemKey = (item) =>
  `${item?.product?.id}-${item?.selectedSize || "ONE SIZE"}`;

const WATCH_DETAILS = {
  "Richard Mille RM 011": {
    source: "Richard Mille",
    piece: "RM 011 Automatic Flyback Chronograph Felipe Massa.",
    movement: "RMAC1 — skeletonised automatic winding movement with variable-geometry rotor.",
    functions: "Hours, minutes, seconds, flyback chronograph, 60-minute countdown timer, 12-hour totaliser, oversize date and month indicator.",
    materials: "RM 011 was offered in titanium, gold and Richard Mille proprietary materials including ceramic, Carbon TPT®, silicon nitride and Red Quartz TPT®.",
  },
  "Richard Mille RM 011 Felipe Massa Limited Edition 8 von 10": {
    source: "Richard Mille",
    piece: "RM 011 Automatic Flyback Chronograph Felipe Massa.",
    movement: "RMAC1 — skeletonised automatic winding movement with variable-geometry rotor.",
    functions: "Hours, minutes, seconds, flyback chronograph, 60-minute countdown timer, 12-hour totaliser, oversize date and month indicator.",
    materials: "The RM 011 family was offered in titanium, gold and Richard Mille proprietary materials.",
  },
  "Jacob & Co. Bugatti Tourbillon Baguette": {},
  "Santos de Cartier": {
    source: "Cartier",
    piece: "Santos de Cartier watch, medium model.",
    movement: "Automatic mechanical movement, calibre 1847 MC.",
    case: "35.1 mm wide; 8.83 mm thick.",
    materials: "Steel case; steel bracelet with SmartLink adjustment system; second green alligator-skin strap.",
    functions: "Hours, minutes and seconds.",
    waterResistance: "Up to 10 bar (approximately 100 metres / 330 feet).",
  },
  "Jacob & Co. Bugatti Chiron Tourbillon in white ceramic and 18K rose gold": {},
  "Jacob & Co. Bugatti Chiron Tourbillon Baguette Ruby": {},
  "Jacob & Co. Bugatti Chiron Tourbillon Rose Gold": {
    source: "Jacob & Co.",
    piece: "Bugatti Chiron Tourbillon in rose gold.",
    movement: "Caliber JCAM37, hand-wound; 578 components; 51 jewels; 60-hour power reserve; 21,600 vph (3 Hz).",
    functions: "Hours, minutes, one-minute flying tourbillon with 30° incline, W16 engine-block automaton and power-reserve indicator.",
    case: "55 × 44 mm; 22 mm height.",
    materials: "18K rose gold and sapphire crystals; black ceramic crowns and pusher.",
    waterResistance: "30 m (3 atm).",
    strap: "Openworked rubber with 18K rose-gold deployant clasp.",
    limitedEdition: "72 pieces.",
  },
  "Jacob & Co. Oil Pump (49.5 mm Rose Gold)": {},
  "Jacob & Co. Casino Tourbillon": {
    source: "Jacob & Co.",
    piece: "Casino Tourbillon.",
    movement: "Caliber JCAM51, hand-wound; 268 components; 72-hour power reserve; 21,600 vph (3 Hz).",
    functions: "Central hours and minutes, on-demand roulette, flying tourbillon rotating in 60 seconds.",
    case: "44 mm; 16.30 mm height.",
    materials: "18K rose gold with curved anti-reflective sapphire crystal and sapphire opening in the caseback.",
    waterResistance: "30 m (3 atm).",
    strap: "Alligator leather with 18K rose-gold deployant clasp.",
    limitedEdition: "26 pieces.",
  },
  "Jacob & Co. Astronomia Solar Zodiac": {
    source: "Jacob & Co.",
    piece: "Astronomia Solar Zodiac.",
    movement: "Caliber JCAM19, hand-wound; 447 components; 48-hour power reserve; 28,800 vph (4 Hz).",
    functions: "Vertical rotating central platform with 10-minute rotation and flying tourbillon rotating in 1 minute.",
  },
  "Jacob & Co. Astronomia Metaverso Mercury": {},
  "Patek Philippe Grandmaster Chime": {
    source: "Patek Philippe",
    piece: "Grandmaster Chime Ref. 5175R-001, created for the Manufacture's 175th anniversary.",
    case: "47.4 mm diameter.",
    materials: "Rose gold.",
    limitedEdition: "Seven pieces.",
  },
  "Patek Philippe Aquanaut Luce Haute Joaillerie with Rubies": {
    source: "Patek Philippe",
    piece: "Aquanaut Luce Haute Joaillerie.",
    movement: "Self-winding mechanical movement, calibre 324.",
    functions: "Hours, minutes and seconds.",
    materials: "18K gold dial plate; bezel and lugs set with 48 baguette diamonds; dial set with brilliant-cut and baguette diamonds; hands and clasp set with diamonds.",
    waterResistance: "30 m.",
    strap: "Aquanaut-pattern strap with Aquanaut fold-over clasp.",
  },
  "Audemars Piguet Royal Oak Tourbillon Extra-Thin": {
    source: "Audemars Piguet",
    piece: "Royal Oak Tourbillon Extra-Thin.",
    materials: "Stainless steel case and bracelet.",
    dial: "Plum-toned dial with sunburst Evolutive pattern and tourbillon.",
  },
  "Cartier Santos Full Pavé Diamonds": {},
  "Daniel Wellington Rose Gold": {},
  "Bulgari Serpenti Tubogas": {
    source: "Bvlgari",
    piece: "Serpenti Tubogas watch.",
    movement: "Quartz movement.",
    functions: "Hours and minutes.",
    case: "35 mm.",
    materials: "Variant-specific materials, depending on the exact Serpenti Tubogas model.",
    waterResistance: "30 m.",
  },
  "Rolex Datejust 31": {
    source: "Rolex",
    piece: "Oyster Perpetual Datejust 31.",
    movement: "Perpetual mechanical self-winding movement, calibre 2236.",
    functions: "Centre hour, minute and seconds hands; instantaneous date with rapid setting; stop-seconds for precise time setting.",
    case: "Oyster case, 31 mm; White Rolesor; fluted bezel; scratch-resistant sapphire crystal with Cyclops lens.",
    materials: "Oystersteel and white gold; Oyster bracelet.",
    waterResistance: "100 metres / 330 feet.",
    powerReserve: "Approximately 55 hours.",
  },
  "Rolex Lady-Datejust 28": {
    source: "Rolex",
    piece: "Oyster Perpetual Lady-Datejust 28.",
    movement: "Perpetual mechanical self-winding movement, calibre 2236.",
    functions: "Centre hour, minute and seconds hands; instantaneous date with rapid setting; stop-seconds for precise time setting.",
    case: "Oyster case, 28 mm; 18 ct Everose gold; diamond-set bezel; scratch-resistant sapphire crystal with Cyclops lens.",
    materials: "18 ct Everose gold; bracelet varies by exact configuration.",
    waterResistance: "100 metres / 330 feet.",
    powerReserve: "Approximately 55 hours.",
  },
  "Patek Philippe Nautilus Joaillerie": {
    source: "Patek Philippe",
    piece: "Nautilus Joaillerie.",
    movement: "Self-winding calibre 26-330 S C.",
    functions: "Date and sweep seconds with stop-seconds function.",
    case: "40 mm diameter; 8.7 mm thickness.",
    materials: "Rose gold case, bezel and bracelet.",
    waterResistance: "30 m.",
    powerReserve: "Minimum 35 hours – maximum 45 hours.",
    gemSetting: "44 baguette-cut diamonds in total, including 32 on the bezel.",
  },
};

const getProductDetails = (product) => {
  const category = String(product?.category || "").toLowerCase();
  const name = String(product?.name || "").toLowerCase();

  // WATCHES — use only product-specific manufacturer-sourced fields.
  if (product?.id >= 101 || /watch/.test(category) || /watch/.test(name)) {
    const key = Object.keys(WATCH_DETAILS).find((item) =>
      name === item.toLowerCase() || name.startsWith(`${item.toLowerCase()} `)
    );
    return WATCH_DETAILS[key] || {};
  }

  // PERFUMES — use the exact product-specific fields stored from the
  // corresponding brand's official product information.
  if (product?.id >= 61) {
    return {
      source: product.brand,
      family: product.family,
      fragranceType: product.fragranceType,
      concentration: product.concentration,
      collection: product.collection,
      top: product.top,
      heart: product.heart,
      base: product.base,
      keyNotes: product.keyNotes,
      description: product.description,
      volumes: product.volumes,
    };
  }
  if (product?.id < 31) {
    if (/athleisure|lounge set/.test(`${category} ${name}`)) return { piece: "A coordinated VASTRA leisure set designed for a relaxed, polished silhouette.", fabric: "Premium blended fabric", fit: "Relaxed", closure: "Zip / pull-on construction", lining: "Unlined", madeIn: "India", care: "Machine wash cold or gentle dry clean as indicated by the garment label." };
    if (/suit|blazer|tailoring/.test(`${category} ${name}`)) return { piece: "A structured VASTRA tailoring piece designed for a clean, contemporary profile.", fabric: "Premium suiting blend", fit: "Tailored", closure: "Button closure", lining: "Full lining", madeIn: "India", care: "Dry clean only." };
    if (/shirt|polo|overshirt/.test(`${category} ${name}`)) return { piece: "A refined everyday VASTRA layer balancing clean proportions with understated detailing.", fabric: "Premium cotton blend", fit: "Regular", closure: "Button closure", lining: "Unlined", madeIn: "India", care: "Gentle machine wash or dry clean as indicated by the garment label." };
    if (/hoodie|sweatshirt|knitwear|t-shirt/.test(`${category} ${name}`)) return { piece: "A relaxed VASTRA essential designed for understated everyday luxury.", fabric: "Premium cotton / knit blend", fit: "Relaxed", closure: "Pull-on construction", lining: "Unlined", madeIn: "India", care: "Cold gentle wash. Do not bleach." };
    return { piece: "A considered VASTRA menswear piece designed around modern proportions and quiet luxury.", fabric: "Premium blended fabric", fit: "Regular", closure: "Zip / button closure", lining: "Unlined", madeIn: "India", care: "Follow the care label supplied with the garment." };
  }
  if (/saree/.test(`${category} ${name}`)) return { piece: "A refined VASTRA drape designed for an elegant, contemporary silhouette.", fabric: "Premium occasion fabric", fit: "Draped", closure: "Blouse closure", lining: "Blouse lined", madeIn: "India", care: "Dry clean only." };
  if (/lehenga/.test(`${category} ${name}`)) return { piece: "A statement VASTRA ensemble balancing traditional form with a modern occasion silhouette.", fabric: "Premium occasion fabric", fit: "Structured", closure: "Zip / hook closure", lining: "Lined", madeIn: "India", care: "Dry clean only." };
  if (/dress|gown|jumpsuit/.test(`${category} ${name}`)) return { piece: "A considered VASTRA one-piece silhouette designed for refined movement and presence.", fabric: "Premium dress fabric", fit: "Regular", closure: "Zip / concealed closure", lining: "Partially lined", madeIn: "India", care: "Dry clean only." };
  return { piece: "A considered VASTRA womenswear piece designed around modern proportions and quiet luxury.", fabric: "Premium blended fabric", fit: "Regular", closure: "Button / zip construction", lining: "Unlined", madeIn: "India", care: "Follow the care label supplied with the garment." };
};

const VASTRA_FREE_SHIPPING_THRESHOLD = 25000;
const getDeliveryRange = () => {
  const start = new Date(); start.setDate(start.getDate() + 3);
  const end = new Date(); end.setDate(end.getDate() + 5);
  const format = (date) => date.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
  return `${format(start)} – ${format(end)}`;
};


/* =========================================================

   QUICK VIEW

========================================================= */



function QuickViewModal({

  product,

  onClose,

  onAddToCart,
  onOpenProduct,

}) {

  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [deliveryPin, setDeliveryPin] = useState("");
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [openInfo, setOpenInfo] = useState("");

  const sizing = product ? getProductSizing(product) : null;

  useEffect(() => {
    setActiveImage(0);
    setSizeChartOpen(false);
    setSelectedOption("");
    setDeliveryPin("");
    setDeliveryChecked(false);
    setOpenInfo("");
  }, [product]);

  useEffect(() => {
    if (sizing?.options?.length > 0) {
      setSelectedOption(sizing.options[0].key);
    }
  }, [product, sizing?.options?.length]);

  if (!product || !sizing) {
    return null;
  }

  const selected =
    sizing.options.find((option) => option.key === selectedOption) ||
    sizing.options[0];
  const selectedPrice = getVariantPrice(product, selected);
  const productDetails = getProductDetails(product);

  const productImages = Array.from(
    new Set(
      [
        product.image,
        ...(Array.isArray(product.images) ? product.images : []),
      ].filter(Boolean)
    )
  );

  const imageCount = productImages.length;

  const showPreviousImage = () => {
    if (imageCount < 2) return;
    setActiveImage((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  };

  const showNextImage = () => {
    if (imageCount < 2) return;
    setActiveImage((current) =>
      current === imageCount - 1 ? 0 : current + 1
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1250,
        background: "rgba(15, 15, 15, 0.62)",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="product-quick-view-modal"
        style={{
          width: "min(980px, 100%)",
          height: "90vh",
          maxHeight: "90vh",
          overflow: "hidden",
          background: "#f7f4ef",
          color: "#111",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(310px, 0.8fr)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
        }}
      >
        <div
          style={{
            height: "100%",
            minHeight: 0,
            background: "#e8e4dd",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={productImages[activeImage]}
            alt={`${product.name} view ${activeImage + 1}`}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "560px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <button
            type="button"
            onClick={showPreviousImage}
            aria-label={`Previous image of ${product.name}`}
            style={{
              position: "absolute",
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "50%",
              background: "rgba(17,17,17,0.52)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: imageCount > 1 ? "pointer" : "default",
              opacity: imageCount > 1 ? 1 : 0.35,
              zIndex: 3,
              backdropFilter: "blur(4px)",
            }}
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            aria-label={`Next image of ${product.name}`}
            style={{
              position: "absolute",
              right: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "50%",
              background: "rgba(17,17,17,0.52)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              cursor: imageCount > 1 ? "pointer" : "default",
              opacity: imageCount > 1 ? 1 : 0.35,
              zIndex: 3,
              backdropFilter: "blur(4px)",
            }}
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "18px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "7px 11px",
              background: "rgba(17,17,17,0.62)",
              color: "#fff",
              fontSize: "9px",
              letterSpacing: "0.14em",
              whiteSpace: "nowrap",
              zIndex: 3,
              backdropFilter: "blur(4px)",
            }}
          >
            {activeImage + 1} / {imageCount}
          </div>
        </div>

        <div
          style={{
            height: "100%",
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "35px",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product"
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  color: "#111",
                }}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div
              style={{
                fontSize: "9px",
                letterSpacing: "0.18em",
                opacity: 0.55,
                textTransform: "uppercase",
              }}
            >
              {product.category}
            </div>

            <h2
              style={{
                margin: "12px 0 10px",
                fontFamily: "inherit",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 500,
                lineHeight: 0.95,
              }}
            >
              {product.name}
            </h2>

            <div style={{ fontSize: "15px", marginBottom: "24px" }}>
              {formatVastraPrice(selectedPrice)}
              {selected.surcharge > 0 && (
                <span style={{ fontSize: "10px", opacity: 0.55, marginLeft: "8px" }}>
                  +{formatVastraPrice(selected.surcharge)} {sizing.kind === "perfume" ? "volume" : "size"} adjustment
                </span>
              )}
            </div>

            <button type="button" onClick={() => onOpenProduct(product)} style={{ width: "100%", border: "1px solid rgba(17,17,17,0.22)", background: "transparent", color: "#111", padding: "12px", cursor: "pointer", fontSize: "9px", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "18px" }}>VIEW FULL PRODUCT</button>

            <div style={{ marginBottom: "22px" }}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  opacity: 0.55,
                  marginBottom: "10px",
                }}
              >
                {sizing.label}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "8px",
                }}
              >
                {sizing.options.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setSelectedOption(option.key)}
                    style={{
                      border:
                        selected.key === option.key
                          ? "1px solid #111"
                          : "1px solid rgba(17,17,17,0.18)",
                      background:
                        selected.key === option.key
                          ? "#111"
                          : "transparent",
                      color: selected.key === option.key ? "#fff" : "#111",
                      padding: "11px 9px",
                      cursor: "pointer",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ display: "block" }}>{option.label}</span>
                    {sizing.kind === "clothing" ? (
                      <span style={{ display: "block", fontSize: "8px", opacity: 0.65, marginTop: "4px" }}>
                        UK {option.uk} / US {option.us}
                      </span>
                    ) : (
                      option.surcharge > 0 && (
                        <span style={{ display: "block", fontSize: "8px", opacity: 0.65, marginTop: "4px" }}>
                          +{formatVastraPrice(option.surcharge)}
                        </span>
                      )
                    )}
                  </button>
                ))}
              </div>
            </div>

            {sizing.kind === "clothing" && sizing.chart && (
              <button
                type="button"
                onClick={() => setSizeChartOpen(true)}
                style={{
                  width: "100%",
                  border: "1px solid rgba(17,17,17,0.25)",
                  background: "transparent",
                  color: "#111",
                  padding: "12px",
                  cursor: "pointer",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                  marginBottom: "18px",
                }}
              >
                SIZE CHART
              </button>
            )}

            {sizing.kind === "perfume" ? (
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "12px" }}>FRAGRANCE PROFILE</div>
                <div style={{ display: "grid", gap: "9px", fontSize: "11px", lineHeight: 1.5 }}>
                  {productDetails.family && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>FRAGRANCE FAMILY</strong><br />{productDetails.family}</div>}
                  {productDetails.concentration && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>CONCENTRATION</strong><br />{productDetails.concentration}</div>}
                  {productDetails.top && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>TOP NOTES</strong><br />{productDetails.top}</div>}
                  {productDetails.heart && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>HEART</strong><br />{productDetails.heart}</div>}
                  {productDetails.base && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>BASE</strong><br />{productDetails.base}</div>}
                  {productDetails.keyNotes && <div><strong style={{ fontSize: "9px", letterSpacing: "0.12em" }}>KEY NOTES</strong><br />{productDetails.keyNotes}</div>}
                  {productDetails.description && <p style={{ margin: "5px 0 0", opacity: 0.68 }}>{productDetails.description}</p>}
                </div>
              </div>
            ) : sizing.kind === "watch" ? (
              <div style={{ marginBottom: "20px" }}>
                {productDetails.source && (
                  <div style={{ fontSize: "9px", letterSpacing: "0.14em", opacity: 0.45, marginBottom: "12px" }}>
                    SPECIFICATIONS FROM {productDetails.source.toUpperCase()}
                  </div>
                )}
                {productDetails.piece && (
                  <>
                    <div style={{ fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "9px" }}>THE TIMEPIECE</div>
                    <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "330px", opacity: 0.68, margin: 0 }}>{productDetails.piece}</p>
                  </>
                )}
                {Object.entries({
                  MOVEMENT: productDetails.movement,
                  FUNCTIONS: productDetails.functions,
                  CASE: productDetails.case,
                  MATERIALS: productDetails.materials,
                  DIAL: productDetails.dial,
                  "GEM-SETTING": productDetails.gemSetting,
                  "WATER RESISTANCE": productDetails.waterResistance,
                  "POWER RESERVE": productDetails.powerReserve,
                  STRAP: productDetails.strap,
                  "LIMITED EDITION": productDetails.limitedEdition,
                }).filter(([, value]) => value).length > 0 && (
                  <>
                    <div style={{ marginTop: "18px", fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "10px" }}>DETAILS</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 18px", fontSize: "10px", lineHeight: 1.5 }}>
                      {Object.entries({
                        MOVEMENT: productDetails.movement,
                        FUNCTIONS: productDetails.functions,
                        CASE: productDetails.case,
                        MATERIALS: productDetails.materials,
                        DIAL: productDetails.dial,
                        "GEM-SETTING": productDetails.gemSetting,
                        "WATER RESISTANCE": productDetails.waterResistance,
                        "POWER RESERVE": productDetails.powerReserve,
                        STRAP: productDetails.strap,
                        "LIMITED EDITION": productDetails.limitedEdition,
                      }).filter(([, value]) => value).map(([label, value]) => (
                        <div key={label}><strong>{label}</strong><br />{value}</div>
                      ))}
                    </div>
                  </>
                )}
                {!productDetails.source && !productDetails.piece && (
                  <p style={{ fontSize: "11px", lineHeight: 1.7, opacity: 0.58, margin: "8px 0 0" }}>
                    Product-specific manufacturer specifications are not shown until they can be matched to the exact model.
                  </p>
                )}
              </div>
            ) : (
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "9px" }}>THE PIECE</div>
                <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "330px", opacity: 0.68, margin: 0 }}>{productDetails.piece}</p>
                <div style={{ marginTop: "18px", fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "10px" }}>DETAILS</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 18px", fontSize: "10px", lineHeight: 1.5 }}>
                  <div><strong>FABRIC</strong><br />{productDetails.fabric}</div><div><strong>FIT</strong><br />{productDetails.fit}</div><div><strong>CLOSURE</strong><br />{productDetails.closure}</div><div><strong>LINING</strong><br />{productDetails.lining}</div><div><strong>MADE IN</strong><br />{productDetails.madeIn}</div>
                </div>
                <div style={{ marginTop: "16px", fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "7px" }}>CARE</div>
                <div style={{ fontSize: "10px", lineHeight: 1.6, opacity: 0.68 }}>{productDetails.care}</div>
              </div>
            )}

          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onAddToCart(product, selected.key, selectedPrice, sizing.label);
              onClose();
            }}
            style={{
              width: "100%",
              border: 0,
              background: "#111",
              color: "#fff",
              padding: "16px",
              cursor: "pointer",
              fontSize: "10px",
              letterSpacing: "0.16em",
              fontWeight: 600,
            }}
          >
            ADD TO BAG — {selected.label}
          </button>

            <div style={{ borderTop: "1px solid rgba(17,17,17,0.1)", paddingTop: "16px", marginBottom: "18px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "9px" }}>DELIVERY</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <input value={deliveryPin} onChange={(event) => { setDeliveryPin(event.target.value.replace(/\D/g, "").slice(0, 6)); setDeliveryChecked(false); }} inputMode="numeric" placeholder="ENTER PIN CODE" aria-label="Delivery PIN code" style={{ flex: 1, minWidth: 0, border: "1px solid rgba(17,17,17,0.2)", background: "transparent", padding: "11px", fontSize: "10px", letterSpacing: "0.08em", color: "#111" }} />
                <button type="button" onClick={() => setDeliveryChecked(deliveryPin.length === 6)} style={{ border: "1px solid #111", background: "#111", color: "#fff", padding: "0 14px", cursor: "pointer", fontSize: "9px", letterSpacing: "0.12em" }}>CHECK</button>
              </div>
              {deliveryChecked && <div style={{ marginTop: "10px", fontSize: "10px", lineHeight: 1.6 }}>Estimated delivery: <strong>{getDeliveryRange()}</strong></div>}
              <div style={{ marginTop: "8px", fontSize: "9px", opacity: 0.55 }}>Complimentary delivery on orders above {formatVastraPrice(VASTRA_FREE_SHIPPING_THRESHOLD)}.</div>
            </div>

            <div style={{ borderTop: "1px solid rgba(17,17,17,0.1)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.16em", opacity: 0.55, margin: "15px 0 6px" }}>DELIVERY & RETURNS</div>
              <div style={{ fontSize: "10px", lineHeight: 1.6, marginBottom: "8px" }}>Complimentary delivery on qualifying orders<br />Easy size exchange<br />7-day return window</div>
              {[["SHIPPING", "Orders are prepared with care and dispatched to the delivery address provided at checkout."],["RETURNS & EXCHANGES", "Eligible items may be returned or exchanged within 7 days, subject to condition and applicable exclusions."],["CARE", productDetails.care]].map(([label, text]) => (
                <div key={label} style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}>
                  <button type="button" onClick={() => setOpenInfo(openInfo === label ? "" : label)} style={{ width: "100%", border: 0, background: "transparent", padding: "11px 0", display: "flex", justifyContent: "space-between", cursor: "pointer", color: "#111", fontSize: "9px", letterSpacing: "0.12em", fontWeight: 600 }}>{label}{openInfo === label ? <Minus size={13} /> : <Plus size={13} />}</button>
                  {openInfo === label && <div style={{ fontSize: "10px", lineHeight: 1.6, opacity: 0.62, padding: "0 0 12px" }}>{text}</div>}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      {sizeChartOpen && sizing.chart && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1400,
            background: "rgba(15,15,15,0.58)",
            display: "grid",
            placeItems: "center",
            padding: "20px",
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSizeChartOpen(false);
            }
          }}
        >
          <div
            style={{
              width: "min(1050px, 100%)",
              maxHeight: "88vh",
              overflow: "auto",
              background: "#f7f4ef",
              color: "#111",
              padding: "28px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <div style={{ fontSize: "9px", letterSpacing: "0.18em", opacity: 0.55, marginBottom: "7px" }}>
                  VASTRA / SIZE GUIDE
                </div>
                <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 500 }}>
                  {sizing.chart.title}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: "11px", lineHeight: 1.6, opacity: 0.6 }}>
                  {sizing.chart.note} All measurements are in centimetres and inches. UK and US clothing conversions are shown separately; men’s standard numeric sizes remain the same, while women’s UK and US numbers differ.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSizeChartOpen(false)}
                aria-label="Close size chart"
                style={{ border: 0, background: "transparent", cursor: "pointer", color: "#111" }}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div style={{ overflowX: "auto", border: "1px solid rgba(17,17,17,0.12)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
                <thead>
                  <tr>
                    {sizing.chart.columns.map(([key, label]) => (
                      <th
                        key={key}
                        style={{
                          padding: "12px 10px",
                          textAlign: "left",
                          fontSize: "9px",
                          letterSpacing: "0.12em",
                          borderBottom: "1px solid rgba(17,17,17,0.14)",
                          background: "rgba(17,17,17,0.035)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizing.chart.rows.map((row) => (
                    <tr key={row.size}>
                      {sizing.chart.columns.map(([key]) => (
                        <td
                          key={key}
                          style={{
                            padding: "12px 10px",
                            fontSize: "11px",
                            borderBottom: "1px solid rgba(17,17,17,0.08)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {typeof row[key] === "object"
                            ? `${row[key].cm} cm / ${row[key].in} in`
                            : row[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: "14px", fontSize: "9px", lineHeight: 1.6, opacity: 0.5 }}>
              VASTRA size guide is a standard fit reference. Actual garment measurements can vary slightly by design, fabric and construction.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



/* =========================================================

   PRODUCT DETAIL PAGE

========================================================= */

function ProductDetailPage({ product, relatedProducts, onClose, onAddToCart, isWishlisted, onToggleWishlist, onOpenProduct }) {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const sizing = product ? getProductSizing(product) : null;
  const details = product ? getProductDetails(product) : {};
  const productImages = product ? Array.from(new Set([product.image, ...(Array.isArray(product.images) ? product.images : [])].filter(Boolean))) : [];

  useEffect(() => {
    setActiveImage(0);
    setZoomOpen(false);
    setQuantity(1);
    setRelatedLoading(false);
    setSelectedOption(sizing?.options?.[0]?.key || "");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [product]);

  if (!product || !sizing) return null;

  const selected = sizing.options.find((option) => option.key === selectedOption) || sizing.options[0];
  const selectedPrice = getVariantPrice(product, selected);
  const categoryProducts = Array.isArray(relatedProducts) ? relatedProducts.filter((item) => item.id !== product.id).slice(0, 4) : [];

  const addCurrentProduct = () => {
    for (let i = 0; i < quantity; i += 1) {
      onAddToCart(product, selected.key, selectedPrice, sizing.label);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1500, background: "#f7f4ef", color: "#111", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 20, height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5vw", background: "rgba(247,244,239,0.94)", borderBottom: "1px solid rgba(17,17,17,0.10)", backdropFilter: "blur(12px)" }}>
        <button type="button" onClick={onClose} style={{ border: 0, background: "transparent", color: "#111", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "9px", letterSpacing: "0.16em" }}><ArrowLeft size={16} /> BACK</button>
        <div style={{ fontSize: "12px", letterSpacing: "0.34em", fontWeight: 500 }}>VASTRA</div>
        <button type="button" onClick={() => onToggleWishlist(product)} aria-label={isWishlisted(product) ? "Remove from wishlist" : "Add to wishlist"} style={{ border: 0, background: "transparent", color: "#111", cursor: "pointer" }}><Heart size={19} strokeWidth={1.4} fill={isWishlisted(product) ? "currentColor" : "none"} /></button>
      </div>

      <style>{`
        .vastra-product-detail-grid { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr); gap: 5vw; align-items: start; }
        .vastra-product-detail-related { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        @media (max-width: 900px) {
          .vastra-product-detail-grid { grid-template-columns: 1fr; gap: 42px; }
          .vastra-product-detail-gallery { position: static !important; }
          .vastra-product-detail-related { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .vastra-product-zoom-trigger:hover img { transform: scale(1.08); }
        @media (max-width: 560px) {
          .vastra-product-detail-main { padding: 24px 18px 70px !important; }
          .vastra-product-detail-topbar { padding: 0 18px !important; }
          .vastra-product-detail-grid { gap: 30px; }
          .vastra-product-detail-title { font-size: 42px !important; }
          .vastra-product-detail-related { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
      `}</style>
      {relatedLoading && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Loading product"
          style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(247,244,239,0.96)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px", backdropFilter: "blur(8px)" }}
        >
          <div style={{ fontSize: "15px", letterSpacing: "0.42em", fontWeight: 500, animation: "vastraRelatedLogoPulse 0.9s ease-in-out infinite" }}>VASTRA</div>
          <div style={{ width: "34px", height: "1px", background: "rgba(17,17,17,0.22)", overflow: "hidden", position: "relative" }}>
            <span style={{ position: "absolute", inset: 0, width: "45%", background: "#111", animation: "vastraRelatedLoader 0.9s ease-in-out infinite" }} />
          </div>
          <style>{`
            @keyframes vastraRelatedLogoPulse { 0%,100% { opacity: 0.45; } 50% { opacity: 1; } }
            @keyframes vastraRelatedLoader { 0% { transform: translateX(-120%); } 100% { transform: translateX(320%); } }
          `}</style>
        </div>
      )}

      {zoomOpen && (
        <div role="dialog" aria-modal="true" aria-label={`${product.name} image viewer`} onClick={() => setZoomOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(8,8,8,0.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "zoom-out" }}>
          <button type="button" onClick={() => setZoomOpen(false)} aria-label="Close image viewer" style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2, width: "42px", height: "42px", border: "1px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", cursor: "pointer", fontSize: "22px" }}>×</button>
          <img src={productImages[activeImage]} alt={product.name} onClick={(event) => event.stopPropagation()} style={{ maxWidth: "96vw", maxHeight: "92vh", width: "auto", height: "auto", objectFit: "contain", userSelect: "none", touchAction: "pinch-zoom", cursor: "default" }} />
        </div>
      )}

      <main className="vastra-product-detail-main" style={{ width: "min(1400px, 100%)", margin: "0 auto", padding: "42px 5vw 100px", boxSizing: "border-box" }}>
        <div className="vastra-product-detail-grid">
          <section>
            <div style={{ display: "grid", gridTemplateColumns: productImages.length > 1 ? "90px minmax(0,1fr)" : "1fr", gap: "14px", position: "sticky", top: "94px" }}>
              {productImages.length > 1 && <div style={{ display: "grid", gap: "10px", alignContent: "start" }}>{productImages.map((image, index) => <button key={`${image}-${index}`} type="button" onClick={() => setActiveImage(index)} style={{ padding: 0, border: index === activeImage ? "1px solid #111" : "1px solid rgba(17,17,17,0.12)", background: "#e8e4dd", cursor: "pointer", aspectRatio: "0.78", overflow: "hidden" }}><img src={image} alt={`${product.name} thumbnail ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></button>)}</div>}
              <button type="button" onClick={() => setZoomOpen(true)} aria-label={`Zoom ${product.name} image`} className="vastra-product-zoom-trigger" style={{ position: "relative", background: "#e8e4dd", aspectRatio: "0.86", overflow: "hidden", padding: 0, border: 0, cursor: "zoom-in", display: "block" }}>
                <img src={productImages[activeImage]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s cubic-bezier(.2,.65,.2,1)" }} />
                <span style={{ position: "absolute", right: "14px", bottom: "14px", padding: "8px 10px", background: "rgba(17,17,17,0.68)", color: "#fff", fontSize: "8px", letterSpacing: "0.14em" }}>ZOOM</span>
              </button>
            </div>
          </section>

          <section style={{ paddingTop: "10px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.20em", opacity: 0.55, textTransform: "uppercase" }}>{product.brand || product.category}</div>
            <h1 className="vastra-product-detail-title" style={{ margin: "14px 0 14px", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 400, lineHeight: 0.94, letterSpacing: "-0.035em" }}>{product.name}</h1>
            <div style={{ fontSize: "18px", marginBottom: "28px" }}>{formatVastraPrice(selectedPrice)}</div>
            {details.description && <p style={{ fontSize: "13px", lineHeight: 1.75, maxWidth: "620px", opacity: 0.72, margin: "0 0 30px" }}>{details.description}</p>}

            <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)", borderBottom: "1px solid rgba(17,17,17,0.12)", padding: "22px 0", marginBottom: "24px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "12px" }}>{sizing.label}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>{sizing.options.map((option) => <button key={option.key} type="button" onClick={() => setSelectedOption(option.key)} style={{ border: selected.key === option.key ? "1px solid #111" : "1px solid rgba(17,17,17,0.18)", background: selected.key === option.key ? "#111" : "transparent", color: selected.key === option.key ? "#fff" : "#111", padding: "13px 10px", cursor: "pointer", fontSize: "10px", letterSpacing: "0.08em" }}>{option.label}{option.surcharge > 0 && <span style={{ display: "block", fontSize: "8px", opacity: 0.65, marginTop: "4px" }}>+{formatVastraPrice(option.surcharge)}</span>}</button>)}</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "130px minmax(0,1fr)", gap: "10px", marginBottom: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid rgba(17,17,17,0.18)" }}><button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} style={{ border: 0, background: "transparent", cursor: "pointer" }}><Minus size={14} /></button><div style={{ display: "grid", placeItems: "center", fontSize: "11px" }}>{quantity}</div><button type="button" onClick={() => setQuantity((q) => q + 1)} style={{ border: 0, background: "transparent", cursor: "pointer" }}><Plus size={14} /></button></div>
              <button type="button" onClick={addCurrentProduct} style={{ border: 0, background: "#111", color: "#fff", cursor: "pointer", fontSize: "10px", letterSpacing: "0.16em", fontWeight: 600 }}>ADD TO BAG — {formatVastraPrice(selectedPrice * quantity)}</button>
            </div>
            <button type="button" onClick={() => onToggleWishlist(product)} style={{ width: "100%", border: "1px solid rgba(17,17,17,0.22)", background: "transparent", color: "#111", cursor: "pointer", padding: "13px", fontSize: "9px", letterSpacing: "0.15em" }}>{isWishlisted(product) ? "REMOVE FROM WISHLIST" : "SAVE TO WISHLIST"}</button>

            <div style={{ marginTop: "34px", borderTop: "1px solid rgba(17,17,17,0.12)" }}>
              {[
                ["PRODUCT DETAILS", details.piece || details.family || details.collection || "A considered VASTRA piece designed around refined proportions and lasting presence."],
                ["SHIPPING", "Orders are prepared with care and dispatched to the delivery address provided at checkout. Complimentary delivery applies to qualifying orders."],
                ["RETURNS & EXCHANGES", "Eligible items may be returned or exchanged within 7 days, subject to condition and applicable exclusions."],
                ["CARE", details.care || "Follow the care instructions supplied with the product."],
              ].map(([label, text]) => <details key={label} style={{ borderBottom: "1px solid rgba(17,17,17,0.12)", padding: "16px 0" }}><summary style={{ cursor: "pointer", listStyle: "none", fontSize: "9px", letterSpacing: "0.14em", fontWeight: 600 }}>{label}</summary><p style={{ margin: "12px 0 0", fontSize: "11px", lineHeight: 1.7, opacity: 0.62 }}>{text}</p></details>)}
            </div>
          </section>
        </div>

        {categoryProducts.length > 0 && <section style={{ marginTop: "110px" }}><div style={{ fontSize: "9px", letterSpacing: "0.2em", opacity: 0.55, marginBottom: "12px" }}>VASTRA / CURATED FOR YOU</div><h2 style={{ margin: "0 0 30px", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(34px,4vw,58px)", fontWeight: 400, lineHeight: 0.95 }}>RELATED PIECES</h2><div className="vastra-product-detail-related">{categoryProducts.map((item) => <button key={item.id} type="button" disabled={relatedLoading} onClick={() => { setRelatedLoading(true); window.setTimeout(() => onOpenProduct(item), 650); }} style={{ border: 0, background: "transparent", padding: 0, textAlign: "left", cursor: relatedLoading ? "default" : "pointer", color: "#111", opacity: relatedLoading ? 0.7 : 1 }}><div style={{ aspectRatio: "0.78", background: "#e8e4dd", overflow: "hidden" }}><img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div><div style={{ paddingTop: "10px", fontSize: "12px", lineHeight: 1.3 }}>{item.name}</div><div style={{ paddingTop: "6px", fontSize: "11px", opacity: 0.65 }}>{formatVastraPrice(getDisplayPrice(item))}</div></button>)}</div></section>}
      </main>
    </div>
  );
}

/* =========================================================

   WISHLIST

========================================================= */

function WishlistDrawer({ open, onClose, wishlist, onRemove, onMoveToBag }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1350, background: "rgba(15,15,15,0.42)" }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <aside className="wishlist-drawer" aria-label="Wishlist" style={{ position: "absolute", top: 0, right: 0, width: "min(460px, 94vw)", height: "100%", background: "#f7f4ef", color: "#111", boxShadow: "-25px 0 70px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px", borderBottom: "1px solid rgba(17,17,17,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div><div style={{ fontSize: "9px", letterSpacing: "0.18em", opacity: 0.55, marginBottom: "6px" }}>VASTRA / SAVED PIECES</div><h2 style={{ margin: 0, fontSize: "22px", fontWeight: 500 }}>WISHLIST</h2></div>
          <button type="button" onClick={onClose} aria-label="Close wishlist" style={{ border: 0, background: "transparent", cursor: "pointer", color: "#111" }}><X size={20} strokeWidth={1.5} /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {wishlist.length === 0 ? (
            <div style={{ minHeight: "300px", display: "grid", placeItems: "center", textAlign: "center" }}><div><Heart size={28} strokeWidth={1.2} style={{ marginBottom: "16px" }} /><div style={{ fontSize: "11px", letterSpacing: "0.15em", marginBottom: "9px" }}>YOUR WISHLIST IS EMPTY</div><div style={{ fontSize: "11px", opacity: 0.55, lineHeight: 1.6 }}>Save a VASTRA piece to return to it later.</div></div></div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {wishlist.map((product) => (
                <div key={product.id} style={{ display: "grid", gridTemplateColumns: "86px 1fr", gap: "14px", paddingBottom: "18px", borderBottom: "1px solid rgba(17,17,17,0.1)" }}>
                  <div style={{ aspectRatio: "0.78", background: "#e8e4dd", overflow: "hidden" }}><img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.13em", opacity: 0.55, textTransform: "uppercase", marginBottom: "6px" }}>{product.category}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}><div style={{ fontSize: "15px", lineHeight: 1.25 }}>{product.name}</div><button type="button" onClick={() => onRemove(product)} aria-label={`Remove ${product.name} from wishlist`} style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0, height: "fit-content" }}><Heart size={16} strokeWidth={1.4} fill="currentColor" /></button></div>
                    <div style={{ fontSize: "14px", marginTop: "7px" }}>{formatVastraPrice(getDisplayPrice(product))}</div>
                    <button type="button" onClick={() => onMoveToBag(product)} style={{ marginTop: "12px", border: "1px solid rgba(17,17,17,0.22)", background: "transparent", color: "#111", padding: "9px 12px", cursor: "pointer", fontSize: "9px", letterSpacing: "0.13em", fontWeight: 600 }}>MOVE TO BAG</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

/* =========================================================

   CART DRAWER

========================================================= */



function CartDrawer({

  open,

  onClose,

  cart,

  onIncrease,

  onDecrease,

  onRemove,

  total,

  onClearCart,

}) {

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState("");
  const [confirmedDetails, setConfirmedDetails] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });



  useEffect(() => {

    if (!open) {
      setCheckoutMessage("");
      setOrderConfirmed(false);
      setConfirmedTotal(0);
      setOrderNumber("");
      setConfirmedDetails(null);
      setPromoCode("");
      setPromoApplied(false);
    }

  }, [open]);

  const handlePlaceOrder = () => {
    const values = Object.values(checkoutForm).map((value) => value.trim());
    if (values.some((value) => !value)) {
      setCheckoutMessage("Please complete all delivery details before placing the order.");
      return;
    }
    if (!/^\d{10}$/.test(checkoutForm.phone.trim())) {
      setCheckoutMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/^\d{6}$/.test(checkoutForm.pin.trim())) {
      setCheckoutMessage("Please enter a valid 6-digit PIN code.");
      return;
    }
    setCheckoutMessage("");
    const appliedDiscount = promoApplied ? Math.round(total * 0.10) : 0;
    const confirmedAmount = Math.max(0, total - appliedDiscount);
    const generatedOrderNumber = `VST-${new Date().getFullYear()}-${String(Math.floor(10000 + Math.random() * 90000))}`;

    setConfirmedTotal(confirmedAmount);
    setOrderNumber(generatedOrderNumber);
    setConfirmedDetails({
      name: checkoutForm.name.trim(),
      phone: checkoutForm.phone.trim(),
      address: checkoutForm.address.trim(),
      city: checkoutForm.city.trim(),
      state: checkoutForm.state.trim(),
      pin: checkoutForm.pin.trim(),
      paymentMethod,
    });
    setOrderConfirmed(true);
    onClearCart?.();
  };




  if (!open) {

    return null;

  }



  const paymentMethods = [
    { name: "UPI", detail: "Google Pay, PhonePe, Paytm and other UPI apps" },
    { name: "Credit / Debit Card", detail: "Visa, Mastercard, RuPay and supported cards" },
    { name: "Net Banking", detail: "Major Indian banks" },
    { name: "Cash on Delivery", detail: "Available where eligible" },
  ];



  const formatTotal = `₹${total.toLocaleString("en-IN")}`;
  const discount = promoApplied ? Math.round(total * 0.10) : 0;
  const discountedTotal = Math.max(0, total - discount);
  const finalTotal = discountedTotal;



  return (

    <div

      style={{

        position: "fixed",

        inset: 0,

        zIndex: 1300,

        background: "rgba(15,15,15,0.42)",

      }}

      onMouseDown={(event) => {

        if (event.target === event.currentTarget) {

          onClose();

        }

      }}

    >

      <aside

        className="cart-drawer"

        aria-label="Shopping bag"

        style={{

          position: "absolute",

          top: 0,

          right: 0,

          width: "min(460px, 94vw)",

          height: "100%",

          background: "#f7f4ef",

          color: "#111",

          boxShadow: "-25px 0 70px rgba(0,0,0,0.18)",

          display: "flex",

          flexDirection: "column",

        }}

      >

        <div

          style={{

            padding: "24px",

            borderBottom: "1px solid rgba(17,17,17,0.12)",

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

          }}

        >

          <div>

            <div

              style={{

                fontSize: "11px",

                letterSpacing: "0.18em",

                opacity: 0.55,

                marginBottom: "7px",

              }}

            >

              VASTRA / BAG

            </div>

            <h2

              style={{

                margin: 0,

                fontSize: "28px",

                fontWeight: 500,

              }}

            >

              YOUR SHOPPING BAG

            </h2>

          </div>



          <button

            type="button"

            onClick={onClose}

            aria-label="Close shopping bag"

            style={{

              border: 0,

              background: "transparent",

              cursor: "pointer",

              color: "#111",

            }}

          >

            <X size={20} strokeWidth={1.5} />

          </button>

        </div>



        <div style={{ flex: 1, overflowY: "auto", padding: "22px 24px" }}>

          {cart.length === 0 ? (

            orderConfirmed && confirmedDetails ? (
              <div style={{ padding: "18px 0 30px" }}>
                <div style={{ border: "1px solid rgba(17,17,17,0.16)", padding: "28px 20px", textAlign: "center" }}>
                  <Check size={24} strokeWidth={1.4} style={{ marginBottom: "12px" }} />
                  <div style={{ fontSize: "11px", letterSpacing: "0.16em", fontWeight: 600, marginBottom: "8px" }}>ORDER CONFIRMED</div>
                  <div style={{ fontSize: "11px", lineHeight: 1.6, opacity: 0.62 }}>VASTRA thanks you for your purchase.</div>
                  <div style={{ marginTop: "14px", fontSize: "12px", letterSpacing: "0.12em" }}>{orderNumber}</div>
                  <div style={{ marginTop: "10px", fontSize: "21px", fontWeight: 500 }}>{formatVastraPrice(confirmedTotal)}</div>
                </div>
                <div style={{ marginTop: "24px", borderTop: "1px solid rgba(17,17,17,0.12)" }}>
                  <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(17,17,17,0.12)" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.14em", opacity: 0.55, marginBottom: "9px" }}>DELIVERY DETAILS</div>
                    <div style={{ fontSize: "12px", lineHeight: 1.8 }}>
                      <div>{confirmedDetails.name}</div>
                      <div>{confirmedDetails.phone}</div>
                      <div>{confirmedDetails.address}</div>
                      <div>{confirmedDetails.city}, {confirmedDetails.state} — {confirmedDetails.pin}</div>
                    </div>
                  </div>
                  <div style={{ padding: "18px 0" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.14em", opacity: 0.55, marginBottom: "9px" }}>PAYMENT METHOD</div>
                    <div style={{ fontSize: "12px" }}>{confirmedDetails.paymentMethod}</div>
                  </div>
                </div>
              </div>
            ) : (
            <div

              style={{

                minHeight: "300px",

                display: "grid",

                placeItems: "center",

                textAlign: "center",

                padding: "30px",

              }}

            >

              <div>

                <ShoppingBag

                  size={28}

                  strokeWidth={1.2}

                  style={{ marginBottom: "16px" }}

                />

                <div

                  style={{

                    fontSize: "11px",

                    letterSpacing: "0.15em",

                    marginBottom: "9px",

                  }}

                >

                  YOUR BAG IS EMPTY

                </div>

                <div

                  style={{

                    fontSize: "11px",

                    opacity: 0.55,

                    lineHeight: 1.6,

                  }}

                >

                  Add a VASTRA piece to begin your order.

                </div>

              </div>

            </div>

            )
          ) : (

            <>

              <div

                style={{

                  display: "flex",

                  flexDirection: "column",

                  gap: "18px",

                }}

              >

                {cart.map((item) => {
                  const { product, quantity } = item;
                  const itemPrice = item.variantPrice ?? priceNumber(product.price);
                  return (

                  <div

                    key={getCartItemKey(item)}

                    style={{

                      display: "grid",

                      gridTemplateColumns: "86px 1fr",

                      gap: "14px",

                      paddingBottom: "18px",

                      borderBottom: "1px solid rgba(17,17,17,0.1)",

                    }}

                  >

                    <div

                      style={{

                        aspectRatio: "0.78",

                        background: "#e8e4dd",

                        overflow: "hidden",

                      }}

                    >

                      <img

                        src={product.image}

                        alt={product.name}

                        style={{

                          width: "100%",

                          height: "100%",

                          objectFit: "cover",

                          display: "block",

                        }}

                      />

                    </div>



                    <div>

                      <div

                        style={{

                          display: "flex",

                          justifyContent: "space-between",

                          gap: "12px",

                        }}

                      >

                        <div>

                          <div

                            style={{

                              fontSize: "11px",

                              letterSpacing: "0.13em",

                              opacity: 0.55,

                              textTransform: "uppercase",

                              marginBottom: "6px",

                            }}

                          >

                            {product.category}

                          </div>



                          <div

                            style={{

                              fontSize: "16px",

                              marginBottom: "7px",

                            }}

                          >

                            {product.name}

                          </div>



                          <div style={{ fontSize: "14px" }}>

                            {formatVastraPrice(itemPrice)}

                          </div>

                          {item.selectedSize && item.selectedSize !== "ONE SIZE" && (
                            <div
                              style={{
                                marginTop: "7px",
                                fontSize: "10px",
                                letterSpacing: "0.08em",
                                opacity: 0.6,
                                textTransform: "uppercase",
                              }}
                            >
                              {item.variantLabel || "SIZE"} — {item.selectedSize}
                            </div>
                          )}

                        </div>



                        <button

                          type="button"

                          onClick={() => onRemove(getCartItemKey(item))}

                          aria-label={`Remove ${product.name}`}

                          style={{

                            border: 0,

                            background: "transparent",

                            cursor: "pointer",

                            color: "#111",

                            height: "fit-content",

                            padding: 0,

                          }}

                        >

                          <Trash2 size={15} strokeWidth={1.4} />

                        </button>

                      </div>



                      <div

                        style={{

                          display: "flex",

                          alignItems: "center",

                          gap: "10px",

                          marginTop: "14px",

                        }}

                      >

                        <button

                          type="button"

                          onClick={() => onDecrease(getCartItemKey(item))}

                          aria-label="Decrease quantity"

                          style={{

                            width: "28px",

                            height: "28px",

                            border: "1px solid rgba(17,17,17,0.18)",

                            background: "transparent",

                            cursor: "pointer",

                            display: "grid",

                            placeItems: "center",

                          }}

                        >

                          <Minus size={13} />

                        </button>



                        <span

                          style={{

                            minWidth: "18px",

                            textAlign: "center",

                            fontSize: "14px",

                          }}

                        >

                          {quantity}

                        </span>



                        <button

                          type="button"

                          onClick={() => onIncrease(getCartItemKey(item))}

                          aria-label="Increase quantity"

                          style={{

                            width: "28px",

                            height: "28px",

                            border: "1px solid rgba(17,17,17,0.18)",

                            background: "transparent",

                            cursor: "pointer",

                            display: "grid",

                            placeItems: "center",

                          }}

                        >

                          <Plus size={13} />

                        </button>

                      </div>

                    </div>

                  </div>
                  );
                })}

              </div>



              <div style={{ marginTop: "28px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "13px" }}>
                  DELIVERY
                </div>
                <div style={{ display: "grid", gap: "8px" }}>
                  {[
                    ["name", "FULL NAME", "text"],
                    ["phone", "PHONE", "tel"],
                    ["address", "ADDRESS", "text"],
                    ["city", "CITY", "text"],
                    ["state", "STATE", "text"],
                    ["pin", "PIN CODE", "text"],
                  ].map(([key, label, type]) => (
                    <input
                      key={key}
                      type={type}
                      value={checkoutForm[key]}
                      onChange={(event) => setCheckoutForm((current) => ({ ...current, [key]: event.target.value }))}
                      placeholder={label}
                      aria-label={label}
                      inputMode={key === "phone" || key === "pin" ? "numeric" : undefined}
                      style={{ width: "100%", boxSizing: "border-box", border: "1px solid rgba(17,17,17,0.16)", background: "transparent", color: "#111", padding: "11px 12px", fontSize: "10px", letterSpacing: "0.08em" }}
                    />
                  ))}
                </div>

                <div style={{ marginTop: "28px", fontSize: "11px", letterSpacing: "0.16em", opacity: 0.55, marginBottom: "13px" }}>
                  PAYMENT METHOD

                </div>



                <div

                  style={{

                    display: "flex",

                    flexDirection: "column",

                    gap: "8px",

                  }}

                >

                  {paymentMethods.map((method) => (

                    <label

                      key={method.name}

                      style={{

                        display: "flex",

                        alignItems: "flex-start",

                        gap: "10px",

                        padding: "11px 12px",

                        border:

                          paymentMethod === method.name

                            ? "1px solid #111"

                            : "1px solid rgba(17,17,17,0.12)",

                        background:

                          paymentMethod === method.name

                            ? "rgba(17,17,17,0.035)"

                            : "transparent",

                        cursor: "pointer",

                      }}

                    >

                      <input

                        type="radio"

                        name="payment-method"

                        value={method.name}

                        checked={paymentMethod === method.name}

                        onChange={(event) => {

                          setPaymentMethod(event.target.value);

                          setCheckoutMessage("");

                        }}

                        style={{ marginTop: "2px" }}

                      />



                      <span>

                        <span

                          style={{

                            display: "block",

                            fontSize: "15px",

                            marginBottom: "3px",

                          }}

                        >

                          {method.name}

                        </span>



                        <span

                          style={{

                            display: "block",

                            fontSize: "12px",

                            lineHeight: 1.45,

                            opacity: 0.55,

                          }}

                        >

                          {method.detail}

                        </span>

                      </span>

                    </label>

                  ))}

                </div>

              </div>

            </>

          )}

        </div>



        {cart.length > 0 && (

          <div

            style={{

              padding: "20px 24px 24px",

              borderTop: "1px solid rgba(17,17,17,0.12)",

              background: "#f7f4ef",

            }}

          >

            <div style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.14em", opacity: 0.55, marginBottom: "9px" }}>PROMO CODE</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <input value={promoCode} onChange={(event) => { setPromoCode(event.target.value.toUpperCase()); if (promoApplied) setPromoApplied(false); }} placeholder="VASTRA10" aria-label="Promo code" style={{ flex: 1, minWidth: 0, border: "1px solid rgba(17,17,17,0.16)", background: "transparent", color: "#111", padding: "11px 12px", fontSize: "10px", letterSpacing: "0.12em" }} />
                <button type="button" onClick={() => { if (promoCode.trim() === "VASTRA10") { setPromoApplied(true); setCheckoutMessage(""); } else { setPromoApplied(false); setCheckoutMessage("INVALID PROMO CODE"); } }} style={{ border: "1px solid #111", background: "#111", color: "#fff", padding: "0 16px", fontSize: "9px", letterSpacing: "0.13em", cursor: "pointer" }}>APPLY</button>
              </div>
              {promoApplied && <div style={{ marginTop: "8px", fontSize: "9px", color: "#3d6b45", letterSpacing: "0.08em" }}>✓ VASTRA10 APPLIED — 10% OFF</div>}
            </div>

            <div style={{ display: "grid", gap: "10px", marginBottom: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.13em", opacity: 0.55 }}>SUBTOTAL</span>
                <span style={{ fontSize: "14px" }}>{formatVastraPrice(total)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.13em", opacity: 0.55 }}>SHIPPING</span>
                <span style={{ fontSize: "11px", opacity: 0.62 }}>FREE</span>
              </div>
              {promoApplied && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.13em", opacity: 0.55 }}>DISCOUNT</span>
                <span style={{ fontSize: "13px" }}>-{formatVastraPrice(discount)}</span>
              </div>}
              <div style={{ height: "1px", background: "rgba(17,17,17,0.12)", margin: "3px 0 4px" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.13em", opacity: 0.55 }}>TOTAL</span>
                <strong style={{ fontSize: "27px", fontWeight: 500 }}>{formatVastraPrice(finalTotal)}</strong>
              </div>
            </div>

            {checkoutMessage && (

              <div

                style={{

                  display: "flex",

                  alignItems: "flex-start",

                  gap: "8px",

                  padding: "10px 0",

                  fontSize: "10px",

                  lineHeight: 1.5,

                  opacity: 0.7,

                }}

              >

                <Check size={14} />

                <span>{checkoutMessage}</span>

              </div>

            )}



            {orderConfirmed ? (
              <div style={{ border: "1px solid rgba(17,17,17,0.16)", padding: "22px 16px", textAlign: "center" }}>
                <Check size={22} strokeWidth={1.4} style={{ marginBottom: "10px" }} />
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", fontWeight: 600, marginBottom: "8px" }}>YOUR ORDER IS CONFIRMED</div>
                <div style={{ fontSize: "11px", lineHeight: 1.6, opacity: 0.62 }}>VASTRA thanks you for your purchase.</div>
                <div style={{ marginTop: "12px", fontSize: "18px", fontWeight: 500 }}>{formatVastraPrice(confirmedTotal)}</div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handlePlaceOrder}
                style={{ width: "100%", border: 0, background: "#111", color: "#fff", padding: "16px", cursor: "pointer", fontSize: "12px", letterSpacing: "0.16em", fontWeight: 600 }}
              >
                PROCEED TO CHECKOUT
              </button>
            )}

          </div>

        )}

      </aside>

    </div>

  );

}





/* =========================================================



   APP



========================================================= */








/* =========================================================
   VASTRA OPENING SPLASH
========================================================= */
function VastraSplashScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#0b0a09",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: "vastraSplashExit 0.45s ease-in-out 2.55s forwards",
      }}
    >
      <style>{`
        @keyframes vastraLogoReveal {
          0% { opacity: 0; transform: scale(0.88) translateY(14px); filter: blur(8px); }
          55% { opacity: 1; transform: scale(1.02) translateY(0); filter: blur(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes vastraLogoBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.025); }
        }        @keyframes vastraSplashExit {
          0% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; pointer-events: none; }
        }
        @keyframes vastraPageReveal {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .vastra-page-reveal {
          animation: vastraPageReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes vastraBylineReveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
            letter-spacing: 0.18em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.28em;
          }
        }
        .vastra-byline {
          margin-top: 14px;
          color: rgba(207, 170, 91, 0.95);
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-transform: none;
          white-space: nowrap;
          opacity: 0;
          animation: vastraBylineReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) 1.25s forwards;
        }
        @media (max-width: 600px) {
          .vastra-opening-logo { width: min(68vw, 300px) !important; }
          .vastra-byline { font-size: 11px; margin-top: 10px; }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(157,122,58,0.10) 0%, rgba(11,10,9,0) 48%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          className="vastra-opening-logo"
          src="/vastra-opening-logo-transparent.png"
          alt="VASTRA by Rajveer"
          style={{
            width: "min(36vw, 390px)",
            maxWidth: "86vw",
            height: "auto",
            display: "block",
            objectFit: "contain",
            opacity: 0,
            animation:
              "vastraLogoReveal 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.08s forwards, vastraLogoBreath 1s ease-in-out 1.25s 1",
          }}
        />

        <div
          className="vastra-byline"
          aria-label="by Rajveer"
        >
          by- Veer
        </div>

      </div>
    </div>
  );
}



function AboutOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(13, 12, 11, 0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="about-modal"
        style={{
          position: "relative",
          width: "min(720px, 100%)",
          background: "#0d0c0b",
          color: "#f1eee8",
          border: "1px solid rgba(241,238,232,0.18)",
          padding: "clamp(42px, 7vw, 78px)",
          boxSizing: "border-box",
          boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close About"
          style={{
            position: "absolute",
            top: "18px",
            right: "20px",
            width: "34px",
            height: "34px",
            border: "1px solid rgba(241,238,232,0.28)",
            background: "transparent",
            color: "#f1eee8",
            fontSize: "22px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <div style={{ marginBottom: "28px", fontSize: "9px", letterSpacing: "0.28em", fontWeight: 500, opacity: 0.58 }}>
          THE HOUSE OF VASTRA
        </div>

        <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, fontWeight: 400, letterSpacing: "-0.035em", marginBottom: "34px" }}>
          ABOUT VASTRA
        </div>

        <div style={{ maxWidth: "620px", fontSize: "14px", lineHeight: 1.9, letterSpacing: "0.01em", color: "rgba(241,238,232,0.72)" }}>
          <p style={{ margin: "0 0 22px" }}>VASTRA is a modern luxury house built around refined design, timeless aesthetics, and intentional craftsmanship.</p>
          <p style={{ margin: "0 0 28px" }}>From tailored menswear and elegant womenswear to watches and fragrances, VASTRA brings together four expressions of contemporary luxury under one identity.</p>
          <p style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "19px", lineHeight: 1.5, fontStyle: "italic", color: "#f1eee8" }}>Designed with intention. Made for presence.</p>
        </div>
      </div>
    </div>
  );
}


function PhilosophyOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(13, 12, 11, 0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="philosophy-modal"
        style={{
          position: "relative",
          width: "min(720px, 100%)",
          background: "#0d0c0b",
          color: "#f1eee8",
          border: "1px solid rgba(241,238,232,0.18)",
          padding: "clamp(42px, 7vw, 78px)",
          boxSizing: "border-box",
          boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Our Philosophy"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            width: "48px",
            height: "48px",
            border: "1px solid rgba(241,238,232,0.25)",
            background: "transparent",
            color: "#f1eee8",
            fontSize: "28px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.28em",
            opacity: 0.6,
            marginBottom: "34px",
          }}
        >
          THE HOUSE OF VASTRA
        </div>

        <h2
          className="philosophy-modal-title"
          style={{
            margin: "0 0 54px",
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "clamp(38px, 5.5vw, 60px)",
            lineHeight: 0.98,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            textAlign: "center",
          }}
        >
          OUR PHILOSOPHY
        </h2>

        <div style={{ display: "grid", gap: "34px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(241,238,232,0.72)",
            }}
          >
            VASTRA believes luxury is defined by intention rather than excess.
            Every detail is considered, every proportion is deliberate, and
            every piece is chosen to remain relevant beyond a season.
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(241,238,232,0.72)",
            }}
          >
            From refined tailoring to exceptional timepieces and fragrances,
            we bring together design, craftsmanship and presence under one
            identity.
          </p>

          <p
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "22px",
              lineHeight: 1.45,
              fontStyle: "italic",
              color: "#f1eee8",
            }}
          >
            Less noise. More intention. A lasting sense of presence.
          </p>
        </div>
      </div>
    </div>
  );
}


function PrivateClientOverlay({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2050, background: "rgba(13,12,11,0.74)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="private-client-modal" style={{ position: "relative", width: "min(720px,100%)", background: "#0d0c0b", color: "#f1eee8", border: "1px solid rgba(241,238,232,0.18)", padding: "clamp(42px,7vw,78px)", boxSizing: "border-box", boxShadow: "0 30px 100px rgba(0,0,0,0.45)" }}>
        <button type="button" onClick={onClose} aria-label="Close Private Client Services" style={{ position: "absolute", top: "18px", right: "20px", width: "34px", height: "34px", border: "1px solid rgba(241,238,232,0.28)", background: "transparent", color: "#f1eee8", fontSize: "22px", lineHeight: 1, cursor: "pointer" }}>×</button>
        <div style={{ marginBottom: "28px", fontSize: "9px", letterSpacing: "0.28em", fontWeight: 500, opacity: 0.58 }}>VASTRA / CLIENT SERVICES</div>
        <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, fontWeight: 400, letterSpacing: "-0.035em", marginBottom: "26px" }}>PRIVATE CLIENT SERVICES</div>
        <p style={{ maxWidth: "620px", margin: "0 0 30px", fontSize: "14px", lineHeight: 1.9, color: "rgba(241,238,232,0.72)" }}>For assistance with rare timepieces, high-value purchases and private sourcing.</p>
        <a href="mailto:hello@vastra.com?subject=Private%20Client%20Services" style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(241,238,232,0.45)", color: "#f1eee8", background: "transparent", padding: "13px 18px", fontSize: "9px", letterSpacing: "0.18em", fontWeight: 600, textDecoration: "none" }}>REQUEST ASSISTANCE <ArrowUpRight size={14} strokeWidth={1.4} /></a>
      </div>
    </div>
  );
}


function BagToast({ toast, onClose, onViewBag }) {
  if (!toast) return null;
  return (
    <div role="status" aria-live="polite" style={{ position: "fixed", top: "88px", right: "24px", zIndex: 5000, width: "min(360px, calc(100vw - 32px))", background: "#111", color: "#f7f4ef", padding: "16px 18px", boxShadow: "0 18px 50px rgba(0,0,0,0.28)", animation: "vastraToastIn 0.35s ease-out" }}>
      <style>{`@keyframes vastraToastIn { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div style={{ fontSize: "9px", letterSpacing: "0.2em", opacity: 0.58, marginBottom: "7px" }}>ITEM ADDED TO BAG</div>
      <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "17px", lineHeight: 1.2 }}>{toast.product.name}</div>
      <div style={{ marginTop: "5px", fontSize: "9px", opacity: 0.58 }}>{toast.label}: {toast.size}</div>
      <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
        <button type="button" onClick={onClose} style={{ flex: 1, border: "1px solid rgba(247,244,239,0.3)", background: "transparent", color: "#f7f4ef", padding: "10px", fontSize: "8px", letterSpacing: "0.14em", cursor: "pointer" }}>CONTINUE SHOPPING</button>
        <button type="button" onClick={onViewBag} style={{ flex: 1, border: "1px solid #f7f4ef", background: "#f7f4ef", color: "#111", padding: "10px", fontSize: "8px", letterSpacing: "0.14em", cursor: "pointer" }}>VIEW BAG</button>
      </div>
    </div>
  );
}

function App() {



  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => window.clearTimeout(splashTimer);
  }, []);





  const [menuOpen, setMenuOpen] =



    useState(false);







  const [activeCategory, setActiveCategory] =



    useState(null);



  const [cartOpen, setCartOpen] =



    useState(false);

  const [bagToast, setBagToast] = useState(null);



  const [searchOpen, setSearchOpen] =



    useState(false);



  const [quickViewProduct, setQuickViewProduct] =



    useState(null);
  const [productPageProduct, setProductPageProduct] = useState(null);
const [aboutOpen, setAboutOpen] = useState(false);
  const [philosophyOpen, setPhilosophyOpen] = useState(false);
  const [privateClientOpen, setPrivateClientOpen] = useState(false);


  const [wishlistOpen, setWishlistOpen] = useState(false);

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = window.localStorage.getItem("vastra-wishlist");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [cart, setCart] =



    useState([]);







  /* -----------------------------------------



     Read URL hash



  ----------------------------------------- */







  useEffect(() => {



    const readHash = () => {



      const hash =



        window.location.hash.replace("#", "");







      if (
            hash === "men" ||
            hash === "women" ||
            hash === "watches" ||
            hash === "perfumes"
          ) {



        setActiveCategory(hash);



      } else {



        setActiveCategory(null);



      }



    };







    readHash();







    window.addEventListener(



      "hashchange",



      readHash



    );







    return () => {



      window.removeEventListener(



        "hashchange",



        readHash



      );



    };



  }, []);







  /* -----------------------------------------



     Open category



  ----------------------------------------- */







  const openCategory = (category) => {



    window.location.hash = category;







    window.scrollTo({



      top: 0,



      behavior: "instant",



    });



  };







  /* -----------------------------------------



     Back home



  ----------------------------------------- */







  const goHome = () => {



    window.location.hash = "";



    window.scrollTo({



      top: 0,



      behavior: "instant",



    });



  };







  useEffect(() => {
    try { window.localStorage.setItem("vastra-wishlist", JSON.stringify(wishlist)); } catch {}
  }, [wishlist]);

  const isWishlisted = (product) => wishlist.some((item) => item.id === product?.id);
  const toggleWishlist = (product) => {
    if (!product) return;
    setWishlist((current) => current.some((item) => item.id === product.id) ? current.filter((item) => item.id !== product.id) : [...current, product]);
  };
  const removeFromWishlist = (product) => setWishlist((current) => current.filter((item) => item.id !== product.id));
  const moveWishlistToBag = (product) => { addToCart(product); removeFromWishlist(product); };

  const addToCart = (
    product,
    selectedSize = "ONE SIZE",
    selectedPrice = null,
    variantLabel = "SIZE"
  ) => {
    if (!product) return;

    // Product-card/search/wishlist quick-adds do not have a selected variant.
    // Resolve the first valid option instead of creating an invalid ONE SIZE
    // clothing item or an item with a missing perfume volume.
    const sizing = getProductSizing(product);
    const fallbackOption = sizing?.options?.[0];
    const resolvedSize =
      selectedSize === "ONE SIZE" && fallbackOption
        ? fallbackOption.key
        : selectedSize;
    const resolvedVariantLabel =
      selectedSize === "ONE SIZE" && fallbackOption
        ? sizing.label
        : variantLabel;
    const variantPrice =
      selectedPrice == null
        ? getVariantPrice(product, fallbackOption || { surcharge: 0 })
        : Number(selectedPrice);
    const itemKey = `${product.id}-${resolvedSize}`;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => getCartItemKey(item) === itemKey
      );

      if (existingItem) {
        return currentCart.map((item) =>
          getCartItemKey(item) === itemKey
            ? {
                ...item,
                quantity: item.quantity + 1,
                variantPrice,
                variantLabel: resolvedVariantLabel,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          product,
          quantity: 1,
          selectedSize: resolvedSize,
          variantPrice,
          variantLabel: resolvedVariantLabel,
        },
      ];
    });

    setCartOpen(false);
    setBagToast({ product, size: resolvedSize, label: resolvedVariantLabel });
    window.clearTimeout(window.__vastraBagToastTimer);
    window.__vastraBagToastTimer = window.setTimeout(() => setBagToast(null), 3200);
  };

  const increaseQuantity = (cartItemKey) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        getCartItemKey(item) === cartItemKey
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (cartItemKey) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          getCartItemKey(item) === cartItemKey
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartItemKey) => {
    setCart((currentCart) =>
      currentCart.filter((item) => getCartItemKey(item) !== cartItemKey)
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce((sum, item) => {
    const numericPrice =
      item.variantPrice == null
        ? priceNumber(item.product.price)
        : Number(item.variantPrice);

    return sum + numericPrice * item.quantity;
  }, 0);



  useEffect(() => {



    document.body.style.overflow =



      menuOpen ||



      cartOpen ||
      wishlistOpen ||
      privateClientOpen ||

      searchOpen ||



      (Boolean(quickViewProduct) || Boolean(productPageProduct))



        ? "hidden"



        : "";







    return () => {



      document.body.style.overflow = "";



    };



  }, [



    menuOpen,



    cartOpen,
    wishlistOpen,
    privateClientOpen,

    searchOpen,



    quickViewProduct,



  ]);
  /* -----------------------------------------
     OPENING SPLASH
  ----------------------------------------- */

  if (showSplash) {
    return <VastraSplashScreen />;
  }


  /* -----------------------------------------


     COLLECTION PAGE


  ----------------------------------------- */


  if (activeCategory) {



    return (



      <div className="vastra-page-reveal">



        <Navigation



          menuOpen={menuOpen}



          setMenuOpen={setMenuOpen}



          openCategory={openCategory}



          cartCount={cartCount}



          onCartOpen={() => setCartOpen(true)}



          onSearchOpen={() => setSearchOpen(true)}
          wishlistCount={wishlist.length}
          onWishlistOpen={() => setWishlistOpen(true)}



        />







        <CollectionPage



          categoryKey={activeCategory}



          onBack={goHome}



          openCategory={openCategory}



          onAddToCart={addToCart}
          isWishlisted={isWishlisted}
          onToggleWishlist={toggleWishlist}



          onQuickView={setQuickViewProduct}



        />







        <Footer
  openCategory={openCategory}
  onAboutOpen={() => setAboutOpen(true)}
  onPhilosophyOpen={() => setPhilosophyOpen(true)}
  onPrivateClientOpen={() => setPrivateClientOpen(true)}
/>

<AboutOverlay
  open={aboutOpen}
  onClose={() => setAboutOpen(false)}
/>
      <PhilosophyOverlay
        open={philosophyOpen}
        onClose={() => setPhilosophyOpen(false)}
      />
<PrivateClientOverlay
  open={privateClientOpen}
  onClose={() => setPrivateClientOpen(false)}
/>


        <SearchOverlay



          open={searchOpen}



          onClose={() => setSearchOpen(false)}



          onAddToCart={addToCart}



          onQuickView={(product) => {



            setSearchOpen(false);



            setQuickViewProduct(product);



          }}



        />







        <BagToast toast={bagToast} onClose={() => setBagToast(null)} onViewBag={() => { setBagToast(null); setProductPageProduct(null); setQuickViewProduct(null); setCartOpen(true); }} />

      <CartDrawer



          open={cartOpen}



          onClose={() => setCartOpen(false)}



          cart={cart}



          onIncrease={increaseQuantity}



          onDecrease={decreaseQuantity}



          onRemove={removeFromCart}



          total={cartTotal}

          onClearCart={clearCart}

        />







        <WishlistDrawer
          open={wishlistOpen}
          onClose={() => setWishlistOpen(false)}
          wishlist={wishlist}
          onRemove={removeFromWishlist}
          onMoveToBag={moveWishlistToBag}
        />




        <ProductDetailPage
          product={productPageProduct}
          relatedProducts={productPageProduct ? products[productPageProduct.id >= 61 && productPageProduct.id <= 80 ? "perfumes" : productPageProduct.id >= 101 ? "watches" : productPageProduct.id <= 30 ? "men" : "women"] : []}
          onClose={() => setProductPageProduct(null)}
          onAddToCart={addToCart}
          isWishlisted={isWishlisted}
          onToggleWishlist={toggleWishlist}
          onOpenProduct={setProductPageProduct}
        />

        <QuickViewModal



          product={quickViewProduct}



          onClose={() => setQuickViewProduct(null)}



          onAddToCart={addToCart}
          onOpenProduct={(product) => { setQuickViewProduct(null); setProductPageProduct(product); }}

        />



      </div>



    );



  }







  /* -----------------------------------------



     HOMEPAGE



  ----------------------------------------- */







  return (



    <div className="site vastra-page-reveal">

      <style>{`
        .collection-page .collection-hero {
          height: 100vh !important;
          min-height: 100vh !important;
        }

        .collection-page .collection-hero-video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center center !important;
        }

        /* Tighter editorial spacing between collection navigation and products */
        .collection-page .collection-navigation {
          min-height: 48px !important;
        }

        .collection-page .products-section {
          padding-top: 34px !important;
        }

        .collection-page .products-header {
          margin-bottom: 55px !important;
        }

        @keyframes vastraSkeletonShimmer {
          0% { opacity: 0.48; }
          50% { opacity: 0.82; }
          100% { opacity: 0.48; }
        }

        .vastra-product-skeleton {
          background: linear-gradient(90deg, rgba(17,17,17,0.045), rgba(17,17,17,0.09), rgba(17,17,17,0.045));
          background-size: 220% 100%;
          animation: vastraSkeletonShimmer 1.35s ease-in-out infinite;
        }

        .vastra-product-loading-copy {
          height: 10px;
          width: 58%;
          margin-top: 12px;
          background: rgba(17,17,17,0.065);
          animation: vastraSkeletonShimmer 1.35s ease-in-out infinite;
        }

        .vastra-product-loading-price {
          height: 8px;
          width: 28%;
          margin-top: 9px;
          background: rgba(17,17,17,0.055);
          animation: vastraSkeletonShimmer 1.35s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .collection-page .collection-hero {
            height: 100svh !important;
            min-height: 100svh !important;
          }

          .collection-page .collection-navigation {
            min-height: 44px !important;
          }

          .collection-page .products-section {
            padding-top: 28px !important;
          }

          .collection-page .products-header {
            margin-bottom: 38px !important;
          }
        }
      `}</style>



      <Navigation



        menuOpen={menuOpen}



        setMenuOpen={setMenuOpen}



        openCategory={openCategory}



        cartCount={cartCount}



        onCartOpen={() => setCartOpen(true)}



        onSearchOpen={() => setSearchOpen(true)}
          wishlistCount={wishlist.length}
          onWishlistOpen={() => setWishlistOpen(true)}



      />







      <main>



        <Hero />







        <IntroSection />







        <CollectionsTransition />
        <CategorySection



          openCategory={openCategory}



        />







      </main>







      <Footer
        openCategory={openCategory}
        onAboutOpen={() => setAboutOpen(true)}
  onPhilosophyOpen={() => setPhilosophyOpen(true)}
  onPrivateClientOpen={() => setPrivateClientOpen(true)}
      />

      <AboutOverlay
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />
      <PhilosophyOverlay
        open={philosophyOpen}
        onClose={() => setPhilosophyOpen(false)}
      />
<PrivateClientOverlay
  open={privateClientOpen}
  onClose={() => setPrivateClientOpen(false)}
/>







      <SearchOverlay



        open={searchOpen}



        onClose={() => setSearchOpen(false)}



        onAddToCart={addToCart}



        onQuickView={(product) => {



          setSearchOpen(false);



          setQuickViewProduct(product);



        }}



      />







      <BagToast toast={bagToast} onClose={() => setBagToast(null)} onViewBag={() => { setBagToast(null); setProductPageProduct(null); setQuickViewProduct(null); setCartOpen(true); }} />

      <CartDrawer



        open={cartOpen}



        onClose={() => setCartOpen(false)}



        cart={cart}



        onIncrease={increaseQuantity}



        onDecrease={decreaseQuantity}



        onRemove={removeFromCart}



        total={cartTotal}

        onClearCart={clearCart}

      />







      <ProductDetailPage
        product={productPageProduct}
        relatedProducts={productPageProduct ? products[productPageProduct.id >= 61 && productPageProduct.id <= 80 ? "perfumes" : productPageProduct.id >= 101 ? "watches" : productPageProduct.id <= 30 ? "men" : "women"] : []}
        onClose={() => setProductPageProduct(null)}
        onAddToCart={addToCart}
        isWishlisted={isWishlisted}
        onToggleWishlist={toggleWishlist}
        onOpenProduct={setProductPageProduct}
      />


      <QuickViewModal



        product={quickViewProduct}



        onClose={() => setQuickViewProduct(null)}



        onAddToCart={addToCart}
        onOpenProduct={(product) => { setQuickViewProduct(null); setProductPageProduct(product); }}

      />







    </div>



  );



}







export default App;


