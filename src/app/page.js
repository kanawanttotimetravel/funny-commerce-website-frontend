import Image from "next/image";
import Link from "next/link";

import ItemCard from "@/components/ItemCard";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return <>
    <div style={HomeStyle}>

    </div>
    <Link href='/test'>
      <div>
        What the hell
      </div>
      </Link>
  </>
}

const HomeStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: 'black',
}