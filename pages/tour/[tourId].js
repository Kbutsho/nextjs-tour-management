import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

const TourDetails = () => {
    const [product, setProduct] = useState();
    const router = useRouter()
    const { tourId } = router.query;
    // setTimeout(() => {
    //     console.log('Foo bar')
    //   }, 1000)

    useEffect(() => {
        if (tourId) {
            axios.get(`https://tour-management-api-tbk1.onrender.com/api/v1/tours/${tourId}`)
                .then(res => setProduct(res.data.data))
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [tourId])
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
            {
                product ? (
                    <div>
                        <h4>Name: {product.name}</h4>
                        <h4>Price: {product.price}</h4>
                        <h4>Place: {product.place}</h4>
                        <h4>Visit: {product.viewCount}</h4>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center text-center" style={{ height: "85vh" }} >
                        <div className="">
                            <h5 className="fw-bold text-uppercase" style={{ color: "red" }}>
                                <span>
                                    <span>Loading</span>
                                    <PulseLoader className="App" size={10} color={"red"} />
                                    <PulseLoader className="App" size={10} color={"red"} />
                                </span>
                            </h5>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TourDetails