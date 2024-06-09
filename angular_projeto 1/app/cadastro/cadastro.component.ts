import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
      
  }
}