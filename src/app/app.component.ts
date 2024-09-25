import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIcon,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items = Array.from(Array(30).keys()).map((i) => `item ${i}`);

  lorems = Array.from(Array(30).keys()).map(
    () => `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deserunt
        magnam vitae non dolorum consequuntur repellendus rerum ipsa fuga iste
        corrupti labore natus totam quod, quidem accusamus adipisci qui.
        Accusantium?`
  );
}
