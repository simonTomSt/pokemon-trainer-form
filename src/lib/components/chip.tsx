import { colors } from '@mui/material';
import MUIChip from '@mui/material/Chip';
import { styled, css } from '@mui/material/styles';

export const Chip = styled(MUIChip)(
  ({ theme }) => css`
    padding: 4px 8px;
    border-radius: 16px;
    background-color: ${theme.palette.primary.light};
    color: ${colors.common.black};
    height: 28px;

    .MuiChip-label {
      font-size: ${theme.typography.subtitle1.fontSize};
      line-height: ${theme.typography.subtitle1.lineHeight};
      padding: 0;
      margin: 0;
    }
  `
);
