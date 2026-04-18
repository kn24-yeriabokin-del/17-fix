// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/photosApi'; // Імпортуємо нашу функцію з Кроку 1

const Gallery = () => {
  // Створюємо "пам'ять" компонента (стейт)
  const [photos, setPhotos] = useState([]); // Тут будуть лежати завантажені картинки
  const [loading, setLoading] = useState(false); // Це прапорець для тексту "Завантаження..."
  const [page, setPage] = useState(1); // Поточна сторінка, починаємо з 1

  // useEffect - це функція, яка автоматично запускається, коли змінюється те, що в квадратних дужках [page]
  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true); // Показуємо лоадер
      const data = await fetchPhotos(page, 4); // Викликаємо функцію, просимо 4 картинки
      setPhotos(data); // Записуємо отримані картинки в стейт
      setLoading(false); // Ховаємо лоадер
    };

    loadPhotos();
  }, [page]); 

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Галерея (Сторінка {page})</h2>

      {/* Якщо loading === true, показуємо текст. Інакше - малюємо сітку з картинками */}
      {loading ? (
        <h3 style={{ textAlign: 'center', color: 'blue' }}>Завантаження...</h3>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {photos.map((photo) => (
            <div key={photo.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
              <img src={photo.download_url} alt={photo.author} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <p style={{ textAlign: 'center' }}><strong>Автор:</strong> {photo.author}</p>
            </div>
          ))}
        </div>
      )}

      {/* Кнопки перемикання сторінок */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1} // Кнопка вимкнеться, якщо ми на першій сторінці
          style={{ padding: '10px 20px', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
        >
          Попередні
        </button>
        <button 
          onClick={() => setPage(page + 1)}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Наступні
        </button>
      </div>
    </div>
  );
};

export default Gallery;