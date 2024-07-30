# Shakebits Portal

## Run the portal

### 1. Install Node.js and Angular
1. Open https://nodejs.org/en/download/prebuilt-installer install latest version
2. ```npm doctor``` (everything should be OK)
3. `npm install @angular/cli@latest -g` 

### 2. Run application
1. `ng s -o`

### Recommended plugins for Visual Studio Code
>**Angular Language Service** Description: Editor services for Angular templates Publisher: Angular
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

>**Prettier - Code formatter** Description: Code formatter using prettier Publisher: Prettier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### Util commands
npm list
npm list -g
npm install <pkg-name>
npm install -g <pkg-name>
npm uninstall <pkg-name>
npm uninstall -g <pkg-name>
npm install (install all dependencies for project)

ng help
ng s (build and serve application)
ng s -o (build and serve app and open it in browser)
ng g c (generate new component)
ng g s (generate new service)
ng s --configuration='development' | 'production' (build and serve using custom configuration)
ng build (build and generate runnable in /dist)
ng test (running unit tests)

ng generate module /features/partner --route partners --module features-routing.module
ng generate interceptor /core/interceptors/AuthenticationInterceptor
ng generate service /core/services/LoadingStatus

### Localization and Internationalization

`ng add @angular/localize` add library <br>
`ng extract-i18n --output-path src/locale` 
`ng build --localize`

