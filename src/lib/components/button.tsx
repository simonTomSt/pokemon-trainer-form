'use client';
import { colors } from '@mui/material';
import MUIButton from '@mui/material/Button';
import { styled, css, type Theme } from '@mui/material/styles';

type ColorProp = 'primary' | 'soft';

export const Button = styled(MUIButton)<{ color?: ColorProp }>(
  ({ theme, color = 'primary' }) => css`
    border-radius: 2px;
    padding: 10px 24px;
    font-weight: 400;
    font-size: ${theme.typography.body1.fontSize};
    line-height: ${theme.typography.body1.lineHeight};
    text-transform: capitalize;
    transition: background-color 300ms ease-in;

    &:focus-visible {
      box-shadow: ${theme.boxShadow.purple};
    }

    &:active {
      box-shadow: ${theme.boxShadow.purple};
    }

    ${colorStyles(theme)[color]};
  `
);

const colorStyles = (theme: Theme) => ({
  primary: css`
    background-color: ${theme.palette.primary.main};
    color: ${colors.common.white};

    &:hover,
    &:focus-visible,
    &:active {
      background-color: ${theme.palette.primary.dark};
    }
  `,
  soft: css`
    background-color: ${theme.palette.grey[400]};
    color: ${theme.palette.grey[100]};

    &:hover,
    &:focus-visible,
    &:active {
      background-color: ${theme.palette.grey[300]};
    }
  `
});
