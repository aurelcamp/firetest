import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { collection, getDocs } from "firebase/firestore"; 

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  users: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore
  ) { }

  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.firestore.collection('users').valueChanges().subscribe(users => {
      console.log(users);
      this.users = users;
    })


    // const col = collection(this.firestore, 'users');
    // collectionData(col).subscribe(users => {
    //   this.users = users;
    // })
    
    // const config = {
    //   projectId: 'dosomething-4154d',
    //   appId: '1:114474360091:web:b643226a1d564543d307be',
    //   databaseURL: 'https://dosomething-4154d.firebaseio.com',
    //   storageBucket: 'dosomething-4154d.appspot.com',
    //   locationId: 'europe-west',
    //   apiKey: 'AIzaSyDqnLmY00Pg642iq0FExAihuzNYzRzqRr0',
    //   authDomain: 'dosomething-4154d.firebaseapp.com',
    //   messagingSenderId: '114474360091',
    //   measurementId: 'G-BGHXZB0BNG',
    // }
    // const firebaseApp  = initializeApp(config);
    // const db = getFirestore();

    // const querySnapshot = await getDocs(collection(db, "users"));
    // this.users = [];
    // querySnapshot.forEach((doc) => {
    //   this.users.push(doc.data());
    //   // console.log(`${doc.id} => ${doc.data()}`);
    // });
  }

}
