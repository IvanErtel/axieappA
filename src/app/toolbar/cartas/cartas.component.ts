import { Component, Input, OnInit } from '@angular/core';
import { ListadeCartas } from 'src/app/toolbar/mock/ListadeCartas';
@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {

  constructor() { }

  Cartas = ListadeCartas

  ngOnInit(): void {
  }

}
