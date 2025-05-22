import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergComponent } from './footerg.component';

describe('FootergComponent', () => {
  let component: FootergComponent;
  let fixture: ComponentFixture<FootergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
