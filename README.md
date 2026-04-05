# 윤호중 행정안전부 장관 · 주요 성과

대외 공식 홍보용 정적 웹사이트. Next.js 15 (App Router) + React 19 + Tailwind v4 + Framer Motion으로 제작, GitHub Pages에 정적 배포.

## 구조

- **랜딩 1페이지 스크롤형** (메인): 히어로 → 7개 카테고리 섹션 → 인용구 → 타임라인 → 푸터
- **카테고리별 상세 페이지**: `/achievements/<slug>/` — 7개 자동 생성 (정부혁신, 지방분권, 디지털·AI, 재난안전, 민생치안, 사회연대경제, 소통)
- **좌측 고정 스크롤 네비**: 데스크탑에서 섹션 점프

## 로컬 실행

```bash
cd ~/.openclaw/workspace/yoon-hojung-achievements
npm install
npm run dev
# http://localhost:3000
```

## 정적 빌드

```bash
npm run build
# → ./out 폴더에 정적 HTML 생성
```

## GitHub Pages 배포

1. 새 GitHub 리포지토리 생성 (이름: `yoon-hojung-achievements`)
2. 레포 Settings → Pages → Source: **GitHub Actions** 선택
3. 로컬에서 push:

```bash
git init
git add .
git commit -m "feat: initial landing page"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/yoon-hojung-achievements.git
git push -u origin main
```

`.github/workflows/deploy.yml`이 자동으로 빌드·배포. 페이지 URL:
`https://<YOUR_USERNAME>.github.io/yoon-hojung-achievements/`

> 리포 이름을 다르게 지을 경우 `next.config.ts`의 `repoName` 상수도 동일하게 수정 필요.

## 주요 파일

```
src/
  app/
    layout.tsx                   # 루트 레이아웃 (메타데이터, 폰트)
    page.tsx                     # 메인 랜딩 (히어로+카테고리+타임라인)
    globals.css                  # Tailwind v4 + Pretendard
    achievements/[slug]/page.tsx # 카테고리 상세 (동적 생성)
  components/
    Hero.tsx                     # 히어로 섹션 (풀 스크린, 애니메이션)
    ScrollNav.tsx                # 좌측 고정 네비
    CategorySection.tsx          # 카테고리 섹션 카드 그리드
    Quote.tsx                    # 인용구 섹션 (장관 메시지)
    Timeline.tsx                 # 제도화 타임라인
    Footer.tsx                   # 푸터
  data/
    achievements.ts              # 모든 성과 데이터 (단일 진실 출처)
```

## 콘텐츠 편집

모든 성과 데이터는 **`src/data/achievements.ts`** 한 파일에 모여 있습니다.
카테고리 추가/수정, 성과 항목 추가/수정, 카테고리 색상 변경 모두 이 파일만 수정하면 랜딩과 상세 페이지에 동시 반영됩니다.

## 검수 필요 사항

- [ ] 목차 원본(한글/PDF) 확보 후 블러로 읽기 어려웠던 성과 제목·설명 정확히 반영
- [ ] 장관 프로필 사진 `public/` 추가
- [ ] 실제 성과 수치·날짜·영문 명칭 보강
- [ ] `impact` 필드에 구체 성과지표(건수, 예산, 수혜자 수) 채우기
- [ ] 각 카테고리에 대표 이미지/아이콘 추가
- [ ] SEO 메타태그(OG 이미지, twitter card) 보강
- [ ] 한국어 접근성(aria-label, 스크린리더) 점검

## 향후 확장

- 언론보도 링크 섹션
- 정책 PDF 다운로드 섹션
- 영상 플레이어 (기자간담회, 현장 방문)
- 다국어 (영문) 버전
