import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { getFileContent } from './test.utils';
import { routes } from '../app/app.routes';

import { TopNavComponent } from '../app/common/top-nav/top-nav.component';

describe('Router Setup', () => {
  it('InstrumentComponent should be lazy-loaded', async () => {
    const route = routes.find(r => r.path === "instruments");
    expect(route.loadComponent).toBeTruthy();

    const content = getFileContent('src/app/app.routes.ts');
    expect(content).toMatch(/loadComponent\ *: *\( *\) *\=\> *import\(.*['"]\.\/page\/instrument\/instrument\.component['"] *\)/gmi);
  });

  it('MusicianComponent should be lazy-loaded', async () => {
    const route = routes.find(r => r.path === "musicians");
    expect(route.loadComponent).toBeTruthy();

    const content = getFileContent('src/app/app.routes.ts');
    expect(content).toMatch(/loadComponent\ *: *\( *\) *\=\> *import\(.*['"]\.\/page\/musician\/musician\.component['"] *\)/gmi);
  });

  it('MusicianEditComponent should be lazy-loaded', async () => {
    const route = routes.find(r => r.path === "musicians/edit/:id");
    expect(route.loadComponent).toBeTruthy();

    const content = getFileContent('src/app/app.routes.ts');
    expect(content).toMatch(/loadComponent\ *: *\( *\) *\=\> *import\(.*['"]\.\/page\/musician-edit\/musician-edit\.component['"] *\)/gmi);
  });
});

describe('RouterLinkActive and RouterLinkActiveOptions directives', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TopNavComponent,
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TopNavComponent should create', async () => {
    expect(component).toBeTruthy();
  });

  it('RouterLinkActive directives should set', async () => {
    const homeLink = fixture.nativeElement.querySelector('a[routerLink="/"][routerLinkActive="active"]');
    expect(homeLink).toBeTruthy();

    const musiciansLink = fixture.nativeElement.querySelector('a[routerLink="/musicians"][routerLinkActive="active"]');
    expect(musiciansLink).toBeTruthy();

    const instrumentsLink = fixture.nativeElement.querySelector('a[routerLink="/instruments"][routerLinkActive="active"]');
    expect(instrumentsLink).toBeTruthy();

    const aboutLink = fixture.nativeElement.querySelector('a[routerLink="/about"][routerLinkActive="active"]');
    expect(aboutLink).toBeTruthy();
  });

  it('RouterLinkActiveOptions directive should set', async () => {
    const homeLink = fixture.nativeElement.querySelector('a.nav-link[routerLink="/"]');
    expect(homeLink).toBeTruthy();

    expect(
      (homeLink as HTMLAnchorElement).getAttribute('ng-reflect-router-link-active-options')
    ).toBeTruthy();
  });

});
