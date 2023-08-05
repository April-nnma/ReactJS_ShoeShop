import { HANDLE_PRODUCT_DETAIL } from "./actionType"

export const detailProductAction= {
    handleProductDetail: (payload)=>{
        return {
            type: HANDLE_PRODUCT_DETAIL,
            payload,
        }
    }
}