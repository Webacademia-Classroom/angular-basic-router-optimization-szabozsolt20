import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getFileContent } from './test.utils';
import { routes } from '../app/app.routes';

import { HomeComponent } from '../app/page/home/home.component';
import { InstrumentComponent } from '../app/page/instrument/instrument.component';
import { MusicianComponent } from '../app/page/musician/musician.component';
import { AboutComponent } from '../app/page/about/about.component';
import { NotFoundComponent } from '../app/page/not-found/not-found.component';
import { MusicianEditComponent } from '../app/page/musician-edit/musician-edit.component';

describe('Creating Components', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  it('HomeComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('InstrumentComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('MusicianComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [MusicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('MusicianEditorComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [MusicianEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('AboutComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('NotFoundComponent should create', async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});

describe('Router Setup', () => {
  it('HomeComponent should be set in the config', async () => {
    const setup = {
      path: "",
      component: HomeComponent,
    };
    expect(routes).toContainEqual(setup);
  });

  it('InstrumentComponent should be set in the config', async () => {
    const setup = {
      path: "instruments",
      component: InstrumentComponent,
    };
    expect(routes).toContainEqual(setup);
  });

  it('MusicianComponent should be set in the config', async () => {
    const setup = {
      path: "musicians",
      component: MusicianComponent,
    };
    expect(routes).toContainEqual(setup);
  });

  it('MusicianEditComponent should be set in the config', async () => {
    const setup = {
      path: "musicians/edit/:id",
      component: MusicianEditComponent,
    };
    expect(routes).toContainEqual(setup);
  });

  it('AboutComponent should be set in the config', async () => {
    const setup = {
      path: "about",
      component: AboutComponent,
    };
    expect(routes).toContainEqual(setup);
  });

  it('NotFoundComponent should be set in the config', async () => {
    const setup = {
      path: "**",
      component: NotFoundComponent,
    };
    expect(routes).toContainEqual(setup);
  });

});
