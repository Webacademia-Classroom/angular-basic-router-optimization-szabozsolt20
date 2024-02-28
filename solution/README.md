# Practices

## Setup the project

- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200

## Tasks

- You work only in the [app.routes.ts] and TopNavComponent

1. In the [app.routes.ts](src/app/app.routes.ts), change the following routes to lazy-loading:

- MusicianComponent
- MusicianEditComponent
- InstrumentComponent

2. Set the RouterLinkActive directive to all links in the TopNavComponent template.
3. Set the RouterLinkActiveOptions directive to the HomeComponent's link for exact matching.

## Testing

- `npm test`

## Further helps

**WARNING! You must include RouterModule in the import array of components that use routerLink or router-outlet.**

### Setting up lazy-loading for standalone components

- When your component is standalone, you have to use the "loadComponent" property:

```typescript
{
  path: "shop",
  loadComponent: () => import('./page/shop/shop.component').then(
    m => m.ShopComponent
  ),
},
```

### Setting up active router links

- Valid setup of the RouterLinkActive directive (with the active class):

```html
<a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
```

### Setting up the options for router links

- Valid setup of the RouterLinkActiveOptions directive (for exact matching):

```html
<a 
  class="nav-link" 
  routerLink="/about" 
  routerLinkActive="active" 
  [routerLinkActiveOptions]="{exact: true}"> 
    About 
</a>
```
