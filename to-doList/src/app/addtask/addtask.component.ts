import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  userInput : Observable<UserInfo[]>;
  userCollection : AngularFirestoreCollection<UserInfo>;
  userDocument : AngularFirestoreDocument<UserInfo>;
  // isActive:boolean = true; 
  edit1="";
  edit2="";
  edit3="";
  edit4="";
  update;
  myId;
  updateItem: UserInfo;
  filterPr="select";
  // newItem;


  constructor(public db : AngularFirestore ) {
     this.userInput = this.db.collection('todolist').valueChanges();
     this.userInput.subscribe(x => {console.log(x)});
     this.userCollection = this.db.collection("todolist");
   }

   todoAddCourse(){
    // this.isActive = false;
    const documentId = this.db.createId();
    this.userCollection.doc(documentId).set({userTask:this.edit1,categary:this.edit2,id : documentId,priority : this.edit3, userTime:this.edit4});
    document.getElementById("secOne").style.visibility="hidden";
  }
  
   
  editInfo(editinfo : UserInfo){
    this.updateItem = editinfo;
    this.edit1 = editinfo.userTask;
    this.edit2 = editinfo.categary;
    this.edit3 = editinfo.priority;
    this.edit4 = editinfo.userTime;

    }
    displayEdit()
    {
        document.getElementById("sec2").style.visibility="visible";
        document.getElementById("div1-1").style.backgroundColor="rgba(3, 3, 3, 0.8)";
        document.getElementById("div1-2").style.backgroundColor="rgba(3, 3, 3, 0.8)";
        document.getElementById("div1-3").style.backgroundColor="rgba(3, 3, 3, 0.8)";
    }

   updateInfo(editinfo1,editinfo2,editinfo3,editinfo4) {
    this.myId = this.updateItem.id;
    this.updateItem.userTask = editinfo1;
    this.updateItem.categary = editinfo2;
    this.updateItem.priority = editinfo3;
    this.updateItem.userTime = editinfo4;
    this.userDocument = this.db.doc(`todolist/${this.myId}`);
    this.userDocument.update(this.updateItem);
    document.getElementById("sec2").style.visibility="hidden";
    document.getElementById("div1-1").style.backgroundColor="rgba(3, 3, 3, 0)";
        document.getElementById("div1-2").style.backgroundColor="rgba(3, 3, 3, 0)";
        document.getElementById("div1-3").style.backgroundColor="rgba(3, 3, 3, 0)";
    
    // this.edit =newItem.userTask;
   }

   delInfo(delInf : UserInfo) {
    console.log("Delete Pressed");
    this.userDocument = this.db.doc(`todolist/${delInf.id}`);
    this.userDocument.delete();
   }

   high()
   {
     
   }
   
  ngOnInit() {
  }

}

interface UserInfo {
   userTask ?: string;
   categary?:string;
   priority ?: string;
   userTime ?: string;
   id ?: string;
}
