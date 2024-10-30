import { colors, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { css } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@/lib/components/button';

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

const ModalContent = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    background-color: ${colors.common.white};
    box-shadow: ${theme.boxShadow.grey};
    border: 0;
    outline: none;
    border-radius: 2px;
    text-align: center;
    padding: 32px;
  `
);

export const SuccessModal = ({ open, onClose }: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <ModalContent>
        <Typography
          id='modal-modal-title'
          variant='h3'
          component='h2'
          mb='32px'
        >
          Success
        </Typography>
        <Button onClick={onClose}>Reset Form</Button>
      </ModalContent>
    </Modal>
  );
};
