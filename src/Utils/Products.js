// Fungsi untuk mendapatkan data dari localStorage
export const getProductsFromLocalStorage = () => {
    const productsJSON = localStorage.getItem("products");
    return productsJSON ? JSON.parse(productsJSON) : [];
  };
  
  // Fungsi untuk menyimpan data ke localStorage
  export const saveProductsToLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  // Fungsi untuk menambahkan produk ke localStorage
  export const addProductToLocalStorage = (product) => {
    const products = getProductsFromLocalStorage();
    products.push(product);
    saveProductsToLocalStorage(products);
  };
  
// Fungsi untuk menghapus produk dari localStorage berdasarkan ID
export const removeProductFromLocalStorage = (productId) => {
    const products = getProductsFromLocalStorage();
    
    // Filter array untuk menghapus item yang memiliki ID yang sesuai
    const updatedProducts = products.filter((product) => product.id !== productId);
    
    // Simpan array yang sudah diperbarui kembali ke localStorage
    saveProductsToLocalStorage(updatedProducts);
  
    // Hapus kunci isSolid_${productId} dari localStorage
    localStorage.removeItem(`isSolid_${productId}`);
  };


  