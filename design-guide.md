# Design Guide — Jillz Guerin 분석
> 출처: jillzguerin.com/about 분석 기준

---

## 목차
1. [색상 팔레트](#1-색상-팔레트)
2. [타이포그래피](#2-타이포그래피)
3. [간격 & 리듬](#3-간격--리듬)
4. [레이아웃 시스템](#4-레이아웃-시스템)
5. [섹션 구성](#5-섹션-구성)
6. [컴포넌트 패턴](#6-컴포넌트-패턴)
7. [무드 & 톤](#7-무드--톤)
8. [우리 사이트 적용 포인트](#8-우리-사이트-적용-포인트)

---

## 1. 색상 팔레트

버건디를 중심으로 크림, 블러시 핑크, 블랙이 보조하는 여성스럽고 고급스러운 팔레트.

### Primary

| 이름 | Hex | 역할 |
|------|-----|------|
| Burgundy | `#7c3a3a` | 브랜드 메인, 로고, 버튼, 강조 링크 |
| Burgundy Light | `#a85252` | 호버, CTA 강조 |

### Neutral

| 이름 | Hex | 역할 |
|------|-----|------|
| Cream | `#faf5f0` | 기본 페이지 배경 |
| White | `#ffffff` | 카드, 섹션 배경 |
| Near Black | `#1a1410` | 헤딩, 제목 텍스트 |
| Warm Gray | `#6b6059` | 본문 텍스트 |

### Accent

| 이름 | Hex | 역할 |
|------|-----|------|
| Blush Pink | `#e8c8c0` | 이미지 배경, 섹션 액센트 |
| Dusty Rose | `#c4908a` | 장식 요소, 드레이프 이미지 |

### 사용 원칙

- 버건디는 로고, 버튼, 강조 링크에만 집중 사용
- 배경은 반드시 크림(`#faf5f0`) 또는 화이트(`#ffffff`)
- 핑크 계열은 이미지 드레이프, 섹션 배경에 보조적으로만 사용
- 블랙 계열은 타이포그래피 전용

---

## 2. 타이포그래피

세리프 디스플레이 + 산세리프 본문의 클래식 조합. **소문자 활용**이 브랜드 친근감의 핵심.

### Font Stack

| 용도 | 폰트 | 웨이트 |
|------|------|--------|
| 디스플레이 / 헤딩 | Cormorant Garamond (세리프) | 300 Light, 400 Regular, Italic |
| 본문 / UI / 버튼 | 산세리프 (Squarespace 기본) | 300 Light, 400 Regular |

### Type Scale

| 레벨 | 크기 | 스타일 | 예시 |
|------|------|--------|------|
| Display | 80–100px | 세리프, Weight 300, 이탤릭 혼용 | `Hi, I'm jillz!` |
| H1 | 48–60px | 세리프, Weight 400, 소문자 | `dare to be her & I'll show you how.` |
| H2 | 28–36px | 세리프, Weight 400 | `How hitting rock bottom changed everything` |
| Eyebrow | 11–12px | 산세리프, Weight 600, 대문자, letter-spacing 0.15em | `ABOUT · COURSES` |
| Body | 15–16px | 산세리프, Weight 300, line-height 1.8 | 일반 본문 |
| Button | 12–13px | 산세리프, 대문자, letter-spacing 0.08em | `START YOUR NEXT CHAPTER` |

### 소문자 전략

헤딩과 문장에 소문자를 적극 활용한다.
- 예: `"hi, I'm jillz!"`, `"dare to be her"`, `"a few fun things about me"`
- 효과: 딱딱하지 않고 친근한 개인 브랜드 톤
- 예외: 버튼, 아이브로우(eyebrow) 텍스트는 대문자 유지

---

## 3. 간격 & 리듬

8px 베이스 그리드. 섹션 간 여백을 넉넉하게 두어 고급스러운 여유로움 연출.

### Spacing Scale

| 값 | 용도 |
|----|------|
| 4px | 아이콘-텍스트 간격, 태그 패딩 |
| 8px | 인라인 요소 간격 |
| 16px | 카드 내부 요소 간격 |
| 24px | 컨테이너 패딩, 리스트 아이템 |
| 48px | 섹션 내부 서브 블록 간격 |
| 80px | 섹션 상하 패딩 (모바일) |
| 120–160px | 섹션 상하 패딩 (데스크탑) |

### Grid

- **콘텐츠 최대 너비**: 1200px
- **히어로 이미지**: 100% 풀와이드
- **주요 레이아웃 단위**: 2열 (이미지 + 텍스트)

---

## 4. 레이아웃 시스템

풀와이드 히어로 → 2열 이미지+텍스트 교차 반복 → 풀와이드 텍스트 배너 패턴.

### Layout Patterns

**① Full-Width Hero**
```
[         Image + Overlay Text (100vw)         ]
```

**② 2-Col: Image Left / Text Right**
```
[ Photo (60%) ]  [ Heading / Body / CTA (40%) ]
```

**③ 2-Col: Text Left / Image Right** ← 교차 배치
```
[ Heading / Body / CTA (40%) ]  [ Photo (60%) ]
```

**④ Full-Width Text Banner** (크림/핑크 배경)
```
[   centered display heading + CTA (100vw)   ]
```

**⑤ 3-Col Card Grid** (코스/상품)
```
[ Card 1 ]  [ Card 2 ]  [ Card 3 ]
```

### 이미지-텍스트 교차 원칙

동일한 레이아웃을 연속 사용하지 않는다.  
이미지가 왼쪽이었다면 다음 섹션은 오른쪽.  
→ 시선을 자연스럽게 유도하며 스크롤 리듬을 형성.

---

## 5. 섹션 구성

About 페이지 기준 순서.

| # | 섹션명 | 레이아웃 | 목적 |
|---|--------|----------|------|
| 01 | Navigation | sticky, logo-left | 탐색 |
| 02 | Hero | 풀와이드, 인물 사진 + 대형 헤딩 | 첫인상, 브랜드 선언 |
| 03 | Problem Statement | 텍스트 전용, 크림 배경 | 방문자 공감 유도 |
| 04 | Personal Story | 2열 이미지+텍스트 | 신뢰 구축, 서사 |
| 05 | Fun Facts | 불릿 리스트 | 친근감 형성 |
| 06 | CTA Banner | 풀와이드, 액센트 배경 | 전환 유도 |
| 07 | Instagram Feed | 4열 그리드 | 소셜 증거 |
| 08 | Footer | 링크 + 소셜 아이콘 | 탐색 보조 |

---

## 6. 컴포넌트 패턴

### Buttons

| 타입 | 스타일 |
|------|--------|
| Primary (Filled) | bg `#7c3a3a`, color `#fff`, padding `14px 32px`, uppercase, letter-spacing `0.08em`, border-radius `0` (sharp) |
| Ghost (Outlined) | border `1px solid #7c3a3a`, color `#7c3a3a`, hover 시 fill solid |
| Text Link | underline only, color `#7c3a3a`, 화살표 `→` 자주 사용 |
| **CTA Accent** | bg `#9e4e62` (딥 로즈), color `#fff`, hover `#7e3a4e` + shadow, radius: 0 — 신청/등록 버튼 전용 |

> **핵심**: 버튼 모서리가 **sharp(radius: 0)**. 둥근 버튼보다 더 세련되고 편집적인 느낌.
> **CTA 강조**: 일반 버튼(`--pink-4`)과 구별되는 딥 로즈(`#9e4e62`)를 신청 버튼에만 적용.

### Navigation

- 로고: 세리프, 버건디 컬러, 좌측 고정
- 메뉴: 산세리프, 대문자, `letter-spacing: 0.08em`
- 배경: 스크롤 전 투명 → 스크롤 후 화이트 + 하단 보더

### 이미지 처리

- **Portrait**: 소프트 포커스, 웜 라이팅, 플로잉 드레스, 핑크/크림 배경
- **Lifestyle**: 버건디/블러시 드레이프 패브릭, 질감 강조, 추상적 배경
- 공통: 자연광, 그림자 최소화, 여성적 분위기 일관 유지

### Decorative Elements

- `thin vertical line` — 섹션 구분
- `horizontal rule` — 헤딩 아래 짧게 (40px)
- `diagonal line` — 포인트 장식
- `marquee text` — 브랜드 키워드 흐르는 텍스트 배너
- `serif section numbers` — `01`, `02`, `03` 형식, 작게 헤딩 위에 배치

---

## 7. 무드 & 톤

### Brand Keywords
`FEMININE` · `MAGNETIC` · `ABUNDANT` · `EFFORTLESS` · `ASPIRATIONAL` · `INTENTIONAL`

### Photography Style
- 소프트 포커스, 웜 화이트 밸런스
- 플로잉 패브릭 (버건디, 블러시 핑크 드레이프)
- 자연광, 그림자 최소화
- 인물 중심, 감정적 포즈

### Copywriting Style
- 2인칭 `"you"` 적극 사용 → 방문자와 직접 대화하는 느낌
- em-dash(`—`)로 문장 내 호흡감 표현
- 긴 설명보다 짧은 임팩트 문구 선호
- 소문자, 비격식체로 친밀감 형성

---

## 8. 우리 사이트 적용 포인트

Jillz Guerin 레퍼런스를 기반으로 **Serene Yoga** 웹사이트에 반영할 수 있는 개선점.

### 레퍼런스 강점 vs 적용 제안

| Jillz Guerin 강점 | Serene Yoga 반영 제안 |
|-------------------|-----------------------|
| 소문자 헤딩으로 친근한 톤 | 히어로 헤딩 소문자 + 이탤릭 혼용 |
| 섹션 번호(01, 02, 03) 장식 | 각 섹션에 세리프 번호 추가 |
| 이미지-텍스트 좌우 교차 | 소개 섹션에 교차 레이아웃 적용 |
| 마키 키워드 배너 | `"고요함 · 회복 · 균형 · 호흡"` 마키 추가 |
| 강한 개인 서사 | 원장 개인 스토리 섹션 강화 |
| Sharp 버튼 모서리 | CTA 버튼 border-radius 줄이기 |
| *(V3 추가)* 히어로 과도한 크기 | font-size `clamp(2rem,4.5vw,3.6rem)`, min-height `78vh`로 축소 |
| *(V3 추가)* CTA 버튼 가시성 낮음 | 딥 로즈 `#9e4e62` CTA 전용 색상 추가 |

### 핵심 차이점 (유지할 것)

> Jillz는 **개인 브랜드** → "나"의 이야기가 중심  
> Serene Yoga는 **공간 브랜드** → "당신의 변화"를 중심으로 스토리 구성

색상은 버건디 대신 현재의 **핑크 + 베이지** 팔레트를 유지하되,  
텍스트 톤(소문자, 친근체), 레이아웃 리듬(교차 배치), 장식 요소(번호, 마키)를 참고 적용.
