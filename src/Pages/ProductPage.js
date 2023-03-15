import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductService } from '../Service/Product';

function ProductPage() {
  const { id } = useParams();
  const [data,setData] = useState(null);

  const getProd =async ()=>{
    const productService = await new ProductService().productDetails(id);
    setData(productService);
    console.log(productService)
  }
  const dlt=async(e)=>{
    e.preventDefault();
    const productService = await new ProductService().dlt(data.product_id || "");
    console.log({productService});
    alert("Product deleted: " + JSON.stringify(productService));
    window.location = "/products";
  }

  useEffect(()=>{
    getProd();
  },[id]);
  return (
    <div>
      
      <main id="main">  
    <div class="container">
      <section class="section product-details__section">
        <div class="product-detail__container">
          <div class="product-detail__left">
            <div class="details__container--left">
            </div>

            {
              data &&
              <div>
              <div class="product-details__btn">
              <a class="add" href={`/edit/${data.product_id}`}>
                EDIT</a>
              <a class="buy" 
              onClick={(e)=>dlt(e)}
              href="#">
                DELETE
              </a>
            </div>
          </div>
            }
            </div>

          {
            data &&

             <div class="product-detail__right">
            <div class="product-detail__content">
              <h3>{data.product_category_name}</h3>
              <div class="price">
                  <small>
                  description Length: {data.product_description_lenght}
                  </small>
              </div>
              <div class="product__review">
                
                <a href="#" class="rating__quatity">
                  sizes: ({data.product_height_cm}/{data.product_width_cm})
                </a>
              </div>
              <p>
               Photo Eqn: {data.product_photos_qty}
              </p>
              <p>
                Name Length: {data.product_name_lenght}
              </p>
              <p>
                Weigh: <b>{data.product_weight_g}</b>
              </p>
              
            </div>
          </div>
          }
        </div>
      </section>
      
      </div>
    </main>
    </div>
  )
}

export default ProductPage