---
layout: page
title: Flyer Oficial
subtitle: Difundí el Encuentro OSM Argentina 2026
---

<div class="flyer-completo">
  <h2>🎨 Material de Difusión Oficial</h2>
  
  <p>Compartí la información del encuentro usando nuestro flyer oficial. ¡Ayudanos a llegar a más maperos!</p>
  
  <img src="{{ '/assets/img/flyer_encuentro_oficial.jpg' | relative_url }}" alt="Flyer Oficial Encuentro OSM Argentina 2026" class="flyer-image">
  
  <div class="flyer-actions">
    <a href="{{ '/assets/img/flyer_encuentro_oficial.jpg' | relative_url }}" download="encuentro_osm_argentina_2026_flyer.jpg" class="btn btn-primary btn-large">
      📥 Descargar Flyer (JPG)
    </a>
    <a href="{{ '/assets/img/flyer_original.svg' | relative_url }}" download="encuentro_osm_argentina_2026_flyer.svg" class="btn btn-outline btn-large">
      📥 Descargar SVG Original
    </a>
    <a href="{{ '/assets/img/flyer_encuentro_oficial.jpg' | relative_url }}" target="_blank" class="btn btn-outline">
      🔍 Ver en Tamaño Original
    </a>
  </div>
</div>

---

## 📋 Información del Flyer

### 🎯 Datos Destacados

- **Evento:** Encuentro OpenStreetMap Argentina 2026
- **Tema:** "Datos abiertos, territorio y comunidad"
- **Fecha:** {{ site.event.date_formatted }}
- **Ubicación:** {{ site.event.location }}
- **Modalidad:** Híbrida (Presencial + Virtual)

### 🔗 Enlaces QR del Flyer

El flyer incluye códigos QR que dirigen a:

1. **Inscripción:** [{{ site.links.inscripcion_oficial }}]({{ site.links.inscripcion_oficial }})
2. **Sitio web:** [https://encuentro2026.openstreetmap.org.ar/](https://encuentro2026.openstreetmap.org.ar/)
3. **Wiki OSM:** [{{ site.links.wiki }}]({{ site.links.wiki }})

### 📱 Compartir en Redes

**Hashtags sugeridos:**
- `#OpenStreetMap`
- `#OSMArgentina`
- `#MapeoColaborativo`
- `#DatosAbiertos`
- `#Territorio`
- `#Comunidad`
- `#EncuentroOSM2026`
- `#Pergamino`

**Texto sugerido:**
> 🗺️ ¡Nos vemos en el Encuentro OpenStreetMap Argentina 2026!
> 
> 📅 17 de Octubre, {{ site.event.location }}
> 🎯 Tema: "Datos abiertos, territorio y comunidad"
> 💻 Modalidad híbrida
> 
> Charlás, talleres y mapatón del Proyecto Escuelas
> 
> 👉 Inscripción: {{ site.links.inscripcion_oficial }}
> 
> #OpenStreetMap #OSMArgentina #MapeoColaborativo

---

## 🎨 Recursos Adicionales

### 📊 Presentaciones del Evento

<div class="flyer-versions-grid">
  <div class="flyer-version-card">
    <div class="version-preview">
      <iframe src="{{ '/presentacion/' | relative_url }}" 
              style="width: 100%; height: 100%; border: none; border-radius: 8px; pointer-events: none;"
              title="Preview Presentación Oficial">
      </iframe>
    </div>
    <div class="version-info">
      <h4>Presentación Oficial</h4>
      <p>Presentación completa del evento con 14 slides automáticas. Incluye programa, sponsors, casos de éxito y continuidad histórica.</p>
      <div>
        <a href="{{ '/presentacion/' | relative_url }}" target="_blank" class="btn btn-primary btn-sm">
          🎤 Ver Presentación
        </a>
        <a href="{{ '/presentacion/' | relative_url }}" target="_blank" class="btn btn-outline btn-sm">
          📱 Modo Pantalla Completa
        </a>
      </div>
    </div>
  </div>
  
  <div class="flyer-version-card">
    <div class="version-preview">
      <iframe src="{{ '/sponsors-rotation/' | relative_url }}" 
              style="width: 100%; height: 100%; border: none; border-radius: 8px; pointer-events: none;"
              title="Preview Rotación Sponsors">
      </iframe>
    </div>
    <div class="version-info">
      <h4>Rotación Sponsors</h4>
      <p>Presentación rotativa ideal para pantallas inactivas. Muestra sponsors, aliados y información del evento en 7 slides que rotan cada 8 segundos.</p>
      <div>
        <a href="{{ '/sponsors-rotation/' | relative_url }}" target="_blank" class="btn btn-primary btn-sm">
          🔄 Ver Rotación
        </a>
        <a href="{{ '/sponsors-rotation/' | relative_url }}" target="_blank" class="btn btn-outline btn-sm">
          📺 Modo Kiosco
        </a>
      </div>
    </div>
  </div>
</div>

### 📐 Especificaciones Técnicas

- **Formato:** JPG
- **Resolución:** Alta calidad para impresión
- **Orientación:** Vertical (portrait)
- **Colores:** Paleta oficial OSM Argentina

### 🖨️ Uso del Material

**Permitido:**
- ✅ Compartir en redes sociales
- ✅ Imprimir para difusión local
- ✅ Incluir en newsletters y comunicaciones
- ✅ Usar en presentaciones sobre el evento

**Requerido:**
- 📌 Mantener información original sin modificaciones
- 📌 Respetar códigos QR y enlaces
- 📌 Usar hashtags oficiales al compartir

---

<div class="footer-evento">
  <h3>🎖️ Encuentro Oficial</h3>
  <p><strong>Este es el material de difusión oficial del Encuentro OSM Argentina 2026.</strong></p>
  <p>Organizado por la comunidad OpenStreetMap Argentina con el respaldo de {{ site.event.location }}.</p>
</div>

<style>
/* Flyer versions grid styles */
.flyer-versions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.flyer-version-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.flyer-version-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.version-preview {
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e6;
  position: relative;
}

.version-preview::after {
  content: 'Vista Previa - Haga clic para ver completa';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(46, 92, 138, 0.9);
  color: white;
  padding: 4px 8px;
  font-size: 0.7rem;
  text-align: center;
  z-index: 10;
}

.version-preview img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.version-info h4 {
  color: #2E5C8A;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.version-info p {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .flyer-versions-grid {
    grid-template-columns: 1fr;
  }
  
  .flyer-version-card {
    text-align: center;
  }
}
</style>
