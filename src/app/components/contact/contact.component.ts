import { CounterServiceService } from './../../shared/services/counter-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private counterService: CounterServiceService, 
  ) { }

  ngOnInit() {
    this.contact = this.route.snapshot.paramMap.get('to')
  }

  goAbout() {
    this.router.navigate(['/about'])
  }
  
  addCounter(){
    this.counterService.addCounter()
  }

  getCounter(){
    return this.counterService.getCounter()
  }

  
}
