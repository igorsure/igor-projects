import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ConstellationService } from './services/constellation.service';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ConstellationService]
})
export class AppComponent {
  title = 'crazy-astronomer';
}
