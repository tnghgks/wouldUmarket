import { authInstance } from "./api";

export async function deleteProduct(productId) {
  try {
    const { data } = await authInstance.delete(`/product/${productId}`);

    alert(data.message);

    if (!data) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
}
