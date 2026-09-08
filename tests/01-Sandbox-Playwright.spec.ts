import { test, expect } from '@playwright/test';

test.describe('Test Automation Practica - Test Aislados', () => {

  test('1. Reconocimiento de página web y Data Entry Form', async ({ page }) => {
    // validacion de pagina web
    // Relleno de formulario
    // radio button gender
    // check button days
    // menu desplegable country
    // Lista seleccion color
    // Lsita seleccion animales
    // Seleccion de días menu calendario
    // seleccion de dias menu barra

  });

  test('2. Carga de archivos', async ({ page }) => {
    // carga de un solo archivo
    // carga de multiples archivos

  });

  test('3. Extracción de datos en tabla estática', async ({ page }) => {
    // Extraccion de datos de nombre de libro, autor, tematica y precio.
    // suma total de precio de libros

  });

  test('4. Extracción de datos en tabla estática', async ({ page }) => {
    // Extraccion de datos de nombre, mbps, cpu, memoria, disco.
    // suma total de cada elementos de tabla

  });

  test('5. Paginación de tabla web', async ({ page }) => {
    // Extraccion de datos en tabla: id, nombre, precio, checkbox.
    // captura de elementos de todas las paginas.

  });

  test('6. ShadowDOM', async ({ page }) => {
    // mensaje de nombre de archivo subido

  });

  test('7. Validación de enlaces (Redirección a misma página)', async ({ page }) => {
    // links de misma pagina con goback

  });

  test('8. Validación de enlaces (Redirección a página externa)', async ({ page }) => {

    // links externos con cierra de pestaña
  });

  test('9. Busqueda de información por barra de Wikipedia', async ({ page }) => {
    // validacion de busqueda, botones y redireccion a info certera
    // validacion y redireccion de links hacia wikipedia 
  });

  test('10. Validacion de botón dinamico', async ({ page }) => {
    // validacion de boton dinamica
    // validar que cambie de color (SVG element)

  });
  test('11. Alertas y PopUps', async ({ page }) => {
    // Alerta simple
    // alerta de confirmacion
    // promp alert
    // new tab
    //pop up windows

  });

  test('12. Validación de Mouse Hover', async ({ page }) => {
    // despliegue de menu dropdown por acercamiento de flecha de mouse

  });
  test('13. Validación de Doble Click', async ({ page }) => {
    // Copiado de texto de textbox 1 a textbox 2 por medio de doble click.

  });

  test('14. Drag and Drop - Arrastre de elementos', async ({ page }) => {
    // Arrastre de cuadrado pequeño a cuadrado grande.
    // Validacion de indicadores de texto.

  });

  test('15. Barra Slider', async ({ page }) => {
    // ajuste de rango de precios mediante barra slider.

  });
  test('16. Scrolling Dropdown', async ({ page }) => {
    // navegacion por elementos de opciones dropdown

  });
  test('17. Validacion de etiquetas y links', async ({ page }) => {
    // validacion de links 
    // validacion de etiquetas
    // validacion de paginas webs con req errors 

  });

  test('18. Contador de visualizaciones en tiempo real', async ({ page }) => {
    // validacion de contador
    // validar vistas en aumento 
  });

});
