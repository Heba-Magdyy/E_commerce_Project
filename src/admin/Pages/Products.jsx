import { useState } from "react";
import productHook from "../ProductHook";
import Card from "../Card";

export default function Products() {
    const [products] = productHook("https://dummyjson.com/products");
  return (
        <main className='container p-4'>
          <div className='row g-col-6'>
            {data.map((e, i) => {
              return (
                <div key={i} className='col-12 col-md-6 col-lg-4 mb-2'>
                  <Card
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    description={e.description}
                    category={e.category}
                  />
                  <Link to={`/${e.id}`}></Link>
    
                </div>
              );
            })}
          </div>
        </main>
      );
    }
