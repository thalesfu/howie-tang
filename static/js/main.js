// 导航滚动效果
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 元素淡入动画
const animatedEls = document.querySelectorAll(
  '.timeline-item, .route-list-card, .schedule-item, .route-card'
);

if (animatedEls.length > 0) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    animatedEls.forEach(el => observer.observe(el));

    // 给页面已经可见的元素一个小延迟后直接显示
    setTimeout(() => {
      animatedEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    }, 100);
  } else {
    // 不支持 IntersectionObserver 时直接显示所有
    animatedEls.forEach(el => el.classList.add('visible'));
  }
}
