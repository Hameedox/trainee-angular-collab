import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('trainee-app');
  traineeBMessage = 'Hello from Trainee B (Main Branch) 👋';
  welcomeMessage = 'This is a new feature branch 🚀 by Trainee B';
}
