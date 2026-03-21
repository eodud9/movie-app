## 페이지 구조

| 경로         | 설명                            |
| ------------ | ------------------------------- |
| `/`          | 홈 - 장르별 슬라이드, 인기 영화 |
| `/search`    | 검색 결과 (무한스크롤)          |
| `/movie/:id` | 영화 상세 페이지                |

## 컴포넌트 구조

```
src/
├── pages/
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   └── DetailPage.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── movie/
│   │   ├── MovieCard.tsx       # 영화 카드 1개
│   │   ├── MovieSlider.tsx     # 가로 슬라이드
│   │   ├── MovieGrid.tsx       # 검색결과 그리드
│   │   └── MovieDetail.tsx     # 상세 정보
│   └── ui/
│       ├── Spinner.tsx         # 로딩
│       └── SearchBar.tsx       # 검색창
├── hooks/
│   ├── useMovies.ts            # 영화 목록 useQuery
│   ├── useMovieDetail.ts       # 상세 정보 useQuery
│   └── useInfiniteMovies.ts    # 무한스크롤 useInfiniteQuery
├── store/
│   ├── index.ts                # Redux store
│   └── slices/
│       ├── searchSlice.ts      # 검색어 상태
│       └── favoriteSlice.ts    # 즐겨찾기 상태
├── api/
│   └── movie.ts                # TMDB API 호출
└── types/
    └── movie.ts                # Movie 타입 정의
```

## 구현 순서

```
1단계: 기반 세팅

- React Router 페이지 연결
- Redux store 세팅
- TMDB API 연결 확인

2단계: 핵심 기능

- 홈 영화 목록 (useQuery)
- MovieCard 컴포넌트
- MovieSlider

3단계: 검색

- SearchBar → Redux searchSlice
- SearchPage 무한스크롤 (useInfiniteQuery)

4단계: 상세 페이지

- /movie/:id 라우팅
- 상세 정보 렌더링

5단계: 마무리

- 즐겨찾기 (Redux favoriteSlice)
- 로딩/에러 처리
- 반응형
```
