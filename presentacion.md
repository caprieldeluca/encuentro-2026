---
layout: none
title: "Presentación Encuentro OSM Argentina 2026"
permalink: /presentacion/
---
<!DOCTYPE html>
<html lang="es-AR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentación - Encuentro OSM Argentina 2026</title>
    <link rel="icon" type="image/png" href="{{ '/assets/img/osm-ar-logo.png' | relative_url }}">
    <link rel="apple-touch-icon" href="{{ '/assets/img/osm-ar-logo.png' | relative_url }}">
    
    <!-- Reveal.js CSS (Licencia MIT) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/theme/black.min.css">
    
    <style>
        /* Estilos personalizados para OSM Argentina */
        .reveal {
            font-family: 'Open Sans', sans-serif;
        }
        
        .reveal .slides section {
            background: linear-gradient(135deg, #2E5C8A, #75AADB);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        /* Logo y fecha del evento en todas las pantallas - versión fija */
        .event-branding {
            position: fixed;
            top: 15px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .event-logo {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            padding: 8px;
            box-sizing: border-box;
            border: 2px solid #F4C430;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
        }
        
        .event-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .event-date {
            font-size: 0.6rem;
            font-weight: bold;
            color: #F4C430;
            background: rgba(0,0,0,0.8);
            padding: 4px 8px;
            border-radius: 8px;
            text-align: center;
            min-width: 120px;
        }
        
        /* Elementos de fondo transparentes para diseño - aplicados al fondo general */
        .reveal {
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(244, 196, 48, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 90% 20%, rgba(117, 170, 219, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 30%),
                linear-gradient(135deg, #2E5C8A, #75AADB);
            background-size: 300px 300px, 400px 400px, 200px 200px, cover;
            background-position: bottom left, top right, center, center;
            background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        }
        
        .reveal h1, .reveal h2, .reveal h3 {
            color: #F4C430;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .reveal h1 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }
        
        .reveal h2 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }
        
        .slide-logo {
            width: 120px;
            height: 120px;
            margin: 1rem auto;
            background: rgba(255,255,255,0.1);
            padding: 1rem;
            border-radius: 20px;
        }
        
        .slide-logo-large {
            width: 250px;
            max-height: 180px;
            object-fit: contain;
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 20px;
            margin: 1rem auto;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .info-item {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            border-left: 5px solid #F4C430;
        }
        
        .info-item h3 {
            margin-top: 0;
            font-size: 1.1rem;
        }
        
        .info-item p {
            font-size: 0.9rem;
        }
        
        .sponsor-display {
            text-align: center;
            padding: 2rem;
        }
        
        .sponsor-metrics {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin: 2rem 0;
        }
        
        .metric {
            text-align: center;
        }
        
        .metric-icon {
            font-size: 1.6rem;
            display: block;
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.8);
        }
        
        .hashtags {
            font-size: 1.6rem;
            color: #F4C430;
            margin-top: 2rem;
            font-weight: bold;
        }
        
        .casos-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .caso-item {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
        }
        
        .caso-item img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 0.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        
        .proyecto-container {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .proyecto-facilitador {
            text-align: center;
        }
        
        .proyecto-facilitador h4 {
            font-size: 1.1rem;
        }
        
        .proyecto-facilitador p {
            font-size: 0.9rem;
        }
        
        .facilitador-foto {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #F4C430;
            margin-bottom: 1rem;
        }
        
        .aliados-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .aliado-item {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .aliado-item h3 {
            font-size: 1.1rem;
            margin: 0 0 0.5rem 0;
        }
        
        .aliado-item p {
            font-size: 0.9rem;
            margin: 0;
        }
        
        .aliado-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 0.5rem;
            border-radius: 10px;
        }
        
        .coordinador-container {
            display: flex;
            align-items: center;
            gap: 3rem;
            text-align: left;
        }
        
        .coordinador-foto {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 5px solid #F4C430;
        }
        
        .coordinador-stats {
            display: flex;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            display: block;
            font-size: 1.6rem;
            color: #F4C430;
            font-weight: bold;
        }
        
        .stat-label {
            font-size: 1rem;
            opacity: 0.8;
        }
        
        .large-text {
            font-size: 1.6rem;
            margin: 0.8rem 0;
        }
        
        .highlight {
            color: #F4C430;
            font-weight: bold;
        }
        
        .contact-info {
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 1.5rem 0;
        }
        
        .programa-time {
            color: #F4C430;
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 0.3rem;
        }
        
        /* Progress bar personalizado */
        .reveal .progress {
            background: rgba(255,255,255,0.1);
        }
        
        .reveal .progress span {
            background: #F4C430;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .info-grid,
            .casos-grid,
            .aliados-grid {
                grid-template-columns: 1fr;
            }
            
            .proyecto-container,
            .coordinador-container {
                grid-template-columns: 1fr;
                flex-direction: column;
                text-align: center;
            }
            
            .reveal h1 {
                font-size: 1.4rem;
            }
            
            .reveal h2 {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Branding fijo del evento -->
    <div class="event-branding">
        <div class="event-logo">
            <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina">
        </div>
        <div class="event-date">17 OCT 2026<br>OSM AR • PERGAMINO</div>
    </div>

    <div class="reveal">
        <div class="slides">
            
            <!-- Slide 1: Bienvenida -->
            <section>
                <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="slide-logo">
                <h1>Encuentro OSM Argentina 2026</h1>
                <h2>Datos abiertos, territorio y comunidad</h2>
                <div class="large-text">
                    <p>📅 {{ site.event.date_formatted }}</p>
                    <p>📍 {{ site.event.location }}</p>
                    <p>🕘 {{ site.event.time }}</p>
                    <p style="color: #F4C430; font-size: 1rem; margin-top: 1rem;">🎊 Presentación automática</p>
                </div>
            </section>

            <!-- Slide 2: Programa Principal -->
            <section>
                <h2>🎯 Programa del Día</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="programa-time">09:00 - 09:15</div>
                        <h3>Acreditación</h3>
                        <p>Registro de participantes</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">09:15 - 10:45</div>
                        <h3>Sinergia institucional y charlas</h3>
                        <p>Municipalidad de Pergamino + OSM • Casos de Valdivia y Luján</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">10:45 - 13:30</div>
                        <h3>Taller de edición básica</h3>
                        <p>Break / café • Break / almuerzo</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">13:30 - 15:30</div>
                        <h3>Talleres de datos</h3>
                        <p>Descarga y uso de datos OSM en QGIS</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">15:30 - 17:00</div>
                        <h3>Mapatón Escuelas OSM</h3>
                        <p>Mapeo colaborativo de centros educativos</p>
                    </div>
                </div>
            </section>

            <!-- Slide 3: Sponsor Oficial - Geolibres -->
            <section>
                <div class="sponsor-display">
                    <img src="{{ '/assets/img/logo_geolibres.png' | relative_url }}" alt="Geolibres" class="slide-logo-large">
                    <h2>Sponsor Oficial</h2>
                    <p style="font-size: 1.4rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                        Geolibres promueve el uso de herramientas libres en geomática, apoyando proyectos educativos y la democratización del conocimiento geoespacial en América Latina.
                    </p>
                    <div class="sponsor-metrics">
                        <div class="metric">
                            <span class="metric-icon">🎓</span>
                            <span class="metric-label">Educación</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🌎</span>
                            <span class="metric-label">América Latina</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">📚</span>
                            <span class="metric-label">Conocimiento Libre</span>
                        </div>
                    </div>
                    <p class="hashtags">#Geolibres</p>
                </div>
            </section>

            <!-- Slide 4: Casos de Éxito - Parte 1 -->
            <section>
                <h2>🏆 Casos de Éxito: Comunidad y Estado</h2>
                <div class="casos-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                    <div class="caso-item">
                        <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Pergamino" style="width: 60px; height: 60px;">
                        <h3 style="font-size: 1.3rem;">Municipalidad de Pergamino</h3>
                        <p style="font-size: 1rem;"><strong>10 años de colaboración</strong></p>
                        <p style="font-size: 0.9rem;">Mapeo sistemático de infraestructura urbana con participación ciudadana. 2,246 ediciones oficiales.</p>
                    </div>
                    <div class="caso-item">
                        <img src="{{ '/assets/img/osm-noimage.svg' | relative_url }}" alt="Misiones" style="width: 60px; height: 60px;">
                        <h3 style="font-size: 1.3rem;">Programa Misiones</h3>
                        <p style="font-size: 1rem;"><strong>Capacitación gubernamental</strong></p>
                        <p style="font-size: 0.9rem;">Entrenamiento de 15+ organismos públicos en herramientas OSM durante 3 días intensivos.</p>
                    </div>
                </div>
            </section>

            <!-- Slide 5: Casos de Éxito - Parte 2 -->
            <section>
                <h2>🏆 Casos de Éxito: Infraestructura</h2>
                <div class="casos-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 0 auto;">
                    <div class="caso-item" style="text-align: center; padding: 2rem;">
                        <img src="{{ '/assets/img/logo_idera.png' | relative_url }}" alt="IDERA" style="width: 80px; height: 80px; margin-bottom: 1rem;">
                        <h3 style="font-size: 1.4rem;">Integración IDERA</h3>
                        <p style="font-size: 1.1rem;"><strong>Datos oficiales integrados</strong></p>
                        <p style="font-size: 1rem;">Conexión directa con la Infraestructura de Datos Espaciales de la República Argentina</p>
                        <p style="color: #F4C430; font-size: 0.9rem; margin-top: 1rem;">🌐 Proyecto Escuelas OSM utiliza datos del Ministerio de Educación</p>
                    </div>
                </div>
            </section>

            <!-- Slide 6: Proyecto Escuelas -->
            <section>
                <h2>🏫 Proyecto Escuelas OSM</h2>
                <div class="proyecto-container">
                    <div>
                        <h3 style="color: #F4C430;">Mapeo de Centros Educativos</h3>
                        <p style="font-size: 1rem; margin-bottom: 0.8rem;">
                            Contribución colaborativa al <strong>Mapa Educativo Nacional</strong> a través de OpenStreetMap
                        </p>
                        <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                            <li>✅ Identificación de escuelas en zonas rurales</li>
                            <li>✅ Validación de datos oficiales</li>
                            <li>✅ Mejora de la accesibilidad educativa</li>
                            <li>✅ Colaboración con organismos públicos</li>
                        </ul>
                    </div>
                    <div class="proyecto-facilitador">
                        <img src="{{ '/assets/img/manuel_retamozo.png' | relative_url }}" alt="Manuel Retamozo" class="facilitador-foto">
                        <h4>Facilitador</h4>
                        <p><strong>Manuel Retamozo</strong></p>
                        <p>Especialista en bases de datos geográficas</p>
                        <p style="color: #F4C430;">GeoInquiet@s</p>
                    </div>
                </div>
            </section>

            <!-- Slide 7: Nuestros Aliados - Institucionales -->
            <section>
                <h2>🏢 Aliados Institucionales</h2>
                <div class="aliados-grid">
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Municipalidad de Pergamino" class="aliado-logo">
                        <div>
                            <h3>Municipalidad de Pergamino</h3>
                            <p>Sede oficial • 10 años colaborando con OSM</p>
                        </div>
                    </div>
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/osm-noimage.svg' | relative_url }}" alt="Mapa Educativo" class="aliado-logo">
                        <div>
                            <h3>Mapa Educativo</h3>
                            <p>Plataforma educativa nacional</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Slide 8: Nuestros Aliados - Comunidades -->
            <section>
                <h2>👥 Aliados Comunitarios</h2>
                <div class="aliados-grid">
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/logo_geoinquietos_ar_oficial.png' | relative_url }}" alt="GeoInquietos Argentina" class="aliado-logo">
                        <div>
                            <h3>GeoInquietos Argentina</h3>
                            <p>Comunidad geoespacial argentina</p>
                            <p style="color: #F4C430; font-size: 0.9rem; margin-top: 0.5rem;">🌐 Red FOSS4G Latinoamérica</p>
                        </div>
                    </div>
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="aliado-logo">
                        <div>
                            <h3>OpenStreetMap Argentina</h3>
                            <p>Comunidad nacional de mapeo colaborativo</p>
                            <p style="color: #F4C430; font-size: 0.9rem; margin-top: 0.5rem;">🗺️ Organizador principal</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Slide 9: Alimentación y Logística -->
            <section>
                <h2>🍽️ Alimentación y Descansos</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <h3>🥪 Coffee Breaks</h3>
                        <p><strong>Incluidos en el evento</strong></p>
                        <p>Pausas programadas durante la jornada</p>
                    </div>
                    <div class="info-item">
                        <h3>🍽️ Almuerzo</h3>
                        <p><strong>Break / Almuerzo</strong></p>
                        <p>Oferta gastronómica en Parque Belgrano y el centro de Pergamino</p>
                    </div>
                    <div class="info-item">
                        <h3>☕ Disponibilidad</h3>
                        <p><strong>12:30 - 13:30</strong></p>
                        <p>Horario de almuerzo libre</p>
                    </div>
                </div>
            </section>

            <!-- Slide 10: Participación -->
            <section>
                <h2>🚀 ¡Participa del Encuentro!</h2>
                <div class="info-grid" style="margin: 3rem 0;">
                    <div class="info-item">
                        <h3>🏢 Modalidad Presencial</h3>
                        <p>{{ site.event.location }}</p>
                        <p class="highlight">Cupos limitados</p>
                    </div>
                    <div class="info-item">
                        <h3>💻 Modalidad Virtual</h3>
                        <p>Conexión online en vivo</p>
                        <p class="highlight">Sin límite de participantes</p>
                    </div>
                </div>
                <div style="text-align: center;">
                    <h3>📝 Inscripción Gratuita</h3>
                    <p class="large-text highlight">🔗 {{ site.url }}{{ '/registro' | relative_url }}</p>
                    <div class="contact-info">
                        <p>📱 Telegram: @osm_ar</p>
                        <p>📸 Instagram: @OpenStreetMapAR</p>
                    </div>
                </div>
            </section>

            <!-- Slide 11: Coordinador -->
            <section>
                <h2>👨‍💼 Coordinación del Evento</h2>
                <div class="coordinador-container">
                    <div style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
                        <img src="{{ '/assets/img/federico_gazaba.jpg' | relative_url }}" alt="{{ site.chairman.name }}" style="width: 200px; height: 200px; border-radius: 50%; border: 5px solid #F4C430; position: relative; z-index: 2; object-fit: cover;">
                        <div style="position: absolute; top: -10px; right: -10px; width: 60px; height: 60px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #2E5C8A; z-index: 3;">
                            <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" style="width: 40px; height: 40px; border-radius: 50%;">
                        </div>
                        <div style="position: absolute; bottom: -5px; left: -5px; background: rgba(244, 196, 48, 0.9); padding: 3px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: bold; color: #2E5C8A; z-index: 3;">
                            🎆 OSM AR 2026
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size: 1.6rem;">{{ site.chairman.name }}</h3>
                        <p style="font-size: 1.2rem;">Coordinador General</p>
                        <p style="font-size: 1rem;">{{ site.chairman.experience }}</p>
                        <p style="font-size: 1rem;">📍 <strong>Especialidad:</strong> {{ site.chairman.specialty }}</p>
                        <p style="font-size: 0.9rem; color: #F4C430;">🔗 <a href="{{ site.chairman.osm_profile }}" target="_blank" style="color: #F4C430;">{{ site.chairman.osm_profile }}</a></p>
                    </div>
                </div>
            </section>

            <!-- Slide 12: Información Final -->
            <section>
                <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="slide-logo">
                <h1>¡Te Esperamos!</h1>
                <div class="large-text">
                    <p class="highlight">📅 {{ site.event.date_formatted }}</p>
                    <p>📍 {{ site.event.location }}</p>
                    <p>🕘 {{ site.event.time }} • Entrada libre y gratuita</p>
                </div>
                <div class="contact-info">
                    <p>🌐 <strong>Información:</strong> {{ site.url }}</p>
                    <p>📝 <strong>Inscripción:</strong> {{ site.url }}{{ '/registro' | relative_url }}</p>
                    <p>📱 <strong>Comunidad:</strong> t.me/osm_ar</p>
                    <p style="font-size: 0.8rem; margin-top: 1rem; opacity: 0.8;">
                        🗺️ Continuidad: La Plata (jul 2025) → Luján (sep 2025) → Pergamino (oct 2026)
                    </p>
                </div>
            </section>

        </div>
    </div>

    <!-- Reveal.js JavaScript (Licencia MIT) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.js"></script>
    
    <script>
        // Inicializar Reveal.js con autoplay
        Reveal.initialize({
            // Configuración básica
            hash: true,
            controls: true,
            progress: true,
            center: true,
            touch: true,
            
            // Transiciones
            transition: 'fade',
            transitionSpeed: 'default',
            backgroundTransition: 'fade',
            
            // Autoplay - diapositivas automáticas
            autoSlide: 10000, // 10 segundos por slide
            autoSlideStoppable: true, // Pausa con interacción del usuario
            loop: true, // Loop infinito
            
            // Configuración de teclado
            keyboard: {
                32: function() { // Spacebar
                    if (Reveal.getConfig().autoSlide > 0) {
                        Reveal.configure({ autoSlide: 0 });
                        console.log('Presentación pausada');
                    } else {
                        Reveal.configure({ autoSlide: 10000 });
                        console.log('Presentación reanudada');
                    }
                },
                27: function() { // Escape
                    window.close(); // Cerrar ventana
                }
            },
            
            // Plugins (incluidos en la distribución de Reveal.js)
            plugins: []
        });
        
        // Eventos personalizados
        Reveal.on('ready', function() {
            console.log('Presentación OSM Argentina 2026 iniciada');
            console.log('Controles:');
            console.log('- Flechas: Navegación manual');
            console.log('- Barra espaciadora: Pausar/Reanudar');
            console.log('- Escape: Cerrar');
        });
        
        Reveal.on('slidechanged', function(event) {
            console.log('Slide actual:', event.indexh + 1);
        });
        
        // Pausa automática con mouse hover
        const slidesContainer = document.querySelector('.reveal');
        let wasAutoSliding = false;
        
        slidesContainer.addEventListener('mouseenter', function() {
            wasAutoSliding = Reveal.getConfig().autoSlide > 0;
            if (wasAutoSliding) {
                Reveal.configure({ autoSlide: 0 });
            }
        });
        
        slidesContainer.addEventListener('mouseleave', function() {
            if (wasAutoSliding) {
                Reveal.configure({ autoSlide: 10000 });
            }
        });
        
        // Configuración fullscreen para presentaciones
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F11') {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
                e.preventDefault();
            }
        });
        
        // Auto fullscreen en carga (opcional)
        window.addEventListener('load', function() {
            // Descomenta la siguiente línea para fullscreen automático
            // document.documentElement.requestFullscreen();
        });
    </script>
</body>
</html>