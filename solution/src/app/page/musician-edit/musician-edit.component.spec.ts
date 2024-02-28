import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianEditComponent } from './musician-edit.component';

describe('MusicianEditComponent', () => {
  let component: MusicianEditComponent;
  let fixture: ComponentFixture<MusicianEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicianEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicianEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
