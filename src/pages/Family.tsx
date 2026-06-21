import {
  ArrowDownToLine,
  ArrowRight,
  BellRing,
  CalendarRange,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Pill,
  Phone,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import XiaoAnMascot from "@/components/XiaoAnMascot";

const medAdherence = [
  { date: "6/15", rate: 100, note: "全部按时" },
  { date: "6/16", rate: 100, note: "全部按时" },
  { date: "6/17", rate: 75, note: "漏服一次 · 已补" },
  { date: "6/18", rate: 100, note: "全部按时" },
  { date: "6/19", rate: 100, note: "全部按时" },
  { date: "6/20", rate: 100, note: "全部按时" },
  { date: "6/21", rate: 75, note: "待服 · 09:30" },
];

const alerts: Array<{ tone: "amber" | "green" | "ink"; title: string; text: string; time: string }> = [
  { tone: "amber", title: "待服提醒", text: "父亲今早的第二次美多巴将在 45 分钟后到时间", time: "刚刚" },
  { tone: "green", title: "状态良好", text: "过去 7 天状态稳定度保持在 85 以上", time: "2 小时前" },
  { tone: "ink", title: "情绪记录", text: "父亲今早主动与小安聊了 4 分钟", time: "6 小时前" },
];

export default function Family() {
  return (
    <div className="container mx-auto px-6 pt-10 pb-16">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="chip">
            <ShieldCheck size={12} /> 家属监护中心 · Family View
          </div>
          <h1 className="mt-3 text-[32px] font-bold leading-tight sm:text-[40px]">
            爸爸，<span className="text-brand-700">今天一切都好</span>
          </h1>
          <p className="mt-2 max-w-xl text-ink-500">
            这是小安为你汇总的每日摘要。你可以随时拨通陪伴他，也可以把重要事件一键分享给其他家人。
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-ink-700 shadow-sm transition hover:bg-white">
            <Phone size={16} /> 拨打语音
          </button>
          <button className="btn-primary">
            <MessageCircle size={16} /> 与小安同步
          </button>
        </div>
      </div>

      {/* Summary + KPI */}
      <div className="mt-8 grid gap-5 md:grid-cols-12">
        <section className="md:col-span-8">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card sm:p-8">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-200/60 blur-3xl" />
            <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-warm-200/60 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-warm-400 to-warm-600 text-3xl font-bold text-white shadow-card">
                    王
                  </div>
                  <div className="absolute -bottom-2 -right-2 rounded-2xl border-4 border-white bg-gradient-to-br from-emerald-500 to-emerald-700 px-2 py-0.5 text-[10px] font-bold text-white shadow-soft">
                    良好
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                    你正在守护的人
                  </div>
                  <div className="mt-1 text-[22px] font-bold leading-tight text-ink-900">
                    王大爷 · 78 岁
                  </div>
                  <div className="mt-1 text-sm text-ink-500">
                    帕金森 · 确诊 6 年 · 李医生主治医师
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 font-semibold text-emerald-700">
                      <Sparkles size={12} /> 连续稳定 · 28 天
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 px-2.5 py-1 font-semibold text-brand-700">
                      <CheckCircle2 size={12} /> 今日服药 · 1/4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 md:col-span-4 md:grid-cols-1">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                  连续稳定天数
                </div>
                <div className="mt-1 text-4xl font-bold text-ink-900">
                  28<span className="text-lg text-ink-300"> 天</span>
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-soft">
                <ArrowDownToLine size={18} />
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-900/5">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-500 via-warm-500 to-emerald-500" />
            </div>
            <div className="mt-2 text-xs text-ink-500">相比上月 +6 天 · 继续保持</div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                  本周按时服药率
                </div>
                <div className="mt-1 text-4xl font-bold text-ink-900">
                  94<span className="text-lg text-ink-300">%</span>
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-warm-400 to-warm-600 text-white shadow-soft">
                <Pill size={18} />
              </div>
            </div>
            <div className="mt-3 text-xs text-ink-500">28 / 30 次按时 · 仅 1 次漏服并已补。</div>
          </div>
        </section>
      </div>

      {/* 7-day row + alerts */}
      <div className="mt-6 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="chip">
                  <CalendarRange size={12} /> 最近 7 天 · 服药情况
                </div>
                <h3 className="mt-3 text-[20px] font-bold text-ink-900">
                  节奏稳定，小安守护每一次服药
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-ink-500">
                <LegendPill color="bg-emerald-500" label="准时" />
                <LegendPill color="bg-warm-500" label="延迟/补服" />
                <LegendPill color="bg-rose-500" label="异常" />
              </div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-2 sm:gap-4">
              {medAdherence.map((d) => (
                <div key={d.date} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex h-40 w-full items-end justify-center">
                    <div
                      className="h-full w-full max-w-[52px] rounded-2xl bg-gradient-to-t from-brand-500 to-warm-400 shadow-soft"
                      style={{
                        height: `${d.rate}%`,
                        opacity: d.rate === 100 ? 1 : 0.9,
                      }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-ink-900">{d.rate}%</div>
                  <div className="text-[11px] text-ink-500">{d.date}</div>
                  <div className="hidden text-center text-[10px] leading-tight text-ink-400 md:block">
                    {d.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="chip">
                  <BellRing size={12} /> 今日异常提醒
                </div>
                <h3 className="mt-3 text-[18px] font-bold text-ink-900">
                  需要你关注的 3 件事
                </h3>
              </div>
              <XiaoAnMascot size={64} mood="wink" showAccessories={false} />
            </div>
            <div className="mt-4 space-y-3">
              {alerts.map((a, i) => (
                <AlertCard key={i} tone={a.tone} title={a.title} text={a.text} time={a.time} />
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-dashed border-brand-500/20 bg-brand-500/5 p-4">
              <div className="text-[11px] font-semibold text-brand-700">小安 · 摘要</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                父亲今天身体状态不错，情绪平稳。建议：今晚 20:00 与他通一个语音电话，小安会提前提醒他。
              </p>
              <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                设置此建议 <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Family members share row */}
      <div className="mt-6 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card">
            <div>
              <div className="chip">
                <HeartHandshake size={12} /> 家庭照护团队
              </div>
              <h3 className="mt-3 text-[20px] font-bold text-ink-900">
                和你一起守护的人
              </h3>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { name: "王小明", role: "儿子 · 主要照护人", color: "from-brand-500 to-brand-700", status: "online" },
                { name: "王小雨", role: "女儿", color: "from-warm-400 to-warm-600", status: "online" },
                { name: "李医生", role: "主治医师", color: "from-emerald-500 to-emerald-700", status: "busy" },
                { name: "周护士", role: "社区护士", color: "from-pink-500 to-rose-500", status: "online" },
                { name: "王太太", role: "老伴", color: "from-violet-500 to-violet-700", status: "away" },
              ].map((m) => (
                <FamilyMember
                  key={m.name}
                  name={m.name}
                  role={m.role}
                  color={m.color}
                  status={m.status as "online" | "busy" | "away"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-ink-900 via-[#111633] to-brand-900 p-6 text-white shadow-card">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90">
                <Sparkles size={12} /> 每周自动发送
              </div>
              <h3 className="mt-4 text-[22px] font-bold leading-tight">
                每周日晚，把爸爸的一周，温柔地说给全家听
              </h3>
              <p className="mt-2 text-sm text-white/70">
                小安自动汇总本周的服药、状态和心情，整理成一条不超过 100 字的短消息，发送到你指定的家庭群。
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/60">发送时间</div>
                  <div className="mt-1 text-base font-bold">每周日 21:00</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/60">已连续发送</div>
                  <div className="mt-1 text-base font-bold">4 周</div>
                </div>
              </div>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-soft transition hover:-translate-y-0.5">
                查看本周摘要示例 <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendPill({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="text-ink-500">{label}</span>
    </div>
  );
}

function AlertCard({
  tone,
  title,
  text,
  time,
}: {
  tone: "amber" | "green" | "rose" | "ink";
  title: string;
  text: string;
  time: string;
}) {
  const toneMap: Record<string, string> = {
    amber: "bg-warm-500/10 text-warm-600",
    green: "bg-emerald-500/10 text-emerald-700",
    rose: "bg-rose-500/10 text-rose-600",
    ink: "bg-ink-900/10 text-ink-700",
  };
  const iconMap: Record<string, React.ReactNode> = {
    amber: <TriangleAlert size={16} />,
    green: <CheckCircle2 size={16} />,
    rose: <TriangleAlert size={16} />,
    ink: <MessageCircle size={16} />,
  };
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 p-3">
      <div className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-xl ${toneMap[tone]}`}>
        {iconMap[tone]}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <div className="text-sm font-semibold text-ink-900">{title}</div>
          <div className="text-[11px] text-ink-300">{time}</div>
        </div>
        <div className="text-xs leading-relaxed text-ink-500">{text}</div>
      </div>
    </div>
  );
}

function FamilyMember({
  name,
  role,
  color,
  status,
}: {
  name: string;
  role: string;
  color: string;
  status: "online" | "busy" | "away";
}) {
  const statusTone: Record<string, string> = {
    online: "bg-emerald-500",
    busy: "bg-warm-500",
    away: "bg-ink-300",
  };
  const statusLabel: Record<string, string> = {
    online: "在线",
    busy: "忙碌",
    away: "暂离",
  };
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 p-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${color} text-sm font-bold text-white shadow-soft`}>
            {name.charAt(0)}
          </div>
          <span className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${statusTone[status]}`} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-ink-900">{name}</div>
          <div className="text-[11px] text-ink-500">{role}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-ink-500">
        <span>{statusLabel[status]}</span>
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800">
          发送消息 <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
