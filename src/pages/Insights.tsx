import React, { useState } from "react";
import {
  BrainCircuit,
  TrendingUp,
  TrendingDown,
  Flame,
  Clock,
  Moon,
  Activity,
  Pill,
  AlertCircle,
  Sun,
  Sparkles,
} from "lucide-react";
import XiaoAnMascot from "../components/XiaoAnMascot";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";

const sleepData = [
  { day: "6/8", hours: 7.2 },
  { day: "6/9", hours: 6.8 },
  { day: "6/10", hours: 6.5 },
  { day: "6/11", hours: 7.0 },
  { day: "6/12", hours: 6.9 },
  { day: "6/13", hours: 6.4 },
  { day: "6/14", hours: 6.1 },
  { day: "6/15", hours: 6.3 },
  { day: "6/16", hours: 6.0 },
  { day: "6/17", hours: 5.8 },
  { day: "6/18", hours: 6.2 },
  { day: "6/19", hours: 5.9 },
  { day: "6/20", hours: 6.1 },
  { day: "6/21", hours: 5.8 },
];

const tremorData = [
  { day: "6/8", episodes: 12 },
  { day: "6/9", episodes: 11 },
  { day: "6/10", episodes: 13 },
  { day: "6/11", episodes: 10 },
  { day: "6/12", episodes: 12 },
  { day: "6/13", episodes: 14 },
  { day: "6/14", episodes: 15 },
  { day: "6/15", episodes: 13 },
  { day: "6/16", episodes: 12 },
  { day: "6/17", episodes: 14 },
  { day: "6/18", episodes: 15 },
  { day: "6/19", episodes: 16 },
  { day: "6/20", episodes: 14 },
  { day: "6/21", episodes: 15 },
];

const adherenceData = [
  { week: "W1", adherence: 100 },
  { week: "W2", adherence: 100 },
  { week: "W3", adherence: 75 },
  { week: "W4", adherence: 100 },
  { week: "W5", adherence: 100 },
  { week: "W6", adherence: 100 },
  { week: "W7", adherence: 94 },
];

export default function Insights() {
  const [dateRange, setDateRange] = useState<"7d" | "30d">("30d");

  return (
    <div className="min-h-screen bg-insights">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <span className="label-xs text-amber-600">AI ANALYSIS</span>
          <h1 className="text-3xl font-bold text-stone-900">
            AI 洞察 · XiaoAn Insights
          </h1>
          <p className="text-stone-500 text-sm">
            小安正在分析您过去 30 天的健康数据，已发现以下值得关注的变化
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex gap-2">
              <button
                onClick={() => setDateRange("7d")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  dateRange === "7d"
                    ? "btn-blue shadow-md"
                    : "btn-ghost text-stone-500"
                }`}
              >
                最近 7 天
              </button>
              <button
                onClick={() => setDateRange("30d")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  dateRange === "30d"
                    ? "btn-blue shadow-md"
                    : "btn-ghost text-stone-500"
                }`}
              >
                最近 30 天
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <BrainCircuit className="w-4 h-4 text-amber-600" />
              <span>分析模型：DeepSeek-Pro</span>
            </div>
          </div>
        </div>

        {/* Section 1: AI Generated Summary Card */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-8">
            <XiaoAnMascot mood="curious" size={160} />
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="label-xs text-amber-600">AI 综合分析</span>
              </div>
              <p className="text-stone-700 leading-relaxed text-lg">
                最近 30 天，您的整体状态稳中向好。服药依从性保持在
                94%，但我注意到您的睡眠时间较上月下降约
                12%，震颤频率有轻微波动。建议在晴好天气增加户外散步时间，有助于改善睡眠质量和情绪稳定。
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="chip">💊 依从性 94%</span>
                <span className="chip-warm">😴 睡眠下降</span>
                <span className="chip-warm">📈 轻微波动</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-5 space-y-2">
            <span className="label-xs text-stone-500">综合健康评分</span>
            <div className="flex items-end gap-3">
              <span className="stat-number text-stone-900">87</span>
              <span className="text-stone-400 text-lg">/100</span>
              <div className="flex items-center gap-1 text-emerald-600 text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>+8</span>
              </div>
            </div>
            <p className="text-xs text-stone-400">较上月同期</p>
          </div>
          <div className="glass-card p-5 space-y-2">
            <span className="label-xs text-stone-500">服药依从性</span>
            <div className="flex items-end gap-3">
              <span className="stat-number text-stone-900">94</span>
              <span className="text-stone-400 text-lg">%</span>
              <div className="chip-emerald text-xs px-2 py-0.5 rounded-full">
                稳定
              </div>
            </div>
            <p className="text-xs text-stone-400">继续保持</p>
          </div>
          <div className="glass-card p-5 space-y-2">
            <span className="label-xs text-stone-500">状态稳定天数</span>
            <div className="flex items-end gap-3">
              <span className="stat-number text-stone-900">28</span>
              <span className="text-stone-400 text-lg">天</span>
              <Flame className="w-6 h-6 text-orange-500 mb-1" />
            </div>
            <p className="text-xs text-stone-400">本月至今</p>
          </div>
        </div>

        {/* Section 3: Sleep Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="glass-card p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-stone-900">睡眠时长趋势</h3>
              <span className="chip text-xs ml-auto">14天</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={sleepData}>
                <defs>
                  <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  domain={[4, 9]}
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickFormatter={(v) => `${v}h`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(v: number) => [`${v} 小时`, "睡眠时长"]}
                />
                <ReferenceLine
                  y={6.5}
                  stroke="#f97316"
                  strokeDasharray="5 5"
                  label={{
                    value: "平均 6.5h",
                    position: "right",
                    fontSize: 10,
                    fill: "#f97316",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="hours"
                  stroke="#f97316"
                  strokeWidth={2}
                  fill="url(#sleepGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="bg-amber-50 rounded-lg p-3 text-sm text-amber-800">
              <span className="font-medium">小安发现：</span>
              最近 3 天平均睡眠 5.9 小时，较前 7 天下降 15%，建议睡前减少屏幕使用。
            </div>
          </div>
          <div className="glass-card p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-stone-900">睡眠质量分析</h3>
            </div>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">深度睡眠</span>
                  <span className="font-medium text-stone-900">42%</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: "42%" }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">浅睡眠</span>
                  <span className="font-medium text-stone-900">38%</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: "38%" }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">REM睡眠</span>
                  <span className="font-medium text-stone-900">20%</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-300 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="text-center p-2 bg-amber-50 rounded-lg">
                <div className="text-lg font-bold text-amber-700">42%</div>
                <div className="text-xs text-amber-600">深度</div>
              </div>
              <div className="text-center p-2 bg-amber-50 rounded-lg">
                <div className="text-lg font-bold text-amber-600">38%</div>
                <div className="text-xs text-amber-600">浅度</div>
              </div>
              <div className="text-center p-2 bg-amber-50 rounded-lg">
                <div className="text-lg font-bold text-amber-600">20%</div>
                <div className="text-xs text-amber-600">REM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Tremor Trends */}
        <div className="glass-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-stone-900">震颤频率变化</h3>
            <span className="chip-warm text-xs ml-auto">14天</span>
            <span className="text-sm text-amber-600 font-medium">
              vs 上月同期 +8.3%
            </span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={tremorData}>
              <defs>
                <linearGradient id="tremorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                domain={[0, 20]}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(v: number) => [`${v} 次`, "震颤"]}
              />
              <ReferenceLine
                y={14}
                stroke="#f59e0b"
                strokeDasharray="5 5"
                label={{
                  value: "安全阈值",
                  position: "right",
                  fontSize: 10,
                  fill: "#f59e0b",
                }}
              />
              <Area
                type="monotone"
                dataKey="episodes"
                stroke="#f59e0b"
                strokeWidth={2}
                fill="url(#tremorGradient)"
              />
              <Line
                type="monotone"
                dataKey="episodes"
                stroke="#ea580c"
                strokeWidth={1.5}
                strokeDasharray="3 3"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="bg-amber-50 rounded-lg p-3 text-sm text-amber-800">
            <span className="font-medium">小安发现：</span>
            震颤频率本周上升约 8%，但仍在安全阈值内。建议在下周三复诊时与李医生讨论是否需要微调药量。
          </div>
        </div>

        {/* Section 5: Medication Adherence */}
        <div className="glass-card p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-stone-900">服药依从性分析</h3>
            <span className="chip-emerald text-xs ml-auto">7周</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={adherenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(v: number) => [`${v}%`, "依从性"]}
              />
              <ReferenceLine
                y={100}
                stroke="#10b981"
                strokeDasharray="5 5"
              />
              <Bar
                dataKey="adherence"
                radius={[6, 6, 0, 0]}
                fill="#10b981"
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="bg-emerald-50 rounded-lg p-3 text-sm text-emerald-800">
            <span className="font-medium">小安发现：</span>
            您已连续 4 周保持 100% 按时服药，本周有 1 次延迟 20 分钟。延迟主要集中在午餐后，建议调整闹钟时间。
          </div>
        </div>

        {/* Section 6: AI Daily Health Report */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-stone-900">
              今日健康日报 · 2026年6月21日
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">😊</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-stone-500">总体状态</div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-900">良好</span>
                    <span className="chip-emerald text-xs">正常</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Pill className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-stone-500">用药</div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-900">
                      完成 1/4
                    </span>
                    <span className="text-xs text-stone-500">
                      下一次 09:30 美多巴
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Moon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-stone-500">睡眠预警</div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-900">
                      睡眠时间偏低
                    </span>
                    <span className="chip-warm text-xs">注意</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-stone-500">震颤</div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-900">轻微波动</span>
                    <span className="chip text-xs">观察中</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-6 h-6 text-amber-500" />
                <span className="label-xs text-amber-600">小安建议</span>
              </div>
              <p className="text-lg text-stone-800 leading-relaxed">
                今日适合户外散步{" "}
                <span className="font-bold text-amber-700">20 分钟</span>
              </p>
              <p className="text-stone-600 mt-2">
                建议时间：上午{" "}
                <span className="font-medium text-stone-800">10:00</span>
              </p>
              <div className="mt-4 p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-stone-600">
                  晴好天气适合户外活动，晒太阳有助于维生素D合成，改善情绪和睡眠质量。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Pattern Detection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl font-bold text-stone-900">
              小安发现的关联模式
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-amber-500" />
                <span className="chip-warm text-sm">睡眠 ↔ 震颤</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                过去 30 天，当睡眠低于 6 小时时，震颤频率平均上升{" "}
                <span className="font-bold text-amber-600">12%</span>
              </p>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-3 h-3" />
                <span>置信度：85%</span>
              </div>
            </div>
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">😊</span>
                <span className="chip-warm text-sm">情绪 ↔ 运动</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                您情绪评分较低时，户外活动时间平均减少{" "}
                <span className="font-bold text-orange-600">40%</span>
              </p>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-3 h-3" />
                <span>置信度：78%</span>
              </div>
            </div>
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Pill className="w-5 h-5 text-emerald-500" />
                <span className="chip-emerald text-sm">准时服药 ↔ 稳定</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                按时服药日，状态稳定度平均高{" "}
                <span className="font-bold text-emerald-600">15%</span>
              </p>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-3 h-3" />
                <span>置信度：92%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 space-y-2">
          <p className="text-xs text-stone-400">
            小安私人健康助手 · AI 洞察分析
          </p>
          <p className="text-xs text-stone-400">
            数据更新时间：2026年6月21日 08:00
          </p>
        </div>
      </div>
    </div>
  );
}
