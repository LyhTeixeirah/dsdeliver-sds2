import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import Footer from '../Footer';
import React, { useEffect, useState } from 'react';
import { Product, OrderLocationData } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { toast } from 'react-toastify'




function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    const totalPrice = selectedProducts.reduce((sum,item) => {
        return sum + item.price;
    },0)
    

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => {
          toast.warning('Error to list product');
        })
    }, []);

  
    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }
      
      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
        .then((response) => {
          toast.error(`Success! Order number ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Error to process your product');
          })
      }

    return(
        <>
       <div className="orders-container">
           <StepsHeader />
           <ProductsList 
           products={products}
           onSelectProduct={handleSelectProduct}
           selectedProducts={selectedProducts}
           />
           <OrderLocation 
           onChangeLocation={location => setOrderLocation(location)}
           />
           <OrderSummary 
           amount={selectedProducts.length} 
           totalPrice={totalPrice} 
           onSubmit={handleSubmit}
           />
       </div>
       <Footer />
       </>
    );   
}

export default Orders;