import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

/* Components */
import * as websiteComponents from './website';
const routes: Routes = [
  {
    path: '',
    component: websiteComponents.HomeComponent,
}, {
  path: 'home',
  component: websiteComponents.HomeComponent,
}, {
  path: 'about',
  component: websiteComponents.AboutComponent,
}, { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
