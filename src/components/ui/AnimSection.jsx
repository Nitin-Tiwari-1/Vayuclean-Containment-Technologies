import { useEffect, useRef } from 'react';

/**
 * Wraps a section and uses IntersectionObserver to add `.in-view`
 * to every [data-anim] child when it enters the viewport.
 * Individual elements can have data-delay="200" etc. for staggering.
 */
export default function AnimSection({ as: Tag = 'div', className = '', style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-anim]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => {
      // If element is already in viewport (e.g. after a filter change), animate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [children]);

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
