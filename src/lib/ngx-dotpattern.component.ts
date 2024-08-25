import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'om-dotpattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-dotpattern.component.html",
  styleUrl: "./ngx-dotpattern.component.scss",
})
export class NgxDotpatternComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("patternColor")
  set patternColor(color: string) {
    this.style["--om-dotpattern-color"] = color;
  }

  style: any = {};
}
