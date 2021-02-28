import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {card: any},
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
  }
}
