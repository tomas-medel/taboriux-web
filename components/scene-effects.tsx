export function SceneEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [contain:layout_paint_style]">
      <div className="tech-grid" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />

      <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-cyan-300/12 blur-[90px]" />
      <div className="absolute right-[12%] top-[30%] h-80 w-80 rounded-full bg-violet-500/12 blur-[95px]" />
      <div className="absolute right-[14%] top-[14%] opacity-30">
        <div className="ambient-prism" />
      </div>
      <div className="shape-drift-a absolute left-[12%] top-[62%] h-48 w-48 rounded-[28%] border border-cyan-200/20" />
      <div className="shape-drift-b absolute right-[18%] top-[54%] h-36 w-36 rounded-full border border-violet-300/20" />

      <div className="float-node float-node-a" />
      <div className="float-node float-node-b" />
      <div className="float-node float-node-c" />
      <div className="float-node float-node-d" />
      <div className="wire-node wire-node-a" />
      <div className="wire-node wire-node-b" />

      <div className="star-trail star-trail-a" />
      <div className="star-trail star-trail-b" />
      <div className="star-trail star-trail-c" />
      <div className="star-trail star-trail-d" />
      <div className="star-trail star-trail-e" />
    </div>
  );
}
