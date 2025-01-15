import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

type MuiStyles = (props?: any) => Record<string, SxProps<Theme> | CSSProperties | undefined>;

export default MuiStyles;
