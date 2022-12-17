import React from 'react'

import * as MUIicon from '@mui/icons-material'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'
interface IconProps {
  icon?: keyof typeof MUIicon
  fontSize?: 'small' | 'inherit' | 'large' | 'medium' | undefined
  sx?: SxProps<Theme>
}
const Icon: React.FC<IconProps> = ({ icon, fontSize, sx }) => {
  const Icon = icon && MUIicon[icon]

  return <>{Icon && <Icon fontSize={fontSize} sx={sx} />}</>
}

export default Icon
