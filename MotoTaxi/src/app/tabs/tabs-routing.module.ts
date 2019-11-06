import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'opcion',
            loadChildren: () =>
          import('../pages/opcion/opcion.module').then(m => m.OpcionPageModule)
          },
          {
            path: 'login',
            loadChildren: () =>
          import('../pages/login/login.module').then(m => m.LoginPageModule)
          },
          {
            path: 'loginc',
            loadChildren: () =>
          import('../chofer/loginc/loginc.module').then(m => m.LogincPageModule)
          },
          {
            path: 'registro',
            loadChildren: () =>
          import('../pages/registro/registro.module').then(m => m.RegistroPageModule)
          },
          {
            path: 'registroc',
            loadChildren: () =>
          import('../chofer/registroc/registroc.module').then(m => m.RegistrocPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'pago',
            loadChildren: () =>
          import('../pages/pago/pago.module').then(m => m.PagoPageModule)
          },
          {
            path: 'ganancias',
            loadChildren: () =>
          import('../chofer/ganancias/ganancias.module').then(m => m.GananciasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
