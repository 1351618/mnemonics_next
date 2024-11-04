// src\api\words\fetchWordsData.ts
export const fetchWordsData = async (start, limit, search) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/words`);

  // Добавляем параметры к URL
  if (start !== undefined) url.searchParams.append("start", start);
  if (limit !== undefined) url.searchParams.append("limit", limit);

  // Добавляем массив слов в качестве отдельных параметров search
  if (search && Array.isArray(search)) {
    search.forEach((term) => url.searchParams.append("search", term));
  } else if (search) {
    url.searchParams.append("search", search);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch words data");
  }
  const data = await response.json();
  return data;
};
