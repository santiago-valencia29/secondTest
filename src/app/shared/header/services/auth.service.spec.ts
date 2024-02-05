import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should set token in local storage when calling login', () => {
    const authService = TestBed.inject(AuthService);
    const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');

    authService.login();

    expect(localStorageSpy).toHaveBeenCalledWith('token', 'token');
  });

  it('should set token in local storage when calling sign', () => {
    const authService = TestBed.inject(AuthService);
    const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');

    authService.sign();

    expect(localStorageSpy).toHaveBeenCalledWith('token', 'token');
  });

  it('should remove token from local storage when calling signOut', () => {
    const authService = TestBed.inject(AuthService);
    const localStorageSpy = jest.spyOn(Storage.prototype, 'removeItem');

    authService.signOut();

    expect(localStorageSpy).toHaveBeenCalledWith('token');
  });

  it('should return an observable with user data when calling getUser', (done) => {
    const authService = TestBed.inject(AuthService);
    const userData = { name: 'Santiago', lastName: 'Valencia' };

    authService.getUser().subscribe((user) => {
      expect(user).toEqual(userData);
      done();
    });
  });
});
