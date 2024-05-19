import React from "react";
import Header from "@/components/headercomponent/HeaderComponent";
import ItemCard from "@/components/ItemCard";
import Footer from "@/components/footer/footer";
import item_card from "./productdata";

function ListOfProductPage() {
    const listItems = item_card.map((item) => (
        <ItemCard 
            // key={item.id} 
            imageSrc={item.imageSrc}
            itemName={item.itemName}
            itemType={item.itemType}
            price={item.price}
        />
    ));
    return (
        <div>
            <Header/>
            <div>
                {listItems}
            </div>
            <Footer/>
        </div>
    );
}

export default ListOfProductPage;