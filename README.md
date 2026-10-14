# Vision Guide — Una nueva forma de ver

Sitio web oficial del proyecto **Vision Guide**, desarrollado por **Augusto Margonari** y **Agustín Fussi** y presentado en la **Expo Bienal 2023 (Casa Salesiana San José, Rosario)**.

## Descripción del Proyecto

**Vision Guide** consiste en lentes inteligentes de asistencia para personas no videntes o con disminución visual. Combina:
- **Sensores ultrasónicos HC-SR04** junto con **Arduino UNO R3** para medir la distancia a obstáculos frontales y laterales en tiempo real.
- **Módulo ESP32-CAM** y procesamiento de visión artificial con **OpenCV (MobileNet SSD)** en Python para reconocer qué objetos se encuentran en el camino.
- **Firebase Realtime Database** para enviar alertas inmediatas a la aplicación móvil del usuario.

## Estructura del Sitio

- `index.html` — Página principal y resumen de funcionamiento.
- `objetivos.html` — Misión, visión e historia en la Expo Bienal 2023.
- `estructura.html` — Paso a paso del armado, materiales electrónicos y código fuente (Arduino C++ y Python).
- `modelo 3d.html` — Vistas del diseño e impresión 3D de la carcasa.
- `aboutus.html` — Equipo creador del proyecto.
- `contacto.html` — Formulario de contacto directo.
- `netlify.toml` — Configuración lista para despliegue continuo en Netlify.
