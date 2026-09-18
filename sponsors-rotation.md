---
layout: none
title: "Sponsors y Aliados - Encuentro OSM Argentina 2026"
permalink: /sponsors-rotation/
---
<html lang="es-AR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sponsors y Aliados - Encuentro OSM Argentina 2026</title>
    <link rel="icon" type="image/png" href="{{ '/assets/img/osm-ar-logo.png' | relative_url }}">
    <link rel="apple-touch-icon" href="{{ '/assets/img/osm-ar-logo.png' | relative_url }}">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            background: linear-gradient(135deg, #2E5C8A, #75AADB);
            color: white;
            overflow: hidden;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sponsors-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 2rem;
        }

        /* Logo y fecha del evento fijo */
        .event-header {
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 100;
        }

        .osm-logo {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            padding: 10px;
            border: 3px solid #F4C430;
            margin-bottom: 10px;
        }

        .event-date {
            background: rgba(0,0,0,0.8);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
            color: #F4C430;
            text-align: center;
            min-width: 180px;
        }

        /* Contenido principal rotante */
        .rotating-content {
            text-align: center;
            opacity: 0;
            transform: scale(0.8);
            transition: all 1.5s ease-in-out;
            position: absolute;
            width: 100%;
            max-width: 800px;
        }

        .rotating-content.active {
            opacity: 1;
            transform: scale(1);
        }

        .sponsor-slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .sponsor-logo-large {
            width: 300px;
            max-height: 200px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 2rem;
            border-radius: 30px;
            border: 3px solid #F4C430;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .sponsor-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            color: #F4C430;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
        }

        .sponsor-description {
            font-size: 1.4rem;
            line-height: 1.6;
            max-width: 700px;
            margin: 0 auto 2rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .sponsor-hashtags {
            font-size: 1.6rem;
            color: #F4C430;
            font-weight: bold;
        }

        /* Estilos para aliados */
        .allies-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            justify-items: center;
        }

        .ally-card {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 20px;
            border: 2px solid rgba(244, 196, 48, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .ally-logo {
            width: 120px;
            height: 120px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 15px;
            border-radius: 15px;
            margin-bottom: 1rem;
        }

        .ally-name {
            font-size: 1.2rem;
            font-weight: bold;
            color: #F4C430;
            margin-bottom: 0.5rem;
        }

        .ally-description {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Elementos de fondo decorativos */
        .bg-decoration {
            position: fixed;
            pointer-events: none;
            z-index: -1;
        }

        .bg-circle-1 {
            top: -100px;
            left: -100px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(244, 196, 48, 0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .bg-circle-2 {
            bottom: -150px;
            right: -150px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(117, 170, 219, 0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .bg-triangle {
            top: 50%;
            left: -50px;
            width: 0;
            height: 0;
            border-left: 100px solid transparent;
            border-right: 100px solid transparent;
            border-bottom: 150px solid rgba(255, 255, 255, 0.05);
            transform: translateY(-50%) rotate(45deg);
        }

        /* Indicador de progreso */
        .progress-indicator {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
        }

        .progress-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transition: background 0.3s ease;
        }

        .progress-dot.active {
            background: #F4C430;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .sponsor-logo-large {
                width: 250px;
                max-height: 150px;
                padding: 1.5rem;
            }

            .sponsor-title {
                font-size: 1.4rem;
            }

            .sponsor-description {
                font-size: 1.2rem;
            }

            .allies-grid {
                grid-template-columns: 1fr;
            }

            .ally-logo {
                width: 100px;
                height: 100px;
            }
        }
    </style>
</head>
<body>
    <!-- Header fijo con logo OSM y fecha -->
    <div class="event-header">
        <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="osm-logo">
        <div class="event-date">
            17 OCTUBRE 2026<br>
            <small>OSM AR • PERGAMINO</small>
        </div>
    </div>

    <!-- Elementos decorativos de fondo -->
    <div class="bg-decoration bg-circle-1"></div>
    <div class="bg-decoration bg-circle-2"></div>
    <div class="bg-decoration bg-triangle"></div>

    <!-- Contenedor principal -->
    <div class="sponsors-container">

        <!-- Slide 1: Geolibres -->
        <div class="rotating-content active" data-slide="0">
            <div class="sponsor-slide">
                <img src="{{ '/assets/img/logo_geolibres.png' | relative_url }}" alt="Geolibres" class="sponsor-logo-large">
                <h1 class="sponsor-title">Sponsor Oficial</h1>
                <p class="sponsor-description">
                    Geolibres promueve el uso de herramientas libres en geomática, apoyando proyectos educativos y la democratización del conocimiento geoespacial en América Latina.
                </p>
                <div class="sponsor-hashtags">#Geolibres #EducaciónLibre</div>
            </div>
        </div>

        <!-- Slide 2: Aliados Institucionales -->
        <div class="rotating-content" data-slide="1">
            <h1 class="sponsor-title">Aliados Institucionales</h1>
            <div class="allies-grid">
                <div class="ally-card">
                    <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Municipalidad de Pergamino" class="ally-logo">
                    <div class="ally-name">Municipalidad de Pergamino</div>
                    <div class="ally-description">Sede oficial • 10 años colaborando con OSM</div>
                </div>
                <div class="ally-card">
                    <img src="{{ '/assets/img/osm-noimage.svg' | relative_url }}" alt="Mapa Educativo" class="ally-logo">
                    <div class="ally-name">Mapa Educativo</div>
                    <div class="ally-description">Plataforma educativa nacional</div>
                </div>
            </div>
        </div>

        <!-- Slide 3: Aliados Comunitarios -->
        <div class="rotating-content" data-slide="2">
            <h1 class="sponsor-title">Aliados Comunitarios</h1>
            <div class="allies-grid">
                <div class="ally-card">
                    <img src="{{ '/assets/img/logo_geoinquietos_ar_oficial.png' | relative_url }}" alt="GeoInquietos Argentina" class="ally-logo">
                    <div class="ally-name">GeoInquietos Argentina</div>
                    <div class="ally-description">Comunidad geoespacial • Red FOSS4G Latinoamérica</div>
                </div>
                <div class="ally-card">
                    <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="ally-logo">
                    <div class="ally-name">OpenStreetMap Argentina</div>
                    <div class="ally-description">Comunidad nacional de mapeo • Organizador principal</div>
                </div>
            </div>
        </div>

        <!-- Slide 4: Encuentro 2026 -->
        <div class="rotating-content" data-slide="3">
            <div class="sponsor-slide">
                <img src="{{ '/assets/img/flyer_encuentro_oficial.jpg' | relative_url }}" alt="Encuentro OSM Argentina 2026" class="sponsor-logo-large" style="border-radius: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.3);">
                <h1 class="sponsor-title">Encuentro OSM Argentina 2026</h1>
                <p class="sponsor-description">
                    <strong>Encuentro nacional de la comunidad</strong><br><br>
                    🤝 Tema: "Datos abiertos, territorio y comunidad"<br>
                    🗺️ Mapeo colaborativo y casos de éxito<br>
                    🏫 Proyecto Escuelas OSM<br>
                    🌐 Modalidad híbrida: presencial + virtual
                </p>
                <div class="sponsor-hashtags">
                    #OSMArgentina2026 #EncuentroOSM<br>
                    <small style="font-size: 0.7em;">🎯 #Pergamino</small>
                </div>
            </div>
        </div>

        <!-- Slide 5: Información del Encuentro -->
        <div class="rotating-content" data-slide="4">
            <div class="sponsor-slide">
                <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="sponsor-logo-large">
                <h1 class="sponsor-title">¡Te Esperamos!</h1>
                <p class="sponsor-description">
                    <strong>{{ site.event.date_formatted }}</strong><br>
                    {{ site.event.location }}<br>
                    {{ site.event.time }} • Entrada libre y gratuita
                </p>
                <div class="sponsor-hashtags">
                    {{ site.url }}<br>
                    <small style="font-size: 0.7em;">📱 t.me/osm_ar</small><br>
                    <small style="font-size: 0.6em; opacity: 0.8; margin-top: 0.5rem; display: block;">
                        🗺️ La Plata (jul 2025) → Luján (sep 2025) → Pergamino (oct 2026)
                    </small>
                </div>
            </div>
        </div>

    </div>

    <!-- Indicador de progreso -->
    <div class="progress-indicator">
        <div class="progress-dot active"></div>
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
    </div>

    <script>
        // Configuración de la rotación
        const slides = document.querySelectorAll('.rotating-content');
        const progressDots = document.querySelectorAll('.progress-dot');
        let currentSlide = 0;
        let rotationTimer;

        // Función para cambiar slide
        function nextSlide() {
            // Ocultar slide actual
            slides[currentSlide].classList.remove('active');
            progressDots[currentSlide].classList.remove('active');

            // Siguiente slide (loop infinito)
            currentSlide = (currentSlide + 1) % slides.length;

            // Mostrar nuevo slide
            slides[currentSlide].classList.add('active');
            progressDots[currentSlide].classList.add('active');
        }

        // Función para iniciar rotación automática
        function startRotation() {
            rotationTimer = setInterval(nextSlide, 8000); // 8 segundos por slide
        }

        // Función para pausar rotación
        function pauseRotation() {
            clearInterval(rotationTimer);
        }

        // Función para reanudar rotación
        function resumeRotation() {
            clearInterval(rotationTimer);
            startRotation();
        }

        // Control manual con click en los puntos
        progressDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentSlide) {
                    slides[currentSlide].classList.remove('active');
                    progressDots[currentSlide].classList.remove('active');

                    currentSlide = index;

                    slides[currentSlide].classList.add('active');
                    progressDots[currentSlide].classList.add('active');

                    resumeRotation(); // Reinicia el timer
                }
            });
        });

        // Pausar rotación con mouse hover
        document.body.addEventListener('mouseenter', pauseRotation);
        document.body.addEventListener('mouseleave', resumeRotation);

        // Control con teclado
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ': // Spacebar
                    nextSlide();
                    resumeRotation();
                    break;
                case 'ArrowLeft':
                    // Slide anterior
                    slides[currentSlide].classList.remove('active');
                    progressDots[currentSlide].classList.remove('active');
                    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
                    slides[currentSlide].classList.add('active');
                    progressDots[currentSlide].classList.add('active');
                    resumeRotation();
                    break;
                case 'p':
                case 'P':
                    // Pausar/reanudar
                    if (rotationTimer) {
                        pauseRotation();
                        console.log('Rotación pausada');
                    } else {
                        resumeRotation();
                        console.log('Rotación reanudada');
                    }
                    break;
                case 'f':
                case 'F':
                case 'F11':
                    // Fullscreen
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    } else {
                        document.documentElement.requestFullscreen();
                    }
                    e.preventDefault();
                    break;
            }
        });

        // Iniciar la rotación automática al cargar
        startRotation();

        // Log de controles para usuario
        console.log('🎮 Controles de Sponsors y Aliados:');
        console.log('- Flechas: Navegación manual');
        console.log('- Barra espaciadora: Siguiente slide');
        console.log('- P: Pausar/Reanudar rotación');
        console.log('- F o F11: Pantalla completa');
        console.log('- Click en puntos: Ir a slide específico');
        console.log('- Mouse hover: Pausa automática');
    </script>
</body>
</html>
