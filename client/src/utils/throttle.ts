let interval: NodeJS.Timeout | null = null;

export function throttle(callback: () => void, time = 200) {
  if (interval) {
    clearTimeout(interval);
  }

  interval = setTimeout(callback, time);
}
