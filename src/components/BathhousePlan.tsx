import { useState } from 'react';

const S = 88;
const OFF = 70;

const x = (m: number) => OFF + m * S;
const y = (m: number) => OFF + m * S;

interface Room {
  id: string;
  name: string;
  area: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
}

const rooms: Room[] = [
  { id: 'rest', name: 'КОМНАТА ОТДЫХА', area: '23,0 м²', x: 0, y: 2, w: 4, h: 4, fill: 'hsl(38 55% 88%)' },
  { id: 'tambur', name: 'ТАМБУР', area: '3,2 м²', x: 4, y: 4, w: 2, h: 2, fill: 'hsl(210 30% 90%)' },
  { id: 'wc', name: 'САНУЗЕЛ', area: '1,8 м²', x: 4, y: 2, w: 2, h: 1, fill: 'hsl(190 40% 88%)' },
  { id: 'shower', name: 'МОЕЧНАЯ', area: '4,0 м²', x: 4, y: 3, w: 2, h: 1, fill: 'hsl(200 45% 86%)' },
  { id: 'sauna', name: 'ПАРНАЯ', area: '5,0 м²', x: 0, y: 0, w: 3, h: 2, fill: 'hsl(20 55% 85%)' },
  { id: 'wash2', name: 'МОЕЧНАЯ', area: '', x: 3, y: 0, w: 3, h: 2, fill: 'hsl(200 45% 86%)' },
];

const BathhousePlan = () => {
  const [active, setActive] = useState<string | null>(null);
  const ink = 'hsl(213 40% 18%)';
  const blue = 'hsl(214 65% 32%)';

  return (
    <svg
      viewBox="0 0 680 680"
      className="w-full h-auto select-none font-mono"
      style={{ maxWidth: 680 }}
    >
      <defs>
        <marker id="dim" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M2,2 L8,5 L2,8" fill="none" stroke={blue} strokeWidth="1" />
        </marker>
        <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke={ink} strokeWidth="1.4" />
        </pattern>
      </defs>

      {/* Outer walls (hatched thickness) */}
      <rect x={x(0) - 10} y={y(0) - 10} width={6 * S + 20} height={6 * S + 20} fill="url(#hatch)" stroke={ink} strokeWidth="1.5" />
      <rect x={x(0)} y={y(0)} width={6 * S} height={6 * S} fill="hsl(210 30% 98%)" stroke={ink} strokeWidth="1.5" />

      {/* Rooms */}
      {rooms.map((r) => (
        <g
          key={r.id + r.x + r.y}
          onMouseEnter={() => setActive(r.id)}
          onMouseLeave={() => setActive(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x={x(r.x)}
            y={y(r.y)}
            width={r.w * S}
            height={r.h * S}
            fill={active === r.id ? 'hsl(214 65% 78%)' : r.fill}
            stroke={ink}
            strokeWidth="1.4"
            style={{ transition: 'fill 0.25s' }}
          />
          {r.name && (
            <text
              x={x(r.x) + (r.w * S) / 2}
              y={y(r.y) + (r.h * S) / 2 - (r.area ? 6 : 0)}
              textAnchor="middle"
              fontSize={r.w >= 2 ? 12 : 9}
              fontWeight="600"
              fill={ink}
              className="font-display"
              style={{ letterSpacing: '0.5px' }}
            >
              {r.name}
            </text>
          )}
          {r.area && (
            <text
              x={x(r.x) + (r.w * S) / 2}
              y={y(r.y) + (r.h * S) / 2 + 12}
              textAnchor="middle"
              fontSize="10"
              fill={blue}
            >
              {r.area}
            </text>
          )}
        </g>
      ))}

      {/* ===== FURNITURE ===== */}
      {/* Парная: печь + полки-лавки */}
      <g stroke={ink} strokeWidth="1.2" fill="none">
        {/* печь */}
        <rect x={x(0.2)} y={y(0.2)} width={S * 0.7} height={S * 0.7} fill="hsl(0 50% 70%)" />
        <line x1={x(0.2)} y1={y(0.2)} x2={x(0.9)} y2={y(0.9)} stroke="hsl(0 40% 40%)" />
        <line x1={x(0.9)} y1={y(0.2)} x2={x(0.2)} y2={y(0.9)} stroke="hsl(0 40% 40%)" />
        {/* полки-лавки (2 яруса) */}
        <rect x={x(0.1)} y={y(1.35)} width={S * 2.8} height={S * 0.5} fill="hsl(38 45% 80%)" />
        <rect x={x(0.1)} y={y(1.0)} width={S * 2.8} height={S * 0.35} fill="hsl(38 40% 72%)" />
      </g>

      {/* Верхняя моечная зона (справа сверху): душ */}
      <g stroke={ink} strokeWidth="1.2" fill="none">
        <circle cx={x(5.5)} cy={y(0.6)} r={S * 0.28} fill="hsl(200 55% 82%)" />
        <line x1={x(5.5)} y1={y(0.32)} x2={x(5.5)} y2={y(0.88)} stroke={blue} />
        <line x1={x(5.22)} y1={y(0.6)} x2={x(5.78)} y2={y(0.6)} stroke={blue} />
        {/* лавка */}
        <rect x={x(3.15)} y={y(1.4)} width={S * 2.7} height={S * 0.45} fill="hsl(38 45% 80%)" />
      </g>

      {/* Санузел: унитаз + раковина */}
      <g stroke={ink} strokeWidth="1.2" fill="none">
        <ellipse cx={x(4.5)} cy={y(2.55)} rx={S * 0.22} ry={S * 0.3} fill="hsl(0 0% 96%)" />
        <rect x={x(4.28)} y={y(2.2)} width={S * 0.44} height={S * 0.2} rx="3" fill="hsl(0 0% 96%)" />
        <rect x={x(5.35)} y={y(2.15)} width={S * 0.5} height={S * 0.3} rx="3" fill="hsl(0 0% 96%)" />
      </g>

      {/* Моечная (нижняя, 4м²): душевая зона + трап */}
      <g stroke={ink} strokeWidth="1.2" fill="none">
        <rect x={x(4.1)} y={y(3.1)} width={S * 0.8} height={S * 0.8} fill="hsl(200 50% 84%)" strokeDasharray="4 3" />
        <circle cx={x(5.5)} cy={y(3.4)} r={S * 0.22} fill="hsl(200 55% 82%)" />
        <line x1={x(5.5)} y1={y(3.18)} x2={x(5.5)} y2={y(3.62)} stroke={blue} />
        <circle cx={x(4.5)} cy={y(3.85)} r="4" fill={blue} />
      </g>

      {/* Тамбур: коврик */}
      <g stroke={ink} strokeWidth="1" fill="none">
        <rect x={x(4.3)} y={y(4.3)} width={S * 1.4} height={S * 0.5} strokeDasharray="3 2" fill="none" />
      </g>

      {/* Комната отдыха: стол + лавки */}
      <g stroke={ink} strokeWidth="1.2" fill="none">
        {/* стол */}
        <rect x={x(1.2)} y={y(3.3)} width={S * 1.6} height={S * 0.9} rx="4" fill="hsl(38 40% 76%)" />
        {/* лавки */}
        <rect x={x(1.1)} y={y(2.85)} width={S * 1.8} height={S * 0.3} fill="hsl(38 45% 82%)" />
        <rect x={x(1.1)} y={y(4.35)} width={S * 1.8} height={S * 0.3} fill="hsl(38 45% 82%)" />
        {/* угловой диван */}
        <rect x={x(0.15)} y={y(2.2)} width={S * 0.5} height={S * 1.6} fill="hsl(38 45% 82%)" />
      </g>

      {/* ===== DOORS (arcs) ===== */}
      <g stroke={blue} strokeWidth="1.3" fill="none">
        {/* вход снаружи в тамбур */}
        <path d={`M ${x(5)} ${y(6)} A ${S * 0.9} ${S * 0.9} 0 0 1 ${x(5)} ${y(5.1)}`} />
        <line x1={x(5)} y1={y(6)} x2={x(5)} y2={y(5.1)} />
        {/* тамбур -> комната отдыха */}
        <path d={`M ${x(4)} ${y(4.4)} A ${S * 0.8} ${S * 0.8} 0 0 0 ${x(3.2)} ${y(4.4)}`} />
        {/* комната отдыха -> моечная(низ) */}
        <path d={`M ${x(4)} ${y(3.2)} A ${S * 0.7} ${S * 0.7} 0 0 1 ${x(4)} ${y(3.9)}`} />
        {/* моечная -> санузел */}
        <path d={`M ${x(5)} ${y(3)} A ${S * 0.6} ${S * 0.6} 0 0 0 ${x(5)} ${y(2.4)}`} />
        {/* моечная(низ) -> моечная(верх) */}
        <path d={`M ${x(5)} ${y(2)} A ${S * 0.6} ${S * 0.6} 0 0 1 ${x(5)} ${y(2.6)}`} />
        {/* моечная(верх) -> парная */}
        <path d={`M ${x(3)} ${y(0.6)} A ${S * 0.7} ${S * 0.7} 0 0 0 ${x(3)} ${y(1.3)}`} />
      </g>

      {/* ===== WINDOWS (double line breaks in wall) ===== */}
      <g stroke={blue} strokeWidth="3">
        {/* комната отдыха - слева */}
        <line x1={x(0) - 10} y1={y(3)} x2={x(0) - 10} y2={y(4.2)} stroke="hsl(0 0% 98%)" strokeWidth="8" />
        <line x1={x(0) - 6} y1={y(3)} x2={x(0) - 6} y2={y(4.2)} />
        <line x1={x(0) - 14} y1={y(3)} x2={x(0) - 14} y2={y(4.2)} />
        {/* комната отдыха - снизу */}
        <line x1={x(1)} y1={y(6) + 6} x2={x(2.5)} y2={y(6) + 6} />
        <line x1={x(1)} y1={y(6) + 10} x2={x(2.5)} y2={y(6) + 10} />
        {/* парная - сверху */}
        <line x1={x(1)} y1={y(0) - 6} x2={x(2)} y2={y(0) - 6} />
        <line x1={x(1)} y1={y(0) - 10} x2={x(2)} y2={y(0) - 10} />
        {/* моечная верх - справа */}
        <line x1={x(6) + 6} y1={y(0.4)} x2={x(6) + 6} y2={y(1.4)} />
        <line x1={x(6) + 10} y1={y(0.4)} x2={x(6) + 10} y2={y(1.4)} />
      </g>

      {/* ===== DIMENSIONS ===== */}
      <g stroke={blue} strokeWidth="0.8" fill={blue} fontSize="11">
        {/* общий низ 6000 */}
        <line x1={x(0)} y1={y(6) + 34} x2={x(6)} y2={y(6) + 34} markerStart="url(#dim)" markerEnd="url(#dim)" />
        <line x1={x(0)} y1={y(6) + 4} x2={x(0)} y2={y(6) + 40} />
        <line x1={x(6)} y1={y(6) + 4} x2={x(6)} y2={y(6) + 40} />
        <rect x={x(3) - 26} y={y(6) + 26} width="52" height="16" fill="hsl(210 30% 98%)" stroke="none" />
        <text x={x(3)} y={y(6) + 38} textAnchor="middle" stroke="none">6000</text>
        {/* общий право 6000 */}
        <line x1={x(6) + 34} y1={y(0)} x2={x(6) + 34} y2={y(6)} markerStart="url(#dim)" markerEnd="url(#dim)" />
        <line x1={x(6) + 4} y1={y(0)} x2={x(6) + 40} y2={y(0)} />
        <line x1={x(6) + 4} y1={y(6)} x2={x(6) + 40} y2={y(6)} />
        <g transform={`rotate(90 ${x(6) + 34} ${y(3)})`}>
          <rect x={x(6) + 34 - 26} y={y(3) - 8} width="52" height="16" fill="hsl(210 30% 98%)" stroke="none" />
          <text x={x(6) + 34} y={y(3) + 4} textAnchor="middle" stroke="none">6000</text>
        </g>
      </g>

      {/* Стрелка "СЕВЕР" */}
      <g transform="translate(636 636)">
        <circle r="20" fill="none" stroke={ink} strokeWidth="1" />
        <path d="M0,-16 L5,6 L0,1 L-5,6 Z" fill={ink} />
        <text x="0" y="-24" textAnchor="middle" fontSize="10" fill={ink} className="font-display">С</text>
      </g>
    </svg>
  );
};

export default BathhousePlan;
