import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peoplesList:any = [];
  copy_peoplesList:any = [];
  people_details:any = {};
  show_people_detail:boolean = false;
  selected_people:any = {};

  user_login_details:any = {};

  constructor(public peopleService:PeopleService) {
    // Set user detail
    this.user_login_details.name = "Divya Elsa";
    this.user_login_details.img = "http://www.fillmurray.com/200/200";

   }

  ngOnInit() {

    // get people's list
    this.peopleService.getPeoplesData().subscribe((data:any)=>{
      this.peoplesList = data.People;
    })
   
  }
  public showPeopleDetail(selectedPeople){
    this.show_people_detail = true;
    this.people_details = selectedPeople;
    this.selected_people = selectedPeople;
  }

  getRatings(rating){
    // Convert rating to percentage for width's value 
    const ratingsTotal = 5;
    const ratingPercentage = (rating/ratingsTotal) * 100;
    return ratingPercentage;
  }

  sendMessage(){
    console.log('Sending message....')
  }

}
