import bannerPhoto from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="relative min-h-screen mb-12 overflow-hidden">
      <div className="hero bg-purple-500 text-white rounded-xl pb-0 lg:pb-32">
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="text-5xl font-bold">
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
      <div className="hidden lg:flex justify-center items-center max-w-5xl  absolute top-60 p-5">
        <img
          src={bannerPhoto}
          className="object-cover w-1/2 rounded-lg border-2 border-white p-4"
        />
      </div>
    </div>
  );
};

export default Banner;
