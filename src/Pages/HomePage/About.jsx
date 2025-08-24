import bg from "../../assets/contact.jpg";
import puzzle from "../../assets/puzzle.png";
import color from "../../assets/color.png";
import star from "../../assets/star.png";
import about from "../../assets/about.jpg";
const About = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      class="min-h-screen bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16"
    >
      <h1 class="text-3xl font-semibold text-center mx-auto text-white">
        About our apps
      </h1>
      <p class="text-sm text-white text-center mt-2 max-w-md mx-auto">
        Empowering You to Earn More: Discover the Benefits of Our Micro Task
        Platform
      </p>
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 text-white">
        <div class="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
        <img class="max-w-sm w-full rounded-xl h-auto" src={about} alt="" />
        <div>
          <h1 class="text-3xl font-semibold">Our Latest features</h1>
          <p class="text-sm text-white mt-2">
            Experience the cutting-edge features of our micro task earning
            platform, designed to maximize your earning potential and enhance
            your user experience.
          </p>

          <div class="flex flex-col gap-10 mt-6">
            <div class="flex items-center gap-4">
              <div class="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img src={star} alt="" />
              </div>
              <div>
                <h3 class="text-base font-medium text-white">
                  Fast and Optimized
                </h3>
                <p class="text-sm text-white">
                  Lightning-fast performance with optimized code for seamless
                  user experience.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img src={color} alt="" />
              </div>
              <div>
                <h3 class="text-base font-medium text-white">
                  Beautifully Designed
                </h3>
                <p class="text-sm text-white">
                  A visually stunning interface crafted for an engaging user
                  experience.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img src={puzzle} alt="" />
              </div>
              <div>
                <h3 class="text-base font-medium text-white">
                  Easy to Customize
                </h3>
                <p class="text-sm text-white">
                  Tailor the platform to your preferences with user-friendly
                  customization options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
