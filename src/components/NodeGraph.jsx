const nodes = [
  { id: 'trigger', label: 'Webhook Trigger', x: 4, y: 5, color: '#FFC801', textColor: '#172B36' },
  { id: 'filter', label: 'Filter Data', x: 24, y: 2, color: '#114C5A', textColor: '#D9E8E2' },
  { id: 'transform', label: 'Transform JSON', x: 24, y: 9, color: '#114C5A', textColor: '#D9E8E2' },
  { id: 'ai', label: 'AI Classify', x: 46, y: 5, color: '#FF9932', textColor: '#172B36' },
  { id: 'db', label: 'Write to DB', x: 68, y: 2, color: '#114C5A', textColor: '#D9E8E2' },
  { id: 'notify', label: 'Send Slack Alert', x: 68, y: 9, color: '#114C5A', textColor: '#D9E8E2' },
]

const edges = [
  { from: 'trigger', to: 'filter' },
  { from: 'trigger', to: 'transform' },
  { from: 'filter', to: 'ai' },
  { from: 'transform', to: 'ai' },
  { from: 'ai', to: 'db' },
  { from: 'ai', to: 'notify' },
]

function getCenter(node) {
  return { cx: node.x + 8, cy: node.y + 1.6 }
}

export default function NodeGraph() {
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <section id="performance" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-mono text-xs text-forsythia/70 tracking-widest uppercase">Visual Editor</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arcticPowder mt-3 mb-4">
          Build logic <span className="text-gradient">at scale</span>
        </h2>
        <p className="text-mysticMint/60 text-base sm:text-lg max-w-2xl mx-auto">
          Compose complex multi-step workflows visually. Every node is a real production capability — no abstraction layers.
        </p>
      </div>

      <div className="glass-light rounded-3xl border border-mysticMint/10 p-4 sm:p-6 md:p-10 bg-dot-grid overflow-hidden w-full">
        {/* Node Graph SVG */}
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 90 15" className="w-full h-[180px] sm:h-[220px]" preserveAspectRatio="xMidYMid meet">
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = getCenter(nodeMap[edge.from])
            const to = getCenter(nodeMap[edge.to])
            const mx = (from.cx + to.cx) / 2
            return (
              <path
                key={i}
                d={`M ${from.cx} ${from.cy} C ${mx} ${from.cy} ${mx} ${to.cy} ${to.cx} ${to.cy}`}
                stroke="#FFC80140"
                strokeWidth="0.4"
                fill="none"
                strokeDasharray="1 0.5"
              />
            )
          })}

          {/* Nodes */}
          {nodes.map(node => (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width={16}
                height={3.2}
                rx={1}
                fill={node.color}
                opacity={0.9}
              />
              <text
                x={node.x + 8}
                y={node.y + 2}
                textAnchor="middle"
                fontSize="1.2"
                fill={node.textColor}
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
        </div>

        {/* Stats under graph */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: '/svgs/arrow-trending-up.svg', label: 'Executions today', value: '1.2M' },
            { icon: '/svgs/chart-pie.svg', label: 'Success rate', value: '99.97%' },
            { icon: '/svgs/cog-8-tooth.svg', label: 'Active pipelines', value: '48,200' },
            { icon: '/svgs/arrow-path.svg', label: 'Avg latency', value: '42ms' },
          ].map(stat => (
            <div key={stat.label} className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-forsythia/10 flex items-center justify-center shrink-0">
                <img src={stat.icon} className="w-5 h-5" style={{ filter: 'invert(84%) sepia(49%) saturate(800%) hue-rotate(0deg)' }} alt="" />
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-forsythia">{stat.value}</div>
                <div className="text-xs text-mysticMint/50">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
