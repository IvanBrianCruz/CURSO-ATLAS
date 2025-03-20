import React from "react";

const Projectos = () => {
    
  const cards = [
    {
      title: "Clon de Uber - RIDE ON",
      image: "https://raw.githubusercontent.com/IvanBrianCruz/Uber_Clon/refs/heads/master/src/main/resources/static/img/banner-github.png?",
      description: "**RADE ON** es una aplicación web que simula un servicio de transporte tipo Uber, donde los usuarios pueden registrar a conductores, visualizar sus datos y contratar viajes. A través de formularios fáciles de usar, los clientes pueden seleccionar un conductor, realizar un viaje y obtener un resumen detallado, ¡todo desde tu navegador! 🌐",
      link: "https://github.com/IvanBrianCruz/Uber_Clon.git"
    },
    {
      title: "Tienda basica con Spring Boot y Thymeleaf y java",
      image: "https://ivanbriancruz.github.io/CURSO-ATLAS/img/tienda.png",
      description: "🛒 Tienda básica con Spring Boot: Aplicación en Java con Thymeleaf y MySQL, donde los clientes 👥 pueden comprar productos 📦. La base de datos incluye Producto y Cliente, con una tabla hija Compras para registrar transacciones. Diseño mejorado con Bootstrap 🎨.",
      link: "https://github.com/IvanBrianCruz/tienda-java-2025.git"
    }
  ];

  return (
    <div
      style={{
        backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-y',
        minHeight: '100vh',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}
    >
      {cards.map((card, index) => (
        <div 
          key={index} 
          style={{ 
            width: '620px', 
            height: '470px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            backgroundColor: '#fff', 
            padding: '16px' 
          }}
        >
          <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#000' }}>
            {card.title}
          </div>
          <div>
            <img src={card.image} alt={card.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
            <p style={{ color: '#4A5568', fontSize: '14px', marginBottom: '16px' }}>{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ 
              display: 'block', 
              textAlign: 'center', 
              backgroundColor: '#3182ce', 
              color: '#fff', 
              padding: '10px 0', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}>
              🔍 Ver Código
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectos;
