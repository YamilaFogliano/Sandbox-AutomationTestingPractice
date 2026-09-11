import { Page, Locator } from '@playwright/test';

export class AutomationPracticePage {
    readonly page: Page;

    // Enlaces del Header
    readonly homeHeaderLink: Locator;
    readonly udemyLink: Locator;
    readonly onlineTrainingsLink: Locator;
    readonly blogLink: Locator;
    readonly playwrightPracticeLink: Locator;

    // Formulario Principal
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly countrySelect: Locator;
    readonly colorsSelect: Locator;
    readonly sortedListSelect: Locator;

    // Campos de Fecha
    readonly datePicker1Input: Locator;
    readonly datePicker2Input: Locator;
    readonly datePicker3StartInput: Locator;
    readonly datePicker3EndInput: Locator;

    // Carga de Archivos
    readonly singleFileInput: Locator;
    readonly multipleFileInput: Locator;

    // Tablas
    readonly bookTableRows: Locator;
    readonly dynamicTableRows: Locator;

    // Paginación
    readonly paginationRows: Locator;
    readonly paginationPages: Locator;

    // Wikipedia
    readonly wikiSearchInput: Locator;
    readonly wikiSearchBtn: Locator;
    readonly wikiSearchResults: Locator;

    // Interacciones
    readonly startStopBtn: Locator;
    readonly simpleAlertBtn: Locator;
    readonly confirmAlertBtn: Locator;
    readonly promptAlertBtn: Locator;
    readonly newTabBtn: Locator;
    readonly hoverPointBtn: Locator;
    readonly field1Input: Locator;
    readonly field2Input: Locator;
    readonly copyTextBtn: Locator;

    // Drag and Drop y Slider
    readonly dragElement: Locator;
    readonly dropElement: Locator;
    readonly sliderHandler: Locator;

    // Formulario Secundario (Secciones 1, 2 y 3)
    readonly section1Input: Locator;
    readonly section2Input: Locator;
    readonly section3Input: Locator;

    // Shadow DOM
    readonly shadowHost: Locator;
    readonly shadowInput: Locator;
    readonly shadowCheckbox: Locator;

    // Otros Elementos
    readonly brokenLinks: Locator;
    readonly viewCounter: Locator;
    readonly footerHiddenElementsLink: Locator;
    readonly footerDownloadFilesLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Header Links
        this.homeHeaderLink = page.locator('a:has-text("Home")').first();
        this.udemyLink = page.locator('a:has-text("Udemy Courses")');
        this.onlineTrainingsLink = page.locator('a:has-text("Online Trainings")');
        this.blogLink = page.locator('a:has-text("Blog")').first();
        this.playwrightPracticeLink = page.locator('a:has-text("PlaywrightPractice")');

        // Formulario Principal
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.addressInput = page.locator('#textarea');
        this.countrySelect = page.locator('#country');
        this.colorsSelect = page.locator('#colors');
        this.sortedListSelect = page.locator('#animals');

        // Fechas
        this.datePicker1Input = page.locator('#datepicker');
        this.datePicker2Input = page.locator('#txtDate');
        this.datePicker3StartInput = page.locator('#start-date');
        this.datePicker3EndInput = page.locator('#end-date');

        // Archivos
        this.singleFileInput = page.locator('#singleFileInput');
        this.multipleFileInput = page.locator('#multipleFilesInput');

        // Tablas y Paginación
        this.bookTableRows = page.locator('table[name="BookTable"] tbody tr');
        this.dynamicTableRows = page.locator('#taskTable tbody tr');
        this.paginationRows = page.locator('#productTable tbody tr');
        this.paginationPages = page.locator('#pagination li a');

        // Buscador Wikipedia
        this.wikiSearchInput = page.locator('#Wikipedia1_wikipedia-search-input');
        this.wikiSearchBtn = page.locator('.wikipedia-search-button');
        this.wikiSearchResults = page.locator('#Wikipedia1_wikipedia-search-results a');

        // Botón Dinámico y Alertas
        this.startStopBtn = page.locator('button.start-stop, button:has-text("START"), button:has-text("STOP")').first();
        this.simpleAlertBtn = page.locator('button[onclick="myFunctionAlert()"]');
        this.confirmAlertBtn = page.locator('button[onclick="myFunctionConfirm()"]');
        this.promptAlertBtn = page.locator('button[onclick="myFunctionPrompt()"]');
        this.newTabBtn = page.locator('button:has-text("New Tab")');

        // Mouse Hover y Copiar Texto
        this.hoverPointBtn = page.locator('.dropbtn');
        this.field1Input = page.locator('#field1');
        this.field2Input = page.locator('#field2');
        this.copyTextBtn = page.locator('button:has-text("Copy Text")');

        // Drag, Drop y Slider
        this.dragElement = page.locator('#draggable');
        this.dropElement = page.locator('#droppable');
        this.sliderHandler = page.locator('.ui-slider-handle').first();

        // Formulario por Secciones
        this.section1Input = page.locator('#input1');
        this.section2Input = page.locator('#input2');
        this.section3Input = page.locator('#input3');

        // Shadow DOM
        this.shadowHost = page.locator('#shadow_host');
        this.shadowInput = page.locator('#shadow_host input[type="text"]');
        this.shadowCheckbox = page.locator('#shadow_host input[type="checkbox"]');

        // Otros
        this.brokenLinks = page.locator('a:has-text("Errorcode")');
        this.viewCounter = page.locator('#stats, #Stats1');
        this.footerHiddenElementsLink = page.locator('a:has-text("Hidden Elements & AJAX")');
        this.footerDownloadFilesLink = page.locator('a:has-text("Download Files")');
    }

    async navigateTo() {
        await this.page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'domcontentloaded' });
    }
}
