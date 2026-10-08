import React, { useEffect } from 'react'
import { useState } from 'react'
import  { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import AllProducts from '../pages/AllProducts'
import toast from 'react-hot-toast'


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {user,setUser,setShowUserLogin,navigate,setSearchQuery,
        searchQuery,getCartCount,axios } = useAppContext();

    const logout =async () => {
        try{
            const { data } =await axios.get('/api/user/logout')
            if (data.success){
                toast.success(data.message) 
                setUser(null)
                navigate('/')
            }else{
                toast.error(data.message)
            }

        }catch(error){
            toast.error(error.message)

        }
    }


    useEffect(()=>{
        if(searchQuery.length >0){
            navigate("/products")
        }
    },[searchQuery])



  return (
    <div className='relative'>
      <nav className="flex items-center justify-between px-8  sm:py-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white static transition-all shadow-xl">
            <NavLink  to="/" onClick={()=> setOpen(false)}>
                <img className="h-9" src={assets.logo}  alt="Logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">All products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="Search" className='w-4 h-4'/>
                </div>

                <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="Cart" className='w-6 h-6 opacity-80'/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 py-1 px-1.5  rounded-full">{getCartCount()}</button>
                </div>

                {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-12 py-3 mt-2 bg-primary hover:bg-primary  transition text-white rounded-lg text-sm">
                    Login
                </button>):
                (
                    <div className='relative group '>
                        <img src={assets.profile_icon} className='w-10' alt="" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40 '>
                            <li onClick={()=> navigate("my-order")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer bg-primary'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img  src={assets.menu_icon} alt="Menu"/>
            </button>

            {/* Mobile Menu */}
            {open && (
            <div className={`${open ? 'flex' : 'hidden'} absolute  left-0 w-full bg-white shadow-md py-4
             flex-col items-start gap-2 px-5 text-sm md:hidden p-4`}>
                <NavLink to="/">
                   <img className="h-9" src={assets.logo}  alt="Logo" />
                </NavLink>

                <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/products" onClick={() => setOpen(false)}>All product</NavLink>
                {user && 
                <NavLink to="/orders" onClick={() => setOpen(false)}>my Orders</NavLink>
                }
                <NavLink to="/orders" onClick={() => setOpen(false)}>contact</NavLink>
                

                {!user ? (
                <button onClick={()=>{
                        setOpen(false);
                        setShowUserLogin(true)
                    }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary  transition text-white rounded-full text-sm">
                    Login
                </button>
                ):(
                    <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary  transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
            </div>
        )}  
        </nav>

    </div>
  )
}
