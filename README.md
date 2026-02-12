# Automatización - Plataforma de Crédito Digital

Este proyecto contiene la **automatización de pruebas UI y API** de la aplicación de crédito digital, utilizando **Playwright + TypeScript**.  

Permite validar:
- Login de usuarios
- Simulación de crédito
- Acceso a productos
- Manejo de errores y validaciones

# Instalación del proyecto

1. Clonar el repositorio: git clone https://github.com/INGSACHS/prueba-tecnica-qa-automation-bcs

2. Instalar librerias: npm install

3. Ejecución: npm test

4. Reporte: npm run report

# Estructura Proyecto
```
└── 📁prueba-tecnica-qa-automation-bcs
    └── 📁.github
        └── 📁workflows
            ├── playwright.yml
    └── 📁api
        ├── AuthAPI.ts
        ├── BaseApi.ts
        ├── ProductsAPI.ts
        ├── SimuladorAPI.ts
    └── 📁config
        ├── environment.ts
    └── 📁data
        ├── login.json
        ├── product.json
        ├── simulador.json
    └── 📁Documentos
        ├── Matriz Trazabilidad.xlsx
        ├── Plan de Pruebas.pdf
    └── 📁fixtures
        ├── test-fixtures.ts
    └── 📁mocks
        ├── network.ts
    └── 📁pages
        ├── BasePage.ts
        ├── LoginPage.ts
        ├── ProductsPage.ts
        ├── SimuladorPage.ts
    └── 📁tests
        └── 📁data-driven
            ├── onboarding-data.spec.ts
            ├── products-data.spec.ts
            ├── simulador-data.spec.ts
        ├── .DS_Store
        ├── onboarding.spec.ts
        ├── products.spec.ts
        ├── simulador.spec.ts
    └── 📁types
        ├── testData.ts
    └── 📁utils
        ├── dataLoader.ts
        ├── testData.ts
    ├── .DS_Store
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── playwright.config.ts
    ├── README.md
    └── tsconfig.json
```
