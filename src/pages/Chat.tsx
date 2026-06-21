import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowUp,
  BrainCircuit,
  Clock,
  Heart,
  HeartHandshake,
  Lightbulb,
  Mic,
  Moon,
  Pill,
  Sparkles,
  Sun,
} from "lucide-react";
import XiaoAnMascot from "@/components/XiaoAnMascot";

type Message = {
  id: number;
  from: "xiaoan" | "user";
  text: string;
  time: string;
  mood?: "happy" | "smile" | "love" | "curious" | "wink" | "sleepy";
  chips?: string[];
};

type Memory = {
  id: number;
  icon: React.ReactNode;
  text: string;
  relation: string;
  timeLabel: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    from: "xiaoan",
    mood: "happy",
    time: "09:02",
    text: "王大爷，早上好呀～今天窗外阳光很好，我刚刚帮你检查了一下今天的用药计划，一切都准备好了。有什么想和我聊的吗？",
    chips: ["聊聊今天的计划", "我有点不舒服", "想看看家人留言"],
  },
  {
    id: 2,
    from: "user",
    time: "09:03",
    text: "小安，我早上起来感觉手有点抖，是不是要多吃一片？",
  },
  {
    id: 3,
    from: "xiaoan",
    mood: "curious",
    time: "09:03",
    text: "先别着急～ 清晨的轻微抖动很多时候是『药效即将结束前』的正常波动。我帮你记下来这次的时间和感受，下次复诊时一起给李医生看，可以吗？",
    chips: ["好的，记录下来", "希望能立刻缓解", "查看上次记录"],
  },
  {
    id: 4,
    from: "xiaoan",
    mood: "love",
    time: "09:03",
    text: "一点点小建议：现在先去喝一小口温水，慢慢坐下，做 3 次深呼吸。等 09:30 的美多巴服用后，通常 40 分钟左右会渐渐缓解。我会一直陪着你 🌿",
  },
];

const memories: Memory[] = [
  {
    id: 1,
    icon: <Clock size={14} />,
    text: "王大爷 3 周前提到想多去公园散步",
    relation: "户外活动",
    timeLabel: "3 周前",
  },
  {
    id: 2,
    icon: <AlertCircle size={14} />,
    text: "本周第 3 次提到疲劳",
    relation: "睡眠质量 ↓",
    timeLabel: "本周",
  },
  {
    id: 3,
    icon: <Moon size={14} />,
    text: "睡眠时间连续 3 天下降",
    relation: "睡眠趋势 ↓",
    timeLabel: "近 3 天",
  },
  {
    id: 4,
    icon: <Heart size={14} />,
    text: "昨天情绪评分 78，比前天高 5",
    relation: "情绪趋势 ↑",
    timeLabel: "昨天",
  },
];

const quickPrompts = [
  { icon: <Pill size={14} />, text: "我忘记服药了怎么办" },
  { icon: <HeartHandshake size={14} />, text: "能联系我的女儿吗" },
  { icon: <Sun size={14} />, text: "今天适合去公园散步吗" },
  { icon: <Lightbulb size={14} />, text: "推荐 3 个放松的小动作" },
  { icon: <BrainCircuit size={14} />, text: "我最近总是觉得累，是药的问题吗？" },
  { icon: <Moon size={14} />, text: "昨晚睡得不好，今天要注意什么？" },
  { icon: <Heart size={14} />, text: "我想把这个告诉我的女儿" },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const baseId = nextId + Date.now();
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes(),
    ).padStart(2, "0")}`;

    setMessages((m) => [
      ...m,
      {
        id: baseId,
        from: "user",
        text: trimmed,
        time,
      },
    ]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: baseId + 1,
          from: "xiaoan",
          mood: "happy",
          time,
          text: buildReply(trimmed),
          chips: ["谢谢你，小安", "能再说得简单一点吗", "把这条记录到日记"],
        },
      ]);
    }, 900);
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Memory sidebar */}
        <aside className="lg:col-span-4">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-brand-50/50 to-stone-50/50 p-6 shadow-card">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-stone-100/60 blur-3xl" />

            <div className="relative">
              <div className="chip">
                <BrainCircuit size={12} /> 小安的长期记忆
              </div>
              <h2 className="mt-3 text-[18px] font-bold leading-tight text-stone-900">
                记住你说的每一件事
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                小安在学习你的生活习惯，串联长期趋势。
              </p>

              <div className="mt-5 space-y-3">
                {memories.map((memory) => (
                  <MemoryCard key={memory.id} memory={memory} />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right: conversation */}
        <section className="lg:col-span-8">
          <div className="flex h-[640px] flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-card">
            {/* AI Context Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/70 bg-gradient-to-r from-stone-50 to-white px-6 py-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 px-2.5 py-1 font-semibold text-brand-700">
                    <Sparkles size={10} />
                    DeepSeek-Pro
                  </span>
                </div>
                <div className="h-4 w-px bg-stone-200" />
                <div className="text-xs text-stone-500">
                  上下文：28 条对话 · 3 周记忆
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  记忆已激活
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-white/70 bg-white/80 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-9 w-9 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-stone-400 p-1.5 text-white shadow-soft">
                    <XiaoAnMascot size={28} mood="happy" showAccessories={false} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">
                    小安 · AI 陪伴助手
                  </div>
                  <div className="text-[11px] text-stone-500">
                    正在聆听 · 响应温柔 · 24/7 在线
                  </div>
                </div>
              </div>
              <div className="hidden items-center gap-2 text-xs text-stone-500 sm:flex">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 font-semibold text-emerald-700">
                  端到端加密
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 font-semibold text-stone-600">
                  已同步给家人摘要
                </span>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-stone-50/50 to-white px-4 py-6 sm:px-8"
            >
              <DayDivider label="今天 · 09:02" />
              {messages.map((m) =>
                m.from === "xiaoan" ? (
                  <XiaoAnBubble key={m.id} message={m} />
                ) : (
                  <UserBubble key={m.id} message={m} />
                ),
              )}
              {typing && (
                <div className="flex items-end gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-stone-400 text-white shadow-soft">
                    <XiaoAnMascot size={28} mood="smile" showAccessories={false} />
                  </div>
                  <div className="rounded-2xl rounded-bl-md border border-white/70 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1 text-stone-300">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-stone-300 [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-stone-300 [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-stone-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="border-t border-white/70 bg-white/80 px-4 py-4 sm:px-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {quickPrompts.slice(0, 4).map((q) => (
                  <button
                    key={q.text}
                    onClick={() => send(q.text)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-900/5 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm transition hover:border-brand-500/40 hover:text-brand-700"
                  >
                    <span className="text-brand-600">{q.icon}</span>
                    {q.text}
                  </button>
                ))}
              </div>
              <div className="flex items-end gap-2 rounded-2xl border border-stone-900/10 bg-white p-2 shadow-sm focus-within:border-brand-500 focus-within:shadow-soft">
                <button className="ml-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl text-stone-500 transition hover:bg-stone-900/5 hover:text-brand-700">
                  <Mic size={18} />
                </button>
                <textarea
                  value={input}
                  rows={1}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="和小安说说你此刻的感受…"
                  className="max-h-36 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-stone-900 outline-none placeholder:text-stone-300"
                />
                <button
                  onClick={() => send(input)}
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition hover:-translate-y-0.5"
                  aria-label="发送"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
              <div className="mt-2 text-center text-[11px] text-stone-300">
                小安的回答仅作陪伴与建议，不能替代医生诊断。紧急情况请拨打 120。
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function buildReply(input: string) {
  const text = input.toLowerCase();
  if (text.includes("抖") || text.includes("不舒服") || text.includes("疼")) {
    return "我已经记下这次的感受了，王大爷。先喝一口温水、慢慢坐下来，我会在 10 分钟后再问你一次。我注意到你本周已经第 3 次提到疲劳了 — 如果情况持续或加重，我们可以联系你的女儿或李医生。可以吗？";
  }
  if (text.includes("药") || text.includes("忘记") || text.includes("服")) {
    return "别担心 —— 如果只是晚了 30 分钟以内，现在补上就好；如果已经接近下一次服药时间，就按原定时间正常服用，不要加倍。我记得你上次服药是昨天晚上了，今天的药记得吃了吗？需要我现在发一条提醒给你吗？";
  }
  if (text.includes("女儿") || text.includes("家人") || text.includes("儿子")) {
    return "我可以帮你拨通语音电话，也可以把你刚刚说的话整理成一条文字消息，发给你的家人。你之前提到想让女儿知道你的日常状况 — 要不要我帮你整理一份本周的健康摘要发给她？";
  }
  if (text.includes("散步") || text.includes("公园") || text.includes("天气")) {
    return "今天空气质量很好，温度 23°C，适合慢走。我记得你 3 周前提到想去公园散步，现在天气正好合适！建议走 15-20 分钟，走一小段就休息一下，我会在途中轻轻提醒你。准备好了告诉我一声～";
  }
  if (text.includes("放松") || text.includes("动作") || text.includes("累")) {
    return "我帮你选了三个很简单的动作：1）慢慢耸肩 10 次；2）双手互握拉伸 20 秒；3）闭眼深呼吸 3 次。我注意到你本周多次提到疲劳 — 这些动作可以帮助缓解，要不要我们现在一起做？";
  }
  if (text.includes("累") || text.includes("疲劳")) {
    return "你本周已经是第 3 次提到疲劳了，同时我注意到你的睡眠时间连续 3 天有下降趋势。建议今晚早点休息，明天如果还是觉得累，我们可以把这个情况告诉李医生。你觉得呢？";
  }
  if (text.includes("睡") || text.includes("睡眠")) {
    return "昨晚睡得不好吗？我注意到你的睡眠时间已经连续 3 天下降了，同时昨天情绪评分是 78 分，比前一天高了 5 点，身体在努力调整呢。今晚我会在 9 点提醒你早点休息，要不要设置一个提醒？";
  }
  return "谢谢你愿意和我说这些～ 我把它放进你今天的心情日记里了。你昨天情绪评分是 78 分，比前天高 5 点，说明状态在慢慢好转呢。如果想让家人也看到，可以按下面的按钮，我会帮你整理成一条温柔的消息。";
}

function DayDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] text-stone-300">
      <span className="h-px flex-1 bg-stone-900/5" />
      {label}
      <span className="h-px flex-1 bg-stone-900/5" />
    </div>
  );
}

function XiaoAnBubble({ message }: { message: Message }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-stone-400 text-white shadow-soft">
        <XiaoAnMascot size={28} mood={message.mood ?? "happy"} showAccessories={false} />
      </div>
      <div className="max-w-[80%] sm:max-w-[70%]">
        <div className="rounded-2xl rounded-bl-md border border-white/70 bg-white px-4 py-3 text-sm leading-relaxed text-stone-900 shadow-sm">
          {message.text}
        </div>
        {message.chips && message.chips.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.chips.map((c) => (
              <button
                key={c}
                className="rounded-full border border-stone-900/5 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-stone-700 transition hover:border-brand-500/40 hover:text-brand-700"
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <div className="mt-1 pl-2 text-[11px] text-stone-300">小安 · {message.time}</div>
      </div>
    </div>
  );
}

function UserBubble({ message }: { message: Message }) {
  return (
    <div className="flex items-end justify-end gap-3">
      <div className="max-w-[80%] sm:max-w-[70%]">
        <div className="rounded-2xl rounded-br-md bg-gradient-to-br from-brand-600 to-brand-700 px-4 py-3 text-sm leading-relaxed text-white shadow-soft">
          {message.text}
        </div>
        <div className="mt-1 pr-2 text-right text-[11px] text-stone-300">
          王大爷 · {message.time}
        </div>
      </div>
      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-stone-400 text-sm font-bold text-white shadow-soft">
        王
      </div>
    </div>
  );
}

function MiniChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-3 text-center">
      <div className="text-[11px] text-stone-500">{label}</div>
      <div className="mt-0.5 text-sm font-bold text-stone-900">{value}</div>
    </div>
  );
}

function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <div className="rounded-2xl border border-stone-200/60 bg-white/80 p-4 text-left transition hover:border-brand-300/40 hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          {memory.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-stone-900 leading-snug">
            {memory.text}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-600">
              {memory.timeLabel}
            </span>
            <span className="text-[10px] text-stone-400">
              关联：{memory.relation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
