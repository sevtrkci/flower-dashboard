import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Flower } from 'src/app/model/flower';
import { FlowerService } from 'src/app/service/flower.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  willDeletedId:number;
  selectedFlower : Flower;

  constructor(private flowerService:FlowerService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFlowers();
  }

  flowers: Flower[] = [];


  getFlowers(){
      this.flowerService.getFlowers().subscribe(response=>{
        this.flowers= response;
      });
    }

    edit(){
      this.flowerService.updateFlower(this.selectedFlower).subscribe(response =>
        {
          this.getFlowers();
          this.toastr.success("Başarıyla güncellendi.");
          this.modalService.dismissAll();
        });
    }
    
    delete(){
      this.flowerService.deleteFlower(this.willDeletedId).subscribe(response=> {
        this.modalService.dismissAll();
        this.getFlowers();
        this.toastr.success("Başarıyla silindi.");
      });

    }

    open(content: any, flower:Flower) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      }, (reason) => {
        
      });
      this.willDeletedId= flower.id;
      this.selectedFlower = flower;
    }

}
