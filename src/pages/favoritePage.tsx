import { useQueries } from "@tanstack/react-query";
import { useFavoriteStore } from "../store/favorite";
import { getDetails } from "../api/media";
import ContentGrid from "../components/content/ContentGrid";
import type { ContentDetails } from "../types/media";

export default function FavoritePage() {
  const favorites = useFavoriteStore((state) => state.favorites);

  const { data: favoriteList, isLoading } = useQueries({
    queries: favorites.map((id) => ({
      queryKey: ["movie", id],
      queryFn: () => getDetails("movie", String(id)),
    })),
    combine: (results) => {
      // ✅ Type Guard: 데이터가 존재하는 것들만 골라내고 타입을 ContentDetails로 확정
      const data = results.map((r) => r.data?.details).filter((details): details is ContentDetails => !!details);

      return {
        data,
        isLoading: results.some((r) => r.isLoading),
      };
    },
  });

  if (isLoading) return <div className="p-20 text-white">로딩 중...</div>;

  // ✅ ContentGrid가 기대하는 { results: [] } 구조로 맞춰서 전달
  return (
    <div className="flex flex-col p-7 md:p-20 gap-10">
      <h1 className="text-3xl font-bold text-white">내가 찜한 콘텐츠</h1>
      <ContentGrid contents={favoriteList} />
    </div>
  );
}
