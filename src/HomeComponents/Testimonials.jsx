import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
const Testimonials = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Hear from our community of task earners who are achieving financial
          freedom by completing simple micro tasks online.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
          <img
            src={user1}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
          />
          <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
          <p className="text-gray-600 text-sm">
            "I never thought I could earn extra income this easily. The platform
            is smooth and reliable. Now I can cover my daily expenses just by
            working a few hours."
          </p>
          <div className="flex text-yellow-400 justify-center">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
          <img
            src={user2}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
          />
          <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
          <p className="text-gray-600 text-sm">
            "A friend recommended this platform and it has been a blessing. I
            can work during my commute and earn money on the go."
          </p>
          <div className="flex text-yellow-400 justify-center">
            {[...Array(4)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
          <img
            src={user3}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
          />
          <h3 className="text-xl font-semibold text-gray-800">Emily Carter</h3>
          <p className="text-gray-600 text-sm">
            "Customer support is amazing! I had an issue with withdrawal and
            they solved it instantly. Totally trust this platform."
          </p>
          <div className="flex text-yellow-400 justify-center">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
          />
          <h3 className="text-xl font-semibold text-gray-800">David Wilson</h3>
          <p className="text-gray-600 text-sm">
            "I use this platform as my side hustle. The variety of tasks keeps
            it fun and the rewards are great."
          </p>
          <div className="flex text-yellow-400 justify-center">
            {[...Array(3)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
