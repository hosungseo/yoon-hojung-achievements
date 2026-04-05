"use client";

import { useState } from "react";

const SITE_URL = "https://hosungseo.github.io/yoon-hojung-achievements/";
const SHARE_TITLE = "보통의 하루를, 특별하게 지키는 일 — 윤호중 행정안전부 장관의 기록";
const SHARE_TEXT =
  "검찰청 77년 폐지 · 1호 통합특별시 · 9조원 민생회복 · AI 국민비서 15초";

type ButtonProps = {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
};

function ShareButton({ onClick, label, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-amber-300/60 hover:bg-white/[0.08] hover:text-amber-300"
    >
      {children}
    </button>
  );
}

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open prompt
      window.prompt("주소를 복사하세요:", SITE_URL);
    }
  };

  const onNative = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: SITE_URL,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      onCopy();
    }
  };

  const onTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      SHARE_TITLE,
    )}&url=${encodeURIComponent(SITE_URL)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onLinkedin = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      SITE_URL,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      SITE_URL,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        Share
      </div>
      <div className="flex items-center gap-3">
        <ShareButton onClick={onNative} label="시스템 공유 시트 열기">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </ShareButton>

        <ShareButton onClick={onTwitter} label="X(트위터)로 공유">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </ShareButton>

        <ShareButton onClick={onLinkedin} label="LinkedIn으로 공유">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </ShareButton>

        <ShareButton onClick={onFacebook} label="Facebook으로 공유">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </ShareButton>

        <ShareButton onClick={onCopy} label="링크 복사">
          {copied ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="text-amber-300"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          )}
        </ShareButton>
      </div>
      {copied && (
        <div
          className="text-[10px] tracking-widest text-amber-300"
          role="status"
        >
          링크가 복사되었습니다
        </div>
      )}
    </div>
  );
}
