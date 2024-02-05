import { ShortNamePipe } from './short-name.pipe';

describe('ShortNamePipe', () => {
  let pipe: ShortNamePipe;

  beforeEach(() => {
    pipe = new ShortNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a full name into a short name', () => {
    const fullName = 'John Doe';
    const result = pipe.transform(fullName);
    expect(result).toBe('JD');
  });

  it('should handle an empty string', () => {
    const fullName = '';
    const result = pipe.transform(fullName);
    expect(result).toBe('');
  });

});
