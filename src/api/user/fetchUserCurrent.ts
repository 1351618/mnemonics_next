export const fetchUserCurrent = async (token) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/current`);

  if (!token) {
    throw new Error("token и пароль должны быть указаны");
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Ошибка при авторизации");
    }
    console.log(data);
    return data; // Возвращаем данные пользователя, если успех
  } catch (error) {
    throw error;
  }
};
