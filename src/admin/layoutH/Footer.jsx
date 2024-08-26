// export default function Footer() {
//     // return <div className=" p-1 bg-light">My Blog</div>;
//     return <footer className="p-10 bg-body-tertiary text-center mt-4">My E-commerce -  All Rights reserved</footer>
// }
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 fixed-bottom ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <Link to={'/login'}>Login</Link>

      </div>
    </footer>

  )
}
