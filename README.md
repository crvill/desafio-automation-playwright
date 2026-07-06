# Playwright OpenCart Enterprise Framework v2

Framework de automatización E2E para OpenCart usando **Playwright + TypeScript**.

## Flujos incluidos

- Catálogo: búsqueda de producto.
- Carrito: agregar **Canon EOS 5D** al carrito seleccionando opción obligatoria.
- Checkout: compra como invitado.
- Autenticación: registro de nuevo usuario.

## Producto principal usado

El flujo de compra usa:

```text
Canon EOS 5D
Required option: Red
```

Esto evita problemas con productos no disponibles o productos sin stock.

## Arquitectura

```text
Test
  ↓
Application Facade
  ↓
Business Module
  ↓
Flow
  ↓
Page
  ↓
Component
  ↓
Interaction
  ↓
Repository
  ↓
Playwright Locator
```

## Instalación

```bash
npm install
npx playwright install
```

## Validación local

```bash
npm run build
npm run lint
npm test
```

## Tests principales

```ts
await app.catalog.search(Products.canonEOS5D.name);
await app.cart.addProductToCart(Products.canonEOS5D);
await app.checkout.purchaseGuestProduct(Products.canonEOS5D);
await app.authentication.registerNewCustomer();
```

## Gherkin

Los archivos `.feature` se usan como documentación funcional, no como capa ejecutable Cucumber.

Mapping:

- `features/checkout.feature` → `src/tests/checkout/guest-checkout.spec.ts`
- `features/cart.feature` → `src/tests/cart/add-product-to-cart.spec.ts`
- `features/register.feature` → `src/tests/authentication/register-customer.spec.ts`
