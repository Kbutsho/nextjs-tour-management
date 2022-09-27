import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const Index = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div>
            <h5>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </h5>
            
            <h5>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </h5>
        </div>
    );
};

export default Index;