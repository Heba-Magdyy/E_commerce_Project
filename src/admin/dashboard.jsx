import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
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

        </div>

    );
};

export default DashboardPage;
