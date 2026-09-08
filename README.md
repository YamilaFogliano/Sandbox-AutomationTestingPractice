# 🧪 Playwright Sandbox | Automation Practice Suite

Un proyecto de automatización de pruebas diseñado como entorno de aprendizaje, experimentación y validación atómica. El objetivo principal es construir una **suite unificada de pruebas aisladas** que interactúan con distintos tipos de componentes y escenarios web cotidianos.

El sitio objetivo para estas pruebas es la plataforma interactiva [Automation Testing Practice](https://testautomationpractice.blogspot.com/).

---

## 🎯 Objetivos del Proyecto

* **Testing Aislado & Atómico:** Ejecución de pruebas independientes dentro de una única suite estructurada mediante `test.describe`, asegurando dinamismo y fácil mantenimiento.
* **Dominio de Interacciones complejas de UI:** Manipulación de controles de formulario, tablas dinámicas/estáticas, alertas JS, iFrames, Shadow DOM, drag and drop y eventos de ratón.
* **Patrón Page Object Model (POM):** Abstracción de selectores y acciones clave dentro de la carpeta `pages/` para mantener un código limpio y reutilizable.

---

## 🛠️ Tech Stack & Herramientas

* **Lenguaje:** TypeScript
* **Framework de Automation:** Playwright Test
* **Patrón de Diseño:** Page Object Model (POM)
* **Reportes:** Playwright HTML Report / Allure Report
* **CI/CD:** GitHub Actions (configurado bajo `.github/`)

---

## 🧩 Cobertura de Pruebas (`01-Sandbox-Playwright.spec.ts`)

La suite `Test Automation Practica - Test Aislados` contempla **18 escenarios independientes**:

1. **Reconocimiento de página web y Data Entry Form:** Validación inicial de URL/título, formularios de texto, radio buttons de género, checkboxes de días, menus desplegables (países, colores, animales) y datepickers (calendario y barra).
2. **Carga de archivos:** Subida individual y múltiple de archivos.
3. **Extracción de datos en tabla estática (Libros):** Lectura de filas (título, autor, tema, precio) y cálculo del costo total acumulado.
4. **Extracción de datos en tabla estática (Recursos):** Captura de métricas (Mbps, CPU, Memoria, Disco) y suma matemática de cada elemento.
5. **Paginación de tabla web:** Lectura de IDs, nombres, precios y checkboxes a través de todas las páginas de la tabla.
6. **ShadowDOM:** Interacción con elementos encapsulados dentro del DOM oculto.
7. **Validación de enlaces (Misma página):** Verificación de navegación interna y retroceso con `page.goBack()`.
8. **Validación de enlaces (Página externa):** Manejo de nuevas pestañas/ventanas y cierre controlado.
9. **Búsqueda por barra de Wikipedia:** Validación de input de búsqueda, botones y enlaces con redirección a información exacta.
10. **Validación de botón dinámico:** Verificación de cambios de estado visuales y propiedades de elementos SVG.
11. **Alertas y PopUps:** Manejo de alertas simples, de confirmación, prompts, pestañas nuevas y ventanas emergentes.
12. **Validación de Mouse Hover:** Despliegue de submenús mediante interacción de desplazamiento del ratón (`hover`).
13. **Validación de Doble Click:** Copiado dinámico de valores entre campos de texto activado por evento de doble clic.
14. **Drag and Drop:** Arrastre de elementos interactivos y aserción de indicadores/mensajes de éxito.
15. **Barra Slider:** Ajuste y simulación de rangos de precio deslizando controles continuos.
16. **Scrolling Dropdown:** Navegación por listas extensas mediante desplazamiento vertical.
17. **Validación de etiquetas y enlaces:** Aserción de tags, hipervínculos válidos y manejo de respuestas HTTP de error.
18. **Contador de visualizaciones en tiempo real:** Validación de incrementos dinámicos en contadores de visitas.

---

```text
AutomationTestingPractice/
├── .github/                           # Workflows y configuraciones de CI/CD               
├── pages/                             # Page Object Models (POM)
├── playwright-report/                 # Reportes HTML nativos de Playwright
├── test-results/                      # Capturas, videos y trazas de ejecución
├── tests/
│   └── 01-Sandbox-Playwright.spec.ts  # Suite unificada con los 18 tests aislados
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json