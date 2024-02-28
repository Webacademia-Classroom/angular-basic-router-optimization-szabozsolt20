import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopNavComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Router Directives';
}
