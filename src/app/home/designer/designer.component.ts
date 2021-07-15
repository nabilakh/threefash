import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['../../../assets/images/designer-dior.jpg', '../../../assets/images/designer-chanel.jpg', '../../../assets/images/designer-prada.jpg'];

}
