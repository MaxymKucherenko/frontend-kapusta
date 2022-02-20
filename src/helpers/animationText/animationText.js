export function textAnimation(text) {
  text.innerHTML = [...text.textContent]
    .map(
      n =>
        `<span style="font-weight: 500;font-size: 14px; line-height: 16px; letter-spacing: 0.02em; transition: all 1.5s; display: inline-block; margin-bottom: 8px;">${
          n.trim() ? n : '&nbsp;'
        }</span>`,
    )
    .join('');
  setTimeout(animateText, 100);
  animateText();
  function rand(x) {
    return `${Math.random() * x - x * 0.5}px`;
  }
  function animateText() {
    [...text.querySelectorAll('span')]
      .map(n => n.style)
      .forEach((n, i) => {
        setTimeout(
          () =>
            Object.assign(
              n,
              !n.opacity || +n.opacity === 1
                ? {
                    opacity: 0,
                    color: 'blue',
                    transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(
                      300,
                    )})`,
                  }
                : {
                    opacity: 1,
                    color: '#52555F',
                    transform: `translate3d(0, 0, 0)`,
                  },
            ),
          i * 20,
        );
      });
  }
}
