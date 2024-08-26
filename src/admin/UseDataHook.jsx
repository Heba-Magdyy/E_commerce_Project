import { useState, useEffect } from "react";
import axios from "axios";

 export function productHook(url) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((e) => setProducts(e.data.products));
  }, []);
  return [products];
}

export function CartHook(url) {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    axios.get(url).then((e) => setcart(e.data.carts));
  }, []);
  return [cart];
}

export function UserHook(url) {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get(url).then((e) => setusers(e.data.users));
  }, []);
  return [users];
}
