import FakeTimer from "@sinonjs/fake-timers";
import { act, renderHook } from "@testing-library/react";
import { useState } from "react";
import useThottle from ".";

let clock: FakeTimer.InstalledClock;

describe("useThottle", () => {
  beforeEach(() => {
    clock = FakeTimer.withGlobal(globalThis).install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  test("return values", () => {
    const { result } = renderHook(() => useThottle(1));

    expect(result.current).toBe(1);
  });

  test("thotle value", () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(1);
      const thotleValue = useThottle(value);
      return { value, setValue, thotleValue };
    });

    act(() => result.current.setValue(2));

    expect(result.current.value).toBe(2);
    expect(result.current.thotleValue).toBe(1);
    act(()=> clock.tick(500));

    expect(result.current.thotleValue).toBe(2)
  });
});
