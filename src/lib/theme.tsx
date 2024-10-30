'use client';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-ibm-vga)',
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px'
    },
    h3: {
      fontSize: '40px',
      fontWeight: 400,
      lineHeight: '40px'
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '20px'
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '20px'
    },
    subtitle2: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '16px'
    }
  },
  palette: {
    primary: {
      main: '#9747FF',
      light: '#9747FF40',
      dark: '#7135BF'
    },
    error: {
      main: '#FF4E4E'
    },
    grey: {
      100: '#2A2A2A',
      200: '#7F7F7F',
      300: '#E4E4E4',
      400: '#EEEEEE'
    },
    text: {
      primary: '#2A2A2A'
    }
  },
  boxShadow: {
    purple: '0px 0px 0px 4px rgba(151, 71, 255, 0.25)',
    grey: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)'
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained'
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-sizeMedium': {
            height: '48px'
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // Customize the input base
          '& .MuiInputBase-root': {
            padding: 0,
            border: `1px solid var(--mui-palette-grey-400)`,
            '&:hover': {
              borderColor: 'var(--mui-palette-primary-main)'
            }
          },
          '& input': {
            width: '100%',
            border: '0 !important',
            padding: '10px 12px !important'
          }
        },
        paper: {
          boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)'
        }
      },
      defaultProps: {
        slotProps: {
          paper: {
            elevation: 0
          }
        },
        renderOption: (props, option, state, ownerState) => {
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
        }
      }
    }
  }
});

export default theme;
