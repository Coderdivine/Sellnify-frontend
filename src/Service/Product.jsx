import { AuthConnect } from "../AuthConnect";
import { CustomError } from "../Utils/custom-error";

export class ProductService{
    constructor(){
        return;
    }

    async getProducts(offset){
        const {data:ResponseData} = await AuthConnect.get(`/product?offset=${offset*2}`);
        const { data } = ResponseData;
        if(!data) throw new CustomError("Products can't be retrieved");
        console.log(data);
        return data;
    }

    async productDetails(product_id){
        const {data:ResponseData} = await AuthConnect.get(`/product/${product_id}`);
        const { data } = ResponseData;
        if(!data) throw new CustomError("Product can't be retrieved");
        return data;
    }

    async updateProduct(product_id,data){
        const {data:ResponseData} = await AuthConnect.post(`/product/update/${product_id}`,data);
        if(!ResponseData) throw new CustomError("No response data");
        return ResponseData;
    }

    async dlt(product_id){
        console.log({product_id})
        const {data} = await AuthConnect.delete(`/product/dlt/${product_id}`);
        if(!data) throw new CustomError("Can't find response data");
        return data;
    }

}

