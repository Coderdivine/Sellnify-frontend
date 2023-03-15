import React, { useState } from 'react'
import { ProductService } from '../Service/Product'
import { SellersService } from '../Service/Seller';

function Login() {
  const [seller_zip_code_prefix,setSeller_zip_code_prefix] = useState("");
  const [seller_id,setSeller_id] = useState("");

    const LoginSeller= async (e)=>{
      e.preventDefault();
      const data = {
        seller_id,
        seller_zip_code_prefix
      }
      console.log(data);
      const sellersService = new SellersService();
      // const loggedIn = await 
        sellersService.login(data)
      .then(result=>{
        console.log(result);
        if(result){
          localStorage.setItem("seller_id",result.data.seller_id);
          window.location = `/products`;
        }else{
          return false;
        }
      });
      //console.log({loggedIn});
    }

  return (
    <div>
      <section class="section newsletter" id="contact">
      <div class="container">
        <div class="newsletter__content">
          <div class="newsletter__data">
            <h3>WELCOME TO SELLNIFY!</h3>
<p> Login Sellnify to get latest update on your best product -----{">"}</p>
          </div>
          <form  action="#">
            <input type="text"
            onChange={(e)=>setSeller_id(e.target.value)}
            placeholder="Enter your Seller Id (e.g 0x3442f8959a)" class="newsletter__email" />
            <br/>
            <input type="text" 
            onChange={(e)=>setSeller_zip_code_prefix(e.target.value)}
            placeholder="seller_zip_code_prefix (e.g 1203)" class="newsletter__email" />
            <br/>
            <a class="newsletter__link"
            onClick={(e)=>LoginSeller(e)}
            href='#' > Login </a>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login