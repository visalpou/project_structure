import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentWebsiteComponent } from './layouts/content-website/content-website.component';
import { WEBSITE_ROUTES } from './shared/routes/content-website.routes';


const routes: Routes = [
  { path: "", redirectTo: "home-page", pathMatch: "full"},
  { path: "", component:ContentWebsiteComponent, children: WEBSITE_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
