const StatusBadge = () => {
  return (
    <div className="flex items-center justify-cente mb-5 md:mb-20">
      <div className="flex items-center gap-2 px-4 py-1.5 border border-[#800020] rounded-full bg-white shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800020] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800020]"></span>
        </span>
        <span className="text-[#800020] text-xs md:text-sm font-medium tracking-wide uppercase">
          Disponible para trabajar
        </span>
      </div>
    </div>
  );
};

export default StatusBadge;
