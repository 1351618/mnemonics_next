export const fetchUserRegister = async (email, password) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/register`);

  // Проверка, что оба поля заполнены
  if (!email || !password) {
    throw new Error("Email и пароль должны быть указаны");
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Преобразуем объект в JSON
    });

    const data = await response.json(); // Получаем ответ в формате JSON

    if (!response.ok) {
      throw new Error(data.message || "Ошибка регистрации"); // Если статус не 2xx, выбрасываем ошибку
    }

    return data; // Возвращаем данные пользователя
  } catch (error) {
    // console.error("Ошибка при регистрации:", error);
    throw error; // Перебрасываем ошибку выше
  }
};
