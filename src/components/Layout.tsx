import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import MedicationReminder from "./MedicationReminder";
import { Heart } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-mesh-warm text-ink-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft bg-[length:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <TopNav />
      <main className="relative">
        <Outlet />
      </main>
      <footer className="relative mt-20 border-t border-white/60 bg-white/60 backdrop-blur">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-ink-500 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-warm-500" />
            <span>
              © 2026 小安 XiaoAn · 用科技守护每一次呼吸与步伐
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-ink-500/80">
            <span>隐私政策</span>
            <span>服务条款</span>
            <span>与我们联系 · hello@xiaoan.health</span>
          </div>
        </div>
      </footer>
      <MedicationReminder />
    </div>
  );
}
