export default function DashboardButton({ label }: { label: string }) {
    return (
      <button className="px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-white/10 shadow-lg transition text-lg">
        {label}
      </button>
    );
  }
  