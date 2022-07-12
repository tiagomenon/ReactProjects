import axios from "../Settings/Axios";
export async function getAllProductos(buscar) {
    return axios.get("sites/MLA/search?q=bocajuniorscamiseta#json", {
        params: {
            _limit: 10,
        },
    });
}
export async function getByIdProductos(id) {
    return axios.get("/items/" + id);
}
