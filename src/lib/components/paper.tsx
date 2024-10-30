'use client';
import MUIPaper from '@mui/material/Paper';
import { styled, css } from '@mui/material/styles';

export const Paper = styled(MUIPaper)(
  ({ theme }) => css`
    border-radius: 2px;
    border: 1px solid ${theme.palette.grey[400]};
    box-shadow: none;
  `
);
