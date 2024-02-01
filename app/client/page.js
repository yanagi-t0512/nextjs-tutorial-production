'use client'
import { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>use client {count}</h1>
      <button className='btn btn-info' onClick={() => setCount(count + 1)}>
        プラス1
      </button>
    </div>
  );
};

export default ClientPage;
