import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Detectar la tecla "Esc" para cerrar el modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Asegura que el div cubra toda la altura de la pantalla
      color: '#fff', // Color del texto blanco para el contraste
    }}>
      {/* Sección de bienvenida */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h1>👋 ¡Bienvenidos a mi curso de Programación!</h1>
        <p>
          En este curso aprenderemos a armar una web estática usando HTML, JAVA y MYSQL workbench 🌐.  
        </p>
        <img
          src="https://IvanBrianCruz.github.io/ATLAS/img/lenguajes-de-programacion.png" // Reemplaza con la URL de tu imagen
          alt="Modelo del proyecto a lograr"
          style={{ width: '80%', margin: '1rem auto', borderRadius: '8px', cursor: 'pointer' }}
          onClick={openModal}
        />
      </section>

      {/* Modal para mostrar la imagen en pantalla completa */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <img
            src="https://IvanBrianCruz.github.io/ATLAS/img/eje.png" // Reemplaza con la URL de tu imagen
            alt="Modelo del proyecto ampliado"
            style={{ width: '90%', maxWidth: '800px', borderRadius: '8px' }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              color: '#fff',
              fontSize: '2rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Sección de programas necesarios */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '1rem auto',
        maxWidth: '800px',
      }}>
        <h2>🛠️ Programas que Necesitaremos Instalar</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://code.visualstudio.com/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#007ACC',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              📘 Visual Studio Code
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://www.mysql.com/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#8CC84B',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              💻 MY SQL Workbench
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://www.java.com/es/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#F05032',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              🧰 JAVA
            </button>
          </li>
        </ul>
      </section>


{/* Sección de video de instalación */}
<section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '18px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h2>📹 Cómo Instalar y Configurar Visual estudio code</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/I4PFzH9O0s0?si=OxdC5dVj4nRMwKpp"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br></br>
      <br></br>

      {/* Sección de video de instalación */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '18px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h2>📹 Cómo Instalar y Configurar Visual estudio code</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/6pD7_rcFrj8?si=xRix9NLKYztCiSaG"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
<br></br>
<br></br>

      {/* Sección de video de instalación */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '18px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h2>📹 Cómo Instalar y Configurar JAVA </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/tWN601sU9PM?si=7KEb-iO36DRwlkU2"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
<br></br>
<br></br>
      {/* Sección de video de instalación */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '18px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h2>📹 Cómo Instalar y Configurar Spring Boot en Visual estudio code </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/5WgmWV7zj9o?si=koQEU-V_SZCOavH8"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br></br>
<br></br>
    </div>
  );
};

export default Home;
