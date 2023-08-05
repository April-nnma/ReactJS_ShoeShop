const initialState = {
    shoesDetail:{
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
}

export const shopShoesReducer = (state = initialState,action) =>{

    switch (action.type) {
        case 'HANDLE_PRODUCT_DETAIL':
            let newProdDetail = {...action.payload}            

            return {...state,shoesDetail:newProdDetail}
        default:
            return state
    }

}