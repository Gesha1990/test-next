export default async function getProductsData() {
    const res = await fetch("http://localhost:3000/productList");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }