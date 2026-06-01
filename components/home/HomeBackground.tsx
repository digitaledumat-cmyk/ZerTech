export default function HomeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Perspective grid mesh */}
      <div className="premium-grid absolute inset-0 opacity-60" />
      <div className="premium-grid-fade absolute inset-0" />

      {/* Glowing orbs — Bleu Royal + Orange */}
      <div className="absolute -left-32 top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -right-24 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-800/12 blur-[100px]" />
      <div className="absolute bottom-[15%] left-1/3 h-[350px] w-[350px] rounded-full bg-orange-500/8 blur-[90px]" />
      <div className="absolute right-1/4 top-[5%] h-[200px] w-[200px] rounded-full bg-orange-500/6 blur-[70px]" />

      {/* Neon accent lines */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      <div className="absolute bottom-1/3 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
    </div>
  );
}
