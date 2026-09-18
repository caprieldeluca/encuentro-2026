---
layout: page
title: Inscripción
subtitle: Registrate para el Encuentro OSM Argentina 2026
---

<div class="inscripcion-hero">
  <h2>🎯 ¡Registrate para el Encuentro!</h2>
  <p>El <strong>Encuentro OSM Argentina 2026</strong> es gratuito y requiere inscripción previa para organizar mejor el evento.</p>

  <div class="modalidades-info">
    <div class="modalidad presencial">
      <h3>🏢 Modalidad Presencial</h3>
      <p><a href="{{ '/venue' | relative_url }}">Hub de Innovación · Municipalidad de Pergamino</a></p>
      <p><small>✅ Cupos limitados por capacidad del espacio</small></p>
    </div>

    <div class="modalidad virtual">
      <h3>💻 Modalidad Virtual</h3>
      <p>Conexión online en vivo</p>
      <p><small>✅ Participación a distancia</small></p>
    </div>
  </div>
</div>

---

## 📝 Paso 1: Formulario de Inscripción

<div class="paso-inscripcion">
  <h3>✅ Registro Oficial</h3>
  <p>Completá el formulario con tus datos y preferencias de participación:</p>

  <div class="formulario-container">
    <div class="formulario-alternativo">
      <p><strong>Formulario de inscripción</strong></p>
      <p>Completá tus datos en el formulario oficial:</p>

      {% if site.links.inscripcion_oficial %}
      <a href="{{ site.links.inscripcion_oficial }}" target="_blank" class="btn btn-primary btn-large">
        📝 Abrir Formulario de Inscripción
      </a>
      <p><small>¿Preferís completarlo sin salir del sitio? <a href="{{ '/registro' | relative_url }}">Usá el formulario embebido</a>.</small></p>
      {% endif %}
    </div>
  </div>
</div>

---

## 📅 Paso 2: Confirmación en OSM Calendar

<div class="paso-confirmacion">
  <h3>🗓️ Agregar a tu Calendario</h3>
  <p>También podés consultar el evento en OSM Calendar y mantenerte al tanto de sus actualizaciones:</p>

  <div class="osmcal-container">
    <div class="osmcal-info">
      <h4>OSM Calendar</h4>
      <p>El evento forma parte del calendario de actividades de la comunidad OpenStreetMap.</p>
      <ul>
        <li>✅ Información del evento</li>
        <li>✅ Fecha y horario</li>
        <li>✅ Actualizaciones del encuentro</li>
      </ul>
    </div>

    <div class="osmcal-action">
      {% if site.links.osm_calendar %}
      <a href="{{ site.links.osm_calendar }}" target="_blank" class="btn btn-success btn-large">
        📅 Ver evento en OSM Calendar
      </a>
      {% endif %}
      <p><small>Se abrirá en osmcal.org</small></p>
    </div>
  </div>
</div>

---

## ℹ️ Información del Evento

<div class="evento-resumen">
  <div class="evento-grid">

    <div class="evento-item">
      <div class="evento-icon">📅</div>
      <h4>Fecha y Horario</h4>
      <p><strong>{{ site.event.date_formatted }}</strong></p>
      <p>{{ site.event.time }}</p>
    </div>

    <div class="evento-item">
      <div class="evento-icon">📍</div>
      <h4>Ubicación</h4>
      <p><strong>{{ site.event.location }}</strong></p>
      <p><strong>{{ site.event.building }}</strong></p>
      <p>{{ site.event.address }}</p>
      <p><a href="{{ '/venue' | relative_url }}">🗺️ Ver ubicación y cómo llegar</a></p>
    </div>

    <div class="evento-item">
      <div class="evento-icon">🎯</div>
      <h4>Programa</h4>
      <p><strong>Charlas + Talleres + Mapatón</strong></p>
      <p>Enfoque: <strong>{{ site.event.subtitle }}</strong></p>
      <p><a href="{{ '/programa' | relative_url }}">📋 Ver programa completo</a></p>
    </div>

    <div class="evento-item">
      <div class="evento-icon">💰</div>
      <h4>Costo</h4>
      <p><strong>¡Completamente GRATUITO!</strong></p>
      <p>La participación en el encuentro es gratuita.</p>
      <p><small>Más información sobre las actividades en el programa.</small></p>
    </div>

  </div>
</div>

---

## 🤔 Preguntas Frecuentes

<div class="faq-inscripcion">

  <details>
    <summary><strong>¿Es necesario inscribirse?</strong></summary>
    <p>Sí. La inscripción previa permite organizar mejor el encuentro y contar con una estimación de participantes, especialmente para la modalidad presencial.</p>
  </details>

  <details>
    <summary><strong>¿Hay límite de cupos?</strong></summary>
    <p>La participación presencial estará sujeta a la capacidad disponible en el lugar del encuentro. La modalidad virtual dependerá de la plataforma utilizada.</p>
  </details>

  <details>
    <summary><strong>¿Puedo participar de manera virtual?</strong></summary>
    <p>Sí. El encuentro contempla participación presencial y online.</p>
  </details>

  <details>
    <summary><strong>¿Necesito experiencia previa con OpenStreetMap?</strong></summary>
    <p>No. El encuentro está pensado para personas con distintos niveles de experiencia, desde quienes recién comienzan a utilizar OpenStreetMap hasta mapeadores, desarrolladores, investigadores y profesionales con experiencia.</p>
  </details>

  <details>
    <summary><strong>¿Puedo cambiar mi modalidad de participación?</strong></summary>
    <p>Si necesitás modificar tu modalidad de participación luego de inscribirte, consultá con el equipo organizador.</p>
  </details>

  <details>
    <summary><strong>¿Qué necesito para participar del mapatón?</strong></summary>
    <p>Para las actividades de mapeo se recomienda contar con una cuenta de OpenStreetMap. Algunas actividades podrán requerir herramientas o configuraciones específicas, que serán informadas previamente.</p>
  </details>

</div>

---

## 📞 Soporte y Contacto

<div class="contacto-inscripcion">
  <div class="contacto-grid">

    <div class="contacto-item">
      <h4>👤 Organización</h4>
      <p><strong>Encuentro OSM Argentina 2026</strong></p>
      <p>Organizado en Pergamino junto a la comunidad OpenStreetMap Argentina.</p>
    </div>

    <div class="contacto-item">
      <h4>💬 Comunidad OSM Argentina</h4>
      <p><strong>Telegram:</strong> <a href="{{ site.social.telegram }}" target="_blank">@osm_ar</a></p>
      <p><strong>Instagram:</strong> <a href="{{ site.social.instagram }}" target="_blank">@OpenStreetMapAR</a></p>
      <p><strong>Web:</strong> <a href="{{ site.social.website }}" target="_blank">openstreetmap.org.ar</a></p>
    </div>

    <div class="contacto-item">
      <h4>📚 Más Información</h4>
      {% if site.links.wiki %}
      <p><a href="{{ site.links.wiki }}" target="_blank">Wiki del Evento</a></p>
      {% endif %}
      <p><a href="{{ '/programa' | relative_url }}">📋 Programa</a></p>
      <p><a href="{{ '/participar' | relative_url }}">🎯 Cómo Participar</a></p>
      <p><a href="{{ '/venue' | relative_url }}">📍 Ubicación</a></p>
    </div>

  </div>
</div>

---

<div class="inscripcion-final">
  <h3>🚀 ¡Te esperamos en Pergamino!</h3>
  <p>Completá tu inscripción y preparate para compartir una jornada de experiencias, herramientas y conocimiento en torno a OpenStreetMap.</p>

  <div class="pasos-resumen">
    <div class="paso-check">✅ Paso 1: Formulario de inscripción</div>
    <div class="paso-check">🗓️ Paso 2: Consultar OSM Calendar</div>
    <div class="paso-check">🎉 ¡Listo para el encuentro!</div>
  </div>

  <p><strong>¡Nos vemos el 17 de octubre de 2026 en Pergamino!</strong></p>
</div>

<style>
.inscripcion-hero {
  background: linear-gradient(135deg, #e26d9a, #ffe042);
  color: black;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
}

.inscripcion-hero h2 {
  color: black;
  margin-top: 0;
}

.modalidades-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.modalidad {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}

.modalidad h3 {
  color: #6f5916;
  margin-top: 0;
  font-size: 1.1rem;
}

.paso-inscripcion, .paso-confirmacion {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.formulario-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.formulario-alternativo {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #F4C430;
}

.osmcal-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.osmcal-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.osmcal-info h4 {
  color: #8a7b29;
  margin-top: 0;
}

.osmcal-info ul {
  padding-left: 0;
  list-style: none;
}

.osmcal-info li {
  margin: 0.5rem 0;
  color: #666;
}

.osmcal-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.evento-resumen {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.evento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.evento-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #F4C430;
}

.evento-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.evento-item h4 {
  color: #2E5C8A;
  margin: 0.5rem 0;
}

.faq-inscripcion {
  margin: 2rem 0;
}

.faq-inscripcion details {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.faq-inscripcion summary {
  padding: 1rem;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  color: #2E5C8A;
}

.faq-inscripcion summary:hover {
  background: #e9ecef;
}

.faq-inscripcion p {
  padding: 1rem;
  margin: 0;
  color: #666;
}

.contacto-inscripcion {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.contacto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contacto-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2E5C8A;
}

.contacto-item h4 {
  color: #2E5C8A;
  margin-top: 0;
}

.inscripcion-final {
  background: linear-gradient(135deg, #F4C430, #FFD700);
  color: #2E5C8A;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin: 3rem 0;
}

.inscripcion-final h3 {
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  margin-top: 0;
}

.pasos-resumen {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.paso-check {
  background: rgba(255,255,255,0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2E5C8A;
}

@media (max-width: 768px) {
  .modalidades-info {
    grid-template-columns: 1fr;
  }

  .osmcal-container {
    grid-template-columns: 1fr;
  }

  .evento-grid,
  .contacto-grid {
    grid-template-columns: 1fr;
  }

  .pasos-resumen {
    flex-direction: column;
    align-items: center;
  }
}
</style>
