import { useEffect, useState } from "react";

const Index = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    console.log(dateState)
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}>
            <div>
               
                    {/* <h3>
                        {' '}
                        {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </h3> */}
                    <h3 className="fw-bold text-danger text-center">
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: true,
                        })}
                    </h3>
                </div>
            </div>

    );
};

export default Index;