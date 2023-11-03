import { style } from '@vanilla-extract/css'

import { primitiveColorVars } from '../../styles/vars.css.js'
import { root as Autolink } from './Autolink.css.js'

export const root = style({
  backgroundColor: primitiveColorVars.textAccent,
  display: 'inline-block',
  height: '0.8em',
  width: '0.8em',
  mask: 'url(/icons/link.svg) no-repeat center / contain',
  selectors: {
    [`${Autolink}:hover &`]: {
      backgroundColor: primitiveColorVars.textAccentHover,
    },
  },
})
