import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-top: 4.125rem;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  padding: 0 3.75rem 0 20rem;
  transition: background 0.5s, color 0.5s;
  width: 100%;

  ${media.lessThan('large')`
    padding: 0 0 3rem 0;
  `}
`