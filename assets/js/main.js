// Encuentro OSM Argentina 2026 - JavaScript principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('Encuentro OSM Argentina 2026 - Sitio web cargado');
    
    // Initialize performance optimizations
    initLazyLoading();
    initImageOptimization();
    
    // Mobile menu toggle (mejorado)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const siteHeader = document.querySelector('.site-header');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active states
            const isOpen = navMenu.classList.contains('active');
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            siteHeader.classList.toggle('menu-open');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', !isOpen);
            navMenu.setAttribute('aria-hidden', isOpen);
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open', !isOpen);
            
            // Focus management for accessibility
            if (!isOpen) {
                navMenu.querySelector('a').focus();
            }
        });
        
        // Close menu when clicking on links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                
                // Update ARIA attributes
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            });
        });
        
        // Handle keyboard navigation
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navToggle.click();
            }
        });
        
        // Handle escape key to close menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                navToggle.focus();
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // Inicializar mapa si existe el elemento
    if (document.getElementById('mapa-encuentro')) {
        initEncuentroMap();
    }
    
    // Inicializar countdown si existe el elemento
    if (document.getElementById('countdown-timer')) {
        initEventCountdown();
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para inicializar el mapa del encuentro
function initEncuentroMap() {
    const mapElement = document.getElementById('mapa-encuentro');
    
    // Verificar si el mapa ya fue inicializado
    if (mapElement._leaflet_id) {
        return;
    }
    
    // Coordenadas Hub de Innovación · Municipalidad de Pergamino
    const lat = -33.9000460;
    const lng = -60.5631925;
    
    // Crear mapa con zoom más alto para ver detalles
    const map = L.map('mapa-encuentro').setView([lat, lng], 17);
    
    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20
    }).addTo(map);
    
    // Marcador principal del evento con logo OSM-AR
    const baseUrl = window.siteConfig ? window.siteConfig.baseUrl : '';
    const mainIcon = L.divIcon({
        className: 'main-event-marker',
        html: `<div style="background: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; border: 2px solid #2E5C8A; box-shadow: 0 2px 4px rgba(0,0,0,0.3); padding: 2px;"><img src="${baseUrl}/assets/img/osm-ar-logo.png" alt="OSM AR" style="width: 25px; height: 25px; border-radius: 50%;"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker([lat, lng], {
        icon: mainIcon,
        zIndexOffset: 1000
    })
        .addTo(map)
        .bindPopup('<strong>Hub de Innovación</strong><br>Joaquín Menéndez 738, Pergamino, Buenos Aires<br><em>Encuentro OSM Argentina 2026</em>');
    
    // Plalacio Municipal
    const municipalidad = L.divIcon({
        className: 'municipalidad-marker',
        html: '<div style="background: #FFFFFF; color: white; border-radius: 4px; padding: 2px 4px; font-size: 10px; font-weight: bold; border: 1px solid #2E5C8A; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">🏛️</div>',
        iconSize: [20, 16],
        iconAnchor: [10, 8]
    });
    
    L.marker([-33.8973195,-60.5746729], {icon: municipalidad})
        .addTo(map)
        .bindPopup('<strong>Municipalidad de Pergamino</strong><br>🏛️ Palacio Municipal<br><a href="https://www.openstreetmap.org/way/129545944" target="_blank">Ver en OSM</a>');
    
    // Agregar puntos de interés directamente
    console.log('Adding points of interest directly...');
    
    // GAIA - Restaurante recomendado
    const gaiaIcon = L.divIcon({
        html: '<div style="background: #fff6b2; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 14px; font-weight: bold; color: white;">🍴</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: 'poi-marker-restaurant'
    });
    
    L.marker([-33.8986549, -60.5627508], { icon: gaiaIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: left; max-width: 300px;">
                <strong>GAIA</strong><br>
                <small style="color: #666;">🍽️ Restaurante local</small><br><br>
                <p style="margin: 8px 0; font-size: 13px; line-height: 1.3;">Opción gastronómica cercana al Hub. Ideal para el almuerzo durante el encuentro.</p>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px; font-size: 12px;">
                    📍 <a href="https://www.openstreetmap.org/node/12384661377" target="_blank" style="color: #2E5C8A;">Ver en OSM</a>
                </div>
            </div>
        `);
    
    // Estación de Bus
    const busIcon = L.divIcon({
        html: '<div style="background: #4ECDC4; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 12px; color: white;">🚌</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: 'poi-marker-bus'
    });
    
    L.marker([-33.9137123, -60.5868249], { icon: busIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: left; max-width: 300px;">
                <strong>Estación de Omnibus</strong><br>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px; font-size: 12px;">
                    📍 <a href="https://www.openstreetmap.org/way/129387406" target="_blank" style="color: #2E5C8A;">Ver en OSM</a>
                </div>
            </div>
        `);
    
    console.log('All markers added successfully');
    
    // Agregar leyenda completa al mapa
    addCompleteMapLegend(map, baseUrl);
}

// Función para agregar puntos de interés
function addPointsOfInterest(map) {
    console.log('Adding points of interest to map...');
    
    try {
        // GAIA - Restaurante
        const gaiaIcon = L.divIcon({
            html: '<div style="background-color: #FF6B6B; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            className: 'poi-marker-restaurant'
        });
        
        L.marker([-34.5790866, -59.0878154], { icon: gaiaIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>gaiaIcon</strong><br>
                    🍽️ Restaurante recomendado<br>
                    <a href="https://www.openstreetmap.org/node/12384661377" target="_blank">Ver en OSM</a>
                </div>
            `);
        
        // Bus
        const busIcon = L.divIcon({
            html: '<div style="background-color: #4ECDC4; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            className: 'poi-marker-bus'
        });
        
        L.marker([-34.5699, -59.1154], { icon: busIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>Estación de Omnibus</strong><br>
                    <a href="https://www.openstreetmap.org/?mlat=-33.913808&mlon=-60.587194&zoom=16" target="_blank">Ver en OSM</a>
                </div>
            `);
        
        console.log('Points of interest added successfully');
        
    } catch (error) {
        console.error('Error adding points of interest:', error);
    }
}

// Función para agregar leyenda completa al mapa
function addCompleteMapLegend(map, baseUrl) {
    // Crear control de leyenda
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        
        // Estilos CSS inline para la leyenda completa
        div.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); padding: 10px; border-radius: 8px; border: 1px solid #ccc; font-size: 12px; line-height: 1.4; min-width: 180px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                <h4 style="margin: 0 0 8px 0; color: #2E5C8A; font-size: 13px; font-weight: bold;">📍 Ubicaciones</h4>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="background: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid #2E5C8A; margin-right: 8px; flex-shrink: 0;">
                        <img src="${baseUrl}/assets/img/osm-ar-logo.png" style="width: 12px; height: 12px; border-radius: 50%;">
                    </div>
                    <span>Encuentro OSM Argentina</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #fff6b2; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; font-weight: bold; color: white;">🍴</div>
                    </div>
                    <span>GAIA (restaurante)</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; font-weight: bold; color: white;">🏛️</div>
                    </div>
                    <span>Palacio Municipal</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #4ECDC4; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🚌</div>
                    </div>
                    <span>Estación de Omnibus</span>
                </div>
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; font-size: 10px; color: #666;">
                    💡 Haz clic en los marcadores para más info
                </div>
            </div>
        `;
        
        // Prevenir que los clics en la leyenda afecten el mapa
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        
        return div;
    };
    
    legend.addTo(map);
}

// Función para agregar leyenda al mapa (función original mantenida para compatibilidad)
function addMapLegend(map) {
    // Crear control de leyenda
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        
        // Estilos CSS inline para la leyenda
        div.innerHTML = `
            <div style="
                background: white; 
                padding: 12px; 
                border-radius: 8px; 
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                min-width: 180px;
                font-size: 12px;
                line-height: 1.4;
                font-family: 'Open Sans', sans-serif;
            ">
                <div style="font-weight: bold; margin-bottom: 8px; color: #2E5C8A; border-bottom: 1px solid #eee; padding-bottom: 4px;">
                    📍 Lugares de Interés
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background: #FF6B6B; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🍴</div>
                    </div>
                    <span>GAIA (Restaurante)</span>
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background: #4ECDC4; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🚌</div>
                    </div>
                    <span>Estación de Omnibus</span>
                </div>
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; font-size: 10px; color: #666; text-align: center;">
                    Datos de <a href="https://www.openstreetmap.org" target="_blank" style="color: #2E5C8A;">OpenStreetMap</a>
                </div>
            </div>
        `;
        
        // Prevenir que los clics en la leyenda afecten el mapa
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        
        return div;
    };
    
    legend.addTo(map);
}

// Función para widget de MapRoulette (a implementar)
function initMapRouletteWidget() {
    // Placeholder para integración futura con MapRoulette
    console.log('MapRoulette widget - placeholder');
    
    // Aquí se puede agregar la integración con la API de MapRoulette
    // para mostrar estadísticas del Challenge 53133 en tiempo real
}

// Utilidad para formatear fechas
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('es-AR', options);
}

// Función para countdown hacia el evento
function initEventCountdown() {
    const eventDate = new Date('2026-10-17T09:00:00-03:00');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;
    
    function updateCountdown() {
        const now = new Date();
        const timeDiff = eventDate - now;
        
        if (timeDiff <= 0) {
            // El evento ya pasó o está en curso
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            
            // Cambiar el título
            const titleElement = document.querySelector('.countdown-title');
            if (titleElement) {
                titleElement.textContent = '🎉 ¡El encuentro ya comenzó!';
            }
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // Función para agregar animación al cambiar números
        function updateWithAnimation(element, newValue) {
            const formattedValue = String(newValue).padStart(2, '0');
            if (element.textContent !== formattedValue) {
                element.classList.add('updating');
                setTimeout(() => {
                    element.textContent = formattedValue;
                    element.classList.remove('updating');
                }, 100);
            }
        }
        
        // Actualizar cada elemento con animación
        updateWithAnimation(daysElement, days);
        updateWithAnimation(hoursElement, hours);
        updateWithAnimation(minutesElement, minutes);
        updateWithAnimation(secondsElement, seconds);
    }
    
    // Inicializar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
}

// Performance optimizations
function initLazyLoading() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

function initImageOptimization() {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        // Skip first few images (above the fold)
        if (index > 3 && !img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Service Worker registration for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        const baseUrl = window.siteConfig ? window.siteConfig.baseUrl : '';
        const swPath = baseUrl + '/sw.js';
        
        navigator.serviceWorker.register(swPath)
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
