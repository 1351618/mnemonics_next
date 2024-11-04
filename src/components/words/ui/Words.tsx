"use client";

import { fetchWordsData } from "src/api/words/fetchWordsData";
import cls from "./words.module.scss";
import { useEffect, useState } from "react";

const tabs = ["частоте", "алфавиту", "группам"];
interface wordType {
  id: string;
  word: string;
}

export const Words = () => {
  const [isTab, setTab] = useState(0);
  const [dataWords, setDataWords] = useState<wordType[]>([]);
  const [start, setStart] = useState(0); // Начальная позиция
  const [limit, setLimit] = useState(10); // Лимит по умолчанию
  const [search, setSearch] = useState(""); // Строка поиска
  const [isSearchMode, setIsSearchMode] = useState(true); // Режим поиска

  const loadData = async () => {
    try {
      // Разбиваем строку поиска на массив слов, игнорируя пробелы и пустые строки
      const searchTerms = isSearchMode
        ? search.trim().split(/\s+/).filter(Boolean) // Удаляем пустые элементы
        : undefined;

      console.log("Search Terms:", searchTerms);
      const data = await fetchWordsData(
        isSearchMode ? undefined : start,
        isSearchMode ? undefined : limit,
        searchTerms // Передаем массив слов для поиска
      ); // Передаем параметры в зависимости от режима

      // console.log(data);
      setDataWords(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    loadData(); // Загружаем данные при первой загрузке компонента
  }, []); // Список зависимостей пуст, чтобы загрузить данные только один раз

  return (
    <div className={cls.words}>
      <nav className={cls.wordsNav}>
        <div>
          {tabs.map((val, ind) => (
            <label key={ind}>
              <input
                type="radio"
                name="tabs"
                checked={isTab === ind}
                onClick={() => setTab(ind)}
              />
              {val}
            </label>
          ))}
        </div>
        <button>статистика</button>
      </nav>
      <div className={cls.wordsMain}>
        <div className={cls.controls}>
          <label>
            <input
              type="radio"
              checked={isSearchMode}
              onChange={() => setIsSearchMode(true)} // Установить режим поиска
            />
            Поиск
          </label>
          <label>
            <input
              type="radio"
              checked={!isSearchMode}
              onChange={() => setIsSearchMode(false)} // Установить режим диапазона
            />
            Диапазон
          </label>
          {isSearchMode ? (
            <>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Обновляем строку поиска
                placeholder="Введите слова через пробел"
              />
              <button onClick={loadData}>Поиск</button>{" "}
              {/* Кнопка для поиска */}
            </>
          ) : (
            <>
              <input
                type="number"
                value={start}
                onChange={(e) => setStart(Number(e.target.value))} // Обновляем начальную позицию
                placeholder="Начало"
              />
              <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))} // Обновляем лимит
                placeholder="Лимит"
              />
              <button onClick={loadData}>Запрос</button>{" "}
              {/* Кнопка для диапазона */}
            </>
          )}
        </div>
        <ul>
          {dataWords.map((val) => (
            <li key={val.id}>{val.word}</li>
          ))}
        </ul>
        <div className={cls.statistics}>statistics</div>
      </div>
    </div>
  );
};
