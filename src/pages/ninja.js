export default function Ninja() {
  return (
    <div>
      <div className="ml-20">
        <h1>Add your Address</h1>
      </div>
      <div className="flex mt-20">
      <div>
      <img src="/ninjaa.png" width={"700px"} height={"200px"}/>
       </div>
       <div className="map ml-20 mr-20 " style={{display:'flex',justifyContent:'center'}}>
          <img src="/map.jpg" width={"700px"} height={"200px"}/>
        </div>
        </div>
      <button className="bg-blue-500 mt-2 text-black px-4 py-2 ml-60 rounded-md transition hover:bg-red-700">
       <span className="text-black-500">Book a Ride</span>
    </button>
      {/* <div className="display-flex">
        <div className="map ml-20 mt-20" style={{display:'flex',justifyContent:'center'}}>
          <img src="/map.jpg" />
        </div>
        <div className="ml-20">Charge :40 rupees+print charge</div>
      </div> */}
    </div>
  );
}
