import type { SVGProps } from 'react'

/** Delicate line-art rose used as the Rosa Dei brand mark. */
export function RoseMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 21.5c-2.2 0-4-1.7-4-3.8 0-2 1.8-3.7 4-3.7s4 1.7 4 3.7c0 2.1-1.8 3.8-4 3.8Z" />
      <path d="M24 14c0-2.4 2-4.4 4.6-4.4 2.4 0 4.4 1.8 4.4 4.2 0 1.1-.4 2-1 2.8" />
      <path d="M24 14c0-2.4-2-4.4-4.6-4.4-2.4 0-4.4 1.8-4.4 4.2 0 1.1.4 2 1 2.8" />
      <path d="M17.6 22.3c-2.3.6-4.6-.7-5.3-3-.7-2.2.6-4.5 3-5.2" />
      <path d="M30.4 22.3c2.3.6 4.6-.7 5.3-3 .7-2.2-.6-4.5-3-5.2" />
      <path d="M24 21.5c0 2.9-1.6 5.2-4.4 6.6M24 21.5c0 2.9 1.6 5.2 4.4 6.6" />
      <path d="M24 21.5V40" />
      <path d="M24 30c-2.6-.4-4.8-2.2-5.6-4.7-1.9 2 .3 5.4 5.6 5.9" />
      <path d="M24 35c2.6-.4 4.8-2.2 5.6-4.7 1.9 2-.3 5.4-5.6 5.9" />
    </svg>
  )
}

/** Instagram glyph (lucide v1 no longer ships brand icons). */
export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  )
}
