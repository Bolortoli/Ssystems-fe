"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function Messenger() {
  return (
    <FacebookProvider appId="869162254717688" chatSupport>
      <CustomChat pageId="253455633219686" minimized={true} />
    </FacebookProvider>
  )
}