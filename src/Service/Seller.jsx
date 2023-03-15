import { CustomError } from "../Utils/custom-error";
import { AuthConnect } from "../AuthConnect";
export class SellersService{
    constructor() {
        return;
    }
    async login(_data){
        if(!_data.seller_id) {
            alert("You must specify sellers_id")
            throw new CustomError("You must specify sellers_id");
        };
        if(!_data.seller_zip_code_prefix) {
            alert("You must specify zip_code_prefix");
            throw new CustomError("You must specify zip_code_prefix");
        }
        const {data:ResponseData} = await AuthConnect.post("/sellers/login",_data);
        if(!ResponseData) alert("No respone ResponseData returned");
        console.log(ResponseData)
        return ResponseData;
    };

    async updateSellersInfo(_data){
        if(!_data.city) {
            alert("Specify new city")
            throw new CustomError("You must specify new city");
        };
        const {data:ResponseData} = await AuthConnect.post("/sellers/update-profile",_data);
        if(!ResponseData) alert("No respone data returned");
        return ResponseData;
    }

}