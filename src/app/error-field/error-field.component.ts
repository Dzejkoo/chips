import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-error-field",
  templateUrl: "./error-field.component.html",
  styleUrls: ["./error-field.component.css"],
})
export class ErrorFieldComponent implements OnInit {
  @Input() textValid: boolean;
  @Input() telValid: boolean;
  @Input() errorName: string;

  constructor() {}

  ngOnInit(): void {}
}
