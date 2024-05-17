import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from './Footer'

// import Blogs from './Blog'


const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <hr />
            <main>{children}</main>
            
            <Footer />
        </div>
    )
}

export default MainLayout