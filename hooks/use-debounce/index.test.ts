import useDebounce from ".";
import FakerTimers from "@sinonjs/fake-timers";
import { act, renderHook } from "@testing-library/react";
import { useState } from "react";

let clock: FakerTimers.InstalledClock;

describe("useDebounce", () => {
  beforeEach(() => {
    clock = FakerTimers.withGlobal(globalThis).install();
  });

  afterEach(() => {
    clock.uninstall();
  });

  test("debounce value", () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(1);
      const debounceValue = useDebounce(value, 1000);
      return { value, setValue, debounceValue };
    });

    act(()=> result.current.setValue(2));
    expect(result.current.value).toBe(2);
    expect(result.current.debounceValue).toBe(1);


    act(()=>clock.tick(1000))

    expect(result.current.debounceValue).toBe(2)
  });
});
