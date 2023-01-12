import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const boxstyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

export default function AppModal({children,modalContent,ModalLabel,className} : {children:any , modalContent : any,ModalLabel:any,className?:string}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      {ModalLabel(handleOpen)}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        sx={boxstyle}
        className={className}>
          {modalContent}
        </Box>
      </Modal>
    </div>
  );
}