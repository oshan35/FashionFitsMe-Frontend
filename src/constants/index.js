import { useState } from 'react';

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import { customer1, customer2 } from "../assets/images";

// export const navLinks = [
//   { path: "/", label: "Home" },
//   { path: "/catogeries/tops", label: "Tops" },
//   { path: "/catogeries/dresses", label: "Dresses" },
//   { path: "/contact-us", label: "Contact Us" },
// ];

export const filterValues = [
  {
    id: 'Color',
    name: 'Color',
    options: [
      { value: 'Red', label: 'Red', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'orange', label: 'Orange', checked: false },
      { value: 'grey', label: 'Grey', checked: false },
      { value: 'white', label: 'White', checked: false },
      { value: 'navy', label: 'Navy', checked: false },
      { value: 'yellow', label: 'Yellow', checked: false },
      { value: 'pink', label: 'Pink', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'cream', label: 'Cream', checked: false },
      { value: 'multicolour', label: 'Multicolour', checked: false }
    ]
  },
  {
    id: 'Category',
    name: 'Category',
    options: [
      { value: 'Work Wear', label: 'Work Wear', checked: false },
      { value: 'Dresses', label: 'Dresses', checked: false },
      { value: 'Denims', label: 'Denims', checked: false },
      { value: 'Tops', label: 'Tops', checked: false },
      { value: 'Casuals', label: 'Casuals', checked: false },
      { value: 'Pants', label: 'Pants', checked: false },
      { value: 'Linen', label: 'Linen', checked: false },
      { value: 'Premium Dresses', label: ' Premium Dresses', checked: false }
    ]
  },
  {
    id: 'Gender',
    name: 'Gender',
    options: [
      { value: 'men', label: 'Men', checked: false },
      { value: 'women', label: 'Women', checked: false },
      { value: 'kids', label: 'Kids', checked: false },
      { value: 'Unisex', label: 'Unisex', checked: false }
    ]
  },
  {
    id: 'Brand',
    name: 'Brand',
    options: [
      { value: 'aldo', label: 'Aldo', checked: false },
      { value: 'adidas', label: 'Adidas', checked: false },
      { value: 'levis', label: 'Levis', checked: false },
      { value: 'odel', label: 'Odel', checked: false },
      { value: 'aldo', label: 'Aldo', checked: false },
      { value: 'polo', label: 'Polo', checked: false },
      { value: 'under armour', label: 'Under Armour', checked: false },
      { value: 'abercrombie and fitch', label: 'Abercrombie And Fitch', checked: false },
      { value: 'gucci', label: 'Gucci', checked: false },
      { value: 'louis vuiton', label: 'Louis Vuiton', checked: false }
    ]
  },
  {
    id: 'Size',
    name: 'Size',
    options: [
      { value: 'UK4', label: 'UK4', checked: false },
      { value: 'UK6', label: 'UK6', checked: false },
      { value: 'UK8', label: 'UK8', checked: false },
      { value: 'UK10', label: 'UK10', checked: false },
      { value: 'UK12', label: 'UK12', checked: false },
      { value: 'UK14', label: 'UK14', checked: false },
      { value: 'UK16', label: 'UK16', checked: false },
      { value: 'UK18', label: 'UK18', checked: false },
      { value: 'UK20', label: 'UK20', checked: false },
      { value: '24', label: '24', checked: false },
      { value: '26', label: '26', checked: false },
      { value: '28', label: '28', checked: false },
      { value: '30', label: '30', checked: false },
      { value: '32', label: '32', checked: false },
      { value: '34', label: '34', checked: false },
      { value: '36', label: '36', checked: false }
    ]
  }
];



export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/catogeries", label: "Tops" ,topic:"Category"},
  { path: "/catogeries", label: "Dresses" ,topic:"Category"},
  { path: "/catogeries", label: "Red" ,topic:"Color"},
  { path: "/catogeries", label: "Men" ,topic:"Gender"},
  

  { path: "/contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];
export const linksArray = [
  "https://gflock.lk/cdn/shop/files/20AWEB_86e39473-2a45-4973-a59e-57d50f561ce2_280x@2x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/16AWEB_47cdcc1c-a18a-4a64-8542-dda512491ed1_580x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/20AWEB_86e39473-2a45-4973-a59e-57d50f561ce2_580x@2x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/14AWEB_4ac37095-c800-4867-bc33-6bd6e63beb60_280x@2x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/19AWEB_049c3cb3-4900-438b-b505-779afd76ba99_580x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/14AWEB_4ac37095-c800-4867-bc33-6bd6e63beb60_580x@2x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/21AWEB_da36513c-ca0e-4a7a-b7ba-5390a272545b_280x@2x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/09AWEB_e5394af6-5623-4c4e-85fb-c0c611bbc3e6_580x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/09AWEB_e5394af6-5623-4c4e-85fb-c0c611bbc3e6_580x@2x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/08AWEB_9b98b66e-8fd7-45c1-863b-7638d58adb71_280x@2x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/07AWEB_211c4eb3-17dc-48a4-abf9-8b88afb7dad6_580x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/08AWEB_9b98b66e-8fd7-45c1-863b-7638d58adb71_580x@2x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/12AWEB_6fb09356-34cd-46fa-ad7d-1e331e9fcd54_280x@2x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/17AWEB_5f81b88a-dad1-4571-a007-15e11ac2f37c_580x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/12AWEB_6fb09356-34cd-46fa-ad7d-1e331e9fcd54_580x@2x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/20AWEB_86e39473-2a45-4973-a59e-57d50f561ce2_580x@2x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/14AWEB_4ac37095-c800-4867-bc33-6bd6e63beb60_580x@2x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/09AWEB_e5394af6-5623-4c4e-85fb-c0c611bbc3e6_580x@2x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/08AWEB_9b98b66e-8fd7-45c1-863b-7638d58adb71_580x@2x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/12AWEB_6fb09356-34cd-46fa-ad7d-1e331e9fcd54_580x@2x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/23AWEB_2888cc20-93b0-4113-95c9-1224bdcd8f27_580x@2x.jpg?v=1708851179",
  "https://gflock.lk/cdn/shop/files/24AWEB_4f13ca5a-271c-434d-8974-39080c66f760_580x@2x.jpg?v=1708850789",
  "https://gflock.lk/cdn/shop/files/02AWEB_89b5f643-71b1-40f6-a45b-9bcffe9aed02_580x@2x.jpg?v=1708850685",
  "https://gflock.lk/cdn/shop/files/27BWEB_cbc68c7d-7e0f-4034-8588-95807fa36f2c_580x@2x.jpg?v=1708850330",
  "https://gflock.lk/cdn/shop/files/10AWEB_c3956ff2-4092-4a27-a10e-ebee9b033a6d_580x@2x.jpg?v=1708850259",
  "https://gflock.lk/cdn/shop/files/22AWEB_aab63bb3-3656-40be-be10-0ad50bf50d01_580x@2x.jpg?v=1708850193",
  "https://gflock.lk/cdn/shop/files/04AWEB_b969ef50-b546-49d4-bf64-6182507bcd7c_580x@2x.jpg?v=1708849826",
  "https://gflock.lk/cdn/shop/files/13AWEB_46141431-4119-4f60-aa2c-4d16d3384dec_580x@2x.jpg?v=1708849583",
  "https://gflock.lk/cdn/shop/files/11AWEB_db29a3e2-732c-4124-be6d-d2e7a9cf733f_580x@2x.jpg?v=1708849405",
  "https://gflock.lk/cdn/shop/files/12_81e250cb-8e63-4e12-b426-98cc446b427a_580x@2x.jpg?v=1708631474",
  "https://gflock.lk/cdn/shop/files/05AWEB_7d7e8a77-98b8-4198-a853-71d243318aad_580x@2x.jpg?v=1708849318",
  "https://gflock.com/cdn/shop/files/01BWEB_f17dfd8d-b1a0-4cdf-b8ae-6cb0d9d2cc7b_1000x.jpg?v=1703178499",
  "https://gflock.com/cdn/shop/files/25AWEB_1d02e5e4-b355-41f7-9119-4bd360146461_1000x.jpg?v=1708925563",
  "https://gflock.com/cdn/shop/files/17_f99b1690-e83b-4076-920a-58a2132c371b_1000x.jpg?v=1671646497",
  "https://gflock.com/cdn/shop/files/13247-2_2000x_b3f67308-5797-497a-a372-33302a5a0fe6_1000x.jpg?v=1643824675",
  "https://gflock.com/cdn/shop/files/15_6a9000d3-81dd-4715-bc1f-7d44a05389a8_1000x.jpg?v=1708925991",
  "https://gflock.com/cdn/shop/files/07AWEB_084384e6-a4a6-4837-aa7b-d91a6c1ad203_1000x.jpg?v=1698225367",
  "https://gflock.com/cdn/shop/files/39AWEB_11585513-468b-4777-bde0-36f2ceb9da77_1000x.jpg?v=1705849710",
  "https://gflock.lk/cdn/shop/files/16AWEB_47cdcc1c-a18a-4a64-8542-dda512491ed1_580x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/19AWEB_049c3cb3-4900-438b-b505-779afd76ba99_580x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/09AWEB_e5394af6-5623-4c4e-85fb-c0c611bbc3e6_580x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/07AWEB_211c4eb3-17dc-48a4-abf9-8b88afb7dad6_580x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/17AWEB_5f81b88a-dad1-4571-a007-15e11ac2f37c_580x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/15BWEB_69f2ae20-b9fd-47c7-98b8-449ea87bc543_580x.jpg?v=1708851179",
  "https://gflock.lk/cdn/shop/files/18AWEB_70b11afc-5e81-4300-b3e9-e154086d4f8a_580x.jpg?v=1708850789",
  "https://gflock.lk/cdn/shop/files/03AWEB_9982bf7c-4dc0-49a2-9508-77bfffd29230_580x.jpg?v=1708850685",
  "https://gflock.lk/cdn/shop/files/27BWEB_cbc68c7d-7e0f-4034-8588-95807fa36f2c_580x.jpg?v=1708850330",
  "https://gflock.lk/cdn/shop/files/10BWEB_e2edae78-5af3-4074-81f9-e24a3c6ed957_580x.jpg?v=1708867372",
  "https://gflock.lk/cdn/shop/files/22BWEB_152b44c0-513f-4d65-b732-728857d340b0_580x.jpg?v=1708867386",
  "https://gflock.lk/cdn/shop/files/04AWEB_b969ef50-b546-49d4-bf64-6182507bcd7c_580x.jpg?v=1708849826",
  "https://gflock.lk/cdn/shop/files/13BWEB_7d542d84-33be-4182-93db-2e71370802fd_580x.jpg?v=1708867402",
  "https://gflock.lk/cdn/shop/files/11BWEB_35882192-5f63-4878-91bb-e6538c38f2da_580x.jpg?v=1708867245",
  "https://gflock.lk/cdn/shop/files/20AWEB_86e39473-2a45-4973-a59e-57d50f561ce2_280x@2x.jpg?v=1708852020",
  "https://gflock.lk/cdn/shop/files/14AWEB_4ac37095-c800-4867-bc33-6bd6e63beb60_280x@2x.jpg?v=1708851940",
  "https://gflock.lk/cdn/shop/files/21AWEB_da36513c-ca0e-4a7a-b7ba-5390a272545b_280x@2x.jpg?v=1708851894",
  "https://gflock.lk/cdn/shop/files/08AWEB_9b98b66e-8fd7-45c1-863b-7638d58adb71_280x@2x.jpg?v=1708851562",
  "https://gflock.lk/cdn/shop/files/12AWEB_6fb09356-34cd-46fa-ad7d-1e331e9fcd54_280x@2x.jpg?v=1708851490",
  "https://gflock.lk/cdn/shop/files/25AWEB_a92e13d9-d1ec-4942-a2f8-f3ea0cd89a2b_280x@2x.jpg?v=1708851179",
  "https://gflock.lk/cdn/shop/files/24AWEB_4f13ca5a-271c-434d-8974-39080c66f760_280x@2x.jpg?v=1708850789",
  "https://gflock.lk/cdn/shop/files/02AWEB_89b5f643-71b1-40f6-a45b-9bcffe9aed02_280x@2x.jpg?v=1708850685",
  "https://gflock.lk/cdn/shop/files/27AWEB_21f69f3e-3148-474a-be05-a759353c83d6_280x@2x.jpg?v=1708850330",
  "https://gflock.lk/cdn/shop/files/10AWEB_c3956ff2-4092-4a27-a10e-ebee9b033a6d_280x@2x.jpg?v=1708850259",
  "https://gflock.lk/cdn/shop/files/22AWEB_aab63bb3-3656-40be-be10-0ad50bf50d01_280x@2x.jpg?v=1708850193",
  "https://gflock.lk/cdn/shop/files/04AWEB_b969ef50-b546-49d4-bf64-6182507bcd7c_280x@2x.jpg?v=1708849826",
  "https://gflock.lk/cdn/shop/files/13AWEB_46141431-4119-4f60-aa2c-4d16d3384dec_280x@2x.jpg?v=1708849583",
  "https://gflock.lk/cdn/shop/files/11AWEB_db29a3e2-732c-4124-be6d-d2e7a9cf733f_280x@2x.jpg?v=1708849405",
];

export const products = linksArray.map((link, index) => {
  const secondImageIndex = Math.floor(Math.random() * linksArray.length);
  const secondImageLink = linksArray[secondImageIndex];

  return {
    id: index + 1,
    name: "Product " + (index + 1),
    href: "#",
    price: "LKR " + (Math.random() * 10000).toFixed(2), // Random price for demonstration
    imageSrc: link,
    secondImageSrc: secondImageLink, // Adding second image link to the object
    imageAlt: "Description for Product " + (index + 1),
    prodCode: "code-" + (index + 1),
  };
});

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Tops", link: "/" },
      { name: "Dresses", link: "/" },
      { name: "New Arrivals", link: "/" },
      { name: "Seasonal Offers", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "customer@fashionStore.com",
        link: "mailto:customer@fashionStore.com",
      },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const fetchProductsFromBackend = async (setProducts, setIsLoading,filters) => {
  setIsLoading(true);

  try {
    const response = await fetch(`http://localhost:5000/products/filter-products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    setProducts(data);
    console.log('Retrieved products', data);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setIsLoading(false);
  }
};


export const useProductsFromBackend = (title,categoryId, selectedFilters,updateSelectedFilters,  minPrice, maxPrice) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log('Retrieved products');
  // const { selectedFilters, updateSelectedFilters, minPrice, maxPrice } = useSelectedFilters();
  const filters = { selectedFilters, minPrice, maxPrice };

  // const fetchProducts = async () => {
  //   updateSelectedFilters(title, categoryId);
  //   await fetchProductsFromBackend(setProducts, setIsLoading,filters);
  // };

  try {
    const response =  fetch(`http://localhost:5000/products/filter-products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = response.json();
    setProducts(data);
    console.log('Retrieved products', data);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setIsLoading(false);
  }

  return { products, isLoading };
};
