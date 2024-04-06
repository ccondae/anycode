import { act, renderHook, waitFor } from "@testing-library/react";

import { createWrapper } from "~/shared/utils";

import { useToast } from ".";

describe("use toast test", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("토스트는 한번 호출 되었을때 한번만 늘어나야하며 시간이 지나면 사라져야합니다.", async () => {
    const { result } = renderHook(() => useToast(), { wrapper: createWrapper() });
    act(() => result.current.toast({ title: "hello" }));
    expect(result.current.toasts.length).toBe(1);
    waitFor(() => expect(result.current.toasts.length).toBe(0));
  });
});
