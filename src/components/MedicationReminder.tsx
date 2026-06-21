import { useEffect } from "react";
import { CheckCircle2, Clock, Pill, Volume2, X } from "lucide-react";
import { useReminder } from "@/store/useReminder";
import XiaoAnMascot from "./XiaoAnMascot";

export default function MedicationReminder() {
  const state = useReminder();

  useEffect(() => {
    if (!state.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") state.closeReminder();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state]);

  if (!state.open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-md animate-fadeUp"
        onClick={state.closeReminder}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/5 animate-pop">
        {/* 顶部色带 */}
        <div className="relative h-28 overflow-hidden bg-gradient-to-br from-brand-500 via-brand-400 to-warm-400">
          <div className="absolute inset-0 opacity-40 grain" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <button
            onClick={state.closeReminder}
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
            aria-label="关闭"
          >
            <X size={16} />
          </button>
          <div className="absolute left-0 top-0 flex items-center gap-2 p-4 text-white/90">
            <Volume2 size={16} />
            <span className="text-xs font-medium tracking-wider">
              用药提醒 · MEDICATION ALERT
            </span>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="rounded-full bg-white/90 p-2 shadow-soft ring-1 ring-white">
              <XiaoAnMascot size={120} mood="happy" showAccessories={false} />
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 pt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-warm-100 px-3 py-1 text-xs font-semibold text-warm-600">
            <Clock size={12} />
            {state.time} · 今日{state.sequenceLabel}
          </div>
          <h3 className="mt-4 text-[22px] font-bold text-ink-900">
            {state.patientName}，是时候服药啦
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            小安在你身边，慢慢坐起来、喝口水就好 🌼
          </p>

          <div className="mt-6 rounded-2xl border border-ink-900/5 bg-cream-50 p-5 text-left">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <Pill size={18} />
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-ink-900">
                  {state.medication}
                </div>
                <div className="mt-0.5 text-sm text-ink-500">
                  剂量 {state.dosage} · 饭后 30 分钟 · 温水送服
                </div>
              </div>
              <div className="flex-none text-right">
                <div className="text-xs text-ink-500">剩余</div>
                <div className="text-sm font-semibold text-brand-700">
                  14 片 / 30
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-ink-500">
              <div className="rounded-xl bg-white py-2">
                <div className="font-semibold text-ink-900">已服</div>
                <div className="mt-0.5">1 / 4 次</div>
              </div>
              <div className="rounded-xl bg-white py-2">
                <div className="font-semibold text-ink-900">上次</div>
                <div className="mt-0.5">06:00</div>
              </div>
              <div className="rounded-xl bg-white py-2">
                <div className="font-semibold text-ink-900">下次</div>
                <div className="mt-0.5">13:00</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={state.closeReminder}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <CheckCircle2 size={18} />
              已服药，完成
            </button>
            <button
              onClick={state.closeReminder}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-900/10 bg-white px-5 py-3.5 text-sm font-semibold text-ink-700 transition hover:bg-cream-50"
            >
              <Clock size={18} />
              稍后提醒（10 分钟）
            </button>
          </div>
          <div className="mt-3 text-[11px] text-ink-300">
            若连续 30 分钟未响应，小安将联系您的家人。
          </div>
        </div>
      </div>
    </div>
  );
}
