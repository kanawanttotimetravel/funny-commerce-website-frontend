import Image from "next/image";
import Link from "next/link";

import ItemCard from "@/components/ItemCard";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return <>
    <div style={HomeStyle}>

    </div>
    <ProductSection></ProductSection>
    {/*<Link href='/login'>*/}
    {/*  <div>*/}
    {/*    What the hell*/}
    {/*  </div>*/}
    {/*</Link>*/}
  </>
}

const HomeStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: 'black',
}