'use client'

import ItemCard from "@/components/ItemCard";
import {useState} from "react";
import {Poppins} from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: "700"})

const ProductSection = () => {
  const [productList, setProductList] = useState([{
    imageSrc: 'drunkkurisu.jpg',
    itemName: 'Kurisu',
    itemType: 'my wife',
    price: 10000,
  }, {
    imageSrc: null,
    itemName: 'Uncle Ho',
    itemType: 'leader',
    price: 10000,
  },
    {
      imageSrc: null,
      itemName: 'Uncle Ho',
      itemType: 'leader',
      price: 10000,
    },
    {
      imageSrc: null,
      itemName: 'Uncle Ho',
      itemType: 'leader',
      price: 10000,
    },
    {
      imageSrc: null,
      itemName: 'Uncle Ho',
      itemType: 'leader',
      price: 10000,
    },
    {
      imageSrc: null,
      itemName: 'Uncle Ho',
      itemType: 'leader',
      price: 10000,
    },
    {
      imageSrc: null,
      itemName: 'Uncle Ho',
      itemType: 'leader',
      price: 10000,
    }
  ])
  const updateProduct = () => {

  }
  return (
      <div style={sectionStyle}>
        {productList && productList.map((product) => (
          <li style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0
          }} key={product.itemName}>
            <ItemCard imageSrc={product.imageSrc} itemName={product.itemName} itemType={product.itemType}
                      price={product.price}>
            </ItemCard>
          </li>))
        }
      </div>
  )
}

const sectionStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 0,
  margin: 0
}
export default ProductSection;
