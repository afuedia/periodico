# Plantilla Periódico

Proyecto creado como tarea de la Unidad Formativa "Plantillas en la construcción de páginas web". l curso con Astro para construir una plantilla interactiva de periódico. Este proyecto utiliza RSS para importar y mostrar contenido de medios de comunicación.

## 🚀 Características

Se trata de una plantilla, con un header y un footer. Cuenta con un navbar que permite seleccionar si quieres visualizar noticias de "El Pais" o de "El Mundo"

## 🛠️ Tecnologías

Para llevar a cabo el proyecto utilicé:

- **Astro:** Meta-framework para generar páginas rápidas y ligeras.
- **RSS Parser:** Biblioteca para interpretar feeds RSS.

## 🧞 Estructura

Dentro del proyecto encontrarás

src/
├── components/ # Componentes React y Astro
│ └── card.astro # Componente utilizado para almacenar las noticias
│ └── NavBar.astro # Incluye un .map para generar de forma dinámica los enlaces a los medios
│ └── Portada.astro # Contiene noticias falsas que es lo que se ve nada más cargar la web
├── layouts/ # Uso un layouts principal. Hay otro en vistas de crear uno para las noticias en si, pero no lo terminé de implementar
├── pages/ # Páginas del periódico. La página principal y una página por cada medio de comunicación
├── data/ # Aquí almaceno un array de objetos con los medios de comunicación (sus nombres y la url que apunta a su rss)

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes una idea para mejorar el proyecto, abre una issue o envía un pull request.
