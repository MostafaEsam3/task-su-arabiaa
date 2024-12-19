import React, { useContext, useEffect, useState } from 'react';
import "./Cards.css"
import CardTemplate from './CardTemplate';
import WithComp from '../../HighOrderComp/HighOrderComp';
import Api_Dashboard from '../../../Interceptor/Interceotor';

const Cards = ({ Scroll, changeScroll }) => {
    const [ProductData,setProductData]=useState([]);
// fetching all product
    const fetchProduct=async()=>{
        Api_Dashboard.get('/products').then((response)=>{
            console.log(response.data.data.products)
            setProductData(response.data.data.products)
        }).catch((err)=>{
            console.log(err); 
        })
    }

    useEffect(()=>{
    fetchProduct()   
    },[])    

    return (
        <>
<div className={Scroll?'wraber row justify-content-between':' row justify-content-between flex-wrap'}>
{
    ProductData.map((ele)=>{
      return  <CardTemplate DataOfEachProduct={ele}/>
    })
}

</div>
<div className='m-auto mt-4'>
    <button className='btn btn-warning 'style={{display:"block",margin:"auto"}} onClick={()=>changeScroll()}>{Scroll ?"عرض كل المنتجات":"عرض أقل"}</button>
</div>
<div className='line bg-secondary mt-4'style={{width:"100%",borderBottom:"1px solid #000000" }}></div>
        
        </>
    );
}

export default WithComp(Cards);
