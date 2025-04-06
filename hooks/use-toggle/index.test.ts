import { renderHook, act } from "@testing-library/react";
import useToggle from "./index";

describe("use Toggle", () => {
  test("return value", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);
    expect(typeof result.current[1]).toBe("function");
    expect(typeof result.current[2]).toBe("function");
  });

  test("initial value", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });

  test("toggle", () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current[0]).toBe(false);

    act(() => result.current[1]());

    expect(result.current[0]).toBe(true);
  });

  test("set value", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current[2](false));

    expect(result.current[0]).toBe(false);

    act(() => result.current[2](true));
    expect(result.current[0]).toBe(true);
  });

  test("set value with function", () => {
    const { result } = renderHook(() => useToggle());

    act(()=>{
        result.current[2]((x)=> !x)
    })

    expect(result.current[0]).toBe(true)
  });
});
