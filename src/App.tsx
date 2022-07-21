import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const mensaje = 'Bienvenido!';
  const stock = 12;
  const [quantityProduct, setsetQuantityProduct] = useState<number>(0);
  function onAdd(count: number) {
    alert(`Agregando ${count} productos al carrito`);
    setsetQuantityProduct(count)
  }
  
  return (
    <div className="App">
      <NavBar quantityProduct={quantityProduct}/>
      <ItemListContainer mensaje={mensaje}/>
      <ItemCount stockAvailable={stock} onAdd={(count: number) => onAdd(count)}/>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
