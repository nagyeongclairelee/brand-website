# HANIP 웹사이트 플래닝 — v1.0

> 기준: `HANIP_브랜드_기획안.md` + 기존 Serene Yoga V3 개발 경험

---

## 목차
1. [사이트 목적 & 목표](#1-사이트-목적--목표)
2. [기술 스택 & 파일 구조](#2-기술-스택--파일-구조)
3. [디자인 시스템 (토큰)](#3-디자인-시스템-토큰)
4. [페이지 구성 & 섹션 설계](#4-페이지-구성--섹션-설계)
5. [카피라이팅 전략](#5-카피라이팅-전략)
6. [컴포넌트 패턴](#6-컴포넌트-패턴)
7. [SVG 비주얼 전략](#7-svg-비주얼-전략)
8. [개발 순서 & 체크리스트](#8-개발-순서--체크리스트)

---

## 1. 사이트 목적 & 목표

### 사이트가 해야 하는 일

| 방문자 상황 | 사이트가 해야 하는 전환 |
|------------|----------------------|
| 인스타 광고 클릭 → 착지 | "이거 믿을 수 있는 브랜드다" 확신 → 구매 클릭 |
| 처음 들어본 브랜드 탐색 | "성분 다섯 개" 포인트로 차별화 각인 |
| 제품 라인업 탐색 | 내 반려동물 맞춤 제품 빠르게 찾기 |
| 재방문/재구매 | 구독 전환 유도 |

### 핵심 전환 행동 (Primary CTA)
1. **스마트스토어 구매 바로가기** — 모든 주요 섹션에 배치
2. **정기구독 신청** — 가격 섹션에 구독 강조
3. **인스타 팔로우** — 브랜드 신뢰 형성

---

## 2. 기술 스택 & 파일 구조

Serene Yoga V3와 동일한 순수 HTML/CSS/JS 스택. 서버 불필요, 정적 파일로 바로 브라우저 실행.

```
brand-website/
├── index-hanip.html      ← 메인 랜딩 페이지
├── style-hanip.css       ← 디자인 토큰 + 전체 스타일
└── main-hanip.js         ← 스크롤 애니메이션, 인터랙션
```

---

## 3. 디자인 시스템 (토큰)

### 3-1. 색상 CSS 변수

```css
:root {
  /* ── Base ── */
  --off-white:    #F5F3EF;   /* 페이지 배경 */
  --soft-black:   #2D2D2D;   /* 헤딩, 본문 텍스트 */
  --mid-gray:     #6B6B6B;   /* 서브 텍스트, 캡션 */
  --white:        #FFFFFF;   /* 카드, 패널 배경 */

  /* ── 라인 컬러 (제품별) ── */
  --joint:        #3B6CB5;   /* 조인트 라인 — 딥 블루 */
  --joint-light:  #5A85CC;   /* 조인트 호버 */
  --skin:         #E8C84A;   /* 스킨코트 — 웜 옐로우 */
  --gut:          #7AB8D9;   /* 거트 — 스카이 블루 */
  --calming:      #C9C46A;   /* 카밍 — 옐로우 연한톤 */
  --senior:       #F0E4C8;   /* 시니어 — 크림 */

  /* ── CTA ── */
  --cta:          #3B6CB5;   /* MVP = 조인트 딥 블루 */
  --cta-hover:    #2A5090;

  /* ── Border ── */
  --border:       rgba(45,45,45,0.12);
}
```

> **선택 근거:** 강아지 색각(dichromatic vision) 기반. 레드·그린·오렌지 배제.  
> MVP 출시가 조인트 라인이므로, 메인 CTA는 딥 블루 `#3B6CB5`로 통일.

### 3-2. 타이포그래피

```css
:root {
  --font-sans:    'Pretendard', 'Noto Sans KR', sans-serif;
  /* 로고·디스플레이에 쓸 폰트 — Pretendard 가변 웨이트 */
}
```

| 레벨 | 크기 | 웨이트 | 특성 |
|------|------|--------|------|
| 로고 | 28px | 700 | HANIP 대문자, 자간 0.05em |
| 히어로 | clamp(2.4rem, 5vw, 4rem) | 700 | 한글/영문 모두 |
| H2 | clamp(1.5rem, 3vw, 2.2rem) | 600 | |
| Eyebrow | 11px | 600 | 대문자, letter-spacing 0.15em |
| Body | 15–16px | 400 | line-height 1.8 |
| Button | 13px | 600 | 대문자, letter-spacing 0.08em |

**톤앤매너 적용:** 헤딩은 마침표로 끝내는 짧은 문장. 소문자 혼용보다 **짧은 팩트 단문** 우선.

### 3-3. 간격 & 레이아웃

```css
:root {
  --section-y:    clamp(72px, 10vw, 140px);   /* 섹션 상하 패딩 */
  --container:    1120px;                      /* 최대 너비 */
  --gap:          48px;                        /* 기본 그리드 갭 */
}
```

---

## 4. 페이지 구성 & 섹션 설계

단일 랜딩 페이지 (index-hanip.html). 스크롤 한 번으로 전환까지 유도.

### 섹션 순서 (위→아래)

| # | 섹션명 | 배경 | 목적 | 핵심 요소 |
|---|--------|------|------|----------|
| 01 | Navigation | `--off-white` | 탐색 + 첫 CTA | 로고 좌측, 메뉴 우측, "구매하기" 버튼 |
| 02 | Hero | `--off-white` | 브랜드 선언, 클릭 유도 | 대형 헤딩 + 서브 + CTA 버튼 + 제품 SVG |
| 03 | Problem Band | `--soft-black` | 공감 유도 (반전 배경) | "영양제 사줘도 안 먹어서 버린 적 있으면?" 3연 감정 |
| 04 | Brand Concept | `--off-white` | 브랜드 포지션 설명 | "간식인데 기능성. 성분은 다섯 개." 2열 레이아웃 |
| 05 | Marquee | — | 분위기 전환 | 브랜드 키워드 흐르는 텍스트 |
| 06 | MVP Product | `--white` | 제품 상세 + 구매 | 관절케어 주인공 섹션, 성분 5개 카드, 가격, CTA |
| 07 | Product Line | `--off-white` | 라인업 탐색 | 5종 카드 그리드 (강아지 라인, 라인 컬러 배지 활용) |
| 08 | Why HANIP | `--white` | 신뢰 구축 | 3가지 차별점 (성분 다섯 개 / 기호성 / 맞춤 라인) |
| 09 | Persona Story | `--off-white` | 감정 이입 | "지은 & 콩이" 스토리. 불안→확신 전환 서사 |
| 10 | Social Proof | `--soft-black` | UGC + 해시태그 | #오늘도한입챙겼어 + 텍스트 리뷰 카드 3개 |
| 11 | Subscription | `--joint` (딥 블루) | 구독 전환 | 단품 vs 구독 가격 비교 + 구독 CTA |
| 12 | Footer | `--soft-black` | 탐색 보조 | 로고, 인스타 링크, 스마트스토어 링크 |

---

### 섹션별 상세 설계

#### 02 — Hero

```
배경: off-white (#F5F3EF)

[HANIP 로고]                   [구매하기 버튼]

    오늘도 한입
    챙겼어?
    
    간식처럼 먹이는 기능성 클린 간식.
    성분은 딱 다섯 개.
    
    [관절케어 시작하기 →]   [제품 구경하기]
    
                  [ 제품 파우치 SVG 일러스트 ]
```

- 히어로 높이: `min-height: 80vh` — 아래 Problem Band 살짝 노출
- 제품 SVG: 무광 스탠드 파우치 형태, 딥 블루(`#3B6CB5`) 배경 패널
- CTA 주버튼: `--joint` 색상 (`#3B6CB5`)

---

#### 03 — Problem Band (다크 섹션)

```
배경: soft-black (#2D2D2D)  텍스트: off-white

    "영양제 사줬더니 안 먹고 고개 돌림"

    영양제를 사면 → 안 먹음
    분말을 뿌리면 → 골라 먹음
    비싼 처방식은 → 한 번 먹고 끝
    
    그래서 한입이 있음.
```

- 좌우 마진 넉넉, 중앙 정렬
- 각 줄은 fade-in 애니메이션으로 순차 등장

---

#### 06 — MVP Product (주인공 섹션)

```
[왼쪽: 제품 파우치 SVG — 딥 블루 패널]
[오른쪽:
  eyebrow: MVP PRODUCT
  한입 조인트
  with 글루코사민
  
  성분:
  🐔 닭가슴살   💊 글루코사민 500mg
  🦴 콘드로이틴  🌿 비타민E
  📦 식이섬유
  
  ──────────────────────────
  30개입 (1개월분)
  
  ₩14,900     구독가 ₩12,900/월
  
  [스마트스토어 구매하기]
  
  "하루 약 500원. 커피 한 잔도 안 되는 관절 관리."
]
```

---

#### 07 — Product Line (강아지 5종 카드 그리드)

각 카드:
```
[라인 컬러 상단 바 (딥 블루/웜 옐로우/스카이 블루...)]
한입 조인트
with 글루코사민
"산책 후 한입."
[구매 →]
```

카드 5개 → 데스크탑 5열, 태블릿 3열, 모바일 2열(+1)

---

#### 11 — Subscription (딥 블루 배경)

```
배경: #3B6CB5  텍스트: white

    한입을 매달 자동으로.
    
    단품 14,900원    구독 12,900원/월
                     ↑ 첫 달 9,900원
    
    [지금 구독 시작하기]
    
    "잊지 않아도 됨. 우리가 챙김."
```

---

## 5. 카피라이팅 전략

### 브랜드 톤 적용 원칙

| 금지 표현 | 대체 표현 |
|---------|---------|
| "최고급 원료로 만든" | "성분 다섯 개. 전부 발음 가능." |
| "사랑하는 반려동물을 위해" | "콩이가 먹었다. 끝." |
| "과학적으로 입증된" | "글루코사민 500mg. 숫자로 말함." |
| "프리미엄 클린 뉴트리션" | "기능성인데 간식. 간식인데 기능성." |

### 섹션별 핵심 카피

| 섹션 | 헤드카피 | 서브카피 |
|------|---------|---------|
| Hero | "오늘도 한입 챙겼어?" | "간식처럼 먹이는 기능성 클린 간식. 성분은 딱 다섯 개." |
| Problem | "영양제 사줘도 안 먹어서 버린 적 있으면" | 3가지 실패 경험 나열 |
| MVP | "성분 다섯 개. 관절 걱정 한입에." | "하루 약 500원. 커피 한 잔 값도 안 됨." |
| Why | "힘 뺀 진심" | "과장 안 함. 성분으로 말함." |
| Persona | "지은은 콩이 영양제를 세 번 버렸다." | 실패→확신 서사 |
| Social | "#오늘도한입챙겼어" | 리뷰 카드 |
| Subscription | "한입을 매달 자동으로." | "잊지 않아도 됨. 우리가 챙김." |

---

## 6. 컴포넌트 패턴

### 버튼

```css
/* Primary — 딥 블루 (조인트/메인 CTA) */
.btn-primary {
  background: var(--joint);
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 0;           /* sharp — Serene Yoga V3와 동일 원칙 */
  cursor: pointer;
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--soft-black);
  border: 1px solid var(--soft-black);
  /* 나머지 동일 */
}

/* 라인별 버튼 — .btn-joint, .btn-skin, .btn-gut ... */
.btn-joint { background: var(--joint); color: white; }
.btn-skin  { background: var(--skin); color: var(--soft-black); }  /* 옐로우는 어두운 텍스트 */
.btn-gut   { background: var(--gut); color: white; }
```

### 제품 카드

```html
<div class="product-card" data-line="joint">
  <div class="card-line-bar"></div>  <!-- 라인 컬러 상단 4px 바 -->
  <div class="card-body">
    <span class="eyebrow">FOR DOG</span>
    <h3>한입 조인트</h3>
    <p class="card-sub">with 글루코사민</p>
    <p class="card-copy">"산책 후 한입. 관절은 매일 쓰니까."</p>
    <a href="#" class="btn btn-joint">구매하기 →</a>
  </div>
</div>
```

CSS: `data-line` 속성으로 라인 컬러 자동 적용

```css
[data-line="joint"] .card-line-bar { background: var(--joint); }
[data-line="skin"]  .card-line-bar { background: var(--skin); }
[data-line="gut"]   .card-line-bar { background: var(--gut); }
[data-line="calming"] .card-line-bar { background: var(--calming); }
[data-line="senior"]  .card-line-bar { background: var(--senior); }
```

### 성분 뱃지 (MVP 섹션)

```html
<ul class="ingredient-list">
  <li class="ing-item">
    <span class="ing-icon">🐔</span>
    <span class="ing-name">닭가슴살</span>
  </li>
  <!-- ... 5개 -->
</ul>
```

2열 그리드 (2+2+1), 각 아이템은 테두리 없는 미니멀 스타일.

### 다크 섹션 (Problem Band / Footer)

```css
.section--dark {
  background: var(--soft-black);
  color: var(--off-white);
}
.section--dark p { color: rgba(245,243,239,0.72); }
```

---

## 7. SVG 비주얼 전략

실제 사진 대신 SVG 일러스트로 브랜드 분위기 구현.

### 필요한 SVG

| SVG | 위치 | 설명 |
|-----|------|------|
| `hanip-pouch.svg` | Hero, MVP 섹션 | 스탠드 파우치 형태. 딥 블루 패널 + "한입 조인트" 타이포 + 성분 5개 미니 표기 |
| `dog-silhouette.svg` | Persona 섹션 | 소형견(말티즈) 실루엣. 따뜻한 오프화이트 배경에 `--soft-black` 실루엣 |
| `ingredient-icon.svg` | MVP 성분 카드 | 닭가슴살/글루코사민 등 5종 아이콘 세트 |

### 파우치 SVG 구조 (hanip-pouch.svg)

```svg
<svg viewBox="0 0 320 400">
  <defs>
    <linearGradient id="pouch-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3B6CB5"/>
      <stop offset="100%" stop-color="#2A5090"/>
    </linearGradient>
  </defs>
  <!-- 파우치 외형 (둥근 직사각형) -->
  <rect x="40" y="60" width="240" height="300" rx="20" fill="url(#pouch-bg)"/>
  <!-- 지퍼 라인 -->
  <rect x="40" y="60" width="240" height="24" rx="12" fill="#5A85CC"/>
  <!-- 브랜드명 -->
  <text x="160" y="160" text-anchor="middle" fill="#F5F3EF" font-size="40" font-weight="700">HANIP</text>
  <!-- 제품명 -->
  <text x="160" y="210" text-anchor="middle" fill="rgba(245,243,239,0.8)" font-size="16">한입 조인트</text>
  <!-- 성분 5개 -->
  <text x="160" y="260" text-anchor="middle" fill="rgba(245,243,239,0.6)" font-size="11">닭가슴살 · 글루코사민 · 콘드로이틴 · 비타민E · 식이섬유</text>
  <!-- 하단 용량 -->
  <text x="160" y="340" text-anchor="middle" fill="rgba(245,243,239,0.5)" font-size="11">30개입 · 60g</text>
</svg>
```

---

## 8. 개발 순서 & 체크리스트

### Phase 1 — 토큰 + 뼈대 (1회차)

- [ ] `style-hanip.css` 생성: 색상 토큰, 타이포, 스페이싱, 리셋
- [ ] `index-hanip.html` 생성: 섹션 12개 HTML 구조 작성
- [ ] Nav + Hero + Problem Band 완성

### Phase 2 — 핵심 섹션 (2회차)

- [ ] MVP Product 섹션 (파우치 SVG + 성분 카드 + 가격 + CTA)
- [ ] Product Line 카드 그리드 (5종, 라인 컬러 시스템)
- [ ] Why HANIP 3포인트 섹션

### Phase 3 — 감성 + 전환 (3회차)

- [ ] Persona Story 섹션 (지은 & 콩이)
- [ ] Social Proof 섹션 (리뷰 카드 + 해시태그)
- [ ] Subscription 섹션 (딥 블루 배경, 단품 vs 구독 비교)
- [ ] Footer

### Phase 4 — 인터랙션 + QA

- [ ] `main-hanip.js`: IntersectionObserver 스크롤 애니메이션
- [ ] Nav 스크롤 효과 (투명 → 화이트 + 보더)
- [ ] 마키 애니메이션 (CSS keyframes)
- [ ] 모바일 반응형 (375px 기준)
- [ ] 크롬에서 전체 플로우 확인

---

## 참고: Serene Yoga V3에서 재사용할 것

| 요소 | 재사용 여부 | 비고 |
|------|----------|------|
| CSS 리셋 | ✅ 그대로 | `*, *::before, *::after { box-sizing: border-box }` 등 |
| IntersectionObserver 패턴 | ✅ 그대로 | `main-v3.js`에서 복사 |
| 마키 CSS | ✅ 수정 후 적용 | 키워드를 HANIP 브랜드 키워드로 교체 |
| Sharp 버튼 원칙 | ✅ 그대로 | `border-radius: 0` |
| 섹션 eyebrow 패턴 | ✅ 그대로 | 대문자, letter-spacing |
| 폰트: Noto Sans KR | ✅ 유지 | Pretendard 미지원 환경 fallback |
| 색상 토큰 구조 | ✅ 구조만 | 값은 HANIP 컬러로 전면 교체 |
