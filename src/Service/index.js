import { ProductService } from "./Product";
import { SellersService } from "./Seller";

export default {
    ProductService: new ProductService(),
    SellersService: new SellersService()
}