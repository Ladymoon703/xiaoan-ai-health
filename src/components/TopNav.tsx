import { NavLink, Link } from "react-router-dom";
import {
  Activity,
  BrainCircuit,
  HeartHandshake,
  Home,
  LayoutDashboard,
  MessageCircleHeart,
  ShieldCheck,
  Siren,
} from "lucide-react";
import XiaoAnMascot from "./XiaoAnMascot";

const navItems = [
  { to: "/", label: "首页", icon: Home },
  { to: "/insights", label: "AI 洞察", icon: BrainCircuit },
  { to: "/dashboard", label: "我的主页", icon: LayoutDashboard },
  { to: "/chat", label: "与小安对话", icon: MessageCircleHeart },
  { to: "/doctor", label: "医生观察", icon: Activity },
  { to: "/risks", label: "风险预警", icon: Siren },
  { to: "/loop", label: "产品闭环", icon: HeartHandshake },
  { to: "/family", label: "家属监护", icon: ShieldCheck },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/40 to-orange-400/30 opacity-70 blur-md transition group-hover:opacity-100" />
            <div className="relative rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-amber-200/60">
              <XiaoAnMascot size={36} showAccessories={false} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-bold tracking-tight text-stone-900">
              小安 <span className="ai-gradient">XiaoAn</span>
            </div>
            <div className="text-[11px] font-medium text-stone-500">
              AI · 帕金森健康伙伴
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-stone-200/60 bg-white/80 p-1 shadow-sm lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav-pill ${isActive ? "nav-pill-active" : ""}`
              }
            >
              <item.icon size={13} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile nav placeholder */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/chat"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white"
          >
            <MessageCircleHeart size={12} />
            对话
          </Link>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-bold text-white shadow-sm">
            王
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-bold text-white shadow-sm">
            王
          </div>
        </div>
      </div>
    </header>
  );
}
