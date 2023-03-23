import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from 'react-redux';


// import UserProfile from "./components/UserProfile";

function App() {
  const islogin=useSelector((state) => state.auth.isAuth);
  return (
    <>
      {islogin && <Header />}      {/* <UserProfile/> */}
      <Auth/>
      <Counter />
    </>
  );
}

export default App;
