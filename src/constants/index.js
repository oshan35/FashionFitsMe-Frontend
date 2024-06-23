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
      { value: 'red', label: 'Red', checked: false },
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
      { value: 'Men', label: 'Men', checked: false },
      { value: 'Women', label: 'Women', checked: false },
      { value: 'Kids', label: 'Kids', checked: false },
      { value: 'Unisex', label: 'Unisex', checked: false }
    ]
  },
  {
    id: 'Brand',
    name: 'Brand',
    options: [
      { value: 'Aldo', label: 'Aldo', checked: false },
      { value: 'Adidas', label: 'Adidas', checked: false },
      { value: 'Levis', label: 'Levis', checked: false },
      { value: 'Odel', label: 'Odel', checked: false },
      { value: 'Kelly-Felder', label: 'Kelly-Felder', checked: false },
      { value: 'Nike', label: 'Nike', checked: false },
      { value: 'Under armour', label: 'Under Armour', checked: false },
      { value: 'Abercrombie and fitch', label: 'Abercrombie And Fitch', checked: false },
      { value: 'Gucci', label: 'Gucci', checked: false },
      { value: 'Louis vuiton', label: 'Louis Vuiton', checked: false }
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

export const navigation = {
  featured: [
    {
     
    
      name:' Collections',
      Men: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hoodies', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
      ],
      Women: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Browse All' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],

     
    }
  ],
  pages: [
    {
     
    
      name:'New Arrivals',
      Men: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hoodies', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
      ],
      Women: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Browse All' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],

     
    }
   
  ],
  
  categories: [
    {
        
      name:'New Arrivals',
      Men: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hoodies', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
      ],
      Women: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Browse All' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],
     
      name:'Women',
      brands: [
        [
        { name1:'Aldo' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Adidas' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Levis' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Odel' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Kelly-Felder' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Nike' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
        [
          { name1:'Abercrombie And Fitch' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Under Armour' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Adidas' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Gucci' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Louis Vuiton' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        ],
      ],
      categories: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Blouses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],
     
   
    },
  
    {
      name: 'Men',
     
      brands: [
        [
        { name1:'Aldo' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Adidas' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Levis' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Odel' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Kelly-Felder' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        { name1:'Nike' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
        [
          { name1:'Abercrombie And Fitch' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Under Armour' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Adidas' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Gucci' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
          { name1:'Louis Vuiton' , topic1: 'Brand' ,name2:'Women' , topic2: 'Gender'  }, 
        ],
      ],
      categories: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hell', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
       
      ],
    //   accessories: [
    //     { name: 'Watches', href: '#' },
    //     { name: 'Boots', href: '#' },
    //     { name: 'Fanny Packs', href: '#' },
    //     { name: 'Sunglasses', href: '#' },
    //     { name: 'Browse All', href: '#' },
    //   ],
    //   categories: [
    //     { name: 'Just Added', href: '#' },
    //     { name: 'Clearance', href: '#' },
    //     { name: 'Graphic Tees', href: '#' },
    //   ],
    },
  ],
  other: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

export const navigationSecond = {
 
  categories: [
    {
        
      name:'New Arrivals',
      Men: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hoodies', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
      ],
      Women: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Browse All' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],
     
      
    
     
   
    },
  
   
  ],

};

export const footerNavigation = {
  
  categories: [
    { 
      name:'Women',
      categories: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Blouses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Crop Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:'Skirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 

        ],
       
      ],
    },
  
    {
      name: 'Men',
      categories: [
        [
          { name1: 'Dress Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Pants', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jackets', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'T-Shirts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Jeans', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Hoodies', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
        [
          { name1: 'Vests', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Kilts', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Outdoors', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Capes', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
          { name1: 'Browse All', topic1: 'Category' ,name2:'Men' , topic2: 'Gender'  },
        ],
       
      ],
    },
    

  ],
  
};
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
  // {
  //   title: "Products",
  //   links: [
  //     { name: "Tops", link: "/" },
  //     { name: "Dresses", link: "/" },
  //     { name: "New Arrivals", link: "/" },
  //     { name: "Seasonal Offers", link: "/" },
  //   ],
  // },
  {
    title: "Connect",
    links: [
      { name: "Instagram", link: "https://www.instagram.com" },
      { name: "Pinterest", link: "https://www.pinterest.com" },
      { name: "Facebook", link: "https://www.facebook.com" },
      { name: "Twitter", link: "https://www.twitter.com" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "customer@fashionStore.com",
        link: "mailto:customer@fashionStore.com",
      },
      { name: "+94554862354", link: "tel:+92554862354" },
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
