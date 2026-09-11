# 🧪 Playwright Sandbox | Automation Practice Suite

Un proyecto de automatización de pruebas diseñado como entorno de aprendizaje, experimentación y validación atómica. El objetivo principal es construir una **suite unificada de pruebas aisladas** que interactúan con distintos tipos de componentes y escenarios web cotidianos.

El sitio objetivo para estas pruebas es la plataforma interactiva [Automation Testing Practice](https://testautomationpractice.blogspot.com/).

---

## 🎯 Objetivos del Proyecto

* **Testing Aislado & Atómico:** Ejecución de pruebas independientes dentro de una única suite estructurada mediante `test.describe`, asegurando dinamismo y fácil mantenimiento.
* **Dominio de Interacciones complejas de UI:** Manipulación de controles de formulario, tablas dinámicas y estáticas, alertas JS, iFrames, Shadow DOM, drag and drop, slider y eventos de ratón.
* **Patrón Page Object Model (POM):** Abstracción de selectores y acciones clave dentro de la carpeta `pages/` para mantener un código limpio, legible y reusable.

---

## 🛠️ Tech Stack & Herramientas

* **Lenguaje:** TypeScript
* **Framework de Automation:** Playwright Test
* **Patrón de Diseño:** Page Object Model (POM)
* **Reportes:** Playwright HTML Report / Allure Report

---

## 🧩 Cobertura de Pruebas (`01-Sandbox-Playwright.spec.ts`)

La suite contemplada en `01-Sandbox-Playwright.spec.ts` integra **20 escenarios de prueba independientes**:

1. **Reconocimiento de enlaces del menú superior (Header):** Validación de visibilidad de enlaces principales (*Home, Udemy Courses, Online Trainings, Blog, PlaywrightPractice*).
2. **Llenar y validar datos del formulario principal:** Entrada de datos en inputs de texto, radio buttons de género, checkboxes de días y selectores múltiples (*países, colores, animales*).
3. **Ingresar fechas en los 3 Date Pickers:** Manipulación de inputs de tipo texto directo, campos con restricción `readonly` y selectores de fecha nativos en formato ISO (`YYYY-MM-DD`).
4. **Carga de archivos (File Upload):** Subida de archivo único y carga múltiple simultánea utilizando buffers de memoria.
5. **Validar contenido de la tabla estática de libros:** Inspección de filas, estructura de celdas y validación de texto de títulos (*Learn Selenium*).
6. **Verificar valores de la tabla dinámica:** Confirmación de carga e integridad de filas en tablas con contenido dinámico.
7. **Navegar por paginación de productos:** Interacción con el paginador numérico y aserción de elementos renderizados en la nueva página.
8. **Realizar búsqueda en el widget de Wikipedia:** Envío de términos en la barra de búsqueda y aserción de lista de resultados generada.
9. **Interactuar con botón dinámico (START/STOP):** Control de presencia y cambio de estados/textos tras la interacción del usuario.
10. **Probar alertas nativas de JavaScript:** Captura y respuesta automatizada ante diálogos de tipo *Alert, Confirm* y *Prompt*.
11. **Abrir nueva pestaña mediante botón New Tab:** Control de eventos multiventana (`context.waitForEvent('page')`) y cierre controlado de la pestaña secundaria.
12. **Desplegar menú flotante con Mouse Hover:** Simulación de movimiento del ratón sobre elementos gatillo para la visualización de submenús flotantes.
13. **Copiar texto con Doble Clic:** Copiado dinámico de información entre campos activado por el evento `dblclick()`.
14. **Arrastrar y soltar elementos (Drag and Drop):** Arrastre de elementos gráficos hacia zonas objetivo con validación de actualización del DOM.
15. **Mover la barra deslizante (Slider):** Control de enfoque y desplazamiento incremental mediante interacción por teclado (`ArrowRight`).
16. **Validar presencia de elementos SVG y Scrolling DropDown:** Conteo/aserción de íconos vectoriales SVG en pantalla y menú desplegable deslizable.
17. **Verificar respuestas de enlaces con error (Broken Links):** Peticiones HTTP independientes (`request.get`) para validar respuestas con códigos de error (>= 400).
18. **Llenar inputs de las secciones 1, 2 y 3 del formulario:** Validación masiva de campos secundarias distribuidos por secciones.
19. **Interacción con elementos dentro del Shadow DOM:** Acceso y manipulación directa de inputs y checkboxes encapsulados en un Shadow Host.
20. **Validar contador de visitas y enlaces del Footer:** Aserción de presencia del contador dinámico de visitantes y links adicionales del pie de página.

---

## 🏗️ Estructura del Proyecto

```text
AutomationTestingPractice/
├── .github/                              # Workflows y configuraciones de CI/CD               
├── pages/                                # Page Object Models (POM) - AutomationPracticePage.ts
├── playwright-report/                    # Reportes HTML nativos de Playwright
├── test-results/                         # Capturas, videos y trazas de ejecución
├── tests/
│   └── 01-Sandbox-Playwright.spec.ts     # Suite unificada con los 20 tests aislados
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json