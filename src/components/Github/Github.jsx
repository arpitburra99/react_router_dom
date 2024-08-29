import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           'https://api.github.com/users/arpitburra99'
  //         );
  //         const result = await response.json();
  //         console.log(result);
  //         setData(result);
  //       } catch (error) {
  //         console.log('Fetch Github Data', error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
      Github Name: {data.name}
      <div className='flex items-center justify-center pt-2'>
        <img src={data.avatar_url} alt='github pic' width={300} />
      </div>
    </div>
  );
};

export default Github;

export const getGithubLoaderInfo = async () => {
  const response = await fetch('https://api.github.com/users/arpitburra99');
  const result = await response.json();
  return result;
};
