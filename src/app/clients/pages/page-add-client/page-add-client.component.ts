import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  public item = new Client();

  constructor(private ordersService: ClientsService, private router: Router) {}

  ngOnInit(): void {}

  public action(item: Client): void {
    this.ordersService.add(item).subscribe((res) => {
      // traiter les codes erreurs de l'api
      // ici cela ne risque pas d'arriver car on utilise jsonServer
      this.router.navigate(['clients']);
    });
  }
}
