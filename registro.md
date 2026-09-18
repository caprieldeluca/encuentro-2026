---
layout: page
title: Registro Directo
subtitle: Formulario embebido para inscripción inmediata
show_back_button: false
---

## 📝 Formulario de Inscripción

<div class="formulario-container">
  <div class="formulario-embed">
    <iframe 
      src="https://ee.kobotoolbox.org/x/HRT1ZgE2"
      width="100%" 
      height="900"
      frameborder="0"
      style="border: none; border-radius: 8px;">
    </iframe>
  </div>
  
  <div class="formulario-alternativo">
    <p><strong>¿Problemas con el formulario?</strong></p>
    <a href="{{ site.links.inscripcion_oficial }}" target="_blank" class="btn btn-primary">
      Abrir en Nueva Ventana
    </a>
    <a href="{{ '/inscripcion' | relative_url }}" class="btn btn-outline">
      Ver Información Completa
    </a>
  </div>
</div>

---

<div class="registro-footer">
  <h3>✅ Después de Registrarte</h3>
  <p>Una vez completado el formulario:</p>
  <ul>
    <li>Recibirás confirmación por email</li>
    <li>Revisa el <a href="{{ '/programa' | relative_url }}">programa completo</a></li>
    <li>Únete al <a href="{{ site.links.osm_calendar }}" target="_blank">evento en OSM Calendar</a></li>
    <li>Prepárate para el <a href="{{ '/proyecto-escuelas' | relative_url }}">mapatón de escuelas</a></li>
  </ul>
</div>

<style>
.registro-footer {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.registro-footer h3 {
  color: #2E5C8A;
  margin-bottom: 1rem;
}

.registro-footer ul {
  margin: 1rem 0;
}

.registro-footer li {
  margin: 0.5rem 0;
  line-height: 1.5;
}
</style>
