import { authInstance, formDataInstance } from "./api";

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

export async function addProduct({ productData }) {
  try {
    const {
      data: { product },
    } = await authInstance.post("/product", productData);
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function modifyProduct({ productData, id }) {
  try {
    const {
      data: { product },
    } = await authInstance.put(`/product/${id}`, productData);
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function modifyProductImage({ formData }) {
  try {
    const { data: imgData } = await formDataInstance.post(
      "/image/uploadfile",
      formData
    );
    console.log(imgData);
    if (!imgData) return;
    return `https://mandarin.api.weniv.co.kr/${imgData.filename}`;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailProduct(id) {
  try {
    const {
      data: { product },
    } = await authInstance.get(`/product/detail/${id}`);
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductList(accountname) {
  try {
    const {
      data: { product },
    } = await authInstance.get(`/product/${accountname}`);
    return product;
  } catch (error) {
    console.log(error);
  }
}
