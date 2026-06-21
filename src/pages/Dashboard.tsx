import {
  Activity,
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Heart,
  Leaf,
  Lightbulb,
  Link as LinkIcon,
  Moon,
  Pill,
  Sparkles,
  Sun,
  Thermometer,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import XiaoAnMascot from "@/components/XiaoAnMascot";
import { useReminder } from "@/store/useReminder";
import { Link } from "react-router-dom";

const weekTrend = [
  { day: "周一", stability: 82, med: 100, mood: 70 },
  { day: "周二", stability: 85, med: 100, mood: 72 },
  { day: "周三", stability: 78, med: 80, mood: 65 },
  { day: "周四", stability: 88, med: 100, mood: 78 },
  { day: "周五", stability: 90, med: 100, mood: 82 },
  { day: "周六", stability: 92, med: 100, mood: 85 },
  { day: "今日", stability: 93, med: 75, mood: 88 },
];

const todaySchedule = [
  { time: "06:00", name: "美多巴 250mg", done: true },
  { time: "09:30", name: "美多巴 250mg", done: false, current: true },
  { time: "13:00", name: "森福罗 0.25mg", done: false },
  { time: "19:30", name: "美多巴 250mg", done: false },
];

const aiSuggestions: Array<{
  icon: React.ReactNode;
  title: string;
  desc: string;
  tone: "brand" | "warm" | "emerald" | "ink";
}> = [
  {
    icon: <Sun size={16} />,
    title: "今天天气很好，建议 10:00 出门散步 20 分钟",
    desc: "晨间阳光有助于改善日间嗜睡与情绪节律。",
    tone: "warm",
  },
  {
    icon: <Pill size={16} />,
    title: "美多巴服用前，请避免高蛋白餐",
    desc: "牛奶、豆浆或鸡蛋等建议与服药间隔 1 小时以上。",
    tone: "brand",
  },
  {
    icon: <Heart size={16} />,
    title: "昨日静止性震颤指数略有下降，继续保持",
    desc: "与一周前相比，平均震颤评分 -12%。",
    tone: "emerald",
  },
  {
    icon: <Moon size={16} />,
    title: "睡前 1 小时减少屏幕蓝光，可改善入睡质量",
    desc: "小安会在 22:00 提醒你。",
    tone: "ink",
  },
];

export default function Dashboard() {
  const { openReminder } = useReminder();
  const completion = 25; // 1 of 4

  return (
    <div className="container mx-auto px-6 pt-10 pb-16">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="chip">
            <Sparkles size={12} /> 2026 年 6 月 21 日 · 星期日
          </div>
          <h1 className="mt-3 text-[32px] font-bold leading-tight sm:text-[40px]">
            王大爷，<span className="text-brand-700">你今天状态不错</span>
          </h1>
          <p className="mt-2 max-w-xl text-ink-500">
            小安为你整理了今日用药与健康趋势。把今天交给我，安心过好每一刻。
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-ink-700 shadow-sm transition hover:bg-white"
          >
            <Lightbulb size={16} />
            和小安聊聊
          </Link>
          <button
            onClick={() =>
              openReminder({
                patientName: "王大爷",
                medication: "美多巴 (Levodopa)",
                dosage: "1 片 · 250mg",
                time: "09:30",
                sequenceLabel: "第二次",
              })
            }
            className="btn-primary"
          >
            查看提醒
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* KPI row */}
      <div className="mt-8 grid gap-5 md:grid-cols-12">
        <div className="md:col-span-5">
          <MedCompletionCard percent={completion} />
        </div>
        <div className="md:col-span-4">
          <StabilityCard />
        </div>
        <div className="md:col-span-3">
          <TodayMoodCard />
        </div>
      </div>

      {/* Main grid */}
      <div className="mt-6 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <TrendChart />
        </div>
        <div className="lg:col-span-4">
          <TodaySchedule onShowReminder={openReminder} />
        </div>

        <div className="lg:col-span-8">
          <AISuggestionPanel />
        </div>
        <div className="lg:col-span-4">
          <CareTeamCard />
        </div>
      </div>
    </div>
  );
}

function MedCompletionCard({ percent }: { percent: number }) {
  // ring
  const size = 168;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;

  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-200/60 blur-3xl" />
      <div className="relative flex items-center gap-6">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90">
            <defs>
              <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b7bff" />
                <stop offset="100%" stopColor="#ea7b3a" />
              </linearGradient>
            </defs>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="#eaf0ff"
              strokeWidth={stroke}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="url(#ringGrad)"
              strokeWidth={stroke}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={c}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 600ms ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
              今日用药完成度
            </div>
            <div className="mt-1 text-5xl font-bold tracking-tight text-ink-900">
              {percent}%
            </div>
            <div className="mt-1 text-xs text-ink-500">1 / 4 次已完成</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-ink-900">下一次 · 09:30</div>
          <div className="mt-1 text-sm text-ink-500">美多巴 250mg · 温水送服</div>
          <div className="mt-3 flex items-center gap-2 text-xs text-ink-500">
            <Clock3 size={12} /> 距离现在还有 约 1 小时
          </div>
          <div className="mt-4 space-y-2">
            <MiniPill
              time="06:00"
              title="美多巴 250mg"
              status="done"
            />
            <MiniPill
              time="09:30"
              title="美多巴 250mg"
              status="current"
            />
            <MiniPill time="13:00" title="森福罗 0.25mg" status="next" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPill({
  time,
  title,
  status,
}: {
  time: string;
  title: string;
  status: "done" | "current" | "next";
}) {
  const tone =
    status === "done"
      ? "text-emerald-600 bg-emerald-500/10"
      : status === "current"
        ? "text-brand-700 bg-brand-500/10"
        : "text-ink-500 bg-ink-900/5";
  const label =
    status === "done" ? "已服" : status === "current" ? "待服" : "稍后";
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${tone} text-[11px] font-semibold`}>
        {label}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-ink-900">{title}</div>
        <div className="text-[11px] text-ink-500">{time}</div>
      </div>
      {status === "done" ? (
        <CheckCircle2 size={16} className="text-emerald-600" />
      ) : (
        <Clock3 size={16} className="text-ink-300" />
      )}
    </div>
  );
}

function StabilityCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-warm-200/60 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
              状态稳定度
            </div>
            <div className="mt-1 text-4xl font-bold text-ink-900">
              93<span className="text-lg text-ink-300">/100</span>
            </div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-warm-400 to-warm-600 text-white shadow-soft">
            <Activity size={18} />
          </div>
        </div>
        <div className="mt-3 text-sm text-ink-500">
          比本周平均 <span className="font-semibold text-emerald-600">+6.2</span>
          ，震颤平缓
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-ink-900/5">
          <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-warm-500" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <LegendBox color="bg-brand-500" label="震颤" value="低" />
          <LegendBox color="bg-warm-500" label="步态" value="稳" />
          <LegendBox color="bg-emerald-500" label="情绪" value="佳" />
        </div>
      </div>
    </div>
  );
}

function LegendBox({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/60 p-2 text-left">
      <div className="flex items-center gap-1.5">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <span className="text-[11px] text-ink-500">{label}</span>
      </div>
      <div className="mt-1 text-sm font-bold text-ink-900">{value}</div>
    </div>
  );
}

function TodayMoodCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white to-warm-100/40 p-6 shadow-card">
      <div className="absolute -top-6 right-0">
        <XiaoAnMascot size={120} mood="love" showAccessories={false} />
      </div>
      <div className="relative">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          今日小安
        </div>
        <div className="mt-2 text-sm font-semibold text-ink-900">
          想轻轻抱抱你
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          今天你完成了 3,240 步，比昨天多一点点。慢一点也没关系，我一直都在。
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-warm-100 px-3 py-1 text-xs font-semibold text-warm-600">
          <Leaf size={12} /> 情绪指数 · 88
        </div>
      </div>
    </div>
  );
}

function TrendChart() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="chip">
            <Activity size={12} /> 最近 7 天趋势
          </div>
          <h3 className="mt-3 text-[22px] font-bold text-ink-900">
            状态稳步向好，继续保持
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            综合观察：稳定度、按时服药率、自我情绪三项。
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <Legend color="#3b7bff" label="稳定度" />
          <Legend color="#ea7b3a" label="服药率" />
          <Legend color="#22c55e" label="情绪" />
        </div>
      </div>

      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={weekTrend}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="brandFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3b7bff" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#3b7bff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="warmFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ea7b3a" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#ea7b3a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="emeraldFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 6"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[40, 100]}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="stability"
              stroke="#3b7bff"
              strokeWidth={3}
              fill="url(#brandFill)"
            />
            <Area
              type="monotone"
              dataKey="med"
              stroke="#ea7b3a"
              strokeWidth={2.5}
              strokeDasharray="6 6"
              fill="url(#warmFill)"
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="#22c55e"
              strokeWidth={2.5}
              fill="url(#emeraldFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-xs sm:text-sm">
        <CompareCell label="平均稳定度" value="87" delta="+4" />
        <CompareCell label="按时服药率" value="94%" delta="+2%" />
        <CompareCell label="平均情绪" value="78" delta="+6" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-ink-500">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </div>
  );
}

function CompareCell({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 p-3">
      <div className="text-[11px] text-ink-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <div className="text-lg font-bold text-ink-900">{value}</div>
        <div className="text-[11px] font-semibold text-emerald-600">
          {delta}
        </div>
      </div>
    </div>
  );
}

function TodaySchedule({
  onShowReminder,
}: {
  onShowReminder: (opts?: Partial<{
    patientName: string;
    medication: string;
    dosage: string;
    time: string;
    sequenceLabel: string;
  }>) => void;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <div className="chip">
            <CalendarCheck2 size={12} /> 今日用药计划
          </div>
          <h3 className="mt-3 text-[18px] font-bold text-ink-900">
            4 次 · 精细节律
          </h3>
        </div>
        <div className="text-xs text-ink-500">
          按时服药率 ·{" "}
          <span className="font-semibold text-ink-900">94%</span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {todaySchedule.map((item) => (
          <button
            key={item.time}
            onClick={() =>
              onShowReminder({
                time: item.time,
                medication: item.name,
                sequenceLabel: "提示",
              })
            }
            className="flex w-full items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-3 text-left transition hover:bg-white hover:shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-[11px] font-semibold text-ink-500">
                {item.time}
              </div>
              <div className="mt-1 text-[10px] text-ink-300">AM</div>
            </div>
            <div className="h-10 w-px bg-ink-900/10" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-ink-900">
                {item.name}
              </div>
              <div className="text-[11px] text-ink-500">
                {item.done
                  ? "已完成 · 准时"
                  : item.current
                    ? "距服药约 1 小时"
                    : "待服"}
              </div>
            </div>
            {item.done ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 size={16} />
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700">
                <Pill size={16} />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-brand-500/20 bg-brand-500/5 p-4 text-xs text-ink-500">
        <div className="flex items-center gap-2 text-brand-700">
          <Thermometer size={14} /> 主治医师备注
        </div>
        <p className="mt-2 leading-relaxed text-ink-700">
          若出现异动症或明显"开/关"波动，请在小安内记录单次感受，
          下次复诊时由医生一起查看。
        </p>
      </div>
    </div>
  );
}

function AISuggestionPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-warm-500 text-white shadow-soft">
            <Sparkles size={16} />
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-ink-900">
              小安给你的今日建议
            </h3>
            <p className="text-xs text-ink-500">
              结合近期用药、体征与环境动态生成。
            </p>
          </div>
        </div>
        <Link
          to="/chat"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
        >
          查看更多 <ArrowRight size={12} />
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {aiSuggestions.map((s, i) => (
          <SuggestionCard
            key={i}
            icon={s.icon}
            title={s.title}
            desc={s.desc}
            tone={s.tone}
          />
        ))}
      </div>
    </div>
  );
}

function SuggestionCard({
  icon,
  title,
  desc,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tone: "brand" | "warm" | "emerald" | "ink";
}) {
  const toneMap: Record<string, string> = {
    brand: "from-brand-500/10 text-brand-700",
    warm: "from-warm-400/20 text-warm-600",
    emerald: "from-emerald-500/10 text-emerald-700",
    ink: "from-ink-900/10 text-ink-900",
  };
  return (
    <div className="group rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 to-white/60 p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div
        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${toneMap[tone]}`}
      >
        {icon}
      </div>
      <div className="mt-3 text-sm font-semibold leading-snug text-ink-900">
        {title}
      </div>
      <div className="mt-1 text-xs leading-relaxed text-ink-500">{desc}</div>
    </div>
  );
}

function CareTeamCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <div className="chip">
            <LinkIcon size={12} /> 照护网络
          </div>
          <h3 className="mt-3 text-[18px] font-bold text-ink-900">
            与你同行的人
          </h3>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {[
          { name: "李医生", role: "神经内科 · 主治医师", color: "from-brand-500 to-brand-700" },
          { name: "王小明 (女儿)", role: "已同步 · 5 分钟前", color: "from-warm-400 to-warm-600" },
          { name: "社区护士 周周", role: "每周三上门", color: "from-emerald-500 to-emerald-700" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-3"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-soft ${p.color}`}
            >
              {p.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-ink-900">{p.name}</div>
              <div className="text-[11px] text-ink-500">{p.role}</div>
            </div>
            <div className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.12)]" />
          </div>
        ))}
      </div>
      <Link
        to="/family"
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
      >
        查看家属监护页 <ArrowRight size={12} />
      </Link>
    </div>
  );
}
