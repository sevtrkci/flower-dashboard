import { Component, OnInit } from '@angular/core';
import { Flower } from 'src/app/model/flower';
import { FlowerService } from 'src/app/service/flower.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  flowers: Flower[] = [];

  constructor(private flowerService:FlowerService) { }

  ngOnInit(): void {
    this.getFlowers();
  }

  getFlowers(){
    console.log("getFlowerList");
      this.flowerService.getFlowers().subscribe(response=>{
        this.flowers= response;
      });
    }

}
