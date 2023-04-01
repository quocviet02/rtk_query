import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interfaces/Product"


export const productAPI = createApi({
    reducerPath:"productAPI",
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),

    endpoints:(builder)=>({
        getAllProduct:builder.query<IProduct[],void>({
            query:()=>`product`
        }),
        getProduct:builder.query<IProduct, void>({
            query:(id)=>`product/${id}`
        }),

        addProduct:builder.mutation<IProduct, Partial<IProduct>>({
            query:(data)=>{
                return{
                    url:`product`,
                    method:"POST",
                    body:data
                }
            }
        }),
        updateProduct:builder.mutation<IProduct,Partial<IProduct>>({
            query:(data)=>{
                return{
                    url:`product/${data.id}`,
                    method:"PUT",
                    body:data
                }
            }
        }),
        deleteProduct:builder.mutation<IProduct, void>({
            query:(id)=>{
                return{
                    url:`product/${id}`,
                    method:"DELETE"
                }
            }
        })

    })
})
export const {
    useGetAllProductQuery,
    useGetProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
}=productAPI