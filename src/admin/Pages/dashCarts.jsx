import { CartHook } from "../UseDataHook";

export default function Carts() {
    const [cart] = CartHook("https://dummyjson.com/carts");
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg left-[260px] top-16">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Cart_ID
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Userid
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Quantity
                        </th>

                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            products
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((e, i) => {
                        return (
                            <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {e.id}
                                </th>
                                <td className="px-6 py-4">{e.userId}</td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{e.totalQuantity}</td>
                                <td className="px-6 py-4">
                                    {e.products.map(product => product.title).join(', ')}
                                </td>
                                <td className="px-6 py-4">{e.total}</td>


                            </tr>
                        );
                    })
                    }




                </tbody>
            </table>
        </div>

    );
}
