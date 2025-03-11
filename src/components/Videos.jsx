import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Videos = () => {
  const videoList = [
    "https://www.youtube.com/embed/P4FD43ff4I0?si=HPer-_pKEvMe92A5",
    "https://www.youtube.com/embed/09cD8uqnF3Y?si=jHIuiAFfS3VBX-XP",
    "https://www.youtube.com/embed/FiILs_eLsKY?si=fq3JbRxBYoJZmpjX",
    "https://www.youtube.com/embed/VXidhfhU1FM?si=AX8CobHcemUL_AkU",
    "https://www.youtube.com/embed/BAGTtZH5e0o?si=mdE2GVrizsEm6XoX",
    "https://www.youtube.com/embed/QKHFjrcjU2Q?si=rLpF0LNaiAELBwvD",
    "https://www.youtube.com/embed/qCtcuvEWam8?si=5FwI1TYhkgUGYANa",
    "https://www.youtube.com/embed/Eisu1o2WPCY?si=MxDkoVhA_e1W1L4F",
    "https://www.youtube.com/embed/fJhNgrCa4PU?si=uvR6a6OcsjqKuU-H",
    "https://www.youtube.com/embed/1EDd0wvJN08?si=Y7n7xXZczXUQPiJt",
    "https://www.youtube.com/embed/IRtNCXUhFIY?si=qLTH5LVREZLOKtyp",
    "https://www.youtube.com/embed/ZSwEwGo-Bg4?si=NfbQrPxONO8bK3x5",
    "https://www.youtube.com/embed/99PxoRuvzvI?si=6GxVUupiAdGGnYqJ",
  ];

  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <Container>
        <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🎥 Clases Grabadas </h2>
        <Row>
          {videoList.map((video, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '8px' }}>
                <iframe
                  width="100%"
                  height="250px"
                  src={video}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: '8px' }}
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
