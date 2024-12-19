import React, { useEffect } from 'react';
import productImage from "./../../../assets/g92-2-500x500 1.svg";
import "./Cards.css"
import { Link } from 'react-router-dom';
import Modal from "./../../Modals/Modal"


const CardTemplate = ({ name, loading, calc, img, DataOfEachProduct }) => {

    let rate = 5;
    return (
        <>

            <div className=' wraber_all_card content col-12 col-md-3' style={{ marginLeft: "10px" }}>
                <div class="bg"></div>
                <div class="blob"></div>
                <div className='grey_area pb-4' style={{ paddingBottom: "100px" }} >
                    <div className='wraber_dicount_and_heart d-flex justify-content-between p-2' style={{ backgroundColor: "#F5F5F5" }} >
                        <div className='dic  text-center borde d-flex align-items-center '  >
                            -40%
                        </div>
                        <div className='heart  d-flex align-items-center justify-content-center text-center' style={{ width: "30px", height: "30px", borderRadius: "50%" }}>
                            <span>❤</span>
                        </div>
                    </div>
                    <Link to={"/cart"}>
                        <div className="wraber_image d-flex justify-content-between p-2  " style={{ marginBottom: "20px", backgroundColor: '#F5F5F5' }}>
                            <div
                                className="image  d-flex align-items-center justify-content-center text-center"
                                style={{ textAlign: "center", width: "100%" }}
                            >
                                <img src={`http://localhost:3000/uploads/product/${DataOfEachProduct.images[0]}`}
                                    alt="product" className="img-fluid" style={{ textAlign: "center", width: "172px", height: "152px" }} />
                            </div>
                            <div
                                className="heart bg-danger d-flex align-items-center justify-content-center text-center col-1"
                                style={{ width: "30px", height: "30px", borderRadius: "50%", color: "black" }}
                            >
                                <Link style={{ color: "black" }}><i className="fa fa-shopping-cart"></i></Link>
                            </div>
                        </div>
                    </Link>
                    <div className='wraber_details dir-ar'>
                        <p>{DataOfEachProduct.name}</p>
                        <div>
                            <span>{DataOfEachProduct.price}$</span>
                            <span style={{ marginLeft: '7px', textDecoration: 'line-through' }}>$120</span>
                        </div>
                        <div className='rate'>
                            <span className={rate >= 1 ? "fa fa-star checked" : "fa fa-star"}  ></span>
                            <span className={rate >= 2 ? "fa fa-star checked" : "fa fa-star"}></span>
                            <span className={rate >= 3 ? "fa fa-star checked" : "fa fa-star"}></span>
                            <span className={rate >= 4 ? "fa fa-star checked" : "fa fa-star"}></span>
                            <span className={rate >= 5 ? "fa fa-star checked" : "fa fa-star"}></span>
                        </div>
                        <div class="text-slider">
                            <p class="text">Free Delivery</p>
                            <p class="text">High Quality</p>
                        </div>
                        <div className=' text-center d-flex justify-content-between'>
                            <button className='btn btn-yellow '>أضف للسله</button>
                            <button className='btn btn-light ' data-bs-toggle="modal" data-bs-target="#exampleModal">اضغط لمشاهده الفيديدو</button>
                        </div>
                    </div>
                </div>

            </div>
            <Modal />

        </>

    );
}

export default CardTemplate;
