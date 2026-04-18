// src/api/photosApi.js

// Ця функція йде на сервер і просить картинки. 
// Вона приймає номер сторінки (page) і кількість картинок (limit).
export const fetchPhotos = async (page = 1, limit = 4) => {
  try {
    // Звертаємося до сервера за вказаною адресою
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    
    // Якщо сервер відповів помилкою (наприклад, 404), генеруємо помилку
    if (!response.ok) {
      throw new Error("Помилка при завантаженні даних");
    }
    
    // Якщо все добре, перетворюємо відповідь у зручний формат (JSON) і повертаємо
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; // Якщо сталася помилка, повертаємо порожній масив, щоб сайт не впав
  }
};