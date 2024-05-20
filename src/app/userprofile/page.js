import Footer from '@/components/footer/footer'
import Header from '@/components/headercomponent/HeaderComponent'
import React from 'react'
import UserProfile from './UserProfile';

function UserProFilePage() {
    const user = {
          firstName: "Nguyen Sinh",
          lastName: "Cung",
          phoneNumber: "0124531",
          email: "abc@gmail.com",
          country: "Viet Nam",
          street: "Xuan Thuy",
          city: "Ha Noi",
          avatar: "https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-bac-ho.jpg" // Thay thế bằng đường dẫn thực tế tới ảnh đại diện
    };
    return (
        <div>
            <Header/>
            <UserProfile user={user} />
            <Footer/>
        </div>
    )
}

export default UserProFilePage