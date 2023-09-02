import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileSectionComponent } from './header-profile-section.component';

describe('HeaderProfileSectionComponent', () => {
  let component: HeaderProfileSectionComponent;
  let fixture: ComponentFixture<HeaderProfileSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProfileSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
