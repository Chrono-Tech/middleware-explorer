import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrencyProvider } from '../../providers/currency/currency';
import _ from 'lodash';

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

  public expanded: boolean = false;
  @Input() public tx: any = {};

  constructor(private navCtrl: NavController, public currency: CurrencyProvider) {
  }

  ngOnInit(): void {
    this.tx.isCoinBase = _.get(this.tx, 'inputs.0.address') === null;
    this.tx.totalOut = this.getInputOutputSum(this.tx.outputs);
    this.tx.fee = this.getInputOutputSum(this.tx.inputs) - this.tx.totalOut;
  }


  private getInputOutputSum(items): number {
    return _.chain(items).map(item=> item.value || 0).sum().value();
  }

  public goToTx(txId: string): void {
    this.navCtrl.push('transaction', {
      'txId': txId
    });
  }

  public goToAddress(addrStr: string): void {
    this.navCtrl.push('address', {
      'addrStr': addrStr
    });
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  public satoshiToBTC(value): number {
    return value / Math.pow(10, 8);
  }

  public filterOutputsInputs(outputs): any {
    return outputs.filter(output=>output.address);
  }

}
