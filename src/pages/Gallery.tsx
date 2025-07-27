import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-medium-image-zoom/dist/styles.css";

const teamImages = [
  "/gallery/team1.jpg",
  "/gallery/team2.jpg",
  "/gallery/team3.jpg",
];

const serviceImages = [
  "/gallery/workshop1.jpg",
  "/gallery/workshop2.jpg",
  "/gallery/workshop3.jpg",
];

const slideInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 md:px-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
      >
        Our Team
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-20"
        >
          {teamImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Zoom>
                <img
                  src={src}
                  alt={`Team ${index + 1}`}
                  className="w-full h-80 object-cover rounded-xl shadow-md cursor-zoom-in"
                />
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
      >
        Service Gallery
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {serviceImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Zoom>
                <img
                  src={src}
                  alt={`Service ${index + 1}`}
                  className="w-full h-80 object-cover rounded-xl shadow-md cursor-zoom-in"
                />
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Gallery;
