'use client'

import { useEffect } from 'react'

export default function ObeeVoucherWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//obee.com.au/common/js/dynamic/iframe.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="obee-widget"
      data-obee-url="volpino/gift-voucher"
      data-obee-widget-type="gv"
      data-obee-min-height="450"
      data-obee-add-height="50"
      data-obee-scrolltop="true"
    />
  )
}
