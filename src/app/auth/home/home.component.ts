import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Users:any =[];

  book = [
    {
      "title": "swapna",
      "_id": "6118c312f376da573812ce89",
      "isbn": 123,
      "price": 12344
    },
    {
      "title": "swakkkpna",
      "_id": "6118c339f376da573812ce8b",
      "isbn": 123,
      "price": 12344
    },
    {
      "title": "swakkkpna",
      "_id": "6118c462f376da573812ce8d",
      "isbn": 123,
      "price": 12344
    },
    {
      "title": "JavaBook",
      "_id": "61191525f80ca9669c53caa2",
      "isbn": 1234678,
      "price": 355
    },
    {
      "title": "c++",
      "_id": "61191561f80ca9669c53caa4",
      "isbn": 1234678,
      "price": 355
    },
    {
      "title": "cShape",
      "_id": "6119175c945fa62ee47ca2f2",
      "isbn": 6754,
      "price": 35
    },
    {
      "title": "cShape",
      "_id": "61191761945fa62ee47ca2f4",
      "isbn": 6754,
      "price": 35
    },
    {
      "title": "cShape",
      "_id": "611918080325d23bc4787e22",
      "isbn": 6754,
      "price": 35
    }
  ]
  constructor(
    private router: Router,
    private crudService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllBooks()
  }


  getAllBooks(){
    this.crudService.all_User().subscribe((res) =>{
          this.Users = res
          console.log(this.Users)
    })

  }
}
