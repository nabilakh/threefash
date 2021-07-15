import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['../../../assets/images/dior.jpg', '../../../assets/images/chanel.jpg', '../../../assets/images/prada.jpg'];

}
