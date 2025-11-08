import bannerPhoto from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="min-h-screen">
      <div className="hero bg-purple-500 text-white rounded-xl pb-10 sm:pb-16 lg:pb-32">
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="py-4 text-base font-normal">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <button className="btn rounded-full text-violet-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-10 sm:-mt-16 lg:-mt-32">
        <img
          src={bannerPhoto}
          className="object-cover w-full sm:w-5/6 lg:w-2/3 p-5 border-2 border-white rounded-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
