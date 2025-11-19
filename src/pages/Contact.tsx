import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9o28rl5", 
        "template_k1r2kp6", 
        e.target, 
        "ibPKIGZc5YZ0cLa6D"
      )
      .then(
        () => {
          alert("메일이 정상적으로 전송되었습니다!");
        },
        (error) => {
          alert("전송 오류: " + error.text);
        }
      );
  };

  return (
    <section className="w-full min-h-screen px-[5vw] py-[10vh] bg-[#0A0A0A] text-white flex flex-col items-center">

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold">CONTACT</h2>
        <p className="text-gray-400 mt-4">
          궁금한 점이 있거나 제게 연락을 원하신다면 언제든 편하게 보내주세요.
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1100px]">

        {/* Left Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6">연락처 정보</h3>

          <div className="space-y-6 text-gray-300">

            <div>
              <p className="text-sm text-gray-500 tracking-widest uppercase">Email</p>
              <p className="text-xl text-white mt-1">hsm1852@gmail.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 tracking-widest uppercase">Phone</p>
              <p className="text-xl text-white mt-1">010-9002-5426</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 tracking-widest uppercase">GitHub</p>
              <a
                href="https://github.com/hamsungmin"
                target="_blank"
                className="text-xl text-blue-400 mt-1 hover:underline"
              >
                github.com/hamsungmin
              </a>
            </div>

          </div>
        </motion.div>

        {/* Right Contact Form (REAL FORM) */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6">메시지 보내기</h3>

          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-400 mb-1">이름</label>
              <input
                name="from_name"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 outline-none text-white"
                placeholder="성함을 입력해주세요"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1">이메일</label>
              <input
                name="reply_to"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 outline-none text-white"
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1">메시지</label>
              <textarea
                name="message"
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 outline-none text-white h-32 resize-none"
                placeholder="내용을 입력해주세요"
                required
              />
            </div>

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg 
                bg-gradient-to-r from-[#3A86FF] to-[#8A4FFF]
                font-semibold text-white
                transition hover:opacity-90
              "
            >
              보내기
            </button>
          </div>
        </motion.form>

      </div>

    </section>
  );
}
