import {
  defineComponent,
  getCurrentScope,
  nextTick,
  onMounted,
  onScopeDispose,
  renderSlot,
  unref,
  watch
} from "./chunk-2367H4AA.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/.pnpm/@nolebase+vitepress-plugin-highlight-targeted-heading@1.28.0_vitepress@1.0.2/node_modules/@nolebase/vitepress-plugin-highlight-targeted-heading/dist/index.js
import { useRoute as N } from "vitepress";
function _(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function h(e) {
  return typeof e == "function" ? e() : unref(e);
}
var L = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var j = Object.prototype.toString;
var k = (e) => j.call(e) === "[object Object]";
var C = () => {
};
function E(e) {
  var t;
  const n = h(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
var O = L ? window : void 0;
function P(...e) {
  let t, n, i, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, o] = e, t = O) : [t, n, i, o] = e, !t)
    return C;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const a = [], d = () => {
    a.forEach((r) => r()), a.length = 0;
  }, p = (r, s, c, l) => (r.addEventListener(s, c, l), () => r.removeEventListener(s, c, l)), m = watch(
    () => [E(t), h(o)],
    ([r, s]) => {
      if (d(), !r)
        return;
      const c = k(s) ? { ...s } : s;
      a.push(
        ...n.flatMap((l) => i.map((y) => p(r, l, y, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), u = () => {
    m(), d();
  };
  return _(u), u;
}
var V = defineComponent({
  __name: "HighlightTargetedHeading",
  setup(e) {
    function t() {
      if (!window || !window.location || !window.location.hash)
        return;
      const i = decodeURIComponent(window.location.hash);
      if (!i)
        return;
      let o;
      try {
        o = document.querySelector(i);
      } catch (a) {
        console.error(a);
        return;
      }
      o && (o.classList.contains("VPNolebaseHighlightTargetedHeading") || o.classList.add("VPNolebaseHighlightTargetedHeading"), o.classList.remove("VPNolebaseHighlightTargetedHeadingAnimated"), setTimeout(() => {
        o && o.classList.add("VPNolebaseHighlightTargetedHeadingAnimated");
      }, 10));
    }
    const n = N();
    return onMounted(t), watch(n, async () => {
      await nextTick(), t();
    }), P("hashchange", t), (i, o) => renderSlot(i.$slots, "default");
  }
});
var g = {
  NolebaseHighlightTargetedHeading: V
};
var D = {
  install(e) {
    for (const t of Object.keys(g))
      e.component(t, g[t]);
  }
};
export {
  V as NolebaseHighlightTargetedHeading,
  D as NolebaseNolebaseHighlightTargetedHeadingPlugin
};
//# sourceMappingURL=@nolebase_vitepress-plugin-highlight-targeted-heading.js.map
