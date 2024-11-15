import Image from "next/image";

export default function ComponentCard() {
  return <>
    <div className='card'>
      <div>
       <img src={'4090.jpg'} alt='a graphics card' width={150} height={150} />
      </div>
      <div className='card-body'>
        <h3 className='my-2'>Name</h3>
        <p>Availability</p>
      </div>
      <div className='card-footer'>
        <p>Price</p>
      </div>
    </div>
  </>
}