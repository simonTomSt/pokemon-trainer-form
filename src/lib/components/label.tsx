'use client';
import MUIInputLabel from '@mui/material/InputLabel';
import { styled, css } from '@mui/material/styles';

export const Label = styled(MUIInputLabel)(
  ({ theme }) => css`
    font-size: ${theme.typography.subtitle1.fontSize};
    line-height: ${theme.typography.subtitle1.lineHeight};
    color: ${theme.palette.grey[100]};
    margin-bottom: 2px;
  `
);
