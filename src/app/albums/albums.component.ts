import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from "../user.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {
  constructor(private http: HttpClient, private UserService: UserService) { }
  albumsArray: any[];
  selectedAlbum: {};
  showAlbums: Boolean;
  user: string;

  ngOnInit() {
    this.UserService.currentMessage.subscribe(user => this.user = user)
  }

  onSelect(album): void {
    this.selectedAlbum = album;
  }

  getAlbums(): void {
    this.http.get('http://localhost:4200/assets/Data.json')
      .subscribe(data => {
        this.albumsArray = (<any>data)
        this.showAlbums = true
      });
  }
}
