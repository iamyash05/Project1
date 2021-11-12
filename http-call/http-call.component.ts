import { Component, OnInit, Injectable } from '@angular/core';
import { SampleForm } from '../sample-form';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  animations: [
    trigger('fadeInOut',[
      state('void',style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000))
    ]),
    trigger('slideIn',[
      state('flyIn',style({
        transform: 'translateX(0)'
      })),
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('0.5s 300ms ease-in')
      ])
    ])
  ]
})

@Injectable()
export class HttpCallComponent implements OnInit {

  constructor(private http : HttpClient) { }

  courseName = ['GIT','Test'];
  model = new SampleForm('EshtechZ',this.courseName[0]);
  ngOnInit() {
  }

  response : any;

  onSubmit(){
    console.log(this.model.courseName);
    if(this.model.courseName == 'GIT'){
      this.http.get('https://api.github.com/users/'+this.model.userName)
      .subscribe ((response) => {
        this.response = response;
        console.log(this.response);
      }
        )
    }else{
      console.log('This method is not yet implemented...');
      
    }
  }

}
