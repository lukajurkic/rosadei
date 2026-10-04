'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type RootRedirectProps = {
  target?: string
}

/**
 * Handles instant automatic redirect both via client-side router navigation
 * and via static HTML meta refresh tag for static export compatibility.
 */
export function RootRedirect({ target = '/ruze' }: RootRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    router.replace(target)
  }, [router, target])

  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </noscript>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
    </>
  )
}
