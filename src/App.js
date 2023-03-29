import CartWidget from "./components/CartWidget/CartWidget";
import ItemList from "./components/ItemList/ItemList";
import Logo from "./components/Logo/Logo";
import  Navbar from "./components/Navbar/Navbar";

function App() {
  return (
   <> <Logo/>
     
      <Navbar/>
      
      <ItemList greeting="Agrega tus productos!"/>
  </>
  



  
   
  
    
   
  );
}

export default App;
