function Banner() {
    return (
      <div className="relative h-48 bg-gradient-to-r from-yellow-300 to-pink-300 mt-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-md font-semibold text-pink-600">Shaadi Specials</p>
            <p className="text-xl font-bold">WOW Deals on Hair Care</p>
            <p className="text-lg">From ₹149 <span className="line-through">₹199</span></p>
            <p className="text-md">Valid only Today!</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;
  