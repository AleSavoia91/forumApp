import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'home',
      loadChildren: () => import('./features/home/home.module')
        .then(m => m.HomeModule)},
      {path: 'login',
      loadChildren: () => import('./features/login/login.module')
        .then(m => m.LoginModule)
      },
      {path: 'search',
        loadChildren: () => import('./features/search/search.module')
          .then(m => m.SearchModule)
      },
      {path: 'signup',
        loadChildren: () => import('./features/signup/signup.module')
          .then(m => m.SignupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
