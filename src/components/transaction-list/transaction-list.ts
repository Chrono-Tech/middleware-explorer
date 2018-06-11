import {Component, Input} from "@angular/core";

/**
 * Generated class for the TransactionListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'transaction-list',
  templateUrl: 'transaction-list.html'
})
export class TransactionListComponent {

  public loading: boolean = true;
  @Input() public transactions: any = [];

  constructor() {}

  private ngOnInit(): void {
  }
}
