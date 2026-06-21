import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Brain,
  Clock3,
  Download,
  Eye,
  Feather,
  Footprints,
  Heart,
  Lightbulb,
  Link as LinkIcon,
  Moon,
  Phone,
  Pill,
  Radio,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  User,
  UserCheck,
  Volume2,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const riskOverview = [
  {
    id: "fall",
    title: "跌倒风险",
    level: "medium",
    score: 6.2,
    maxScore: 10,
    trend: "+0.8",
    trendDir: "up",
    icon: <UserCheck size={24} />,
    iconBg: "from-amber-400 to-amber-600",
    aiExplanation:
      "步态数据显示平衡性较上周下降，近期有 2 次记录'行走不稳'。建议：使用助行器，避免快速转身。",
  },
  {
    id: "medication",
    title: "漏服药风险",
    level: "low",
    score: 2.1,
    maxScore: 10,
    trend: "-1.2",
    trendDir: "down",
    icon: <Pill size={24} />,
    iconBg: "from-emerald-400 to-emerald-600",
    aiExplanation:
      "服药依从性 94%，本周仅 1 次延迟。建议：保持当前闹钟设置，下一次 09:30。",
  },
  {
    id: "sleep",
    title: "睡眠异常风险",
    level: "medium",
    score: 7.4,
    maxScore: 10,
    trend: "+2.1",
    trendDir: "up",
    icon: <Moon size={24} />,
    iconBg: "from-amber-400 to-amber-600",
    aiExplanation:
      "睡眠时间连续 3 天低于 6 小时，较上月均值下降 15%。建议：睡前 1 小时关闭屏幕，可尝试温热饮。",
  },
  {
    id: "tremor",
    title: "震颤加重风险",
    level: "low",
    score: 3.8,
    maxScore: 10,
    trend: "+0.5",
    trendDir: "up",
    icon: <Activity size={24} />,
    iconBg: "from-emerald-400 to-emerald-600",
    aiExplanation:
      "震颤频率较上月上升 8%，但仍在安全范围。建议：复诊时与医生讨论，当前无需紧急处理。",
  },
];

const timelineEvents = [
  {
    time: "06/21 07:15",
    text: "睡眠时间 < 6h，触发睡眠预警",
    level: "medium",
  },
  {
    time: "06/20 19:05",
    text: "服药延迟 25 分钟",
    level: "medium",
  },
  {
    time: "06/20 18:30",
    text: "患者自述'走路有点晃'",
    level: "high",
  },
  {
    time: "06/19 08:45",
    text: "震颤评分较前日上升 12%",
    level: "medium",
  },
  {
    time: "06/18 21:00",
    text: "睡眠时间首次 < 5.5h",
    level: "high",
  },
  {
    time: "06/17 09:45",
    text: "漏服美多巴，后补服",
    level: "medium",
  },
];

const correlationData = [
  { sleepHours: 4, fallRisk: 8.2, tremorScore: 7.1, label: "6/21" },
  { sleepHours: 5, fallRisk: 7.1, tremorScore: 6.2, label: "6/20" },
  { sleepHours: 5.5, fallRisk: 6.3, tremorScore: 5.8, label: "6/19" },
  { sleepHours: 6, fallRisk: 5.4, tremorScore: 5.1, label: "6/18" },
  { sleepHours: 6.5, fallRisk: 4.8, tremorScore: 4.6, label: "6/17" },
  { sleepHours: 7, fallRisk: 4.1, tremorScore: 4.2, label: "6/16" },
  { sleepHours: 7.5, fallRisk: 3.5, tremorScore: 3.8, label: "6/15" },
];

const recommendedActions = [
  {
    priority: "高",
    priorityColor: "text-red-600 bg-red-50 border-red-200",
    risk: "睡眠异常",
    measure: "增加午休时间，睡前减少屏幕",
    owner: "家属",
  },
  {
    priority: "中",
    priorityColor: "text-amber-600 bg-amber-50 border-amber-200",
    risk: "跌倒风险",
    measure: "使用助行器，避免快速站立",
    owner: "患者",
  },
  {
    priority: "中",
    priorityColor: "text-amber-600 bg-amber-50 border-amber-200",
    risk: "震颤波动",
    measure: "记录本周感受，复诊时讨论",
    owner: "医生",
  },
  {
    priority: "低",
    priorityColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    risk: "服药延迟",
    measure: "调整闹钟，提前 5 分钟",
    owner: "患者",
  },
];

export default function Risks() {
  return (
    <div className="bg-risk min-h-screen">
      <div className="container mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="chip-warm">
              <ShieldAlert size={12} /> AI 风险监测
            </div>
            <div className="chip">
              <Clock3 size={12} /> 更新时间：2026-06-21 09:32
            </div>
          </div>
          <h1 className="mt-4 text-[32px] font-bold tracking-tight text-stone-900 sm:text-[40px]">
            风险预警中心 · XiaoAn Guardian
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-stone-600">
            小安持续监测您的健康数据，以下是当前识别的风险等级
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
            <Brain size={14} />
            监测模型: DeepSeek-Pro · 实时分析中
          </div>
        </div>

        {/* Section 1: Risk Overview */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-600" />
            <h2 className="text-xl font-bold text-stone-900">风险概览</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {riskOverview.map((risk) => (
              <RiskCard key={risk.id} risk={risk} />
            ))}
          </div>
        </div>

        {/* Section 2: Risk Timeline */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Clock3 size={18} className="text-stone-600" />
            <h2 className="text-xl font-bold text-stone-900">近期触发预警的事件</h2>
          </div>
          <div className="glass-card overflow-hidden rounded-3xl p-6">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-stone-200" />
              <div className="space-y-5">
                {timelineEvents.map((event, i) => (
                  <TimelineItem key={i} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: AI Correlation Analysis */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-amber-600" />
            <h2 className="text-xl font-bold text-stone-900">小安发现的关联风险</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <CorrelationCard
              title="睡眠下降 → 跌倒风险上升"
              description="当睡眠 < 6h 时，跌倒风险评分平均上升 23%"
              chart={<FallRiskCorrelationChart data={correlationData} />}
            />
            <CorrelationCard
              title="震颤 + 情绪低落 → 社交减少"
              description="震颤评分高且情绪 < 70 分时，户外活动时间减少 50%"
              chart={<TremorMoodChart />}
            />
          </div>
        </div>

        {/* Section 4: Recommended Actions */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb size={18} className="text-amber-600" />
            <h2 className="text-xl font-bold text-stone-900">小安建议的干预措施</h2>
          </div>
          <div className="glass-card overflow-hidden rounded-3xl p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">
                    优先级
                  </th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">
                    风险
                  </th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">
                    建议措施
                  </th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">
                    负责人
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {recommendedActions.map((action, i) => (
                  <tr key={i} className="transition hover:bg-stone-50">
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${action.priorityColor}`}
                      >
                        {action.priority}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-medium text-stone-900">
                      {action.risk}
                    </td>
                    <td className="py-4 text-sm text-stone-600">
                      {action.measure}
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                        <User size={10} /> {action.owner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskCard({ risk }: { risk: (typeof riskOverview)[0] }) {
  const levelClass =
    risk.level === "high"
      ? "risk-high"
      : risk.level === "medium"
        ? "risk-medium"
        : "risk-low";

  const trendColor =
    risk.trendDir === "up"
      ? risk.level === "low"
        ? "text-emerald-600"
        : "text-amber-600"
      : "text-emerald-600";

  return (
    <div className="glass-card overflow-hidden rounded-3xl p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm ${risk.iconBg}`}
        >
          {risk.icon}
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${levelClass}`}>
          {risk.level === "high" ? (
            <AlertTriangle size={10} />
          ) : risk.level === "medium" ? (
            <AlertTriangle size={10} />
          ) : (
            <ShieldAlert size={10} />
          )}
          {risk.level === "high" ? "高" : risk.level === "medium" ? "中" : "低"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-stone-900">{risk.title}</h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="stat-number">{risk.score}</span>
        <span className="text-sm text-stone-400">/ {risk.maxScore}</span>
      </div>

      <div className={`mt-1 flex items-center gap-1 text-sm font-medium ${trendColor}`}>
        {risk.trendDir === "up" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
        {risk.trend}
      </div>

      <div className="mt-4 rounded-2xl border border-stone-200/60 bg-stone-50 p-3">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-2">
          <Sparkles size={10} /> AI 分析
        </div>
        <p className="text-xs leading-relaxed text-stone-600">
          {risk.aiExplanation}
        </p>
      </div>
    </div>
  );
}

function TimelineItem({
  event,
}: {
  event: (typeof timelineEvents)[0];
}) {
  const dotColor =
    event.level === "high"
      ? "bg-red-500 ring-4 ring-red-100"
      : "bg-amber-500 ring-4 ring-amber-100";

  return (
    <div className="relative flex items-start gap-4 pl-8">
      <div className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${dotColor}`} />
      <div className="flex-1">
        <div className="text-xs font-medium text-stone-400">{event.time}</div>
        <div className="mt-0.5 text-sm text-stone-700">{event.text}</div>
      </div>
    </div>
  );
}

function CorrelationCard({
  title,
  description,
  chart,
}: {
  title: string;
  description: string;
  chart: React.ReactNode;
}) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-stone-900">{title}</h3>
        <p className="mt-1 text-sm text-stone-600">{description}</p>
      </div>
      <div className="h-48">{chart}</div>
    </div>
  );
}

function FallRiskCorrelationChart({
  data,
}: {
  data: (typeof correlationData);
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 6" stroke="#e5e7eb" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 10]}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
        />
        <Bar dataKey="fallRisk" name="跌倒风险" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        <Bar dataKey="tremorScore" name="震颤评分" fill="#a78bfa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function TremorMoodChart() {
  const data = [
    { day: "周一", tremor: 4.2, mood: 78, activity: 85 },
    { day: "周二", tremor: 4.5, mood: 72, activity: 80 },
    { day: "周三", tremor: 5.1, mood: 65, activity: 65 },
    { day: "周四", tremor: 5.8, mood: 58, activity: 45 },
    { day: "周五", tremor: 5.5, mood: 62, activity: 55 },
    { day: "周六", tremor: 4.8, mood: 70, activity: 72 },
    { day: "周日", tremor: 4.3, mood: 75, activity: 82 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 6" stroke="#e5e7eb" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          domain={[0, 10]}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            fontSize: 12,
          }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="tremor"
          name="震颤"
          stroke="#a78bfa"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "#a78bfa" }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="mood"
          name="情绪"
          stroke="#f59e0b"
          strokeWidth={2.5}
          strokeDasharray="6 3"
          dot={{ r: 3, fill: "#f59e0b" }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="activity"
          name="活动"
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ r: 2, fill: "#22c55e" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
