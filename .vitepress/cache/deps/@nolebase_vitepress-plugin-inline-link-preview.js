import {
  Fragment,
  Teleport,
  TransitionGroup,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  nextTick,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-2367H4AA.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@1.28.0_vitepress@1.0.2_vue@3.4.21/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/index.js
import { useData as Oe } from "vitepress";
var M = Symbol("VPNolebaseInlineLinkPreview");
var x = {
  popupWidth: 600,
  popupHeight: 480,
  previewLocalHostName: true,
  selectorsToBeHided: [".VPNav", ".VPFooter", ".VPLocalNav", ".VPSidebar", ".VPDocFooter > .prev-next"],
  popupTeleportTargetSelector: "body",
  popupDelay: 1e3
};
function ue(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function V(e) {
  return typeof e == "function" ? e() : unref(e);
}
var Ne = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Te = Object.prototype.toString;
var Se = (e) => Te.call(e) === "[object Object]";
var z = () => {
};
function ke(e, n) {
  function t(...o) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return t;
}
function We(e, n = {}) {
  let t, o, r = z;
  const i = (s) => {
    clearTimeout(s), r(), r = z;
  };
  return (s) => {
    const u = V(e), a = V(n.maxWait);
    return t && i(t), u <= 0 || a !== void 0 && a <= 0 ? (o && (i(o), o = null), Promise.resolve(s())) : new Promise((c, p) => {
      r = n.rejectOnCancel ? p : c, a && !o && (o = setTimeout(() => {
        t && i(t), o = null, c(s());
      }, a)), t = setTimeout(() => {
        o && i(o), o = null, c(s());
      }, u);
    });
  };
}
function Ae(e) {
  return e || getCurrentInstance();
}
function Ve(e, n = 200, t = {}) {
  return ke(
    We(n, t),
    e
  );
}
function $(e, n = 200, t = {}) {
  const o = ref(e.value), r = Ve(() => {
    o.value = e.value;
  }, n, t);
  return watch(e, () => r()), o;
}
function Be(e, n = true, t) {
  Ae() ? onMounted(e, t) : n ? e() : nextTick(e);
}
function ce(e) {
  var n;
  const t = V(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
var B = Ne ? window : void 0;
function S(...e) {
  let n, t, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, r] = e, n = B) : [n, t, o, r] = e, !n)
    return z;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const i = [], l = () => {
    i.forEach((c) => c()), i.length = 0;
  }, s = (c, p, m, v) => (c.addEventListener(p, m, v), () => c.removeEventListener(p, m, v)), u = watch(
    () => [ce(n), V(r)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = Se(p) ? { ...p } : p;
      i.push(
        ...t.flatMap((v) => o.map((b) => s(c, v, b, m)))
      );
    },
    { immediate: true, flush: "post" }
  ), a = () => {
    u(), l();
  };
  return ue(a), a;
}
function pe() {
  const e = ref(false), n = getCurrentInstance();
  return n && onMounted(() => {
    e.value = true;
  }, n), e;
}
function Ce(e) {
  const n = pe();
  return computed(() => (n.value, !!e()));
}
function fe(e, n = {}) {
  const { window: t = B } = n, o = Ce(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let r;
  const i = ref(false), l = (a) => {
    i.value = a.matches;
  }, s = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", l) : r.removeListener(l));
  }, u = watchEffect(() => {
    o.value && (s(), r = t.matchMedia(V(e)), "addEventListener" in r ? r.addEventListener("change", l) : r.addListener(l), i.value = r.matches);
  });
  return ue(() => {
    u(), s(), r = void 0;
  }), i;
}
var $e = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function De(e = {}) {
  const {
    type: n = "page",
    touch: t = true,
    resetOnTouchEnds: o = false,
    initialValue: r = { x: 0, y: 0 },
    window: i = B,
    target: l = i,
    scroll: s = true,
    eventFilter: u
  } = e;
  let a = null;
  const c = ref(r.x), p = ref(r.y), m = ref(null), v = typeof n == "function" ? n : $e[n], b = (f) => {
    const w = v(f);
    a = f, w && ([c.value, p.value] = w, m.value = "mouse");
  }, P = (f) => {
    if (f.touches.length > 0) {
      const w = v(f.touches[0]);
      w && ([c.value, p.value] = w, m.value = "touch");
    }
  }, I = () => {
    if (!a || !i)
      return;
    const f = v(a);
    a instanceof MouseEvent && f && (c.value = f[0] + i.scrollX, p.value = f[1] + i.scrollY);
  }, E = () => {
    c.value = r.x, p.value = r.y;
  }, H = u ? (f) => u(() => b(f), {}) : (f) => b(f), O = u ? (f) => u(() => P(f), {}) : (f) => P(f), _ = u ? () => u(() => I(), {}) : () => I();
  if (l) {
    const f = { passive: true };
    S(l, ["mousemove", "dragover"], H, f), t && n !== "movement" && (S(l, ["touchstart", "touchmove"], O, f), o && S(l, "touchend", E, f)), s && n === "page" && S(i, "scroll", _, { passive: true });
  }
  return {
    x: c,
    y: p,
    sourceType: m
  };
}
function ne(e, n = {}) {
  const {
    handleOutside: t = true,
    window: o = B
  } = n, r = n.type || "page", { x: i, y: l, sourceType: s } = De(n), u = ref(e ?? (o == null ? void 0 : o.document.body)), a = ref(0), c = ref(0), p = ref(0), m = ref(0), v = ref(0), b = ref(0), P = ref(true);
  let I = () => {
  };
  return o && (I = watch(
    [u, i, l],
    () => {
      const E = ce(u);
      if (!E)
        return;
      const {
        left: H,
        top: O,
        width: _,
        height: f
      } = E.getBoundingClientRect();
      p.value = H + (r === "page" ? o.pageXOffset : 0), m.value = O + (r === "page" ? o.pageYOffset : 0), v.value = f, b.value = _;
      const w = i.value - p.value, N = l.value - m.value;
      P.value = _ === 0 || f === 0 || w < 0 || N < 0 || w > _ || N > f, (t || !P.value) && (a.value = w, c.value = N);
    },
    { immediate: true }
  ), S(document, "mouseleave", () => {
    P.value = true;
  })), {
    x: i,
    y: l,
    sourceType: s,
    elementX: a,
    elementY: c,
    elementPositionX: p,
    elementPositionY: m,
    elementHeight: v,
    elementWidth: b,
    isOutside: P,
    stop: I
  };
}
function Me(e = {}) {
  const {
    window: n = B,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: r = true,
    includeScrollbar: i = true
  } = e, l = ref(t), s = ref(o), u = () => {
    n && (i ? (l.value = n.innerWidth, s.value = n.innerHeight) : (l.value = n.document.documentElement.clientWidth, s.value = n.document.documentElement.clientHeight));
  };
  if (u(), Be(u), S("resize", u, { passive: true }), r) {
    const a = fe("(orientation: portrait)");
    watch(a, () => u());
  }
  return { width: l, height: s };
}
function Ye() {
  return {
    livesInIframe: computed(() => {
      try {
        return window.self !== window.top && window.top !== void 0 && window.top !== null && "location" in window.top;
      } catch {
        return false;
      }
    })
  };
}
function oe(e, n, t) {
  return new Promise((o, r) => {
    let i = 0;
    function l() {
      i++;
      try {
        const s = t();
        s instanceof Promise ? s.then((u) => {
          u ? o(u) : i < e ? setTimeout(l, n) : o(null);
        }).catch((u) => {
          i < e ? setTimeout(l, n) : r(u);
        }) : s ? o(s) : i < e ? setTimeout(l, n) : o(null);
      } catch (s) {
        i < e ? setTimeout(l, n) : r(s);
      }
    }
    l();
  });
}
var de = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
};
function X(e, n) {
  if (!n)
    return;
  const t = e.split(".");
  let o = n;
  for (const r of t)
    if (o = o == null ? void 0 : o[r], !o)
      return;
  return typeof o == "string" ? o : String(o);
}
function Fe(e, n, t) {
  const { locales: o, defaultLocales: r } = t;
  if (!o && !r || !e)
    return n;
  let i = o[e];
  i || (i = r[e], i || (i = t.defaultEnLocale));
  const l = X(n, i);
  if (l)
    return l;
  const s = r[e];
  if (s) {
    const a = X(n, s);
    if (a)
      return a;
  }
  const u = X(n, t.defaultEnLocale);
  return u || n;
}
function Xe(e, n, t) {
  return () => {
    const o = inject(e, { locales: {} }), { lang: r } = Oe(), i = computed(() => r.value || "en");
    return {
      t(l, s) {
        const u = computed(() => Fe(i.value, l, {
          locales: o.locales || {},
          defaultLocales: n,
          defaultEnLocale: t
        }));
        return u.value ? !s || !s.props ? u.value : computed(() => {
          let a = u.value;
          return Object.entries(s.props).forEach(([c, p]) => {
            a = a.replace(new RegExp(`{{${c}}}`, "g"), String(p));
          }), a;
        }).value : l;
      }
    };
  };
}
var U = {
  popup: {
    loading: "Loading",
    loadingAriaLabel: "Loading",
    openInCurrentPage: "Open in current page",
    openInCurrentPageAriaLabel: "Open in current page",
    iframeAriaLabel: "Inline link preview of link at {href}"
  }
};
var j = {
  popup: {
    loading: "加载中",
    loadingAriaLabel: "加载中",
    openInCurrentPage: "在当前页面打开",
    openInCurrentPageAriaLabel: "在当前页面打开",
    iframeAriaLabel: "在 {href} 的链接的行内链接预览"
  }
};
var je = {
  "zh-CN": j,
  "zh-Hans": j,
  zh: j,
  "en-US": U,
  en: U
};
var Re = Xe(M, je, U);
var ze = ["href"];
var Ue = {
  key: 0,
  class: "VPNolebaseInlinePreviewLinkPopupOpenBtnIcon",
  "i-icon-park-outline:full-screen-one": "",
  "inline-flex": "~",
  "ml-2": "",
  "items-center": "",
  "justify-center": "",
  "text-xs": ""
};
var Ge = defineComponent({
  __name: "LinkButton",
  props: {
    showExternalIcon: { type: Boolean },
    href: {}
  },
  setup(e) {
    const n = e;
    return (t, o) => (openBlock(), createElementBlock("a", {
      flex: "~",
      href: n.href,
      class: "VPNolebaseInlinePreviewLinkPopupOpenBtn text-$vp-c-brand-1 active:brightness-95 hover:brightness-97",
      transition: "all duration-200 ease",
      bg: "$vp-c-bg",
      border: "1 solid $vp-c-divider",
      shadow: "sm",
      absolute: "",
      "bottom-0": "",
      "m-4": "",
      "items-center": "",
      "rounded-lg": "",
      "px-4": "",
      "py-2": "",
      "text-sm": ""
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true),
      n.showExternalIcon ? (openBlock(), createElementBlock("span", Ue)) : createCommentVNode("", true)
    ], 8, ze));
  }
});
var Ke = de(Ge, [["__scopeId", "data-v-a10fda58"]]);
var Qe = ["src", "aria-label"];
var qe = ["aria-label"];
var Ze = createBaseVNode("span", {
  "i-svg-spinners:3-dots-bounce": "",
  "text-3xl": ""
}, null, -1);
var Je = { flex: "1" };
var et = defineComponent({
  __name: "PopupIframe",
  props: {
    href: {}
  },
  setup(e) {
    const n = e, t = inject(M, x), o = ref(true), { t: r } = Re();
    async function i(a) {
      return await oe(50, 200, () => a.contentDocument ? a.contentDocument : i(a));
    }
    async function l(a, c) {
      return await oe(3, 100, () => {
        const p = a.querySelector(c);
        return p || null;
      });
    }
    async function s(a, c) {
      const p = await i(a);
      return p ? {
        selector: c,
        element: await l(p, c)
      } : {
        selector: c,
        element: null
      };
    }
    async function u(a) {
      const c = a.target, p = t.selectorsToBeHided || x.selectorsToBeHided || [];
      let m = [];
      try {
        m = await Promise.all(p.map((v) => s(c, v)));
      } catch (v) {
        console.error("VPNolebaseInlinePreviewLink:", v);
      }
      m.forEach((v) => {
        v.element ? v.element.style.setProperty("display", "none", "important") : console.warn(`VPNolebaseInlinePreviewLink: desired selecting element with selector '${v.selector}' not found. Consider remove it from 'options.selectorsToBeHided' if it's not constantly rendered.`);
      }), t.handleIframeLoaded && (t.handleIframeLoaded instanceof Promise ? await t.handleIframeLoaded(window, c) : t.handleIframeLoaded(window, c)), setTimeout(() => {
        o.value = false;
      }, 250);
    }
    return (a, c) => (openBlock(), createElementBlock(Fragment, null, [
      withDirectives(createBaseVNode("iframe", {
        border: "none",
        "m-0": "",
        "w-full": "",
        "overflow-hidden": "",
        "rounded-lg": "",
        "p-0": "",
        class: "VPNolebaseInlinePreviewLinkPopupIframe",
        flex: "1",
        src: n.href,
        "aria-label": unref(r)("popup.iframeAriaLabel", { props: { href: n.href } }),
        onLoad: u
      }, null, 40, Qe), [
        [vShow, !o.value]
      ]),
      withDirectives(createBaseVNode("div", {
        flex: "~ col 1",
        "m-0": "",
        "w-full": "",
        "items-center": "",
        "justify-center": "",
        "p-0": "",
        class: "VPNolebaseInlinePreviewLinkPopupLoading bg-$vp-c-bg text-$vp-c-text-1",
        "aria-label": unref(r)("popup.loadingAriaLabel")
      }, [
        Ze,
        createBaseVNode("span", null, toDisplayString(unref(r)("popup.loading")), 1)
      ], 8, qe), [
        [vShow, o.value]
      ]),
      createVNode(Ke, {
        href: n.href,
        title: unref(r)("popup.openInCurrentPage"),
        "aria-label": unref(r)("popup.openInCurrentPage"),
        "show-external-icon": ""
      }, {
        default: withCtx(() => [
          createBaseVNode("span", Je, toDisplayString(unref(r)("popup.openInCurrentPage")), 1)
        ]),
        _: 1
      }, 8, ["href", "title", "aria-label"])
    ], 64));
  }
});
var tt = ["href"];
var nt = {
  key: 0,
  class: "link-preview-link-content-external-icon",
  "i-octicon:link-external-16": "",
  "mx-0.5": "",
  "h-4": "",
  "w-4": "",
  "align-middle": ""
};
var ot = defineComponent({
  __name: "InlineLinkPreview",
  props: {
    href: {}
  },
  setup(e) {
    const n = e, t = inject(M, x), o = ref(), r = ref(), i = computed(() => t.popupWidth && t.popupWidth > 0 ? t.popupWidth : x.popupWidth || 600), l = computed(() => t.popupHeight && t.popupHeight > 0 ? t.popupHeight : x.popupHeight || 480), s = computed(() => t.popupDelay && t.popupDelay > 0 ? t.popupDelay : x.popupDelay || 1e3), u = computed(() => t.popupTeleportTargetSelector || x.popupTeleportTargetSelector || "body"), a = pe(), { width: c, height: p } = Me(), { livesInIframe: m } = Ye(), v = fe("(min-width: 768px)"), { isOutside: b } = ne(o), { isOutside: P } = ne(r), I = ref(false), E = ref(false);
    watch(o, (h) => {
      h && (h.addEventListener("mouseenter", () => {
        I.value = true;
      }), h.addEventListener("mouseleave", () => {
        I.value = false;
      }));
    }), watch(r, (h) => {
      h && (h.addEventListener("mouseenter", () => {
        E.value = true;
      }), h.addEventListener("mouseleave", () => {
        E.value = false;
      }));
    });
    const H = $(b, s.value), O = $(P, s.value), _ = $(I, s.value), f = $(E, s.value), w = ref(0), N = ref(0), Y = ref(false), Q = computed(() => n.href.startsWith("#")), W = computed(() => {
      if (Q.value)
        return "";
      try {
        return new URL(n.href, window.location.href).host;
      } catch {
        return "";
      }
    }), q = computed(() => !window || !window.location || !W.value ? false : t.previewAllHostNames ? true : (t.previewLocalHostName === void 0 ? x.previewLocalHostName : t.previewLocalHostName) ? window.location.host === W.value : typeof t.handleShouldPreviewHostNames == "function" ? t.handleShouldPreviewHostNames(W.value) : Array.isArray(t.previewHostNamesBlocked) && t.previewHostNamesBlocked.includes(W.value) ? false : !!(Array.isArray(t.previewHostNamesAllowed) && t.previewHostNamesAllowed.includes(W.value))), ve = computed(() => !m.value && q.value && Y.value);
    function C(h) {
      if (h) {
        setTimeout(() => {
          H.value && !_.value && O.value && !f.value && (Y.value = false);
        }, 200);
        return;
      }
      if (!((_.value || f.value) && (!H.value || !O.value)) || !o.value)
        return;
      Y.value = true;
      const { x: F, y: Z, right: he, height: me, width: we, bottom: ge } = o.value.getBoundingClientRect();
      he + i.value < c.value ? w.value = F + window.scrollX : w.value = F + window.scrollX - i.value + we, ge + l.value < p.value ? N.value = Z + window.scrollY + me + 4 : N.value = Z + window.scrollY - l.value - 4;
    }
    return watch(H, (h) => C(h)), watch(_, (h) => C(!h)), watch(O, (h) => C(h)), watch(f, (h) => C(!h)), (h, F) => (openBlock(), createElementBlock("a", {
      ref_key: "anchorElement",
      ref: o,
      class: "VPNolebaseInlinePreviewLink",
      relative: "",
      href: n.href
    }, [
      renderSlot(h.$slots, "default", {}, void 0, true),
      unref(a) && !Q.value && !q.value ? (openBlock(), createElementBlock("span", nt)) : createCommentVNode("", true),
      unref(a) && unref(v) ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: u.value
      }, [
        createVNode(TransitionGroup, { name: "fade" }, {
          default: withCtx(() => [
            unref(a) && ve.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "iframeWrapperElement",
              ref: r,
              flex: "~ col",
              absolute: "",
              "top-0": "",
              "z-100": "",
              "m-0": "",
              "overflow-hidden": "",
              "rounded-lg": "",
              "p-0": "",
              border: "1 solid $vp-c-divider",
              class: "VPNolebaseInlinePreviewLinkWrapper max-w-[100vw]",
              style: normalizeStyle({
                left: `${w.value}px`,
                top: `${N.value}px`,
                width: `${i.value}px`,
                height: `${l.value}px`
              }),
              shadow: "2xl"
            }, [
              createVNode(et, {
                href: n.href
              }, null, 8, ["href"])
            ], 4)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 8, tt));
  }
});
var rt = de(ot, [["__scopeId", "data-v-f639faa6"]]);
var re = {
  VPNolebaseInlineLinkPreview: rt
};
var ut = {
  install(e, n) {
    typeof n < "u" && typeof n == "object" && e.provide(M, n);
    for (const t of Object.keys(re))
      e.component(t, re[t]);
  }
};
export {
  M as InjectionKey,
  rt as NolebaseInlineLinkPreview,
  ut as NolebaseInlineLinkPreviewPlugin
};
//# sourceMappingURL=@nolebase_vitepress-plugin-inline-link-preview.js.map
