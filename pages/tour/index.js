import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import Router, { useRouter } from 'next/router'
const ProductDetails = () => {
    const [product, setProduct] = useState();
    useEffect(() => {
        axios.get('https://tour-management-api-tbk1.onrender.com/api/v1/tours?sort=-viewCount')
            .then(res => setProduct(res.data.data.result))
            .catch((err) => {
                console.log(err);
            })
    }, []);
    let visitCount = [];
    if (product) {
        product.forEach(item => {
            visitCount.push(item.viewCount);
        });
    }
    const sum = visitCount.reduce((partialSum, a) => partialSum + a, 0);
    const Details = (id) => {
        Router.push(`/tour/${id}`)
    }
    return (
        <div className='container'>
            <h3 className='my-3 fw-bold text-danger'><span className='me-2'>Trending Tours </span>
            {sum ? sum :null}
            </h3>
            {
                product ?

                    <table className="table table-striped table-hover">
                        <thead className="bg-dark text-white text-center">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Place</th>
                                <th scope="col">Details</th>
                                <th scope="col">Visit</th>
                                <th scope="col">Last visit</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            product.map((item, index) =>
                                <tbody key={item._id} className=" text-center">

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>Tour {(Number(item["name"].slice(-1)))}</td>
                                        <td>{item.price}</td>
                                        <td>{item.place}</td>
                                        <td>{item["details"].slice(0, 4)}</td>
                                        <td>{item.viewCount}</td>
                                        <td>{item["updatedAt"].split('T').join(' ').split('Z').join(' ').split('.')[0]}</td>
                                        <td>{item.status}</td>
                                        <th scope="col"><button onClick={() => Details(item._id)} className='btn btn-sm btn-primary'>Details</button></th>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table> : (
                        <div className="loading-bg">
                            <div className="d-flex justify-content-center align-items-center text-center" style={{ height: "80vh" }} >
                                <div className="">
                                    <div className="">
                                        <h4 className="fw-bold text-uppercase" style={{ color: "red" }}>
                                            <span><span className="mx-2">Loading</span>
                                                <PulseLoader className="App" size={10} color={"red"} />
                                                <PulseLoader className="App" size={10} color={"red"} />
                                            </span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};
export default ProductDetails