import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from '../graphql.module';
import RickAndMortyComponent from './rickAndMorty.component';

describe('RickAndMortyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, GraphQLModule],
      declarations: [RickAndMortyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RickAndMortyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
