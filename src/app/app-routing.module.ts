import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [

  // path: /dashboard' PagesRoutingModule
  // path: /auth' AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
