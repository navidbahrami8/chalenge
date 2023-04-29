import { TestBed } from '@angular/core/testing';

import { UsersService } from './Users.service';

describe('DepartmentsService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
