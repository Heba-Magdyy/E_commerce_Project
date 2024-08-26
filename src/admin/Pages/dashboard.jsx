import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const [productsCount, setProductsCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [cartsCount, setCartsCount] = useState(0);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [productsRes, usersRes, cartsRes] = await axios.all([
                    axios.get('https://dummyjson.com/products'),
                    axios.get('https://dummyjson.com/users'),
                    axios.get('https://dummyjson.com/carts')
                ]);

                setProductsCount(productsRes.data.total);
                setUsersCount(usersRes.data.total);
                setCartsCount(cartsRes.data.total);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };

        fetchDashboardData();
    }, []);



    return (
        <>

 
  <div className="p-4 mt-10 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl  ">
            products : {productsCount}
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl ">
            Users : {usersCount}
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl ">
            Cart : {cartsCount}
          </p>
        </div>
      </div>
      
    </div>
    <div>
    <Link className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-5 m-2' to={'/addProduct'}>Add New Product</Link>

    </div>
  </div>
</>


       

    );
};

export default DashboardPage;







{/* <div>
<h1>Admin Dashboard</h1>
<p>Products: {productsCount}</p>
<p>Users: {usersCount}</p>
<p>Carts: {cartsCount}</p>

<div className="container text-center">
    <div className="row row-cols-2">
        <div className="col">Products</div>
        <div className="col">Users</div>
        <div className="col">Carts</div>
        <div className="col">Total profit</div>
    </div>
</div>


<button onClick={() => window.location.href = '/add-product'}>Add New Product</button>

</div> */}
