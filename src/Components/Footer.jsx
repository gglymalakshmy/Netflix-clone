import React from 'react'
// import Img from './img.png'
const Footer = () => {
    return (
        <div>
            <footer className="p-4 md:p-8 lg:p-10 dark:bg-gray-800 bg-opacity-75 text-white">
                <div className="mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center">
                   
{/*                     
                    <img className='justifyContent:center' src={Img} alt=""/> */}

                    <img className="w-44" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt="gh"/>
                    {/* <h1 className="tracking-[.25em] text-4xl text-red-500">NETFLIX</h1> */}
           
                <p className="my-6">Entertain Your loved Ones in home</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm  sm:text-center ">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
</footer >
    </div >
  )
}

export default Footer