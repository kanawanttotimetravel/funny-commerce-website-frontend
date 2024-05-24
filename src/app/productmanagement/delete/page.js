import ProductSection from "@/components/atomic/ProductSection";
import {getSession} from "@/apis/session";
import {redirect} from "next/navigation";

const AdminPage = async () => {
  const session = await getSession()
  if (!session || session['userType'] !== 'admin') {
    redirect('/login')
  }
  return (
    <div>
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '3rem'
      }}> Administration </h1>
      <ProductSection pageSize={16}> </ProductSection>
    </div>
  );
}

export default AdminPage;