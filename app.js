(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const header = document.querySelector("[data-header]");
  const dropdowns = [...document.querySelectorAll("[data-product-dropdown]")].map((dropdown) => ({
    dropdown,
    trigger: dropdown.querySelector(".product-dropdown-trigger"),
    menu: dropdown.querySelector(".product-mega-menu"),
    timer: 0,
    openedByHover: false
  }));
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const setDropdownOpen = (item, open, focusFirst = false) => {
    if (!item.trigger || !item.menu) return;
    window.clearTimeout(item.timer);
    item.trigger.setAttribute("aria-expanded", String(open));
    item.menu.setAttribute("aria-hidden", String(!open));
    item.menu.inert = !open;
    item.menu.classList.toggle("is-open", open);
    if (focusFirst && open) item.menu.querySelector("a")?.focus();
  };

  dropdowns.forEach((item) => {
    item.trigger?.addEventListener("click", () => {
      if (item.openedByHover && item.trigger?.getAttribute("aria-expanded") === "true") {
        item.openedByHover = false;
        return;
      }
      const open = item.trigger?.getAttribute("aria-expanded") !== "true";
      dropdowns.forEach((other) => setDropdownOpen(other, other === item && open));
    });
    item.trigger?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        dropdowns.forEach((other) => setDropdownOpen(other, other === item, other === item));
      }
    });
    item.dropdown.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") {
        item.openedByHover = true;
        dropdowns.forEach((other) => setDropdownOpen(other, other === item));
      }
    });
    item.dropdown.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") {
        item.openedByHover = false;
        item.timer = window.setTimeout(() => setDropdownOpen(item, false), 140);
      }
    });
    item.dropdown.addEventListener("focusout", (event) => {
      if (event.relatedTarget instanceof Node && item.dropdown.contains(event.relatedTarget)) return;
      setDropdownOpen(item, false);
    });
    item.menu?.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) setDropdownOpen(item, false);
    });
  });
  document.addEventListener("pointerdown", (event) => {
    dropdowns.forEach((item) => {
      if (event.target instanceof Node && !item.dropdown.contains(event.target)) setDropdownOpen(item, false);
    });
  });

  const setMenuOpen = (open) => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileNav.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.inert = !open;
    if (open) mobileNav.scrollTop = 0;

  };

  menuButton?.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  mobileNav?.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) setMenuOpen(false);
  });
  document.addEventListener("pointerdown", (event) => {
    if (event.target instanceof Node && !header?.contains(event.target)) setMenuOpen(false);
  });
  header?.addEventListener("focusout", (event) => {
    if (event.relatedTarget instanceof Node && !header.contains(event.relatedTarget)) setMenuOpen(false);
  });
  window.matchMedia("(max-width: 820px)").addEventListener("change", () => setMenuOpen(false));
  document.addEventListener("keydown", (event) => {
    const openDropdown = dropdowns.find((item) => item.trigger?.getAttribute("aria-expanded") === "true");
    if (event.key === "Escape" && openDropdown?.trigger) {
      setDropdownOpen(openDropdown, false);
      openDropdown.trigger.focus();
    }
    if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  let scrollFrame = 0;
  let lastScrollY = window.scrollY;
  let inputScrollDirection = 0;
  let inputDirectionExpiresAt = 0;
  const updateHeaderVisibility = (currentY, direction) => {
    if (menuButton?.getAttribute("aria-expanded") === "true") {
      header?.classList.remove("is-hidden");
      lastScrollY = currentY;
      return;
    }
    if (performance.now() < inputDirectionExpiresAt) direction = inputScrollDirection;
    if (currentY <= 24) {
      header?.classList.remove("is-scrolled", "is-hidden");
    } else if (direction > 0) {
      header?.classList.remove("is-scrolled");
      header?.classList.add("is-hidden");
      dropdowns.forEach((item) => setDropdownOpen(item, false));
    } else if (direction < 0) {
      header?.classList.remove("is-hidden");
      header?.classList.add("is-scrolled");
    }
    lastScrollY = currentY;
  };
  if (window.scrollY > 24) header?.classList.add("is-scrolled");
  window.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      const currentY = window.scrollY;
      updateHeaderVisibility(currentY, Math.sign(currentY - lastScrollY));
      scrollFrame = 0;
    });
  }, { passive: true });
  window.addEventListener("wheel", (event) => {
    inputScrollDirection = Math.sign(event.deltaY);
    inputDirectionExpiresAt = performance.now() + 800;
    updateHeaderVisibility(window.scrollY, inputScrollDirection);
  }, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.target instanceof Element && event.target.closest("button, a, input, textarea, select, [contenteditable]")) return;
    if (["ArrowDown", "PageDown", " "].includes(event.key)) updateHeaderVisibility(window.scrollY, 1);
    if (["ArrowUp", "PageUp"].includes(event.key)) updateHeaderVisibility(window.scrollY, -1);
    if (event.key === "Home") updateHeaderVisibility(0, -1);
  });

  const faqItems = [...document.querySelectorAll(".faq-item")];
  const setFaqOpen = (item, open) => {
    item.classList.toggle("is-open", open);
    item.querySelector(".faq-question").setAttribute("aria-expanded", String(open));
    const answer = item.querySelector(".faq-answer");
    answer.setAttribute("aria-hidden", String(!open));
    answer.inert = !open;
  };
  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      faqItems.forEach((other) => setFaqOpen(other, other === item && open));
    });
  });

  if (!gsap || reduceMotion) return;

  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      onUpdate: (trigger) => updateHeaderVisibility(trigger.scroll(), trigger.direction)
    });
  }
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro.fromTo(".hero h1", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: .72 })
    .fromTo(".hero-description", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .55 }, "-=.42")
    .fromTo(".hero-actions", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .46 }, "-=.31")
    .fromTo(".hero-showcase", { autoAlpha: 0, y: 22, clipPath: "inset(9% 0 0 round 15px)", scale: .99 }, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0 round 15px)", scale: 1, duration: .85, ease: "power2.out" }, "-=.08");

  if (ScrollTrigger) {
    const illustrationLoops = [];
    const playInView = (element, timeline) => {
      const trigger = ScrollTrigger.create({
        trigger: element, start: "top bottom", end: "bottom top",
        onToggle: (state) => timeline.paused(!state.isActive || document.hidden)
      });
      illustrationLoops.push({ timeline, trigger });
    };
    const orbit = document.querySelector(".process-orbit");
    if (orbit) {
      const timeline = gsap.timeline({ paused: true });
      orbit.querySelectorAll(".orbit-ring").forEach((ring, index) => {
        timeline.fromTo(ring, { rotation: [-18, 16, -40][index] }, {
          rotation: index === 1 ? -360 : 360, duration: 10, repeat: -1, ease: "none"
        }, 0);
      });
      playInView(orbit, timeline);
    }
    document.querySelectorAll(".decision-visual, .workflow-visual").forEach((visual) => {
      const timeline = gsap.timeline({ paused: true });
      const workflow = visual.classList.contains("workflow-visual");
      [...visual.children].forEach((item, index) => {
        timeline.fromTo(item, { opacity: 0 }, {
          opacity: 1, duration: 2, repeat: -1, yoyo: true,
          ease: workflow && index % 2 ? "power1.out" : "none"
        }, workflow ? [0, .3, .5, .8, 1][index] : 2 - index);
      });
      playInView(visual, timeline);
    });
    document.addEventListener("visibilitychange", () => {
      illustrationLoops.forEach(({ timeline, trigger }) => timeline.paused(document.hidden || !trigger.isActive));
    });
    const taskArt = document.querySelector(".task-illustration");
    if (taskArt && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const card = taskArt.closest(".benefit-card");
      const cursors = [...taskArt.querySelectorAll(".task-cursor")].map((cursor) => ({
        x: gsap.quickTo(cursor, "x", { duration: 1, ease: "power2.out" }),
        y: gsap.quickTo(cursor, "y", { duration: 1, ease: "power2.out" })
      }));
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        cursors.forEach((cursor, index) => {
          const direction = index === 0 ? 1 : -.7;
          cursor.x(((event.clientX - bounds.left) / bounds.width - .5) * 64 * direction);
          cursor.y(((event.clientY - bounds.top) / bounds.height - .5) * 48 * direction);
        });
      });
      card.addEventListener("pointerleave", () => cursors.forEach((cursor) => { cursor.x(0); cursor.y(0); }));
    }
    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      if (element.closest(".hero")) return;
      gsap.fromTo(element, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1, y: 0, duration: .72, ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true }
      });
    });
    gsap.utils.toArray("[data-reveal-image]").forEach((element) => {
      if (element.classList.contains("hero-showcase")) return;
      gsap.fromTo(element, { autoAlpha: 0, y: 18, clipPath: "inset(12% 0 0 round 13px)" }, {
        autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0 round 13px)", duration: .8, ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 84%", once: true }
      });
    });
  }

  
  if (window.Lenis) {
    const lenis = new window.Lenis({ autoRaf: false, duration: 1.05, smoothWheel: true, syncTouch: false, anchors: true });
    lenis.on("scroll", ({ scroll, direction }) => {
      ScrollTrigger?.update();
      updateHeaderVisibility(scroll, direction);
    });
    const updateLenis = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("visibilitychange", () => document.hidden ? lenis.stop() : lenis.start());
    window.addEventListener("pagehide", () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    }, { once: true });
  }
})();
