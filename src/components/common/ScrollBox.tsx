import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

type ScrollBoxProps = {
  children: any
  rootEl?: HTMLElement | null
  onInView?: () => void
  boxId?: string
}
const ScrollBox: React.FC<ScrollBoxProps> = ({ children, rootEl, onInView, boxId }: ScrollBoxProps) => {
  const { ref: inViewRef, inView } = useInView({
    root: rootEl || null,
    threshold: 0,
  })
  useEffect(() => {
    if (inView && onInView) onInView()
  }, [inView, onInView])
  return (
    <ScrollBoxWrapper id={boxId}>
      {children}
      <div ref={inViewRef} />
    </ScrollBoxWrapper>
  )
}
export default ScrollBox
const ScrollBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
