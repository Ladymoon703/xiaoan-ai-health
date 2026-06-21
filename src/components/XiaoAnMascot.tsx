import React from "react";

type Mood = "smile" | "happy" | "sleepy" | "curious" | "love" | "wink";

type Props = {
  mood?: Mood;
  size?: number;
  className?: string;
  showAccessories?: boolean;
};

export default function XiaoAnMascot({
  mood = "smile",
  size = 280,
  className = "",
  showAccessories = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 280 280"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f5f8ff" />
          <stop offset="100%" stopColor="#dde7ff" />
        </radialGradient>
        <radialGradient id="blueGrad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#7aa7ff" />
          <stop offset="60%" stopColor="#3b7bff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <radialGradient id="pawGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffd9c2" />
          <stop offset="100%" stopColor="#ffb48f" />
        </radialGradient>
        <linearGradient id="heartGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff8fb1" />
          <stop offset="100%" stopColor="#ff5a82" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* 地面阴影 */}
      <ellipse
        cx="140"
        cy="245"
        rx="88"
        ry="10"
        fill="#1d4ed8"
        opacity="0.12"
      />

      {/* 身体 - 圆滚滚 */}
      <g className="origin-center">
        {/* 蓝色下半身体 */}
        <path
          d="M40 170 C 40 110, 90 75, 140 75 C 190 75, 240 110, 240 170 C 240 225, 200 245, 140 245 C 80 245, 40 225, 40 170 Z"
          fill="url(#bodyGrad)"
          stroke="#c9dcff"
          strokeWidth="2"
        />
        {/* 蓝色前襟（机器人盔甲） */}
        <path
          d="M60 175 C 65 150, 95 135, 140 135 C 185 135, 215 150, 220 175 C 222 215, 195 240, 140 240 C 85 240, 58 215, 60 175 Z"
          fill="url(#blueGrad)"
        />

        {/* 白色脸颊区域 */}
        <ellipse cx="140" cy="135" rx="72" ry="58" fill="#ffffff" />

        {/* 左右蓝色耳朵（头顶圆形装饰） */}
        <circle cx="70" cy="92" r="20" fill="url(#blueGrad)" />
        <circle cx="70" cy="92" r="10" fill="#ffffff" opacity="0.5" />
        <circle cx="210" cy="92" r="20" fill="url(#blueGrad)" />
        <circle cx="210" cy="92" r="10" fill="#ffffff" opacity="0.5" />

        {/* 心形天线 */}
        <g transform="translate(140 40)">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-22"
            stroke="#3b7bff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g transform="translate(0 -34)">
            <path
              d="M0 6 C -10 -4, -14 -12, -8 -14 C -2 -16, 0 -10, 0 -6 C 0 -10, 2 -16, 8 -14 C 14 -12, 10 -4, 0 6 Z"
              fill="url(#heartGrad)"
              className="animate-heartbeat"
              style={{ transformOrigin: "center" }}
            />
          </g>
        </g>

        {/* 爱心胸口徽章 */}
        <g transform="translate(140 200)">
          <circle r="20" fill="#ffffff" opacity="0.95" />
          <path
            d="M0 6 C -8 -2, -11 -9, -6 -11 C -2 -12, 0 -8, 0 -5 C 0 -8, 2 -12, 6 -11 C 11 -9, 8 -2, 0 6 Z"
            fill="url(#heartGrad)"
          />
        </g>

        {/* 眼睛 */}
        <Eyes mood={mood} />

        {/* 腮红 */}
        <circle cx="95" cy="148" r="10" fill="#ffb4c9" opacity="0.7" />
        <circle cx="185" cy="148" r="10" fill="#ffb4c9" opacity="0.7" />

        {/* 小嘴 */}
        <Mouth mood={mood} />

        {/* 小爪爪（底部） */}
        <ellipse cx="92" cy="238" rx="18" ry="12" fill="url(#pawGrad)" />
        <ellipse cx="188" cy="238" rx="18" ry="12" fill="url(#pawGrad)" />
        <circle cx="85" cy="235" r="3" fill="#ff8f6a" opacity="0.7" />
        <circle cx="92" cy="232" r="3" fill="#ff8f6a" opacity="0.7" />
        <circle cx="99" cy="235" r="3" fill="#ff8f6a" opacity="0.7" />
        <circle cx="181" cy="235" r="3" fill="#ff8f6a" opacity="0.7" />
        <circle cx="188" cy="232" r="3" fill="#ff8f6a" opacity="0.7" />
        <circle cx="195" cy="235" r="3" fill="#ff8f6a" opacity="0.7" />

        {/* 短手 */}
        <ellipse cx="52" cy="180" rx="14" ry="20" fill="url(#blueGrad)" />
        <ellipse cx="228" cy="180" rx="14" ry="20" fill="url(#blueGrad)" />

        {/* 小尾巴 */}
        <path
          d="M240 180 C 260 170, 265 190, 248 200"
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {showAccessories && (
        <>
          {/* 小星星装饰 */}
          <g opacity="0.85">
            <text x="36" y="70" fontSize="18">
              ✦
            </text>
            <text x="230" y="60" fontSize="14">
              ✧
            </text>
            <text x="215" y="270" fontSize="12">
              ✦
            </text>
          </g>
        </>
      )}
    </svg>
  );
}

function Eyes({ mood }: { mood: Mood }) {
  if (mood === "sleepy") {
    return (
      <g fill="#0b1020">
        <path
          d="M108 128 q10 -6 22 0"
          stroke="#0b1020"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 128 q10 -6 22 0"
          stroke="#0b1020"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    );
  }
  if (mood === "happy" || mood === "love") {
    return (
      <g stroke="#0b1020" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M105 130 q11 -10 22 0" />
        <path d="M153 130 q11 -10 22 0" />
      </g>
    );
  }
  if (mood === "wink") {
    return (
      <g>
        <ellipse cx="118" cy="132" rx="8" ry="10" fill="#0b1020" />
        <circle cx="120" cy="128" r="3" fill="#ffffff" />
        <path
          d="M153 132 q11 -10 22 0"
          stroke="#0b1020"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    );
  }
  // smile / curious / default
  return (
    <g>
      <ellipse
        cx="118"
        cy="132"
        rx="8"
        ry="10"
        fill="#0b1020"
        className="animate-blink"
        style={{ transformOrigin: "118px 132px" }}
      />
      <ellipse
        cx="162"
        cy="132"
        rx="8"
        ry="10"
        fill="#0b1020"
        className="animate-blink"
        style={{ transformOrigin: "162px 132px" }}
      />
      <circle cx="120" cy="128" r="3" fill="#ffffff" />
      <circle cx="164" cy="128" r="3" fill="#ffffff" />
    </g>
  );
}

function Mouth({ mood }: { mood: Mood }) {
  if (mood === "sleepy") {
    return (
      <path
        d="M130 160 q10 6 20 0"
        stroke="#0b1020"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    );
  }
  if (mood === "happy" || mood === "love") {
    return (
      <path
        d="M126 156 q14 14 28 0 q-3 10 -14 10 q-11 0 -14 -10 z"
        fill="#ff5a82"
        stroke="#0b1020"
        strokeWidth="2"
      />
    );
  }
  if (mood === "wink") {
    return (
      <path
        d="M126 158 q14 12 28 0"
        stroke="#0b1020"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    );
  }
  return (
    <path
      d="M128 158 q12 10 24 0"
      stroke="#0b1020"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  );
}
