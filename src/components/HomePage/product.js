import React from 'react';
import '../../styles/product.css'

import PottaClass from '../../images/pottaclass.png'
import PottaTalk from '../../images/pottatalk.png'
import PottaMart from '../../images/pottamart.png'
import PottaNote from '../../images/pottanote.png'
import PottaScan from '../../images/pottascan.png'

const Product =()=>{
    const Product = [{name:'PottaClass', desc:'Class Partners Teach & Discussion with user in class', icon:PottaClass},
                    {name:'PottaTalk', desc:'Class Partners Teach & Discussion with user in class',icon: PottaTalk},
                    {name:'PottaMart', desc:'Class Partners Teach & Discussion with user in class',icon: PottaMart},
                    {name:'PottaNote', desc:'Class Partners Teach & Discussion with user in class',icon: PottaNote},
                    {name:'PottaScan', desc:'Class Partners Teach & Discussion with user in class', icon: PottaScan}]
    return(
        <div className="Product">
            {Product.map((produk)=>(
                <div className="ProductContainer">
                    <div className="ProductIcon">
                        <img clasname="PottaIcon" src={produk.icon}></img>
                    </div>
                    <div className="ProductBox">
                        <div className="ProductTitle">
                            {produk.name}
                        </div>
                        <div className="ProductDesc">
                            {produk.desc}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product