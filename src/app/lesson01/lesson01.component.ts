import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.css']
})
export class Lesson01Component implements OnInit {
  
  public name = 'Ivan';
  public index = 0;
  public status = false;
  public arrNames = ['Ivan', 'Petro', 'Pavlo'];
  public myCar = {
    mark: 'Nissan',
    model: 'Juke'
  };
  public myLink = 'https://www.google.com';
  public myNameLink = 'google';

  public classes = 'text red';
  public isAddClass = true;

  public isColor = false;
  public login = '';

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): string {
    return 'Hello';
  }

  printMessage(message?: string): string {
    return !message 
      ? `Hello ${this.name}` 
      : `${message} ${this.name}` 
  }

  checkClass(): void {
    this.isAddClass = !this.isAddClass;
  }

  show(event: MouseEvent): void {
    console.log(event);
  }

  changeStyle(): void {
    this.isColor = !this.isColor;
  }

  showLogin(): void {
    console.log(this.login);
  }
}
