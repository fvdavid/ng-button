import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [MatProgressSpinnerModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-button');

  isActive = signal(false);
  isLoading = signal(false);
  isDisabled = signal(false);

  makeActive() {
    this.isActive.update((value) => !value);
  }

  makeLoading() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }

  makeDisable() {
    this.isDisabled.set(true);
  }
}
