import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails= () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            {productId}
        </div>
    );
};

export default ProductDetails