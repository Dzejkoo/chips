import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {
    this._formInit();
    console.log(this.signupForm.valid);
  }

  private _formInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl("", [Validators.required, Validators.minLength(3)]),
      tel: new FormControl("", [Validators.required, Validators.pattern("[0-9 ]{9}")]),
      email: new FormControl("", [Validators.email, Validators.required]),
    });
  }

  isValidField(field: string) {
    return (
      (!this.signupForm.get(field).valid && this.signupForm.get(field).touched) ||
      (this.signupForm.get(field).untouched && this.submitted)
    );
  }

  isValidTel(telField: string) {
    return !!this.signupForm.get(telField).errors?.pattern;
  }

  displayErorrCss(field: string) {
    return {
      "has-error": this.isValidField(field) || this.isValidTel(field),
    };
  }

  submit() {
    this.submitted = true;
    console.log(this.signupForm.value);
  }
}
