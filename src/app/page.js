import Image from "next/image";
import Link from "next/link";

import ProductSection from "@/components/ProductSection";
import {getSession} from "@/apis/session";
import {redirect} from "next/navigation";

const Home = async () => {
  const session = await getSession()
  // console.log(session)
  if (!session) {
    redirect('/register')
  }
  return <>
    {/*<Header></Header>*/}
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

export default Home;