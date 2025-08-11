const Testimonials = () => {
  return (
    <>
      <h2 className="text-center  lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
        Testimonials
      </h2>
      <hr className="w-1/2 mx-auto mt-4 text-gray-700" />
      <div class="flex flex-wrap items-center justify-center gap-6 my-8">
        <div class="max-w-80 bg-black text-white rounded-2xl">
          <div class="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600"
              alt=""
              class="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            ></img>
            <div class="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div class="px-4 pb-4">
            <p class="font-medium border-b border-gray-600 pb-5">
              “Radiant made undercutting all of our competitors an absolute
              breeze.”
            </p>
            <p class="mt-4">— Smith</p>
            <p class="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              Frontend Developer
            </p>
          </div>
        </div>
        <div class="max-w-80 bg-black text-white rounded-2xl">
          <div class="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600"
              alt=""
              class="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            ></img>
            <div class="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div class="px-4 pb-4">
            <p class="font-medium border-b border-gray-600 pb-5">
              “Change is hard, change is required to discomfort ”
            </p>
            <p class="mt-4">— Tom Holland</p>
            <p class="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              Backend Developer
            </p>
          </div>
        </div>
        <div class="max-w-80 bg-black text-white rounded-2xl">
          <div class="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop"
              alt=""
              class="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            ></img>
            <div class="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div class="px-4 pb-4">
            <p class="font-medium border-b border-gray-600 pb-5">
              “Once you decide to change something, it will be change in
              anytime”
            </p>
            <p class="mt-4">— Moana</p>
            <p class="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              MERN Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
