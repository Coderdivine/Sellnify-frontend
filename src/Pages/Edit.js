import React, { useState } from 'react'
import { ProductService } from '../Service/Product'
import { useParams } from 'react-router-dom';
import { CustomError } from '../Utils/custom-error';

function Edit() {
  const { id } = useParams();
  const [
    product_description_lenght,
    setProduct_description_lenght
  ] = useState("");
  
  const [
    product_category_name,
    setProduct_category_name
  ] = useState("");

  const [
    size,
    setSize
  ] = useState("");

  const MakeChanges=async(e)=>{
    e.preventDefault();

    if(!product_description_lenght){
      alert("product_description_lenght is required")
      throw new CustomError("Product description length is required");
    };
    if(!size.split(",")[1]){
      alert("Please split size with a comma e.g (20,20)");
      throw new CustomError("Please split size with a comma e.g (20,20)");
    };
    const data = {
      product_description_lenght,
      product_category_name,
      product_height_cm:size.split(",")[0],
      product_width_cm:size.split(",")[1]?size.split(",")[1]:size.split(",")[0]
    
    };
    console.log(data);
    const chnagesUpdate = await new ProductService().updateProduct(id,data);
    console.log({chnagesUpdate});
    alert("Product updated"+ JSON.stringify(chnagesUpdate));
    window.location = `/p/${id}`

  }

  return (
    <div className=' parent newsletter__content formated'>
      <form action="#">
            <input type="text"
            onChange={(e)=>setProduct_category_name(e.target.value)}
            value={product_category_name}
            placeholder="Enter New category name (e.g ChromeOnChrome)" class="newsletter__email" />
            <br/>
            <input type="text" 
            onChange={(e)=>setProduct_description_lenght(e.target.value)}
            value={product_description_lenght}
            placeholder="New description length (e.g 29)" class="newsletter__email" />
            <br/>
            <input type="text" 
            onChange={(e)=>setSize(e.target.value)}
            value={size}
            placeholder="New size (e.g length,widith)" class="newsletter__email" />
            <br/>
            <a class="newsletter__link"
            onClick={(e)=>MakeChanges(e)}
            href='#' > Save changes </a>
          </form>
    </div>
  )
}

export default Edit