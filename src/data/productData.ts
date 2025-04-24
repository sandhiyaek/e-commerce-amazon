import { Product } from '../models';

// Today's Deals
export const dealsProducts: Product[] = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 4289,
    price: 199.99,
    originalPrice: 249.99,
    isPrime: true
  },
  {
    id: 2,
    title: "Samsung 65-Inch Class QLED 4K Smart TV",
    image: "https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.5,
    reviewCount: 2567,
    price: 799.99,
    originalPrice: 1099.99,
    isPrime: true
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    image: "https://images.pexels.com/photos/4117547/pexels-photo-4117547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviewCount: 12076,
    price: 79.99,
    originalPrice: 119.99,
    isPrime: true
  },
  {
    id: 4,
    title: "Bose QuietComfort Wireless Noise Cancelling Headphones",
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    reviewCount: 3845,
    price: 249.99,
    originalPrice: 329.99,
    isPrime: true
  },
  {
    id: 5,
    title: "Kindle Paperwhite – Now with a 6.8\" display and adjustable warm light",
    image: "https://images.pexels.com/photos/7666424/pexels-photo-7666424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 9874,
    price: 129.99,
    originalPrice: 159.99,
    isPrime: true
  }
];

// Popular in Electronics
export const electronicsProducts: Product[] = [
  {
    id: 6,
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviewCount: 1567,
    price: 348.99,
    isPrime: true
  },
  {
    id: 7,
    title: "Apple MacBook Air Laptop M2 Chip",
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviewCount: 2876,
    price: 1099.99,
    isPrime: true
  },
  {
    id: 8,
    title: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 3421,
    price: 479.99,
    originalPrice: 599.99,
    isPrime: true
  },
  {
    id: 9,
    title: "Samsung Galaxy Tab S8 Android Tablet",
    image: "https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    reviewCount: 1235,
    price: 599.99,
    originalPrice: 699.99,
    isPrime: true
  },
  {
    id: 10,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 5937,
    price: 34.99,
    originalPrice: 49.99,
    isPrime: true
  }
];

// Recommendations
export const recommendedProducts: Product[] = [
  {
    id: 11,
    title: "Fitbit Versa 3 Health & Fitness Smartwatch",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.5,
    reviewCount: 4578,
    price: 168.95,
    originalPrice: 229.95,
    isPrime: true
  },
  {
    id: 12,
    title: "Logitech MX Master 3S Wireless Mouse",
    image: "https://www.bhphotovideo.com/images/images2500x2500/logitech_910_006558_mx_master_3s_pale_1703321.jpg",
    rating: 4.8,
    reviewCount: 2107,
    price: 89.99,
    originalPrice: 99.99,
    isPrime: true
  },
  {
    id: 13,
    title: "Cuisinart 5.5-Quart Stand Mixer",
    image: "https://i.pinimg.com/originals/36/ce/02/36ce02f17ff9e01be5f308bac4a3f572.jpg",
    rating: 4.6,
    reviewCount: 1687,
    price: 159.99,
    originalPrice: 249.99,
    isPrime: true
  },
  {
    id: 14,
    title: "COSORI Air Fryer Oven Combo 5.8QT",
    image: "https://images.pexels.com/photos/11550532/pexels-photo-11550532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 8764,
    price: 89.99,
    originalPrice: 119.99,
    isPrime: true
  },
  {
    id: 15,
    title: "JBL Flip 5 Waterproof Portable Bluetooth Speaker",
    image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviewCount: 5437,
    price: 99.95,
    originalPrice: 129.95,
    isPrime: true
  }
];