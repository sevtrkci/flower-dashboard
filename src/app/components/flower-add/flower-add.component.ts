import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FlowerService } from 'src/app/service/flower.service';


@Component({
  selector: 'app-flower-add',
  templateUrl: './flower-add.component.html',
  styleUrls: ['./flower-add.component.css']
})
export class FlowerAddComponent implements OnInit {

  flowerAddForm : FormGroup;


  constructor(private flowerFormBuiler:FormBuilder,
    private flowerService:FlowerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createFlowerAddForm();
  }

  createFlowerAddForm(){
    this.flowerAddForm=this.flowerFormBuiler.group({
      name:[""],
      description:[""],
      imageSource:[""],
      oldPrice:[""],
      price:[""]
    })
  }

  add(){
    console.log(this.flowerAddForm.value);

    this.flowerService.insertFlower(this.flowerAddForm.value).subscribe(response => {});
    this.flowerAddForm.reset();
    this.toastr.success("Kayıt başarıyla eklendi");

  }

}
