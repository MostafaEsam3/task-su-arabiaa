import React from 'react'
// import "./Footer.css"

export default function Footer() {
    return (
        <>

            <footer class="bg- text-light  mt-5 pt-5" style={{ backgroundColor: "#030406" }}>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-3  mb-4">
                            <h3>Exclusive</h3>
                            <p>
                                Subscribe
                            </p>
                            <p>Get 10% off your first order</p>

                           
                        </div>

                        <div class="col-md-3  mb-4 " style={{ lineHeight: "37px" }}>
                            <h4>Support</h4>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-light">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                                <li><a href="#" class="text-light">exclusive@gmail.com</a></li>
                                <li><a href="#" class="text-light">+88015-88888-9999</a></li>
                            </ul>
                        </div>


                        < div class="col-md-2  mb-4 " style={{ lineHeight: "37px" }}>
                            <h4>Account</h4>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-light">MY Account</a></li>
                                <li><a href="#" class="text-light">Login / Register</a></li>
                                <li><a href="#" class="text-light">Cart</a></li>
                                <li><a href="#" class="text-light">Wishlist</a></li>
                                <li><a href="#" class="text-light"> Shop</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3">
                            <h4>Su-Arabia</h4>
                            <p>
                                نظام Su-Arabia هو الحل المتكامل للتجارة الإلكترونية، يقدم لك أدوات مشتركة لتحسين أداء متجرك، وزيادة المبيعات، وتسهيل إدارة العمليات بكل يسر وفعالية.
                            </p>
                            <p><i class="fas fa-envelope"></i> info@sbyb.com</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col text-center">
                            <p class="mb-0">© جميع الحقوق محفوظة. Su-Arabia 2024</p>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
