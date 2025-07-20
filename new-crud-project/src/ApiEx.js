import { useEffect, useState } from "react";
import Card from "./Card";

const ApiEx = () => {
  let [Products, setProducts] = useState([]);
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [pic, setPic] = useState("");
  let [FProducts, setFProducts] = useState([]);
  let [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((temp) => {
        setProducts(temp.products);
        setFProducts(temp.products);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    let data = Products.filter((temp) =>
      temp.category.toLowerCase().includes(search.toLowerCase())
    );
    setFProducts(data);
  }, [search, Products]);

  const addProduct = () => {
    let newProduct = {
      id: Number(id),
      title: title,
      category: category,
      thumbnail: pic,
    };

    let updatedProducts = [newProduct, ...Products];
    setProducts(updatedProducts);
    setFProducts(updatedProducts);

    setId("");
    setTitle("");
    setCategory("");
    setPic("");
  };

  const RemoveData = (id) => {
    let updatedProducts = Products.filter((temp) => temp.id !== id);
    setProducts(updatedProducts);
    setFProducts(updatedProducts);
  };

  const UpdateData = (id, newCategory) => {
    let updatedProducts = Products.map((temp) => {
      if (temp.id === id) {
        return { ...temp, category: newCategory };
      }
      return temp;
    });

    setProducts(updatedProducts);
    setFProducts(updatedProducts);
  };

  return (
    <>
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="Enter Image URL"
        value={pic}
        onChange={(e) => setPic(e.target.value)}
      /><br /><br />

      <button onClick={addProduct}>Add Product</button>

      <br /><br />

      <input
        type="text"
        placeholder="search by category..."
        value={search}
        onChange={handleSearch}
      />

      <br /><br />

      {(search.length > 0 ? FProducts : Products).map((temp) => (
        <Card
          key={temp.id}
          id={temp.id}
          title={temp.title}
          pic={temp.thumbnail}
          category={temp.category}
          RemoveData={RemoveData}
          UpdateData={UpdateData}
        />
      ))}
    </>
  );
};

export default ApiEx;
