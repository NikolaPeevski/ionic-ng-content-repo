import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SpecialHeaderComponent } from 'src/app/shared/special-header/special-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  titleText: string = 'My awesome header';

  constructor(private vcRef: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.vcRef.createComponent(this.cfr.resolveComponentFactory(SpecialHeaderComponent));
  }

}
