import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router) { }

  onSubmit() {
    // TODO Effettua la verifica delle credenziali e reindirizza all'homepage
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
