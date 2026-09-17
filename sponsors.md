---
layout: page
title: Sponsors y Colaboradores
subtitle: Organizaciones que hacen posible el Encuentro OSM Argentina 2026
---

<!-- Premium Sponsors Section -->
<div class="sponsors-premium">
  <h3>⭐ Sponsors Principales</h3>
  <div class="sponsors-premium-grid">
    {% for sponsor in site.data.sponsors_premium %}
      {% include sponsor-flip-card.html sponsor=sponsor %}
    {% endfor %}
  </div>
</div>

<div class="sponsors-section">
  <h2>🤝 Nuestros Aliados</h2>

  <div class="sponsors-flip-grid">
    {% for sponsor in site.data.sponsors_aliados %}
      {% include sponsor-flip-card.html sponsor=sponsor %}
    {% endfor %}

    {% for invitacion in site.data.sponsors_invitacion %}
      {% include sponsor-invitation-card.html sponsor=invitacion %}
    {% endfor %}
  </div>

  <div class="sponsors-intro">
    <p>El Encuentro OSM Argentina 2026 es posible gracias al apoyo y colaboración de instituciones comprometidas con el mapeo colaborativo y la innovación territorial.</p>
  </div>

</div>

## 🤝 Red de Colaboración

<div class="sponsors-grid">
  {% for categoria in site.data.categorias_colaboracion %}
    {% include colaboracion-item.html categoria=categoria %}
  {% endfor %}

  <!-- Material de Presentaciones -->
  <div class="sponsor-item sponsor-colaborador">
    <h4>🎤 Presentaciones del Evento</h4>
    <p><strong>Material oficial para difundir</strong></p>
    <ul>
      <li><a href="{{ '/presentacion/' | relative_url }}" target="_blank">Presentación completa (15 slides)</a></li>
      <li><a href="{{ '/sponsors-rotation/' | relative_url }}" target="_blank">Rotación de sponsors (7 slides)</a></li>
      <li><a href="{{ '/flyer/' | relative_url }}" target="_blank">Material gráfico oficial</a></li>
      <li>Listo para pantallas y eventos</li>
    </ul>
  </div>
</div>

<div class="collaboration-grid">
  {% for categoria in site.data.categorias_colaboracion %}
    {% include colaboracion-flip-card.html categoria=categoria %}
  {% endfor %}
</div>


---

## 🚀 Impacto de la Colaboración

### 📊 Métricas del Encuentro

<div class="metricas-encuentro">
  <div class="metrica-card">
    <div class="metrica-icon">🚀</div>
    <div class="metrica-content">
      <div class="numero">1</div>
      <div class="label">Encuentro inaugural<br><span class="sublabel">OSM Argentina</span></div>
    </div>
  </div>

  <div class="metrica-card">
    <div class="metrica-icon">🗺️</div>
    <div class="metrica-content">
      <div class="numero">248</div>
      <div class="label">Tareas MapRoulette<br><span class="sublabel">Proyecto Escuelas</span></div>
    </div>
  </div>

  <div class="metrica-card">
    <div class="metrica-icon">🌐</div>
    <div class="metrica-content">
      <div class="numero">2+</div>
      <div class="label">Modalidades<br><span class="sublabel">Presencial + Virtual</span></div>
    </div>
  </div>

  <div class="metrica-card">
    <div class="metrica-icon">📋</div>
    <div class="metrica-content">
      <div class="numero">3+</div>
      <div class="label">Casos de éxito<br><span class="sublabel">documentados</span></div>
    </div>
  </div>
</div>

### 🎖️ Casos de Éxito Representados

<div class="casos-exito-grid">
  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🏛️</span>
      <h4>Pergamino</h4>
    </div>
    <p>10 años de colaboración municipal-OSM</p>
  </div>

  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🌿</span>
      <h4>Misiones</h4>
    </div>
    <p>Programa provincial de capacitación</p>
  </div>

  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🏫</span>
      <h4>Escuelas</h4>
    </div>
    <p>248 instituciones educativas mapeadas</p>
  </div>

  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🔗</span>
      <h4>IDERA</h4>
    </div>
    <p>Conexión con infraestructura de datos oficial</p>
  </div>
</div>

---

<div class="sponsors-call">
  <h3>🤝 ¿Querés ser parte?</h3>
  <p>Si tu organización está interesada en apoyar futuros encuentros de la comunidad OpenStreetMap Argentina, contactanos:</p>
  <p><strong>Coordinador:</strong> Andrés Duhour - <a href="{{ site.chairman.osm_profile }}" target="_blank">Ver perfil OSM</a></p>
  <p><strong>Wiki:</strong> <a href="{{ site.links.wiki }}" target="_blank">Información de contacto</a></p>

  <div style="margin-top: 1.5rem;">
    <a href="{{ site.links.wiki }}" target="_blank" class="btn btn-primary">
      📧 Contactar Organización
    </a>
    <a href="{{ '/casos-exito' | relative_url }}" class="btn btn-outline">
      📋 Ver Casos de Éxito
    </a>
  </div>
</div>

---

## 🔗 Enlaces y Recursos

<div class="recursos-casos">
  <div class="recurso-grupo">
    <h4>Colaboradores Principales</h4>
    <a href="{{ site.event.location_url }}" target="_blank">{{ site.event.location }}</a>
    <a href="{{ site.links.wiki }}" target="_blank">OSM Argentina Wiki</a>
    <a href="{{ site.chairman.osm_profile }}" target="_blank">Coordinador OSM Profile</a>
  </div>

  <div class="recurso-grupo">
    <h4>Casos de Éxito</h4>
    <a href="https://www.openstreetmap.org/user/MunicipalidadDePergamino" target="_blank">Pergamino OSM</a>
    <a href="https://www.modernizacion.misiones.gov.ar/curso-de-mapeo-colaborativo-con-openstreetmap/" target="_blank">Programa Misiones</a>
    <a href="{{ '/proyecto-escuelas' | relative_url }}" target="_blank">Proyecto Escuelas</a>
  </div>
</div>

---

<div class="casos-footer">
  <h3>🎖️ Red de Colaboración Consolidada</h3>
  <p><strong>El Encuentro OSM Argentina 2026 representa la primera articulación formal entre comunidad, academia y estado en mapeo colaborativo nacional.</strong></p>
  <p>Estos vínculos sientan las bases para el crecimiento sostenible de OpenStreetMap en Argentina.</p>
</div>
