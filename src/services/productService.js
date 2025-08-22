import axiosInstance from "@/lib/axios";

// Get all products
export const getProducts = async () => {
  const { data } = await axiosInstance.get("/products");
  return data;
};

// Get single product
export const getProductById = async (id) => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data;
};

// Create product
export const createProduct = async (product) => {
  const { data } = await axiosInstance.post("/products", product);
  return data;
};

// Update product
export const updateProduct = async (id, product) => {
  const { data } = await axiosInstance.put(`/products/${id}`, product);
  return data;
};

// Delete product
export const deleteProduct = async (id) => {
  const { data } = await axiosInstance.delete(`/products/${id}`);
  return data;
};
