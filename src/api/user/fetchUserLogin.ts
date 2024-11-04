export const fetchUserLogin = async (email, password) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/login`);

  if (!email || !password) {
    throw new Error("Email и пароль должны быть указаны");
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Ошибка при авторизации");
    }
    console.log(data);
    return data; // Возвращаем данные пользователя, если успех
  } catch (error) {
    // console.error("Ошибка в fetchUserLogin:", error); // Логируем ошибку для отладки
    throw error;
  }
};
