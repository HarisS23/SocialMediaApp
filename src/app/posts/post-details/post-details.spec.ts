import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetails } from './post-details';

describe('PostDetails', () => {
  let component: PostDetails;
  let fixture: ComponentFixture<PostDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
