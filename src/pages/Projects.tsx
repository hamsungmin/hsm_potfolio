import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 각 프로젝트 이미지 (원하는 이미지 경로로 변경)
import img1 from "../image/project_messagetester.png";
import img2 from "../image/project_loadtest.png";
import img3 from "../image/project_scenario.png";
import img4 from "../image/project_order.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string | null;
}

const projectList: Project[] = [
  {
    id: 1,
    title: "MessageTester 고도화 (MSA 기반)",
    description:
      "금융 테스트 자동화 솔루션 ‘메시지테스터’를 Kafka 기반 MSA 아키텍처로 재구성한 프로젝트입니다.",
    tech: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "ElasticSearch"],
    image: img1,
    link: "https://github.com/hamsungmin/codeSimpleProject", // GitHub 없음
  },
  {
    id: 2,
    title: "부하 테스트 성능 개선",
    description:
      "부하 테스트 기능의 병목 구간을 분석하고 ElasticSearch를 이용하여 성능을 대폭 개선한 프로젝트입니다.",
      tech: ["Java", "Spring Framework", "JavaScript", "Tomcat", "PostgreSQL", "ElasticSearch", "FileBeat"],
    image: img2,
    link: null, // GitHub 없음
  },
  {
    id: 3,
    title: "시나리오 기능 성능 개선",
    description:
      "코드 리팩토링을 진행하여 WAS Heap Memory 부족 문제를 해결하고 속도를 대폭 개선한 프로젝트입니다.",
    tech: ["Java", "Spring Framework", "JavaScript", "Tomcat", "PostgreSQL"],
    image: img3,
    link: null, // GitHub 없음
  },
  {
    id: 4,
    title: "주문 관리 서비스 (학습 프로젝트)",
    description:
      "Axon Framework + Axon Server를 학습하기 위한 프로젝트 입니다.",
    tech: ["Spring Boot", "JPA", "H2 DB", "Axon Project", "MSA", "Docker", "DDD", "Event Sourcing"],
    image: img4,
    link: "https://github.com/hamsungmin/AxonProject",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project>(projectList[0]);

  return (
    <section className="w-full min-h-screen px-[5vw] py-[10vh] text-white">
      <h2 className="text-5xl font-extrabold mb-16 text-center">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1300px] mx-auto">

        {/* ------------------ LEFT LIST ------------------ */}
        <div className="space-y-4 md:col-span-1">

          {projectList.map((p) => (
            <motion.div
              key={p.id}
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`
                p-5 rounded-2xl cursor-pointer transition
                border 
                ${
                  selected.id === p.id
                    ? "border-blue-400 bg-white/10 shadow-xl"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              <p className="text-lg font-semibold">{p.title}</p>

              {/* GitHub 링크 없으면 표시 안함 */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-blue-400 hover:underline text-sm"
                >
                  GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* ------------------ RIGHT DETAIL PANEL ------------------ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold mb-4">{selected.title}</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              {selected.description}
            </p>

            {/* 이미지 영역 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
              <img
                src={selected.image}
                className="w-full h-[260px] object-contain"
                alt="project preview"
              />
              
            </motion.div>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-3 mb-6">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub 링크 (없으면 표시 안함) */}
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                className="text-blue-400 hover:underline font-semibold"
              >
                GitHub 링크 →
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
