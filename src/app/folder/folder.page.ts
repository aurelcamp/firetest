import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  users: any[];

  constructor(private activatedRoute: ActivatedRoute, private firestore: Firestore) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const col = collection(this.firestore, 'users');
    collectionData(col).subscribe(users => {
      this.users = users;
    })
  }

}
