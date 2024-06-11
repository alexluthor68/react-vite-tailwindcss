import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                     <XMarkIcon className='size-6 text-black-500'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail