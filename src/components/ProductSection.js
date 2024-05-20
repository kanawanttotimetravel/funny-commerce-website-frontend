'use client'

import ItemCard from "@/components/atomic/ItemCard";
import {useEffect, useState} from "react";
import {Poppins} from "next/font/google";
import Link from "next/link";
import axios from "axios";

const poppins = Poppins({subsets: ['latin'], weight: "700"})

const ProductSection =  () => {
  const [productList, setProductList] = useState([])
  const [page, setPage] = useState(1)

  const updateProduct = async () => {
    console.log('HEHE')
    const pl = await axios({
        url: (process.env.HOST && `${process.env.HOST}/Product/page`) || 'http://localhost:5000/Product/page',
        method: 'post',
        data: {
          page: page,
          size: 16,
        }
      }
    )
    setProductList(pl.data)
    return pl.data
  }

  useEffect(() => {
    updateProduct()
  }, [page])

  return (
    <div style={sectionStyle}>
      {/*<button onClick={() => {*/}
      {/*  setPage(page + 1)*/}
      {/*}}>HHH*/}
      {/*</button>*/}
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
