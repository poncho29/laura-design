import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently "in view" (the last one whose top has crossed
 * a reading line placed below the sticky header), plus a `lock` to set one immediately on click
 * without flickering through intermediate sections while the smooth scroll runs.
 */
export const useActiveSection = (ids: string[], offset = 120) => {
  const [active, setActive] = useState(ids[0]);
  const locked = useRef(false);
  const settle = useRef<number>();
  const key = ids.join('|');

  const compute = useCallback(() => {
    const doc = document.documentElement;
    if (window.scrollY < 8) return ids[0];
    // Bottom of the page: the last section wins even if it is short
    if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) return ids[ids.length - 1];

    const line = offset + window.innerHeight * 0.25;
    let current = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    }
    return current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset]);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      // While a click-initiated scroll runs, keep the clicked link; release once scrolling settles
      if (locked.current) {
        window.clearTimeout(settle.current);
        settle.current = window.setTimeout(() => { locked.current = false; setActive(compute()); }, 150);
        return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActive(compute()));
    };

    setActive(compute());
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settle.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [compute]);

  const lock = useCallback((id: string) => {
    locked.current = true;
    setActive(id);
    window.clearTimeout(settle.current);
    // Fallback in case the click does not scroll at all (already there)
    settle.current = window.setTimeout(() => { locked.current = false; }, 1200);
  }, []);

  return { active, lock };
};
