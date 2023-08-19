const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = plugin(
  function ({ addBase, addComponents, addUtilities, addVariant, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      h3: { fontSize: theme("fontSize.lg") },
      h4: { fontSize: theme("fontSize.base") },
      h5: { fontSize: theme("fontSize.sm") },
      h6: { fontSize: theme("fontSize.xs") },
    });
    addComponents({
      ".swap": {
        "@apply relative inline-grid cursor-pointer select-none place-content-center":
          {},
        "& > *": {
          "@apply col-start-1 row-start-1 transition-opacity transition-transform duration-300 ease-out":
            {},
        },
        "& input": {
          "@apply appearance-none hidden": {},
        },
        "& .swap-on, & .swap-indeterminate, & input:indeterminate ~ .swap-on": {
          "@apply opacity-0": {},
        },
        "& input:checked ~ .swap-off, &.swap-active .swap-off, & input:indeterminate ~ .swap-off":
          {
            "@apply opacity-0": {},
          },
        "& input:checked ~ .swap-on, &.swap-active .swap-on, & input:indeterminate ~ .swap-indeterminate":
          {
            "@apply opacity-100": {},
          },
        "&.swap-rotate .swap-on, &.swap-rotate .swap-indeterminate, &.swap-rotate input:indeterminate ~ .swap-on":
          {
            "@apply rotate-45": {},
          },
        "&.swap-rotate input:checked ~ .swap-off, &.swap-rotate.swap-active .swap-off, &.swap-rotate input:indeterminate ~ .swap-off":
          {
            "@apply -rotate-45": {},
          },
        "&.swap-rotate input:checked ~ .swap-on, &.swap-rotate.swap-active .swap-on, &.swap-rotate input:indeterminate ~ .swap-indeterminate":
          {
            "@apply rotate-0": {},
          },
        "&.swap-flip": {
          transformStyle: "preserve-3d",
          perspective: "16em",
        },
        "&.swap-flip .swap-on, &.swap-flip .swap-indeterminate, &.swap-flip input:indeterminate ~ .swap-on":
          {
            "@apply opacity-100": {},
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          },
        "&.swap-flip input:checked ~ .swap-off, &.swap-flip.swap-active .swap-off, &.swap-flip input:indeterminate ~ .swap-off":
          {
            "@apply opacity-100": {},
            transform: "rotateY(-180deg)",
            backfaceVisibility: "hidden",
          },
        "&.swap-flip input:checked ~ .swap-on, &.swap-flip.swap-active .swap-on, &.swap-flip input:indeterminate ~ .swap-indeterminate":
          {
            transform: "rotateY(0deg)",
          },
      },
      ".modal": {
        "@apply isolate pointer-events-none fixed grid h-full max-h-none w-full max-w-none justify-items-center opacity-0 overscroll-contain z-50 bg-transparent text-inherit duration-200 ease-out transition-all overflow-y-hidden m-0 p-0 inset-0 backdrop:bg-black/30 backdrop:animate-fade backdrop:animate-ease-out backdrop:animate-duration-200 open:pointer-events-auto open:visible open:opacity-100":
          {},
        ":root:has(:is(&-open, &:target, &-toggle:checked + &, &[open]))": {
          overflow: "hidden",
        },
        "&-scroll": {
          overscrollBehavior: "auto",
        },
        "&-open, &:target, &-toggle:checked + &, &[open]": {
          "@apply pointer-events-auto visible opacity-100": {},
        },
        "&-action": {
          "@apply flex justify-end mt-6": {},
        },
        "&-toggle": {
          "@apply fixed h-0 w-0 appearance-none opacity-0": {},
        },
        ":where(&)": {
          "@apply items-center": {},
        },
        "&[open] &-box": {
          "@apply scale-100": {},
        },
        "&-box": {
          "@apply max-h-[calc(100vh_-_5em)] col-start-1 row-start-1 w-11/12 max-w-lg bg-white transition ease-out duration-200 shadow-2xl overflow-y-auto overscroll-contain p-6 scale-90":
            {},
        },
        "&-backdrop": {
          "@apply -z-[1] col-start-1 row-start-1 grid self-stretch justify-self-stretch text-transparent":
            {},
          "& button": {
            "@apply cursor-default": {},
          },
        },
        "&:not(dialog:not(&-open)), &::backdrop": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          animation: "modal-pop 0.2s ease-out",
        },
        "&-open &-box, &-toggle:checked + & &-box, &:target &-box, &[open] &-box":
          {
            "@apply scale-100 translate-y-0": {},
          },
        "&-action > :not([hidden]) ~ :not([hidden])": {
          " --tw-space-x-reverse": "0",
          marginRight: "calc(0.5rem * var(--tw-space-x-reverse))",
          marginLeft: "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))",
        },
        "&-top": {
          "@apply place-items-start": {},
        },
        "&-middle": {
          "@apply place-items-center": {},
        },
        "&-bottom": {
          "@apply place-items-end": {},
        },
        "&-top :where(&-box)": {
          "@apply w-full max-w-none -translate-y-10 scale-100 rounded-t-none rounded-b-2xl":
            {},
        },
        "&-middle :where(&-box)": {
          "@apply w-11/12 max-w-lg translate-y-0 scale-90 rounded-t-2xl rounded-b-2xl":
            {},
        },
        "&-bottom :where(&-box)": {
          "@apply w-full max-w-none translate-y-10 scale-100 rounded-b-none rounded-t-2xl":
            {},
        },
      },
    });
    addUtilities({
      ".content-auto": {
        "content-visibility": "auto",
      },
      ".content-hidden": {
        "content-visibility": "hidden",
      },
      ".content-visible": {
        "content-visibility": "visible",
      },
    });
    addVariant("hocus", ["&:hover", "&:focus"]);
    addVariant("optional", "&:optional");
    addVariant("group-optional", ":merge(.group):optional &");
    addVariant("peer-optional", ":merge(.peer):optional ~ &");
  },
  {
    theme: {},
  }
);
