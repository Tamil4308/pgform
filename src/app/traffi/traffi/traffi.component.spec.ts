import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraffiComponent } from './traffi.component';

describe('TraffiComponent', () => {
  let component: TraffiComponent;
  let fixture: ComponentFixture<TraffiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraffiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraffiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
