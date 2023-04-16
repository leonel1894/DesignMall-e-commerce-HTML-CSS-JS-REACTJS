import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvaider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';



const App = () => {
  return (
    <div className='App'>
      <NotificationProvider>
      <BrowserRouter>
        <CartProvaider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvaider>
      </BrowserRouter>
      </NotificationProvider>

    </div>
  )
}

export default App;
