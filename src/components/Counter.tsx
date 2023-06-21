import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const [isEnabled, setEnabled] = createSignal(true);

  return (
    <>
      {
        isEnabled() && (
          <button
            class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
            onClick={() => setCount(count() + 1)}
          >
            Clicks: {count()}
          </button>
        )
      }
      <div class="my-10"></div>

      <button class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]" onClick={() => setEnabled(!isEnabled())}>
        {isEnabled() ? '禁用' : '启用'}
      </button>
    </>
  );
}
