import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
          height:'300px',
          backgroundColor:'yellow'
      })),
      state('closed',style({
        height:'100px',
        backgroundColor:'green',
    })),
    transition('open => closed',[
      animate('2s')
    ]),
    transition('closed => open',[
      animate('2s')
    ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen=true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=!this.isOpen
  }
}
