import { motion } from "framer-motion";
import img from "../image/hsm_photo.jpg";

export default function Home() {
  return (
    <section className="w-full min-h-[100vh] px-[5vw] py-[10vh] flex flex-col md:flex-row items-center justify-between gap-10">

      {/* LEFT TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="space-y-4 md:w-1/2"
      >
        <p className="text-sm text-blue-300 tracking-widest uppercase"></p>

        <h1 className="text-7xl font-extrabold leading-tight">
          <span className="block text-white">WELCOME TO MY</span>
          <span className="block text-white">PORTFOLIO</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl">
            새로운 기술을 배우고 적용하는 과정에서 성장의 기쁨을 느낍니다.
        </p>
      </motion.div>

      {/* RIGHT IMAGE BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="
          w-[380px] h-[380px]
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-sm
          shadow-lg
          overflow-hidden
          flex items-center justify-center
          text-gray-400 
        "
        >
          {/* 여기에 이미지 넣으면 됩니다 */}
          <img src={img} className="w-full h-full object-cover" />
        </div>
      </motion.div>

    </section>
  );
}

