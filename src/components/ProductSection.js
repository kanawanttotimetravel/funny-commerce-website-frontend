'use client'

import ItemCard from "@/components/ItemCard";
import {useState} from "react";

const ProductSection = () => {
  const [productList, setProductList] = useState([])
  const updateProduct = () => {

  }
  return (
    <div style={sectionStyle}>
      {productList && productList.map((product) => (
        <ItemCard imageSrc={product.imageSrc} itemName={product.itemName} itemType={product.itemType}
                  price={product.price}>
        </ItemCard>))
      }
    </div>
  )
}

const sectionStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
}
export default ProductSection;
