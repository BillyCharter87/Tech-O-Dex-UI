import {CarService} from './table.service';
import {OnInit, Component} from "@angular/core";
import {Car} from "./table.interface";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CarService]
})
export class DataTableDemo implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
