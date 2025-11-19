import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full h-full px-[5vw] py-[10vh] text-white flex flex-col items-center justify-center bg-[#0A0A0A]">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-16"
      >
        ABOUT ME
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1200px]">

        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl text-center"
        >
          <div className="text-5xl mb-6">🧩</div>
          <h3 className="text-2xl font-semibold mb-4">폭넓은 도메인 지식</h3>
          <p className="text-gray-300 leading-relaxed">
            저는 11년 동안 IT 업계에서 QA, 웹개발, 마이그레이션 등 다양한 업무를 수행하며 
            실무 경험과 폭넓은 도메인 지식을 쌓았습니다.  
            특히 금융 테스트 자동화 솔루션 ‘메시지테스터’ 관련 프로젝트를 다수 수행하면서 
            금융 업무 프로세스, 트랜잭션 구조, 테스트 자동화 방식 등 금융 도메인 전반에 대한 
            깊은 이해를 확보했습니다.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl text-center"
        >
          <div className="text-5xl mb-6">📈</div>
          <h3 className="text-2xl font-semibold mb-4">꾸준한 성장</h3>
          <p className="text-gray-300 leading-relaxed">
            업무 중에도 꾸준히 자기개발을 이어왔으며, Jenkins · Docker · MSA · TDD 등 
            새로운 기술을 쌓기에 학습하고 프로젝트에 도입해 팀의 생산성을 높이는 데 기여해왔습니다.  
            최근에는 업무에서 직접 한 데이터 분석 경험을 계기로 데이터 기반 업무에 익숙해졌고, 
            데이터 분석 교육을 수료하며 데이터 분야로의 전문성 확장에 힘쓰고 있습니다.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl text-center"
        >
          <div className="text-5xl mb-6">👥</div>
          <h3 className="text-2xl font-semibold mb-4">팀 지향적 사고</h3>
          <p className="text-gray-300 leading-relaxed">
            저는 개인의 성장뿐 아니라 팀 전체의 성장을 함께 만들어가는 방식을 중요하게 생각합니다.  
            업무 중 발생하는 문제를 혼자 해결하기보다 팀과 함께 공유하고 논의하며 
            더 빠르고 안정적인 결과를 만드는 경험을 다수 해왔습니다.  
            앞으로도 팀과 함께 성장하며 조직의 성과에 실질적인 가치를 더하는 인재로 발전해 나가고자 합니다.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
