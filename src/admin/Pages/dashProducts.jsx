import {productHook} from "../UseDataHook";

export default function Products() {
  const [products] = productHook("https://dummyjson.com/products");
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg left-[260px] top-16">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 ">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((e,i) => {
  return (
    <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
        {e.id}
      </th>
      <td className="px-6 py-4">{e.title}</td>
      <td className="px-6 py-4 ">{e.category}</td>
      <td className="px-6 py-4">{e.price}</td>
      <td className="px-6 py-4"><button >Edit</button></td>
    </tr>
  );
})
}




        </tbody>
      </table>
    </div>

  );
}

