import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sonia Jain",
    text: "Quick response and professional service. My car was towed within 30 minutes!",
  },
  {
    name: "Rahul Kapoor",
    text: "Highly recommend Easy Fix! They fixed my flat tire on the spot late at night.",
  },
  {
    name: "Anjali Verma",
    text: "Very polite team and fast recovery. Thank you for helping during breakdown!",
  },
];

const TestimonialSlider = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-gray-100 p-6 max-w-xl mx-auto rounded-lg shadow">
            <p className="italic text-lg">"{t.text}"</p>
            <h4 className="mt-4 font-bold">{t.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TestimonialSlider;
