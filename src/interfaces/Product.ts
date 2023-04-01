//redux toolkit
export interface IProduct {
    id?:number,
    name:string
}
export type StateProduct = {
    value:IProduct[],
    item:IProduct,
    
}






// redux thuần switch case
interface IActionGetProducts {
    type: "GET_PRODUCTS";
    payload: IProduct[];
}
interface IActionCreateProduct {
    type: "CREATE_PRODUCT";
    payload: IProduct;
}
interface IActionDeleteProduct {
    type: "DELETE_PRODUCT";
    payload: number;
}
interface IActionUpdateProduct {
    type: "UPDATE_PRODUCT";
    payload: IProduct;
}

export type IActionProduct =
    | IActionGetProducts
    | IActionCreateProduct
    | IActionDeleteProduct
    | IActionUpdateProduct;

