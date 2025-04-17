import memoized, { Fn } from ".";

describe("memoize", () => {
  test("return a function", () => {
    const memoizedFn = memoized(() => {});

    expect(memoizedFn).toBeInstanceOf(Function);
  });

  test("number", () => {
    let count = 0;
    function double(x: number) {
      count++;
      return x * 2;
    }

    const memoizedFn = memoized(double as Fn);
    expect(count).toBe(0);
    expect(memoizedFn(1)).toBe(2);
    expect(count).toBe(1);
    expect(memoizedFn(1)).toBe(2);
    expect(count).toBe(1);
    expect(memoizedFn(1)).toBe(2);
    expect(count).toBe(1);
  });

  test("string", () => {
    let count = 0;
    function repeat(x: string) {
      count++;
      return x + x;
    }

    const memoizedFn = memoized(repeat as Fn);
    expect(memoizedFn("he")).toBe("hehe");
    expect(count).toBe(1);
    expect(memoizedFn("he")).toBe("hehe");
    expect(count).toBe(1);
    expect(memoizedFn("he")).toBe("hehe");
    expect(count).toBe(1);
  });

  test("memoized diff args", () => {
    let count = 0;
    const double = (x: string) => {
      count++;
      return x + x;
    };

    const memoizedFn = memoized(double as Fn);
    expect(count).toBe(0);
    expect(memoizedFn("foo")).toBe("foofoo");
    expect(count).toBe(1);
    expect(memoizedFn("1")).toBe("11");
    expect(count).toBe(2);
    expect(memoizedFn("bar")).toBe("barbar");
    expect(count).toBe(3);
  });

  test("can access this", () => {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function mul(this: any, x: number) {
      count++;
      return this.age * x;
    }

    const personal = {
      age: 34,
      mul: memoized(mul as Fn),
    };

    expect(count).toBe(0);
    expect(personal.mul(2)).toBe(68);
    expect(count).toBe(1)
    expect(personal.mul(2)).toBe(68);
    expect(count).toBe(1)
    
  });
});
