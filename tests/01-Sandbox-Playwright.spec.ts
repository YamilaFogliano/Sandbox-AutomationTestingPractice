import { test, expect } from '@playwright/test';
import { AutomationPracticePage } from '../pages/AutomationPracticePage';

test.describe('Suite Completa de Pruebas Funcionales - Automation Practice', () => {
  let practicePage: AutomationPracticePage;

  test.beforeEach(async ({ page }) => {
    practicePage = new AutomationPracticePage(page);
    await practicePage.navigateTo();
  });

  test('01. Verificar presencia de enlaces del menú superior', async () => {
    // Validacion de links del menú del header visibles para el usuario
    await expect(practicePage.homeHeaderLink).toBeVisible();
    await expect(practicePage.udemyLink).toBeVisible();
    await expect(practicePage.onlineTrainingsLink).toBeVisible();
    await expect(practicePage.blogLink).toBeVisible();
    await expect(practicePage.playwrightPracticeLink).toBeVisible();
  });

  test('02. Llenar y validar datos del formulario principal', async ({ page }) => {
    //  Llenado de campos de texto
    await practicePage.nameInput.fill('Yamila Fogliano');
    await practicePage.emailInput.fill('yamila@test.com');
    await practicePage.phoneInput.fill('1234567890');
    await practicePage.addressInput.fill('Buenos Aires, Argentina');

    // Validacion de valores escritos 
    await expect(practicePage.nameInput).toHaveValue('Yamila Fogliano');
    await expect(practicePage.emailInput).toHaveValue('yamila@test.com');

    // Seleccionar género (Radio Button)
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();

    //  Seleccionar días de la semana (Checkboxes)
    await page.locator('#monday').check();
    await page.locator('#friday').check();
    await expect(page.locator('#monday')).toBeChecked();
    await expect(page.locator('#friday')).toBeChecked();

    //  Seleccionar opciones en desplegables
    await practicePage.countrySelect.selectOption('japan');
    await expect(practicePage.countrySelect).toHaveValue('japan');

    await practicePage.colorsSelect.selectOption(['red', 'blue']);
    await expect(practicePage.colorsSelect).toHaveValues(['red', 'blue']);

    await practicePage.sortedListSelect.selectOption('fox');
    await expect(practicePage.sortedListSelect).toHaveValue('fox');
  });

  test('03. Ingresar fechas en los 3 Date Pickers', async () => {
    // Date Picker 1
    await practicePage.datePicker1Input.waitFor({ state: 'visible' });
    await practicePage.datePicker1Input.fill('05/20/2026');
    await expect(practicePage.datePicker1Input).toHaveValue('05/20/2026');

    // Date Picker 2
    await practicePage.datePicker2Input.evaluate(input => input.removeAttribute('readonly'));
    await practicePage.datePicker2Input.fill('20/05/2026');
    await expect(practicePage.datePicker2Input).toHaveValue('20/05/2026');

    // Date Picker 3
    await practicePage.datePicker3StartInput.fill('2026-01-01');
    await practicePage.datePicker3EndInput.fill('2026-01-10');
    await expect(practicePage.datePicker3StartInput).toHaveValue('2026-01-01');
    await expect(practicePage.datePicker3EndInput).toHaveValue('2026-01-10');
  });

  test('04. Carga de archivo individual y múltiple', async () => {
    //  Subir archivo único
    await practicePage.singleFileInput.waitFor({ state: 'attached' });
    await practicePage.singleFileInput.setInputFiles({
      name: 'archivo_prueba.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('Contenido de prueba')
    });
    await expect(practicePage.singleFileInput).not.toHaveValue('');

    //  Subir múltiples archivos
    await practicePage.multipleFileInput.setInputFiles([
      { name: 'archivo1.txt', mimeType: 'text/plain', buffer: Buffer.from('Texto 1') },
      { name: 'archivo2.txt', mimeType: 'text/plain', buffer: Buffer.from('Texto 2') }
    ]);
    await expect(practicePage.multipleFileInput).not.toHaveValue('');
  });

  test('05. Validar contenido de la tabla estática de libros', async () => {
    // Validar que la tabla tiene filas de datos
    const cantidadFilas = await practicePage.bookTableRows.count();
    expect(cantidadFilas).toBeGreaterThan(1);

    // Validar el texto del primer libro
    const primerLibro = practicePage.bookTableRows.nth(1).locator('td').first();
    await expect(primerLibro).toHaveText('Learn Selenium');
  });

  test('06. Verificar valores de la tabla dinámica', async () => {
    // Confirmar que la tabla dinámica carga filas
    await expect(practicePage.dynamicTableRows.first()).toBeVisible();
    const filas = await practicePage.dynamicTableRows.count();
    expect(filas).toBeGreaterThan(0);
  });

  test('07. Navegar por paginación de productos', async () => {
    // Hacer clic en la página 2 de la tabla
    const pagina2 = practicePage.paginationPages.filter({ hasText: '2' });
    await pagina2.click();

    // Confirmar que el checkbox de la nueva página es visible
    const primerCheckbox = practicePage.paginationRows.first().locator('input[type="checkbox"]');
    await expect(primerCheckbox).toBeVisible();
  });

  test('08. Realizar búsqueda en el widget de Wikipedia', async () => {
    // Escribir en la búsqueda de wikipedia y presionar el botón buscar
    await practicePage.wikiSearchInput.fill('Playwright');
    await practicePage.wikiSearchBtn.click();

    // Validar que aparece al menos un resultado de búsqueda
    await expect(practicePage.wikiSearchResults.first()).toBeVisible();
  });

  test('09. Interactuar con botón dinámico START/STOP', async () => {
    // Verificar que el botón existe y hacer click en él
    await expect(practicePage.startStopBtn).toBeVisible();
    await practicePage.startStopBtn.click();

    // Confirmar que el botón sigue presente después del click
    await expect(practicePage.startStopBtn).toBeVisible();
  });

  test('10. Probar alertas nativas (Simple, Confirmation y Prompt)', async ({ page }) => {
    //  Alerta simple
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      await dialog.accept();
    });
    await practicePage.simpleAlertBtn.click();

    // Alerta de confirmación
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });
    await practicePage.confirmAlertBtn.click();

    // Alerta con ingreso de texto
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Yamila');
    });
    await practicePage.promptAlertBtn.click();
  });

  test('11. Abrir nueva pestaña mediante botón New Tab', async ({ context }) => {
    // Esperar a que se abra la nueva ventana al presionar el botón
    const [nuevaPestana] = await Promise.all([
      context.waitForEvent('page'),
      practicePage.newTabBtn.click()
    ]);

    await nuevaPestana.waitForLoadState('domcontentloaded');
    expect(nuevaPestana.url()).not.toBe('');
    await nuevaPestana.close();
  });

  test('12. Desplegar menú flotante con Mouse Hover', async ({ page }) => {
    // Mover el mouse sobre el botón
    await practicePage.hoverPointBtn.hover();

    // Validar que se muestra el menú desplegable
    const menuContent = page.locator('.dropdown-content');
    await expect(menuContent).toBeVisible();
  });

  test('13. Copiar texto con Doble Clic', async () => {
    // Llenar el campo 1 y hacer doble clic en el botón copiar
    await practicePage.field1Input.fill('Texto Copiado');
    await practicePage.copyTextBtn.dblclick();

    // Confirmar que el texto se pegó en el campo 2
    await expect(practicePage.field2Input).toHaveValue('Texto Copiado');
  });

  test('14. Arrastrar y soltar elementos', async () => {
    // Arrastrar la caja 'draggable' hacia la zona 'droppable'
    await practicePage.dragElement.dragTo(practicePage.dropElement);

    // Confirmar que el cuadro receptor cambió de texto
    await expect(practicePage.dropElement).toContainText('Dropped');
  });

  test('15. Mover la barra deslizante (Slider)', async ({ page }) => {
    // Dar foco al controlador del slider y moverlo con la flecha del teclado
    await practicePage.sliderHandler.focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');

    await expect(practicePage.sliderHandler).toBeFocused();
  });

  test('16. Validar presencia de elementos SVG y Scrolling DropDown', async ({ page }) => {
    // Verificar que existen banderas/íconos SVG en la página
    const cantidadSvg = await page.locator('svg').count();
    expect(cantidadSvg).toBeGreaterThan(0);

    // Verificar que la casilla desplegable desplazable es visible
    await expect(page.locator('#comboBox')).toBeVisible();
  });

  test('17. Verificar respuestas de enlaces con error (Broken Links)', async ({ request }) => {
    // Tomar el primer enlace roto y hacer una petición HTTP directa
    const enlaceRoto = practicePage.brokenLinks.first();
    const href = await enlaceRoto.getAttribute('href');

    if (href) {
      const response = await request.get(href);
      // Confirmar que la respuesta devuelve un error HTTP (código 400 o superior)
      expect(response.status()).toBeGreaterThanOrEqual(400);
    }
  });

  test('18. Llenar inputs de las secciones 1, 2 y 3 del formulario', async () => {
    // Llenar los 3 campos de texto de las secciones secundarias
    await practicePage.section1Input.fill('Texto Sección 1');
    await practicePage.section2Input.fill('Texto Sección 2');
    await practicePage.section3Input.fill('Texto Sección 3');

    await expect(practicePage.section1Input).toHaveValue('Texto Sección 1');
    await expect(practicePage.section2Input).toHaveValue('Texto Sección 2');
    await expect(practicePage.section3Input).toHaveValue('Texto Sección 3');
  });

  test('19. Interacción con elementos dentro del Shadow DOM', async () => {
    // Interactuar directamente con el input y checkbox dentro del Shadow Host
    await practicePage.shadowInput.fill('Prueba Shadow DOM');
    await expect(practicePage.shadowInput).toHaveValue('Prueba Shadow DOM');

    await practicePage.shadowCheckbox.check();
    await expect(practicePage.shadowCheckbox).toBeChecked();
  });

  test('20. Validar contador de visitas y enlaces del Footer', async () => {
    // Confirmar visibilidad del widget de visitantes y enlaces del pie de página
    await expect(practicePage.viewCounter).toBeVisible();
    await expect(practicePage.footerHiddenElementsLink).toBeVisible();
    await expect(practicePage.footerDownloadFilesLink).toBeVisible();
  });
});