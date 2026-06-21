import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BrainCircuit,
  Calendar,
  Check,
  Clock,
  Download,
  FileText,
  MessageSquare,
  Minus,
  Moon,
  Phone,
  Pill,
  Plus,
  Sparkles,
  TrendingDown,
  TrendingUp,
  User,
  Users,
  AlertTriangle,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 30天稳定度数据
const stabilityData = [
  { day: 1, value: 80 }, { day: 2, value: 82 }, { day: 3, value: 81 },
  { day: 4, value: 84 }, { day: 5, value: 83 }, { day: 6, value: 85 },
  { day: 7, value: 84 }, { day: 8, value: 82 }, { day: 9, value: 83 },
  { day: 10, value: 86 }, { day: 11, value: 85 }, { day: 12, value: 84 },
  { day: 13, value: 87 }, { day: 14, value: 86 }, { day: 15, value: 85 },
  { day: 16, value: 88 }, { day: 17, value: 87 }, { day: 18, value: 86 },
  { day: 19, value: 89 }, { day: 20, value: 88 }, { day: 21, value: 87 },
  { day: 22, value: 89 }, { day: 23, value: 90 }, { day: 24, value: 89 },
  { day: 25, value: 88 }, { day: 26, value: 91 }, { day: 27, value: 90 },
  { day: 28, value: 89 }, { day: 29, value: 92 }, { day: 30, value: 91 },
];

// 30天震颤数据
const tremorData = [
  { day: 1, tremor: 8 }, { day: 2, tremor: 7 }, { day: 3, tremor: 9 },
  { day: 4, tremor: 6 }, { day: 5, tremor: 8 }, { day: 6, tremor: 7 },
  { day: 7, tremor: 6 }, { day: 8, tremor: 9 }, { day: 9, tremor: 8 },
  { day: 10, tremor: 7 }, { day: 11, tremor: 6 }, { day: 12, tremor: 8 },
  { day: 13, tremor: 7 }, { day: 14, tremor: 9 }, { day: 15, tremor: 10 },
  { day: 16, tremor: 8 }, { day: 17, tremor: 7 }, { day: 18, tremor: 6 },
  { day: 19, tremor: 8 }, { day: 20, tremor: 9 }, { day: 21, tremor: 7 },
  { day: 22, tremor: 8 }, { day: 23, tremor: 6 }, { day: 24, tremor: 7 },
  { day: 25, tremor: 8 }, { day: 26, tremor: 9 }, { day: 27, tremor: 10 },
  { day: 28, tremor: 8 }, { day: 29, tremor: 9 }, { day: 30, tremor: 8 },
];

// 服药记录数据
const medRecords = [
  { date: "06/15", m1: "✓", m2: "✓", m3: "✓", m4: "✓", rate: "100%" },
  { date: "06/16", m1: "✓", m2: "✓", m3: "✓", m4: "✓", rate: "100%" },
  { date: "06/17", m1: "✓", m2: "delay", m3: "✓", m4: "✓", rate: "75%" },
  { date: "06/18", m1: "✓", m2: "✓", m3: "✓", m4: "✓", rate: "100%" },
  { date: "06/19", m1: "✓", m2: "✓", m3: "✓", m4: "✓", rate: "100%" },
  { date: "06/20", m1: "✓", m2: "✓", m3: "✓", m4: "miss", rate: "75%" },
  { date: "06/21", m1: "✓", m2: "✓", m3: "—", m4: "—", rate: "50%" },
];

// 异常事件数据
const events = [
  { date: "06/15", time: "08:30", text: "震颤加重，评分 +15", type: "amber" },
  { date: "06/17", time: "09:45", text: "漏服美多巴，已补服", type: "red" },
  { date: "06/18", time: "07:00", text: "情绪低落，主动与小安对话", type: "blue" },
  { date: "06/20", time: "19:00", text: "睡眠时间首次低于 5.5h", type: "amber" },
  { date: "06/21", time: "08:00", text: "AI 生成周报", type: "green" },
];

// 患者自述数据
const patientReports = [
  { date: "06/20 晚", text: "感到疲劳，睡不着", tone: "amber" },
  { date: "06/18 早", text: "右手轻微抖动加重", tone: "amber" },
  { date: "06/15 午", text: "情绪低落，想念老朋友", tone: "blue" },
  { date: "06/10 早", text: "状态很好，去公园散步了", tone: "emerald" },
];

export default function Doctor() {
  return (
    <div className="min-h-screen bg-doctor">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[28px] font-bold text-stone-900">
                患者观察 · Physician Dashboard
              </h1>
              <p className="mt-1 text-sm text-stone-500">李医生 · 近 30 天数据</p>
            </div>
            <div className="chip-brand">
              <BrainCircuit size={12} />
              分析模型: DeepSeek-Pro
            </div>
          </div>

          {/* 患者信息卡片 */}
          <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-soft">
              <User size={20} />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-semibold text-stone-900">王大爷 · 78岁</div>
              <div className="text-sm text-stone-500">帕金森病 6年</div>
            </div>
            <div className="h-10 w-px bg-stone-200/60" />
            <div className="flex flex-col">
              <div className="text-xs text-stone-400">当前用药</div>
              <div className="text-sm font-medium text-stone-700">美多巴 250mg × 4/日</div>
            </div>
            <div className="ml-auto text-sm text-stone-500">
              <Calendar size={14} className="mr-1 inline" />
              2026年6月21日
            </div>
          </div>
        </div>

        {/* Section 1: Overview Metrics */}
        <div className="mb-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="综合健康评分"
            value="87"
            unit="/100"
            trend="+5"
            trendUp={true}
            icon={<Activity size={18} />}
          />
          <MetricCard
            label="按时服药率"
            value="94"
            unit="%"
            trend="+2%"
            trendUp={true}
            icon={<Pill size={18} />}
          />
          <MetricCard
            label="平均稳定度"
            value="85.2"
            unit=""
            trend="+3.1"
            trendUp={true}
            icon={<TrendingUp size={18} />}
          />
          <MetricCard
            label="异常事件"
            value="2"
            unit="次"
            trend="-1"
            trendUp={true}
            icon={<AlertCircle size={18} />}
            isNegativeGood={true}
          />
        </div>

        {/* Section 2: AI Generated Patient Summary */}
        <div className="mb-6 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
          <div className="flex items-start justify-between">
            <div>
              <div className="chip">
                <Sparkles size={12} />
                小安 · AI 病情摘要 (自动生成)
              </div>
              <p className="mt-2 text-sm text-stone-500">
                以下摘要由 DeepSeek-Pro 模型根据过去 30 天患者数据自动生成，可用于复诊参考：
              </p>
            </div>
            <button className="btn-ghost text-xs">
              <Download size={14} />
              导出 PDF
            </button>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200/50 bg-stone-50/60 p-5">
            <div className="text-sm leading-relaxed text-stone-700">
              <p className="mb-3">
                王大爷近一个月整体状态稳定，服药依从性优秀（94%）。
              </p>
              <p className="mb-3">
                值得关注：
                <span className="font-medium text-amber-600">1)</span> 睡眠时间呈下降趋势（较上月 -12%），可能与季节变化或药效波动有关；
                <span className="font-medium text-amber-600"> 2)</span> 震颤频率有轻微上升（+8.3%），但整体仍在可控范围；
                <span className="font-medium text-amber-600"> 3)</span> 情绪自评分数较前月下降 5 分，建议复诊时讨论心理支持。
              </p>
              <p className="mb-4 font-medium text-stone-800">
                建议复诊关注：睡眠管理和是否需要微调下午的药量。
              </p>
              <div className="flex items-center gap-4 text-xs text-stone-400">
                <span>生成时间: 2026-06-21 08:00</span>
                <span>|</span>
                <span>数据来源: 小安 XiaoAn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Two-column layout */}
        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          {/* 30天趋势图 */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="chip">
                  <TrendingUp size={12} />
                  30天趋势图
                </div>
                <h3 className="mt-2 text-lg font-bold text-stone-900">稳定度评分趋势</h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-600">
                <ArrowUpRight size={14} />
                上升趋势
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stabilityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="stabilityGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3b7bff" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#3b7bff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 6" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    interval={4}
                  />
                  <YAxis
                    domain={[70, 100]}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b7bff"
                    strokeWidth={2.5}
                    dot={false}
                    fill="url(#stabilityGrad)"
                  />
                  {/* 平均线 */}
                  <Line
                    type="monotone"
                    dataKey={() => 86}
                    stroke="#22c55e"
                    strokeWidth={1.5}
                    strokeDasharray="6 4"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex items-center justify-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                稳定度评分
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                平均值 86
              </div>
            </div>
          </div>

          {/* 服药记录表 */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
            <div className="mb-4">
              <div className="chip">
                <Pill size={12} />
                服药记录表
              </div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">本周服药情况</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="pb-2 text-left font-semibold text-stone-500">日期</th>
                    <th className="pb-2 text-center font-semibold text-stone-500">06:00</th>
                    <th className="pb-2 text-center font-semibold text-stone-500">09:30</th>
                    <th className="pb-2 text-center font-semibold text-stone-500">13:00</th>
                    <th className="pb-2 text-center font-semibold text-stone-500">19:30</th>
                    <th className="pb-2 text-right font-semibold text-stone-500">完成率</th>
                  </tr>
                </thead>
                <tbody>
                  {medRecords.map((record, i) => (
                    <tr key={i} className="border-b border-stone-100 last:border-0">
                      <td className="py-2.5 text-stone-600">{record.date}</td>
                      <td className="py-2.5 text-center">
                        <MedStatus value={record.m1} />
                      </td>
                      <td className="py-2.5 text-center">
                        <MedStatus value={record.m2} />
                      </td>
                      <td className="py-2.5 text-center">
                        <MedStatus value={record.m3} />
                      </td>
                      <td className="py-2.5 text-center">
                        <MedStatus value={record.m4} />
                      </td>
                      <td className="py-2.5 text-right font-medium text-stone-700">{record.rate}</td>
                    </tr>
                  ))}
                  <tr className="bg-stone-50/50 font-semibold">
                    <td className="py-2.5 text-stone-600">本周合计</td>
                    <td className="py-2.5 text-center text-emerald-600">28/30 按时</td>
                    <td className="py-2.5 text-center text-amber-600">1 延迟</td>
                    <td className="py-2.5 text-center text-red-500">0 漏服</td>
                    <td className="py-2.5"></td>
                    <td className="py-2.5 text-right text-emerald-600">94%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-emerald-500" />
                按时
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-amber-500" />
                延迟
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-red-400" />
                漏服
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Two-column layout */}
        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          {/* 异常事件记录 */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
            <div className="mb-4">
              <div className="chip-warm">
                <AlertTriangle size={12} />
                异常事件记录
              </div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">近30天重要事件</h3>
            </div>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    event.type === "amber" ? "bg-amber-100 text-amber-600" :
                    event.type === "red" ? "bg-red-100 text-red-500" :
                    event.type === "blue" ? "bg-amber-100 text-amber-700" :
                    "bg-emerald-100 text-emerald-600"
                  }`}>
                    {event.type === "amber" ? <AlertCircle size={12} /> :
                     event.type === "red" ? <Minus size={12} /> :
                     event.type === "blue" ? <MessageSquare size={12} /> :
                     <Check size={12} />}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-stone-400">{event.date} {event.time}</div>
                    <div className="text-sm text-stone-700">{event.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 震颤变化趋势 */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="chip">
                  <Activity size={12} />
                  震颤变化趋势
                </div>
                <h3 className="mt-2 text-lg font-bold text-stone-900">30天震颤强度</h3>
              </div>
              <div className="text-xs text-stone-500">0-20 量表</div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tremorData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="tremorGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 6" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    interval={4}
                  />
                  <YAxis
                    domain={[0, 15]}
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="tremor"
                    fill="url(#tremorGrad)"
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 text-center text-xs text-stone-500">
              本周平均: 8.2 | 较上周 +8.3%
            </div>
          </div>
        </div>

        {/* Section 5: Patient-Reported Outcomes */}
        <div className="mb-6 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
          <div className="mb-4">
            <div className="chip-brand">
              <MessageSquare size={12} />
              患者自述记录
            </div>
            <h3 className="mt-2 text-lg font-bold text-stone-900">患者通过小安反馈的症状与感受</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {patientReports.map((report, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 ${
                  report.tone === "amber" ? "border-amber-200/60 bg-amber-50/50" :
                  report.tone === "blue" ? "border-amber-200/60 bg-amber-50/50" :
                  "border-emerald-200/60 bg-emerald-50/50"
                }`}
              >
                <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                  report.tone === "amber" ? "bg-amber-100 text-amber-700" :
                  report.tone === "blue" ? "bg-amber-100 text-amber-700" :
                  "bg-emerald-100 text-emerald-700"
                }`}>
                  <Clock size={10} />
                  {report.date}
                </div>
                <p className={`mt-2 text-sm font-medium ${
                  report.tone === "amber" ? "text-amber-800" :
                  report.tone === "blue" ? "text-amber-800" :
                  "text-emerald-800"
                }`}>
                  {report.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Quick Actions */}
        <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card">
          <div className="mb-4">
            <div className="chip">
              <User size={12} />
              医生快捷操作
            </div>
            <h3 className="mt-2 text-lg font-bold text-stone-900">常用操作</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button className="flex items-center gap-3 rounded-xl border border-stone-200/60 bg-white/80 p-4 text-left transition hover:bg-white hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <FileText size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">导出完整报告 PDF</div>
                <div className="text-xs text-stone-500">生成并下载患者报告</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-xl border border-stone-200/60 bg-white/80 p-4 text-left transition hover:bg-white hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Users size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">发送随访提醒给家属</div>
                <div className="text-xs text-stone-500">通知家属协助关注</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-xl border border-stone-200/60 bg-white/80 p-4 text-left transition hover:bg-white hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <AlertTriangle size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">标注需要复诊讨论的问题</div>
                <div className="text-xs text-stone-500">标记关注点供复诊</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-xl border border-stone-200/60 bg-white/80 p-4 text-left transition hover:bg-white hover:shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <MessageSquare size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">查看完整对话记录</div>
                <div className="text-xs text-stone-500">患者与小安的对话</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  unit,
  trend,
  trendUp,
  icon,
  isNegativeGood = false,
}: {
  label: string;
  value: string;
  unit: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  isNegativeGood?: boolean;
}) {
  const isGood = isNegativeGood ? !trendUp : trendUp;
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-card">
      <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-gradient-to-br from-stone-100/60 to-stone-200/40 blur-2xl" />
      <div className="relative flex items-start justify-between">
        <div>
          <div className="label-xs">{label}</div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="stat-number">{value}</span>
            <span className="text-lg text-stone-400">{unit}</span>
          </div>
          <div className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
            isGood ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
          }`}>
            {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {trend}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-600/5 text-brand-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

function MedStatus({ value }: { value: string }) {
  if (value === "✓") {
    return <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-emerald-100 text-emerald-600 text-xs font-bold">✓</span>;
  }
  if (value === "delay") {
    return <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-amber-600 text-xs font-bold">D</span>;
  }
  if (value === "miss") {
    return <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-red-100 text-red-500 text-xs font-bold">×</span>;
  }
  return <span className="text-stone-300">—</span>;
}
