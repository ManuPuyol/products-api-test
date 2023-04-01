import axios from "axios";

export async function getProducts(onSuccess, onError) {
    await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
    })
        .then((response) => {
            onSuccess(response)
        })
        .catch((error) => {
            onError(error)
        });
};
export async function getCategories(onSuccess, onError) {
    await axios({
        method: "get",
        url: "https://fakestoreapi.com/products/categories",
    })
        .then((response) => {
            onSuccess(response)
        })
        .catch((error) => {
            //onError(error)
        });
}