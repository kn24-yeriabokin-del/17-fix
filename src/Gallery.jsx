import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/photosApi';

const Gallery = () => {
  // 1. Створюємо стейти згідно з завданням
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // 2. useEffect викликає fetchPhotos при зміні page
  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true); // Вмикаємо напис "Завантаження..."
      const data = await fetchPhotos(page, 4); // Запитуємо 4 картинки для поточної сторінки
      setPhotos(data); // Зберігаємо отримані дані
      setLoading(false); // Вимикаємо завантаження
    };

    loadPhotos();
  }, [page]); // [page] означає: запускати цей код щоразу, коли змінюється номер сторінки

  // 3. Функції для кнопок
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>📸 Галерея (Сторінка {page})</h2>

      {/* 4. Галерея зображень або лоадер */}
      {loading ? (
        <h3 style={{ textAlign: 'center', color: 'blue' }}>Завантаження...</h3>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {photos.map((photo) => (
            <div key={photo.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <img 
                src={photo.download_url} 
                alt={photo.author} 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} 
              />
              <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>
                <strong>Автор:</strong> {photo.author}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 5. Кнопки “Наступні” та “Попередні” */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button 
          onClick={handlePrev} 
          disabled={page === 1} // Забороняємо page < 1
          style={{ 
            padding: '10px 25px', 
            fontSize: '16px',
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            background: page === 1 ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Попередні
        </button>
        <button 
          onClick={handleNext}
          style={{ 
            padding: '10px 25px', 
            fontSize: '16px',
            cursor: 'pointer',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Наступні
        </button>
      </div>
    </div>
  );
};

export default Gallery;