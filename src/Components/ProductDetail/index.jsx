import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'

const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lg'>
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