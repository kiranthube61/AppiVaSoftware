import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  arrayToBind: any;
  userList: any;
  pageNumberArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){

    //let userList = localStorage.getItem('userList');
   // console.log('user list from local storage ' + JSON.stringify (userList ));
    let json = [
    { company:"1",contact:"98686646844",country:"India"},
    { company:"2",contact:"98686646844",country:"India"},
    { company:"3",contact:"98686646844",country:"India"},
    { company:"4",contact:"98686646844",country:"India"},
    { company:"5",contact:"98686646844",country:"India"},
    { company:"6",contact:"98686646844",country:"India"},
    { company:"7",contact:"98686646844",country:"India"},
    { company:"8",contact:"98686646844",country:"India"},
    { company:"9",contact:"98686646844",country:"India"},
    { company:"10",contact:"98686646844",country:"India"},
    { company:"11",contact:"98686646844",country:"India"},
    { company:"12",contact:"98686646844",country:"India"},
    { company:"13",contact:"98686646844",country:"India"},
    { company:"14",contact:"98686646844",country:"India"},
    { company:"15",contact:"98686646844",country:"India"},
    { company:"16",contact:"98686646844",country:"India"},
    { company:"17",contact:"98686646844",country:"India"},
    { company:"18",contact:"98686646844",country:"India"},
    { company:"19",contact:"98686646844",country:"India"},
    { company:"20",contact:"98686646844",country:"India"},
    { company:"21",contact:"98686646844",country:"India"}

  ]

    this.userList =  json;
    this.getPaginationDetails();
  }

  getPaginationDetails(){
    let tableSize = this.userList.length;
    let recordsPerPage = 5;
    let numberOfPages = tableSize/recordsPerPage;
    
    console.log('numbers per Page ' +numberOfPages);  
    let pageNumberArray: string | any[] = [];

    for(var i = 1; i <=numberOfPages;i++ ){
      pageNumberArray.push(i);
    }

    this.pageNumberArray = pageNumberArray;
    console.log('page numbers ' + pageNumberArray);
    this.pageNumber(1);
  }
  pageNumber(pageNumber:any){
    console.log('user json ' + JSON.stringify(this.userList));
    this.arrayToBind = [];
    
      //let start = pageNumber;
      let end = pageNumber * 5;
      for(var i = end-5; i < end;i++ ){
        console.log('array binding',this.arrayToBind)
        this.arrayToBind.push(this.userList[i]);
      }
   
  }
  


}
