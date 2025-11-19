import { motion } from "framer-motion";

const skills = [
  "Java / Spring Framework (Boot) / Python",
  "JavaScript (JQuery / Ajax) / TypeScript / React",
  "MSA 환경 설계 및 운영",
  "Kafka / Redis / ElasticSearch",
  "TDD(테스트 주도 개발) 실천 경험",
  "PostgreSQL / Oracle / Mysql / MSSQL",
  "Docker / Docker Compose / 사내 MSA 환경 운영",
  "Axon Framework / CQRS / DDD / Axon Server ",
];

export default function Skills() {
  return (
    <section className="p-6 rounded-2xl bg-[#111111]/80 border border-white/10 hover:border-[#3A86FF]/50 transition" id="skills">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s, idx) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="p-5 rounded-2xl bg-gray-800/80 border border-white/10 shadow-lg"
          >
            <p className="text-base md:text-lg text-gray-100">{s}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
