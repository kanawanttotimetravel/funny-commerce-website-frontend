import Link from "next/link";

import ProductSection from "@/components/ProductSection";
import {getSession} from "@/apis/session";
import {redirect} from "next/navigation";

import {Poppins} from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: "700"})

const Home = async () => {
  const session = await getSession()
  // console.log(session)
  if (!session) {
    redirect('/login')
  }
  return <>
    {/*<Header></Header>*/}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <p style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        className: poppins.className,
        margin: 0,
        lineHeight: '150%'
      }}>
        Our product
      </p>
    </div>
    <ProductSection></ProductSection>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem'
    }}>
      <Link href='/shop'>
        <button style={buttonStyle}>
          <p style={{
            className: poppins.className,
            fontWeight: '600',
            fontSize: '1rem',
            color: '#B88E2F'
          }}>
            Show More
          </p>
        </button>
      </Link>
    </div>
  </>
}

const buttonStyle = {
  width: '15rem',
  height: '3rem',
  border: '1px solid',
  borderColor: '#B88E2F'
}

const HomeStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: 'black',
}

export default Home;