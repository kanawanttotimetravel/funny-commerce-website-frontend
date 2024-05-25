import Header from "@/components/headercomponent/HeaderComponent";
import ProductSection from "@/components/atomic/ProductSection";

import './style.css'
import Footer from "@/components/footer/footer";
const Page = () => {
    return (
        <div>
            <Header/>
            <h1 style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '3rem'
            }}> Our products</h1>
            <ProductSection pageSize={16}> </ProductSection>
            {/*<h1>Test Page</h1>*/}
            {/*<div>*/}
            {/*    <FormInputCustom name="Hello" type="email" placeholder="Enter your email" width="20rem" />*/}
            {/*</div>*/}
            <Footer></Footer>
        </div>
    );
}

export default Page;