import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DDComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      usNm: ['', Validators.compose([Validators.required, this.startFromA]), this.userAvailability],
      pass: ['', Validators.required],
      eml: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      nums: this.fb.array([
        new FormControl(),
        new FormControl()
      ])
    })
  }

  onSub() {
    console.log(this.fg)
  }

  startFromA(control: AbstractControl): ValidationErrors | null {
    if (control.value.charAt(0) === 'a' || control.value.charAt(0) === 'A') {
      return null
    }
    return { isSta: true }
  }

  userAvailability(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | null {

    return new Promise((res, rej) => setTimeout(() => {
      if (control.value === 'and@gmail.com') res(null)
      else res({ isTkn: true })
    }, 1500))
  }

  get nums() {
    console.log(this.fg.get('nums'))
    return this.fg.get('nums') as FormArray
  }

  addNums() {
    this.nums.push(this.fb.control(''))
  }
}
