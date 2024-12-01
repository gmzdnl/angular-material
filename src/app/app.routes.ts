import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
      title: 'Dashboard'
  },
  {
    path: 'address',
    loadComponent: () =>
      import('./pages/address-form/address-form.component').then(
        (c) => c.AddressFormComponent
      ),
      title: 'Address'
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./pages/table/table.component').then(
        (c) => c.TableComponent
      ),
      title: 'Table'
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./pages/tree/tree.component').then(
        (c) => c.TreeComponent
      ),
      title: 'Tree'
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./pages/drag-drop/drag-drop.component').then(
        (c) => c.DragDropComponent
      ),
      title: 'Drag-Drop'
  },
];
