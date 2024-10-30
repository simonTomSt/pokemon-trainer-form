'use client';
import { forwardRef } from 'react';
import MUIAutocomplete, {
  type AutocompleteRenderInputParams
} from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { css, styled, useTheme } from '@mui/material/styles';
import Chevron from './icons/chevron';
import Spinner from './icons/spinner';

const Loading = styled(Spinner)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const StyledAutocomplete = styled(MUIAutocomplete)(
  () => css`
    div.MuiInputBase-root {
      padding: 0;
    }

    input {
      width: 100%;
      border: 0 !important;
      padding: 10px 12px !important;
    }
  `
);

export const StyledOption = styled(Box)(
  ({ theme }) => css`
    &:hover {
      background-color: ${theme.palette.primary.light} !important;
    }
  `
);

type Props = {
  options: { label: string; id: string }[];
  loading?: boolean;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
};

export const Autocomplete = forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const theme = useTheme();

    return (
      <StyledAutocomplete
        ref={ref}
        disableClearable
        renderOption={(props, option, state, ownerState) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              sx={{
                borderRadius: '0px',
                padding: '4px 12px',
                height: '36px',
                backgroundColor: 'transparent !important',
                ...theme.typography.body1,
                '&:hover': {
                  backgroundColor: theme.palette.primary.light + '!important'
                },
                ...(state.selected && {
                  color: theme.palette.primary.main + '!important',
                  backgroundColor: 'transparent !important'
                })
              }}
              component='li'
              {...optionProps}
            >
              {ownerState.getOptionLabel(option)}
            </Box>
          );
        }}
        popupIcon={
          props.loading ? (
            <Loading />
          ) : (
            <Box
              display='flex'
              justifyContent={'center'}
              alignItems={'center'}
              sx={{ width: '20px', height: '20px' }}
            >
              <Chevron />
            </Box>
          )
        }
        {...props}
      />
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
