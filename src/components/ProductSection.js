'use client'

import ItemCard from "@/components/atomic/ItemCard";
import {useState} from "react";
import {Poppins} from "next/font/google";
import Link from "next/link";
import axios from "axios";

const poppins = Poppins({subsets: ['latin'], weight: "700"})

const ProductSection = async () => {
  const [productList, setProductList] = useState([{
    itemId: '66498544e2f0592d8c8d9ebc',
    imageSrc: 'drunkkurisu.jpg',
    itemName: 'Kurisu',
    itemType: 'my wife',
    price: 10000,
  }])
  const [page, setPage] = useState(1)

  const updateProduct = async () => {
      const ppp = await axios({
      url: (process.env.HOST && `${process.env.HOST}/Product`) || 'http://localhost:5000/Product/page',
      method: 'get',
      data: {
        page: page,
        size: 16,
      }}
    )
    console.log(ppp)
  }
  return (
    <div style={sectionStyle}>
      {productList && productList.map((product) => (
        <li style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0
        }} key={product.itemName}>
          <Link href={{
            pathname: `/shop/${product.itemId}`,
          }}>
            <ItemCard imageSrc={product.imageSrc} itemName={product.itemName} itemType={product.itemType}
                      price={product.price}>
            </ItemCard>
          </Link>
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
