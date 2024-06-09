import { Component } from '@angular/core';
import { CadastroComponent } from '../../cadastro/cadastro.component';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CadastroComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
