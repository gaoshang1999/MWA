import { Injectable } from '@angular/core';

@Injectable()
export class DbService {  
  data = [];
  
  constructor() { 
      this.data = [
                    {_id: "1", name:'Shang Gao', stuID: '123455', email:'sgao@mum.edu'},
                    {_id: "2", name:'Tom & Jerry', stuID: '123411', email:'sgao@mum.edu'},
                    {_id: "3", name:'TEST TEST', stuID: '123466', email:'sgao@mum.edu'},
                  ];
  }

  getData(){
     return this.data;
  }

  getItem(id){
    for( let item of this.data){
        if( id == item._id){
          return item;
        }
    }
    return null;
  }
  
  valid_id(id){
    for( let item of this.data){
        if( id == item._id){
          return true;
        }
    }
    return false;
  }
}
