import { useState, useEffect } from "react";
import axios from "axios";

export default function productHook(url) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((e) => setProducts(e.products));
  }, []);
  return [products];
}
