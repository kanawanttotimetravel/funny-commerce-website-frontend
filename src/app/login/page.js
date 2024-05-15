import LoginForm from "@/components/Authentication/LoginForm";
const RegisterPage = () => {
  return (
    <div style={{
      backgroundColor: '#F8FFCA',
      height: '100vh',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={BoxStyle}>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

const BoxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

export default RegisterPage;