# Sitio Web - Encuentro OSM Argentina 2026

## 🌐 Sitio Web Jekyll

Sitio web estático generado con Jekyll para GitHub Pages del **Encuentro de la Comunidad de OpenStreetMap de Argentina**.

**🔗 Sitio oficial:** [https://encuentro2026.openstreetmap.org.ar/](https://encuentro2026.openstreetmap.org.ar/)
**🛠️ Sitio de desarrollo:** [https://[user].github.io/encuentro-2026/](https://[user].github.io/encuentro-2026/)

### 🚀 Desarrollo Local

```bash
# Instalar dependencias
bundle install

# Servir localmente
bundle exec jekyll serve

# Acceder en: http://localhost:4000
```

### 📁 Estructura

```
sitio-web/
├── _config.yml              # Configuración Jekyll
├── index.md                 # Página principal
├── programa.md              # Programa del encuentro
├── casos-exito.md           # Casos de éxito Pergamino y Misiones
├── proyecto-escuelas.md     # Proyecto Escuelas OSM
├── sponsors.md              # Sponsors y colaboradores
├── inscripcion.md           # Formulario de inscripción
├── faq.md                   # Preguntas frecuentes
├── participar.md            # Cómo participar
├── flyer.md                 # Material de difusión
├── _layouts/                # Templates HTML
│   ├── default.html         # Layout base con navegación
│   └── page.html           # Layout para páginas de contenido
├── assets/                  # Recursos estáticos
│   ├── css/main.scss        # Estilos principales
│   ├── js/main.js          # JavaScript e interactividad
│   └── img/                # Logos, flyers e imágenes
├── Gemfile                  # Dependencias Ruby
└── README.md               # Este archivo
```

### 🎯 Características Implementadas

- ✅ **Responsive design** - Optimizado móvil con menú hamburguesa
- ✅ **Mapa interactivo** - Leaflet con OSM tiles y ubicación del evento
- ✅ **SEO optimizado** - Meta tags y Open Graph completos
- ✅ **GitHub Pages ready** - Deploy automático con GitHub Actions
- ✅ **OSM branding** - Colores y estilo coherentes
- ✅ **Navegación accesible** - Skip links y ARIA labels
- ✅ **Formulario inscripción** - KoBoToolbox embebido
- ✅ **Sponsors con flip cards** - Animaciones CSS3 interactivas
- ✅ **FAQ completa** - Preguntas frecuentes detalladas
- ✅ **Casos de éxito** - Pergamino y Misiones documentados
- ✅ **Proyecto Escuelas** - MapRoulette integrado
- ✅ **Material difusión** - Flyer oficial descargable

### 🔧 Configuración

La configuración principal está en `_config.yml`:

```yaml
# Event details
event:
  name: "Encuentro OSM Argentina 2026"
  date: "2026-10-17"
  location: "Hub de Innovación, Pergamino"
  coordinates: [-33.9001018,-60.5632254]
```

### 🌍 Deploy

**Sitio oficial:** [https://encuentro2026.openstreetmap.org.ar/](https://encuentro2026.openstreetmap.org.ar/)
**Sitio de desarrollo:** [https://[user].github.io/encuentro-2026/](https://[user].github.io/encuentro-2026/)

Para GitHub Pages:

1. Fork o clonar repositorio `osm-ar/encuentro-2026`
2. Habilitar GitHub Pages desde `main` branch en Settings
3. Configurar custom domain si es necesario
4. Push del código → Deploy automático con GitHub Actions

### 🤝 Workflow de Contribución

Para contribuir al sitio web:

1. **Fork del repositorio:** `osm-ar/encuentro-2026`
2. **Crear rama:** `git checkout -b feature/nombre-cambio`
3. **Desarrollo local:**
   ```bash
   cd sitio-web/
   bundle install
   bundle exec jekyll serve
   ```
4. **Probar cambios** en desarrollo local
5. **Commit y push** a tu fork
6. **Pull Request** a `osm-ar/encuentro-2026`

### 📊 Funcionalidades Implementadas Recientemente

- ✅ **Countdown timer** - Contador regresivo hacia el evento en página principal
- ✅ **Página venue** - Información completa de la sede (Hub de Innovación, Pergamino)
- ✅ **Mapa interactivo OSM** - Embed de OpenStreetMap centrado en la sede
- ✅ **URLs dominio personalizado** - encuentro2026.openstreetmap.org.ar

### 📊 Próximas Funcionalidades

- [ ] Galería de fotos casos de éxito
- [ ] Blog/noticias del encuentro
- [ ] Dashboard de progreso MapRoulette
- [ ] Testimonios de participantes
- [ ] Analytics y métricas de participación

### 🎨 Personalización

Los colores principales están definidos en `assets/css/main.scss`:

- Primary: `#e26d9a` (Rosa)
- Accent: `#eed13e` (Amarillo dorado del flyer)
- Secondary: `#ffe042` (Amarillo)

### 📱 Responsive

El sitio está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (< 768px)

---

**Basado en Jekyll para máxima compatibilidad con el ecosistema OpenStreetMap**
