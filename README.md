# Ética en acción

Sitio educativo interactivo en español sobre ética organizacional, desarrollo sostenible y ODS. Es un sitio estático en HTML, CSS y JavaScript, con una función opcional de Netlify para registrar las visitas en Supabase.

## Abrir y probar

- Para revisar el diseño estático, abre `index.html` en un navegador.
- Para probarlo servido localmente, ejecuta desde esta carpeta `python -m http.server 8000` y visita `http://localhost:8000`.
- En un servidor estático simple el contador quedará en `—`, porque la función de visitas solo se ejecuta en Netlify. Para probar también la función localmente, instala Netlify CLI y ejecuta `netlify dev` con las variables de entorno configuradas.

## Publicar en Netlify

1. Sube el contenido completo de esta carpeta a un repositorio Git o arrastra la carpeta al flujo de despliegue de Netlify. El archivo `netlify.toml` indica que la raíz (`.`) es la carpeta publicada y dónde está la función.
2. Crea un proyecto en Supabase y abre **SQL Editor**.
3. Ejecuta el contenido de `SUPABASE_SETUP.sql` una sola vez. Crea el contador con base 150. La primera carga de página que llame correctamente la función sumará 1 y devolverá 151.
4. En Netlify, abre **Site configuration → Environment variables** y agrega:
   - `SUPABASE_URL`: URL del proyecto Supabase.
   - `SUPABASE_SERVICE_ROLE_KEY`: clave `service_role` del proyecto.
5. Vuelve a desplegar el sitio para que la función reciba las variables.
6. Abre la URL publicada y comprueba que el número de visitas aparezca en la esquina superior derecha.

**Seguridad:** `SUPABASE_SERVICE_ROLE_KEY` es un secreto de servidor. Solo debe existir como variable de entorno de Netlify; nunca la introduzcas en `app.js`, `index.html`, `.env` publicado ni repositorios. La función no registra datos personales ni guarda cookies o almacenamiento local. Cada carga completa de la página que llegue al endpoint incrementa el contador una vez. Un error de red/configuración deja el indicador en `—`, sin inventar una cifra.

## Contenido y archivos

- `index.html`: estructura semántica y secciones del sitio.
- `style.css`: diseño adaptable, navegación, componentes y accesibilidad visual.
- `content.js`: módulos temáticos, ODS, casos, videos, preguntas del cuestionario y mapas de grupos de interés.
- `app.js`: renderizado e interacciones.
- `assets/`: imágenes, PDF y documentos originales organizados por tema.
- `netlify/functions/visits.mjs`: endpoint servidor para el contador.
- `SUPABASE_SETUP.sql`: tabla y función SQL del contador.

## Alcance de las fuentes

El ZIP de origen incluye la guía DOCX `Etica_en_Accion_Prompt_y_Contenido.docx`, cinco PDF temáticos y materiales complementarios. El PDF específico titulado **Ética, sostenibilidad y ODS** que la guía menciona no venía dentro del ZIP. Por eso, el sitio usa la síntesis incluida en el DOCX y enlaza los 17 ODS a los recursos oficiales de Naciones Unidas; no presenta ese PDF ausente como una fuente consultada.

Los datos del caso Cityparking se atribuyen al periodo que cubre el estudio de la OIT y se identifican como datos históricos del documento, no como cifras actuales. El material sobre ramas del poder público se presenta en términos generales, sin nombres de titulares ni cifras históricas de composición.

La biblioteca conserva los recursos audiovisuales con enlaces identificables. Un recurso sobre trabajo decente se etiqueta como podcast complementario, no como video. La disponibilidad de videos en plataformas externas puede cambiar con el tiempo.
