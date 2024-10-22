import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';




@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPagesComponent],
  imports: [CommonModule, RouterModule],
  exports: [AboutPageComponent,HomePageComponent,SidebarComponent,ContactPagesComponent],
})
export class SharedModule {}
