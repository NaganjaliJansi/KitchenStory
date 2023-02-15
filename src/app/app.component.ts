import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KitchenStory';
  public keyword!:string;
  @Output() search = new EventEmitter<String>();
  searchKeyword(){
    this.search.emit(this.keyword);
  }
}
