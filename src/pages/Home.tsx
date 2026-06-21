import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import XiaoAnMascot from "@/components/XiaoAnMascot";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-24 sm:pt-20 sm:pb-28">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fadeUp">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-white/70 px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
              <Sparkles size={12} />
              新一代 AI 陪伴 · 面向帕金森患者与家庭
            </div>
            <h1 className="mt-6 text-6xl font-bold leading-[1.05] tracking-tight text-stone-900 sm:text-[56px] lg:text-[64px]">
              医院看见疾病，<br />
              <span className="ai-gradient">小安看见生活</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-stone-500 leading-relaxed">
              小安是一位持续陪伴在帕金森患者身边的 AI 伙伴，帮助患者、家属与医生共同管理医院之外的每一天。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/dashboard" className="btn-blue">
                开始体验
                <ArrowRight size={16} />
              </Link>
              <Link to="/chat" className="btn-ghost">
                了解小安如何思考
              </Link>
            </div>
          </div>

          {/* Mascot + ambient UI */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* User Story Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/70 p-10 shadow-card">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
          <div className="relative">
            <div className="text-6xl font-serif text-amber-300/60 leading-none">"</div>
            <blockquote className="mt-2 text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              有了小安以后，不用什么都自己记着了。
            </blockquote>
            <p className="mt-4 text-stone-500">
              —— 王阿姨，患者家属 · 使用 6 个月
            </p>
          </div>
        </div>
      </section>

      {/* AI Agent Capabilities */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mb-10">
          <div className="chip mb-3">
            <Sparkles size={12} /> AI 主动思考
          </div>
          <h2 className="text-[28px] font-bold leading-tight sm:text-[34px]">
            小安不只是工具，它在主动思考
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <CapabilityCard
            icon={<BrainCircuit size={24} />}
            title="持续感知"
            desc="每小时自动记录你的状态，无需手动输入"
            accent="text-amber-600"
            bgAccent="bg-amber-50"
            borderAccent="border-amber-200"
          />
          <CapabilityCard
            icon={<Eye size={24} />}
            title="主动预警"
            desc="发现异常时主动联系家属，不等你发现"
            accent="text-stone-600"
            bgAccent="bg-stone-50"
            borderAccent="border-stone-200"
          />
          <CapabilityCard
            icon={<ShieldCheck size={24} />}
            title="长期记忆"
            desc="记住你说过的每一件事，串联趋势分析"
            accent="text-amber-600"
            bgAccent="bg-amber-50"
            borderAccent="border-amber-200"
          />
        </div>
      </section>

      {/* The Loop Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="glass-card p-10 text-center">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[34px]">
            小安构建了一个完整的守护闭环
          </h2>
          <p className="mt-3 text-stone-500 mx-auto max-w-xl">
            从日常感知到风险预警，从家属通知到医生参考，每一步都在小安的协调下无缝完成。
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <LoopPill label="患者" />
            <ArrowRight size={16} className="text-stone-400" />
            <LoopPill label="小安感知" accent />
            <ArrowRight size={16} className="text-stone-400" />
            <LoopPill label="AI 分析" />
            <ArrowRight size={16} className="text-stone-400" />
            <LoopPill label="风险识别" />
            <ArrowRight size={16} className="text-stone-400" />
            <LoopPill label="家属提醒" />
            <ArrowRight size={16} className="text-stone-400" />
            <LoopPill label="医生参考" />
          </div>

          <Link
            to="/loop"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            查看完整架构
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* AI Memory Demo Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="glass-card p-8">
          <div className="flex items-start gap-6">
            <div className="hidden sm:flex flex-none items-center justify-center">
              <div className="animate-floaty">
                <XiaoAnMascot size={140} mood="curious" />
              </div>
            </div>
            <div className="flex-1">
              <div className="chip mb-4">
                <BrainCircuit size={12} /> 小安的长期记忆
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mb-2">
                小安在 3 周前记录了...
              </div>
              <blockquote className="text-lg sm:text-xl font-semibold text-stone-900 leading-snug">
                "您本周第 3 次提到疲劳，同时睡眠时间下降 12%，建议增加休息。"
              </blockquote>
              <p className="mt-4 text-sm text-stone-500 leading-relaxed">
                小安正在学习你的生活习惯和身体节律。它记得你说过的话，串联起长期趋势，在需要时主动提醒。
              </p>
              <Link
                to="/chat"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
              >
                去和小安聊聊
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 px-8 py-14 text-center text-white shadow-card sm:px-16">
          <div className="absolute inset-0 opacity-20 grain" />
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/40 blur-3xl" />
          <div className="relative">
            <ShieldCheck size={28} className="mx-auto text-amber-300" />
            <h3 className="mt-4 text-[30px] font-bold tracking-tight sm:text-[36px]">
              让小安，成为你家的一份子
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
              14 天免费试用 · 与你的主治医师协同 · 严格符合国家健康数据安全规范
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/dashboard" className="btn-blue">
                立即开启
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/chat"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                先和小安对话
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Ambient AI orbs */}
      <div className="orb-blue absolute -top-10 left-10 h-32 w-32 opacity-40 blur-3xl" />
      <div className="orb-blue absolute top-1/3 -right-10 h-24 w-24 opacity-30 blur-2xl" />
      <div className="orb-blue absolute -bottom-5 left-1/4 h-20 w-20 opacity-35 blur-2xl" />

      {/* Main mascot card */}
      <div className="relative mx-auto aspect-square max-w-md rounded-[36px] border border-white/80 bg-gradient-to-br from-white/90 to-white/60 p-6 shadow-card">
        <div className="absolute inset-0 rounded-[36px] bg-grid-soft bg-[length:40px_40px] opacity-40" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/5 px-3 py-1.5 font-semibold text-stone-700">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              小安 · 陪伴中
            </div>
            <div className="rounded-full bg-stone-100 px-3 py-1.5 font-semibold text-stone-600">
              今日心情 ☀️
            </div>
          </div>

          <div className="mt-4 flex flex-1 items-center justify-center">
            <div className="animate-floaty">
              <XiaoAnMascot size={260} mood="happy" />
            </div>
          </div>

          {/* Bottom status chips */}
          <div className="grid grid-cols-3 gap-3">
            <HeroChip label="心率" value="76 bpm" tone="brand" />
            <HeroChip label="步数" value="3,240" tone="stone" />
            <HeroChip label="服药" value="1 / 4" tone="emerald" />
          </div>
        </div>
      </div>

      {/* Floating mini card 1 */}
      <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-soft sm:block animate-fadeUp">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700">
            <ShieldCheck size={16} />
          </div>
          <div className="text-left">
            <div className="text-[11px] text-stone-500">安全守护</div>
            <div className="text-sm font-semibold text-stone-900">
              7 × 24 小时
            </div>
          </div>
        </div>
      </div>

      {/* Floating mini card 2 */}
      <div className="absolute -right-2 bottom-28 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-soft sm:block animate-fadeUp">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
            <BrainCircuit size={16} />
          </div>
          <div className="text-left">
            <div className="text-[11px] text-stone-500">AI 正在思考</div>
            <div className="text-sm font-semibold text-stone-900">
              记忆已同步
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({
  icon,
  title,
  desc,
  accent,
  bgAccent,
  borderAccent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent: string;
  bgAccent: string;
  borderAccent: string;
}) {
  return (
    <div className={`glass-card p-6 ${borderAccent} border-2`}>
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bgAccent} ${accent} shadow-sm`}>
        {icon}
      </div>
      <h4 className="mt-5 text-xl font-bold text-stone-900">{title}</h4>
      <p className="mt-2 text-base leading-relaxed text-stone-500">{desc}</p>
    </div>
  );
}

function LoopPill({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-full px-4 py-2 text-sm font-semibold ${
        accent
          ? "bg-amber-500 text-white"
          : "bg-stone-100 text-stone-700 border border-stone-200"
      }`}
    >
      {label}
    </div>
  );
}

function HeroChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "brand" | "stone" | "emerald";
}) {
  const map: Record<string, string> = {
    brand: "bg-amber-500/10 text-amber-700",
    stone: "bg-stone-100 text-stone-600",
    emerald: "bg-emerald-500/10 text-emerald-700",
  };
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-3 text-left">
      <div
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${map[tone]}`}
      >
        {label}
      </div>
      <div className="mt-1 text-[15px] font-bold text-stone-900">{value}</div>
    </div>
  );
}
