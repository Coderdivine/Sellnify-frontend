import React, { useEffect, useState } from 'react'
import { ProductService } from '../Service/Product';

function ProductList() {
  const [ data,setData ] = useState(null);
  const [offset,setOffset] = useState(560);
  const changeOfSet=()=>{
    setOffset(offset+20);
  }

  const changeOfSetN=()=>{
    if(offset == 0){
      setOffset(offset);
    }else{
      setOffset(offset-20);
    }
  }
      const getP=async()=>{
        console.log({offset});
        const productService = new ProductService();
          const result = await productService.getProducts(offset+560);
          if(result){
            console.log(result);
            setData(result);
          }else{
            alert("No products yet.");
          }
      }
  useEffect(()=>{
    getP();
   },[offset]);
  return (
    <div>
      
      <section class="section latest__products" id="latest">
        <div class="title__container">
          <div class="section__title active" data-id="Latest Products">
            <span class="dot"></span>
            <h1 class="primary__title">{data == null?"No Product yet":"Latest Products"}</h1>
          </div>
        </div>
        {
          data && data.map(prod=><div class="container" data-aos="fade-up" data-aos-duration="1200">
          <div class="glide" id="glide_2">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides latest-center">
                <li class="glide__slide">
                  <div class="product">                   
                  </div>
                </li>
                <li class="glide__slide">
                  <div class="product">
                    <div class="product__footer">
                      <h3 style={{fontWeight:"bold"}}>{prod.product_category_name}</h3>
                      <div class="product__price">
                        <h4><small>weight: {prod.product_weight_g}</small></h4>
                        <h4><small>size: ({prod.product_height_cm}/{prod.product_weight_g})</small></h4>
                      </div>
                      <a href={`/p/${prod.product_id}`}><button type="submit" class="product__btn">View Product</button></a>
                    </div>
                   
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>)
        }

        {
          data && <div className='glides_container'>
            <button 
            onClick={changeOfSetN}
            class="glide__arrow glides" data-glide-dir="<">
               Previous
               <svg>
               </svg>
              </button>
              <button 
              onClick={changeOfSet}
              class="glide__arrow glides" data-glide-dir=">">
                <svg>
                  
                </svg>
                Next
              </button>
          </div>
        }
      </section>
    </div>
  )
}

export default ProductList