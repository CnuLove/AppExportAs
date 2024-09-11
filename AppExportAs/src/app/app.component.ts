import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { sizeswitcher } from './SizeSwitcher';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent,sizeswitcher],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Appexportas';
}
