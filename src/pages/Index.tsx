import BathhousePlan from '@/components/BathhousePlan';
import Icon from '@/components/ui/icon';

const legend = [
  { icon: 'Flame', label: 'Печь-каменка' },
  { icon: 'Rows3', label: 'Полки / лавки' },
  { icon: 'ShowerHead', label: 'Душевая зона' },
  { icon: 'Toilet', label: 'Унитаз' },
  { icon: 'Table', label: 'Стол' },
  { icon: 'DoorOpen', label: 'Дверной проём' },
  { icon: 'RectangleHorizontal', label: 'Оконный проём' },
  { icon: 'CircleDot', label: 'Трап / слив' },
];

const areaTable = [
  { n: '1', name: 'Тамбур', area: '3,2', h: '2,4', floor: 'Керамогранит' },
  { n: '2', name: 'Комната отдыха', area: '23,0', h: '2,7', floor: 'Массив дуба' },
  { n: '3', name: 'Парная', area: '5,0', h: '2,2', floor: 'Лиственница' },
  { n: '4', name: 'Моечная', area: '4,0', h: '2,3', floor: 'Керамогранит R11' },
  { n: '5', name: 'Санузел', area: '1,8', h: '2,3', floor: 'Керамогранит R11' },
];

const spec = [
  { zone: 'Стены наружные', mat: 'Брус профилированный 200 мм', fin: 'Масло-воск' },
  { zone: 'Парная — стены', mat: 'Вагонка липа + фольга', fin: 'Без покрытия' },
  { zone: 'Парная — утеплитель', mat: 'Базальтовая вата 100 мм', fin: 'λ = 0,036 Вт/м·К' },
  { zone: 'Моечная — стены', mat: 'Плитка керамическая', fin: 'Гидроизоляция обмазочная' },
  { zone: 'Потолок', mat: 'Вагонка + пароизоляция', fin: 'Утепление 150 мм' },
  { zone: 'Кровля', mat: 'Металлочерепица', fin: 'λ = 0,041 Вт/м·К' },
];

const engineering = [
  { icon: 'Droplets', title: 'Водоснабжение', items: ['Ввод ХВС Ø25 мм', 'Бойлер ГВС 80 л', 'Разводка PPR по моечной и санузлу'] },
  { icon: 'Waves', title: 'Канализация', items: ['Трап Ø50 в моечной и парной', 'Стояк Ø110 в санузле', 'Уклон 2% к выпуску'] },
  { icon: 'Wind', title: 'Вентиляция', items: ['Приток под печью парной', 'Вытяжка «залповая» Ø100', 'Естественная в комнате отдыха'] },
  { icon: 'Zap', title: 'Электрика', items: ['Щит 380В, УЗО 30мА', '6 розеток IP44 + 4 выключателя', 'Влагозащищённые светильники IP65'] },
];

const Index = () => {
  return (
    <div className="min-h-screen grid-paper text-blueprint-ink font-sans">
      {/* Header */}
      <header className="border-b-2 border-blueprint-ink/80 bg-blueprint-paper/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-blueprint text-xs font-mono tracking-[0.3em] mb-1">ARCH · ПРОЕКТ 2026</div>
            <h1 className="font-display text-3xl sm:text-4xl font-600 tracking-tight uppercase">
              Баня 6×6 м
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="font-mono text-xs text-right leading-relaxed">
              <div>Масштаб <span className="text-blueprint font-600">1:50</span></div>
              <div>Лист <span className="text-blueprint font-600">АР-01</span></div>
              <div>Дата <span className="text-blueprint font-600">05.07.2026</span></div>
            </div>
            <button
              onClick={() => window.print()}
              className="no-print font-display uppercase text-sm tracking-wide flex items-center gap-2 bg-blueprint text-blueprint-paper px-4 py-2.5 border-2 border-blueprint-ink/70 hover:-translate-y-0.5 transition-transform shadow-[3px_3px_0_hsl(213_40%_18%/0.25)]"
            >
              <Icon name="Download" size={16} />
              Скачать PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-14">
        {/* Plan + Legend */}
        <section className="grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start animate-fade-in">
          <div className="paper-texture border-2 border-blueprint-ink/70 p-4 sm:p-6 shadow-[6px_6px_0_hsl(214_65%_32%/0.12)]">
            <div className="flex items-center justify-between mb-3 font-mono text-[11px] uppercase tracking-wider text-blueprint-ink/70">
              <span>План 1-го этажа</span>
              <span>наведите на помещение →</span>
            </div>
            <BathhousePlan />
          </div>

          <div className="space-y-6">
            <div className="border-2 border-blueprint-ink/70 bg-blueprint-paper p-5">
              <h2 className="font-display text-lg uppercase tracking-wide flex items-center gap-2 mb-4">
                <Icon name="ListTree" size={18} className="text-blueprint" />
                Экспликация помещений
              </h2>
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b-2 border-blueprint-ink/40 text-[11px] text-blueprint-ink/60 uppercase">
                    <th className="text-left py-1.5 w-6">№</th>
                    <th className="text-left">Помещение</th>
                    <th className="text-right">м²</th>
                    <th className="text-right">H, м</th>
                  </tr>
                </thead>
                <tbody>
                  {areaTable.map((r) => (
                    <tr key={r.n} className="border-b border-blueprint-line/60 hover:bg-blueprint/5">
                      <td className="py-2 text-blueprint font-600">{r.n}</td>
                      <td>{r.name}</td>
                      <td className="text-right font-600">{r.area}</td>
                      <td className="text-right text-blueprint-ink/60">{r.h}</td>
                    </tr>
                  ))}
                  <tr className="font-600">
                    <td colSpan={2} className="py-2 uppercase text-xs tracking-wide">Общая площадь</td>
                    <td className="text-right text-blueprint">37,0</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-2 border-blueprint-ink/70 bg-blueprint-paper p-5">
              <h2 className="font-display text-lg uppercase tracking-wide flex items-center gap-2 mb-4">
                <Icon name="KeyRound" size={18} className="text-blueprint" />
                Условные обозначения
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {legend.map((l) => (
                  <li key={l.label} className="flex items-center gap-2 text-sm">
                    <span className="w-8 h-8 shrink-0 grid place-items-center border border-blueprint-ink/40 bg-blueprint/5">
                      <Icon name={l.icon} size={16} className="text-blueprint" />
                    </span>
                    <span className="leading-tight">{l.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Спецификация */}
        <section>
          <SectionTitle icon="Layers" num="02">Спецификация материалов и отделки</SectionTitle>
          <div className="border-2 border-blueprint-ink/70 bg-blueprint-paper overflow-x-auto">
            <table className="w-full text-sm font-mono min-w-[560px]">
              <thead>
                <tr className="bg-blueprint text-blueprint-paper text-[11px] uppercase tracking-wider">
                  <th className="text-left px-4 py-3">Конструкция / зона</th>
                  <th className="text-left px-4 py-3">Материал</th>
                  <th className="text-left px-4 py-3">Отделка / параметр</th>
                </tr>
              </thead>
              <tbody>
                {spec.map((s, i) => (
                  <tr key={s.zone} className={i % 2 ? 'bg-blueprint/5' : ''}>
                    <td className="px-4 py-2.5 font-600">{s.zone}</td>
                    <td className="px-4 py-2.5">{s.mat}</td>
                    <td className="px-4 py-2.5 text-blueprint-ink/70">{s.fin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Инженерные сети */}
        <section>
          <SectionTitle icon="Cable" num="03">Инженерные сети</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {engineering.map((e) => (
              <div key={e.title} className="border-2 border-blueprint-ink/70 bg-blueprint-paper p-5 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 grid place-items-center bg-blueprint text-blueprint-paper mb-3">
                  <Icon name={e.icon} size={20} />
                </div>
                <h3 className="font-display uppercase text-base tracking-wide mb-3">{e.title}</h3>
                <ul className="space-y-2 text-sm">
                  {e.items.map((it) => (
                    <li key={it} className="flex gap-2 font-mono text-[13px] leading-snug">
                      <span className="text-blueprint mt-0.5">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Фасадный разрез (высоты) */}
        <section>
          <SectionTitle icon="Ruler" num="04">Разрез А-А · высоты и конструкции</SectionTitle>
          <div className="border-2 border-blueprint-ink/70 bg-blueprint-paper p-6">
            <FacadeSection />
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-blueprint-ink/80 py-6 text-center font-mono text-xs text-blueprint-ink/60">
        Проект бани 6×6 м · Все размеры в мм, если не указано иное · Лист АР-01
      </footer>
    </div>
  );
};

const SectionTitle = ({ icon, num, children }: { icon: string; num: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="font-mono text-blueprint text-sm">{num}</span>
    <span className="w-8 h-8 grid place-items-center border-2 border-blueprint-ink/70">
      <Icon name={icon} size={16} className="text-blueprint" />
    </span>
    <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wide">{children}</h2>
    <span className="flex-1 h-[2px] bg-blueprint-ink/20" />
  </div>
);

const FacadeSection = () => {
  const ink = 'hsl(213 40% 18%)';
  const blue = 'hsl(214 65% 32%)';
  return (
    <svg viewBox="0 0 800 320" className="w-full h-auto font-mono">
      {/* земля */}
      <line x1="40" y1="270" x2="760" y2="270" stroke={ink} strokeWidth="1.5" />
      <line x1="40" y1="274" x2="760" y2="274" stroke={ink} strokeWidth="0.5" strokeDasharray="4 3" />
      {/* фундамент */}
      <rect x="120" y="250" width="560" height="20" fill="url(#hatch2)" stroke={ink} />
      {/* стены */}
      <rect x="120" y="90" width="560" height="160" fill="hsl(38 40% 92%)" stroke={ink} strokeWidth="1.5" />
      {/* кровля */}
      <path d="M100,90 L400,20 L700,90 Z" fill="hsl(210 30% 88%)" stroke={ink} strokeWidth="1.5" />
      {/* дверь */}
      <rect x="330" y="150" width="60" height="100" fill="hsl(38 45% 80%)" stroke={ink} />
      {/* окно */}
      <rect x="500" y="130" width="80" height="70" fill="hsl(200 55% 85%)" stroke={ink} />
      <line x1="540" y1="130" x2="540" y2="200" stroke={ink} strokeWidth="0.7" />
      <line x1="500" y1="165" x2="580" y2="165" stroke={ink} strokeWidth="0.7" />

      <defs>
        <pattern id="hatch2" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke={ink} strokeWidth="1" />
        </pattern>
      </defs>

      {/* высотные отметки */}
      <g stroke={blue} strokeWidth="0.8" fill={blue} fontSize="12">
        {/* 0.000 */}
        <line x1="700" y1="250" x2="770" y2="250" strokeDasharray="4 2" />
        <path d="M710,250 l6,-6 l6,6 z" fill="none" stroke={blue} />
        <text x="724" y="246">±0.000</text>
        {/* высота потолка +2.700 */}
        <line x1="680" y1="90" x2="770" y2="90" strokeDasharray="4 2" />
        <path d="M710,90 l6,-6 l6,6 z" fill={blue} />
        <text x="724" y="86">+2.700</text>
        {/* конёк */}
        <line x1="400" y1="20" x2="770" y2="20" strokeDasharray="4 2" />
        <path d="M710,20 l6,-6 l6,6 z" fill={blue} />
        <text x="724" y="16">+4.100</text>
        {/* дверь высота */}
        <text x="360" y="140" textAnchor="middle" fill={ink}>H двери 2100</text>
      </g>
    </svg>
  );
};

export default Index;