import FormInput from "@/components/Authentication/FormInput";
import FormInputCustom from "@/components/FormInputCustom";
import Header from "@/components/headercomponent/HeaderComponent";
import ProductSection from "@/components/ProductSection";

import './style.css'
const Page = () => {
    return (
        <div>
            <Header/>
            <ProductSection> </ProductSection>
            {/*<h1>Test Page</h1>*/}
            {/*<div>*/}
            {/*    <FormInputCustom name="Hello" type="email" placeholder="Enter your email" width="20rem" />*/}
            {/*</div>*/}
        </div>
    );
}

export default Page;