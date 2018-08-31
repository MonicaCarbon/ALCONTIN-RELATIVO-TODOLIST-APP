import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {

  }   

add() {
    let prompt = this.alertCtrl.create({
      title: 'TO DO',
      message: "Create new task:",
      inputs: [
        {
        },
      ],
      
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }




fortoday() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Your tasks today.');

    alert.addInput({
      type: 'checkbox',
      label: 'Finish the concept paper',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Attend meeting',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Prepare for reports',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pay bills',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Unwind',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }




assignments() {
    let alert = this.alertCtrl.create();
    alert.setTitle('School to do(s).');

    alert.addInput({
      type: 'checkbox',
      label: 'Prepare for reporting',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Study for upcoming quiz',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Read chapter 13 in History',
      value: 'value1',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }





  thesis() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Deadlines for Thesis.');

    alert.addInput({
      type: 'checkbox',
      label: 'Concept paper defense on Sept. 3',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chapter 1 revised on Sept. 7',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chapter 2 revised on Sept. 14',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chapter 3 revised on Sept. 21',
      value: 'value1',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }



requirements() {
    let alert = this.alertCtrl.create();
    alert.setTitle('School Requirements.');

    alert.addInput({
      type: 'checkbox',
      label: 'Yellowpad',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'G-tec Pen',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'A4 Bondpapers',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'T-Square',
      value: 'value1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cartolina',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Colored Papers',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }




groceries() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Grocery list.');

    alert.addInput({
      type: 'checkbox',
      label: '2 sacks of rice',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Meats',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Milk',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chips',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chocolates',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Spices',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Fruits & Vegetables',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Breads',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Save',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
}










