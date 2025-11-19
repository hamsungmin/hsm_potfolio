import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="p-6 rounded-2xl bg-gray-900/90 border border-white/10 shadow-xl h-full"
    >
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
}
