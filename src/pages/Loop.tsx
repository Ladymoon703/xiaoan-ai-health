import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowRight,
  Bell,
  Brain,
  Building2,
  CheckCircle2,
  Clock3,
  Cloud,
  Cpu,
  Download,
  Eye,
  Users,
  Heart,
  Home,
  Lightbulb,
  Link as LinkIcon,
  MessageCircle,
  Mic,
  Moon,
  Network,
  Phone,
  Pill,
  Radio,
  RefreshCw,
  Shield,
  Sparkles,
  Stethoscope,
  Sun,
  TrendingUp,
  Upload,
  User,
  Wifi,
  Zap,
} from "lucide-react";

const loopSteps = [
  {
    step: 1,
    title: "患者",
    icon: <User size={28} />,
    iconBg: "from-blue-500 to-blue-700",
    description: "状态数据",
    details: [
      "日常活动与感受",
      "传感器自动采集",
      "用药记录打卡",
      "对话主动汇报",
    ],
    highlight: "王大爷",
  },
  {
    step: 2,
    title: "小安感知",
    icon: <Eye size={28} />,
    iconBg: "from-purple-500 to-purple-700",
    description: "XiaoAn Sensing",
    details: [
      "步态与活动量",
      "震颤频率监测",
      "睡眠时长分析",
      "情绪对话感知",
    ],
    highlight: "DeepSeek-Pro",
  },
  {
    step: 3,
    title: "AI 分析",
    icon: <Brain size={28} />,
    iconBg: "from-indigo-500 to-indigo-700",
    description: "DeepSeek-Pro",
    details: [
      "整合 30 天历史数据",
      "识别模式与异常趋势",
      "生成病情洞察",
      "关联风险计算",
    ],
    highlight: "实时分析中",
  },
  {
    step: 4,
    title: "风险识别",
    icon: <Shield size={28} />,
    iconBg: "from-amber-500 to-amber-700",
    description: "Risk Detection",
    details: [
      "跌倒风险 · 7.2/10",
      "睡眠异常 · 警告",
      "震颤加重 · 关注",
      "用药依从 · 94%",
    ],
    highlight: "3 项风险",
  },
  {
    step: 5,
    title: "家属提醒",
    icon: <Bell size={28} />,
    iconBg: "from-emerald-500 to-emerald-700",
    description: "Family Alert",
    details: [
      "推送通知 · 已送达",
      "语音电话 · 可选",
      "本周第 3 次疲劳提醒",
      "王小明 · 5分钟前查看",
    ],
    highlight: "已提醒",
  },
  {
    step: 6,
    title: "医生参考",
    icon: <Stethoscope size={28} />,
    iconBg: "from-teal-500 to-teal-700",
    description: "Doctor Reference",
    details: [
      "复诊报告 · 已生成",
      "趋势摘要 · 30天",
      "医生快速掌握院外状态",
      "李医生 · 下次复诊 6/25",
    ],
    highlight: "已同步",
  },
];

const dataFlowSensors = [
  { icon: <Heart size={16} />, label: "心率", value: "72 bpm" },
  { icon: <Activity size={16} />, label: "步数", value: "3,240" },
  { icon: <TrendingUp size={16} />, label: "活动量", value: "78%" },
  { icon: <Moon size={16} />, label: "睡眠", value: "5.8h" },
];

const dataFlowDialog = [
  { icon: <MessageCircle size={16} />, label: "情绪记录", value: "88 分" },
  { icon: <Lightbulb size={16} />, label: "症状描述", value: "3 条" },
  { icon: <Sparkles size={16} />, label: "疑问解答", value: "12 次" },
  { icon: <Mic size={16} />, label: "语音交互", value: "5 次" },
];

const dataFlowMed = [
  { icon: <Clock3 size={16} />, label: "服药时间", value: "4 次/天" },
  { icon: <Pill size={16} />, label: "剂量", value: "250mg × 4" },
  { icon: <CheckCircle2 size={16} />, label: "依从性", value: "94%" },
  { icon: <AlertCircle size={16} />, label: "漏服", value: "1 次" },
];

const stakeholderViews = [
  {
    role: "患者视角",
    avatar: "王",
    avatarBg: "from-blue-500 to-blue-700",
    quote: "小安是我的日常伙伴，帮我记着一切，陪我聊天，提醒我照顾自己。",
    color: "border-blue-200 bg-blue-50/50",
  },
  {
    role: "家属视角",
    avatar: "明",
    avatarBg: "from-emerald-500 to-emerald-700",
    quote: "有了小安，我可以安心上班，因为我知道父亲的一切都有人看着。",
    color: "border-emerald-200 bg-emerald-50/50",
  },
  {
    role: "医生视角",
    avatar: "李",
    avatarBg: "from-teal-500 to-teal-700",
    quote: "以前患者复诊只能靠回忆，现在我有了 30 天的连续数据。",
    color: "border-teal-200 bg-teal-50/50",
  },
];

const liveDemoEvents = [
  { time: "08:30", event: "患者起床，步态数据上传", status: "done" },
  { time: "08:31", event: "小安分析（步态轻微不稳）", status: "done" },
  { time: "08:32", event: "风险评分 +0.5", status: "done" },
  { time: "08:33", event: "家属收到提醒", status: "current" },
  { time: "08:34", event: "记录已同步给李医生", status: "pending" },
];

export default function Loop() {
  return (
    <div className="bg-loop min-h-screen">
      <div className="container mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Network size={14} />
            AI Guardian 架构
          </div>
          <h1 className="mt-4 text-[36px] font-bold tracking-tight text-stone-900 sm:text-[48px]">
            小安的守护闭环
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-stone-600">
            从感知到行动，小安构建了一个完整的 AI 守护网络
          </p>
        </div>

        {/* Section 1: The Loop Diagram */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <RefreshCw size={18} className="text-blue-600" />
            <h2 className="text-xl font-bold text-stone-900">守护闭环流程</h2>
          </div>

          {/* Vertical flow diagram */}
          <div className="relative">
            <div className="space-y-4">
              {loopSteps.map((step, index) => (
                <div key={step.step}>
                  <LoopStepCard step={step} />
                  {index < loopSteps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-stone-400 mb-1">
                          {step.details[0]}
                        </span>
                        <ArrowDown
                          size={20}
                          className="text-blue-400"
                          strokeWidth={2}
                        />
                        <span className="label-xs mt-1">数据传输</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Loop back indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-dashed border-stone-300 bg-stone-50 px-6 py-3 text-sm text-stone-500">
              <RefreshCw size={14} className="text-blue-500" />
              闭环完成 · 数据回流至患者端 · 持续守护中
            </div>
          </div>
        </div>

        {/* Section 2: Data Points Flow */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Cpu size={18} className="text-purple-600" />
            <h2 className="text-xl font-bold text-stone-900">
              每秒，小安在处理这些数据
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <DataFlowCard
              title="传感器"
              icon={<Radio size={20} />}
              iconBg="from-blue-500 to-blue-700"
              items={dataFlowSensors}
            />
            <DataFlowCard
              title="对话"
              icon={<MessageCircle size={20} />}
              iconBg="from-purple-500 to-purple-700"
              items={dataFlowDialog}
            />
            <DataFlowCard
              title="用药"
              icon={<Pill size={20} />}
              iconBg="from-emerald-500 to-emerald-700"
              items={dataFlowMed}
            />
          </div>
        </div>

        {/* Section 3: Three Stakeholder Views */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Users size={18} className="text-emerald-600" />
            <h2 className="text-xl font-bold text-stone-900">三方视角</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stakeholderViews.map((view) => (
              <StakeholderCard key={view.role} view={view} />
            ))}
          </div>
        </div>

        {/* Section 4: Live Demo */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Zap size={18} className="text-amber-500" />
            <h2 className="text-xl font-bold text-stone-900">实时守护演示</h2>
          </div>
          <div className="glass-card overflow-hidden rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-emerald-700">
                  实时守护中
                </span>
              </div>
              <span className="text-xs text-stone-500">2026-06-21 08:34</span>
            </div>

            <div className="mb-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-sm font-medium text-stone-900">
                06/21 08:30 — 患者起床事件
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">
                  <User size={10} /> 起床
                </span>
                <ArrowRight size={12} className="text-stone-400" />
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">
                  <TrendingUp size={10} /> 步态上传
                </span>
                <ArrowRight size={12} className="text-stone-400" />
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-blue-600">
                  <Brain size={10} /> AI 分析
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200" />
              <div className="space-y-4">
                {liveDemoEvents.map((event, i) => (
                  <LiveEventItem key={i} event={event} isLast={i === liveDemoEvents.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoopStepCard({ step }: { step: (typeof loopSteps)[0] }) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl p-5 transition hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div
          className={`inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm ${step.iconBg}`}
        >
          {step.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {step.step}
            </span>
            <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
            <span className="text-xs text-stone-400">· {step.description}</span>
          </div>
          <p className="mt-1 text-xs text-stone-500">{step.details.join(" · ")}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {step.details.slice(0, 2).map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              step.highlight === "已提醒" || step.highlight === "已同步"
                ? "bg-emerald-50 text-emerald-700"
                : step.highlight === "3 项风险" || step.highlight === "实时分析中"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-blue-50 text-blue-700"
            }`}
          >
            {step.highlight}
          </span>
        </div>
      </div>
    </div>
  );
}

function DataFlowCard({
  title,
  icon,
  iconBg,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  items: Array<{ icon: React.ReactNode; label: string; value: string }>;
}) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl p-5">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${iconBg}`}
        >
          {icon}
        </div>
        <h3 className="text-base font-bold text-stone-900">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-stone-200/60 bg-stone-50 p-3"
          >
            <div className="flex items-center gap-1.5 text-stone-500">
              {item.icon}
              <span className="text-[10px] font-medium">{item.label}</span>
            </div>
            <div className="mt-1 text-sm font-bold text-stone-900">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StakeholderCard({
  view,
}: {
  view: (typeof stakeholderViews)[0];
}) {
  return (
    <div
      className={`rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${view.color}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-sm ${view.avatarBg}`}
        >
          {view.avatar}
        </div>
        <span className="text-sm font-semibold text-stone-700">
          {view.role}
        </span>
      </div>
      <blockquote className="text-sm leading-relaxed text-stone-600">
        "{view.quote}"
      </blockquote>
    </div>
  );
}

function LiveEventItem({
  event,
  isLast,
}: {
  event: (typeof liveDemoEvents)[0];
  isLast: boolean;
}) {
  const statusConfig = {
    done: {
      dot: "bg-emerald-500 ring-4 ring-emerald-100",
      text: "text-emerald-700",
      icon: <CheckCircle2 size={12} />,
    },
    current: {
      dot: "bg-blue-500 ring-4 ring-blue-100",
      text: "text-blue-700",
      icon: <ArrowRight size={12} />,
    },
    pending: {
      dot: "bg-stone-300 ring-4 ring-stone-100",
      text: "text-stone-400",
      icon: <Clock3 size={12} />,
    },
  };

  const config = statusConfig[event.status as keyof typeof statusConfig];

  return (
    <div className="relative flex items-start gap-4 pl-10">
      <div className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${config.dot}`} />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-stone-400">
            {event.time}
          </span>
          <span className={`text-sm ${config.text}`}>{event.event}</span>
        </div>
      </div>
      <div className={config.text}>{config.icon}</div>
    </div>
  );
}
