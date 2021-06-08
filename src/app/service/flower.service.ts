import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flower } from '../model/flower';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
	
	apiUrl :string ="http://localhost:8080/";

  constructor(private httpClient:HttpClient) { }


	getFlowers(): Observable<any> {
			console.log("getFlower2");

    	return this.httpClient.get(this.apiUrl + "flower");
  	}


  deleteFlower(nid:number):Observable<any>{
    console.log(this.apiUrl+"delete/"+ nid);
	return this.httpClient.delete<any>(this.apiUrl + "flower/delete/" + nid.toString());
 }


  insertFlower(flower: Flower) {
	    console.log(flower);
      return this.httpClient.post(this.apiUrl + "flower/add",flower);
  }

  updateFlower(flower: Flower){

    return this.httpClient.put(this.apiUrl + "flower/update/"  + flower.id, flower);

  }


}
