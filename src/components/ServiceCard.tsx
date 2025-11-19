export default function ServiceCard({
    name,
    status,
    color,
  }: {
    name: string;
    status: string;
    color: string;
  }) {
    return (
      <div className={`rounded-2xl p-6 bg-gradient-to-br ${color} shadow-xl`}>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-2 text-white/90">Status: {status}</p>
      </div>
    );
  }
  