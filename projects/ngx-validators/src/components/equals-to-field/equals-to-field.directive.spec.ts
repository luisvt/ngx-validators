import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'test',
  template: 'hello'
  // template: `
  //   <form #testForm="ngForm">
  //     <input name="password" [(ngModel)]="model.password"/>
  //     <input name="confirmPassword" equalsToField="password" [(ngModel)]="model.confirmPassword"/>
  //     <div id="validity">valid: {{testForm.valid}}</div>
  //   </form>`
})
export class TestComponent {
  model: { password: '', confirmPassword: '' }
}

describe('EqualsToFieldDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let password: DebugElement;
  let confirmPassword: DebugElement;
  let testForm: DebugElement;

  beforeEach(async(() => {
    console.log('Class: , Function: , Line 41 (): ');
    // TestBed.resetTestEnvironment();
    // TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    //   platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      // imports: [BrowserModule, FormsModule],
      declarations: [TestComponent]
    }).compileComponents();
    // fixture = TestBed.createComponent(TestComponent);
    // console.log('fixture: ', fixture);
    // component = fixture.componentInstance;
    // password = fixture.debugElement.query(By.css('[name=password]'));
    // confirmPassword = fixture.debugElement.query(By.css('[name=confirmPassword]'));
    // testForm = fixture.debugElement.query(By.directive(NgForm))
  }));

  it('should test is valid', () => {
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   // let component = fixture.componentInstance;
    //   console.log('testForm: ', testForm);
    // })
  });
});
