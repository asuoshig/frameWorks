import { Component, OnInit } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Router, RouterOutlet, RouterModule} from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CadastroComponent, RouterModule, FooterComponent, HeaderComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {

  }

  goToLogin() {
      this.router.navigate(['/login']);
  }

}
