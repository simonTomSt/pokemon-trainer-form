'use client';
import { styled, css } from '@mui/material/styles';
import MUITextField from '@mui/material/TextField';

export const Input = styled(MUITextField)(
  ({ theme }) => css`
    border-radius: 2px;
    width: 100%;
    height: 48px;

    .Mui-focused {
      transition: all 300ms;
      box-shadow: ${theme.boxShadow.purple};
    }

    .MuiInputBase-input {
      padding: 10px 12px;
      font-size: ${theme.typography.body1.fontSize};
      line-height: ${theme.typography.body1.lineHeight};
      border: 1px solid ${theme.palette.grey[400]};

      &::placeholder {
        color: ${theme.palette.grey[200]};
      }
    }
  `
);
