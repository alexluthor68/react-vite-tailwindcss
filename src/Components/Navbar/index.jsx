import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)  
    
    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "red" : "black",
    viewTransitionName: isTransitioning ? "slide" : "",
    };
    }}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/40'>
                    alexlutor1968@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒{context.count}
                </li>                
            </ul>
        </nav>
    )
}

export default Navbar