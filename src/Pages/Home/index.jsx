import { useContext } from 'react';
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context'

function Home() {  
   const context = useContext(ShoppingCartContext)  
   
   return (   
      <Layout>
         <div className='flex justify-center items-center relative w-80'>         
            <h1>Exclusive Products</h1>
         </div>
         <input
            type="text"
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
            onChange={(event) => event.target.value} />
         <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
         {
            context.items?.map(item => (
               <Card key={item.id} data={item} />
            ))
         }   
         </div>
         <ProductDetail />
      </Layout>     
    )
}

export default Home
