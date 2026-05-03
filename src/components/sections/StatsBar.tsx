
"use client";

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "50+", label: "Proyectos Realizados" },
  { value: "100%", label: "Calidad Garantizada" },
  { value: "HN", label: "Cobertura Nacional" },
];

export function StatsBar() {
  return (
    <div className="bg-secondary relative z-20 shadow-xl">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-3xl md:text-5xl font-black text-primary font-headline mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-primary/80 font-semibold uppercase text-xs md:text-sm tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
