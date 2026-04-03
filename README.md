# 🎬 MEDIA QUERY

> _Every great story begins with a single frame._

TMDB API를 활용한 영화 & TV 시리즈 탐색 웹 애플리케이션입니다.  
현재 상영작, 인기작, 평점 높은 작품 등을 확인하고 즐겨찾기로 저장할 수 있습니다.

---

## 📸 주요 화면

| 홈                | 영화 목록           | 상세 페이지       |
| ----------------- | ------------------- | ----------------- |
| 그라디언트 타이틀 | 카테고리별 슬라이더 | 트레일러 + 추천작 |

---

## ✨ 주요 기능

- **영화 탐색** — 현재 상영작(Now Playing), 인기작(Popular), 평점 높은 작품(Top Rated) 카테고리 제공
- **TV 시리즈 탐색** — 오늘 방영(Airing Today), 방영 중(On The Air), 인기작, 평점 높은 작품 카테고리 제공
- **실시간 검색** — Debounce를 적용한 검색 기능 (1초 지연 후 자동 검색)
- **상세 정보** — 포스터, 줄거리, 장르, 평점, 트레일러(YouTube), 추천 작품 표시
- **즐겨찾기** — Zustand + LocalStorage 기반 즐겨찾기 저장 (새로고침 후에도 유지)
- **스켈레톤 UI** — 데이터 로딩 중 스켈레톤 컴포넌트로 UX 개선

---

## 🛠 기술 스택

| 분류                 | 기술                          |
| -------------------- | ----------------------------- |
| 프레임워크           | React 19, TypeScript          |
| 라우팅               | React Router v7               |
| 서버 상태 관리       | TanStack Query (React Query)  |
| 클라이언트 상태 관리 | Zustand (persist 미들웨어)    |
| 스타일링             | Tailwind CSS v4               |
| 외부 API             | TMDB (The Movie Database) API |
| 빌드 도구            | Vite                          |

---

## 📁 프로젝트 구조

```
src/
├── api/
│   └── media.ts          # TMDB API 호출 함수 (영화, TV, 검색, 상세)
├── assets/
│   ├── no-image.png       # 이미지 없을 때 폴백 이미지
│   └── search.png
├── components/
│   ├── content/
│   │   ├── ContentCard.tsx     # 포스터 카드 (즐겨찾기 버튼 포함)
│   │   ├── ContentGrid.tsx     # 그리드 레이아웃
│   │   ├── ContentSlider.tsx   # 수평 슬라이더
│   │   ├── Details.tsx         # 상세 정보 컴포넌트
│   │   └── TrailerModal.tsx    # YouTube 트레일러 모달
│   ├── layout/
│   │   ├── HomeLayout.tsx      # 공통 레이아웃 (Navbar + Outlet)
│   │   └── Navbar.tsx          # 네비게이션 바 (검색 포함)
│   └── ui/
│       └── skeletons/
│           ├── CardSkeleton.tsx
│           ├── DetailsSkeleton.tsx
│           ├── SearchSkeleton.tsx
│           └── SliderSkeleton.tsx
├── hooks/
│   └── useDebounce.ts     # 검색 입력 디바운스 커스텀 훅
├── pages/
│   ├── HomePage.tsx        # 랜딩 페이지
│   ├── MoviePage.tsx       # 영화 목록 페이지
│   ├── TvShowPage.tsx      # TV 시리즈 목록 페이지
│   ├── DetailsPage.tsx     # 상세 페이지 (영화/TV 공통)
│   ├── SearchPage.tsx      # 검색 결과 페이지
│   └── favoritePage.tsx    # 즐겨찾기 페이지
├── store/
│   └── favorite.ts        # Zustand 즐겨찾기 스토어
├── types/
│   └── media.ts           # TypeScript 타입 정의 + API 옵션
├── App.tsx                # 라우터 설정
├── main.tsx               # 앱 진입점
└── index.css              # 전역 스타일
```

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 18 이상
- TMDB API 키 ([발급 링크](https://www.themoviedb.org/settings/api))

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/media-query.git
cd media-query

# 2. 패키지 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env
# .env 파일에 TMDB API 키 입력

# 4. 개발 서버 실행
npm run dev
```

### 환경 변수

`.env` 파일을 프로젝트 루트에 생성하고 아래 내용을 추가합니다.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> ⚠️ API 키는 절대 커밋하지 마세요. `.env`가 `.gitignore`에 포함되어 있는지 확인하세요.

---

## 📡 API 구조

TMDB API를 `Promise.all`로 병렬 호출하여 페이지 로딩 속도를 최적화했습니다.

```ts
// 영화 3개 카테고리 동시 요청
const [nowPlayingRes, popularRes, topRatedRes] = await Promise.all([...]);

// 상세 페이지: 정보 + 추천작 + 트레일러 동시 요청
const [detailsRes, recommendationsRes, videosRes] = await Promise.all([...]);
```

---

## 💾 즐겨찾기 저장 방식

Zustand의 `persist` 미들웨어를 사용해 즐겨찾기 목록을 `localStorage`에 저장합니다.  
페이지를 새로고침하거나 브라우저를 닫아도 즐겨찾기가 유지됩니다.

```ts
// localStorage key: "favorite-storage"
const useFavoriteStore = create<favoriteState>()(
  persist(/* ... */, { name: "favorite-storage" })
);
```

---

## 🔗 라우팅 구조

```
/                   → 홈 (랜딩 페이지)
/movies             → 영화 목록
/movies/:id         → 영화 상세
/tv-shows           → TV 시리즈 목록
/tv-shows/:id       → TV 시리즈 상세
/search?q=키워드    → 검색 결과
/favorites          → 즐겨찾기
```
