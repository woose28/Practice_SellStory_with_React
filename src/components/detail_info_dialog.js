import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BookFileUploader from './book_file_uploader';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme)=> ({
  button_fileAdd : {
    position : 'abosolute',
    fontFamily : 'GmarketMedium',
    marginTop : "3rem",
    backgroundColor : '#4287f5',
    color : '#fcfdff',
    display : 'inline-block',
    height : "3rem",
    "&:hover" : {
      backgroundColor : '#4287f5'
    }
  },
  button_toBack : {
    position : 'abosolute',
    fontFamily : 'GmarketMedium',
    marginTop : "3rem",
    backgroundColor : 'transparent',
    borderColor : "#BDBDBD",
    border : '1px solid',
    color : '#BDBDBD',
    display : 'inline-block',
    height : "3rem",
    "&:hover" : {
      backgroundColor : 'transparent'
    }
  }

}));
export default function DetailInfoDialog(props) {
  const classes = useStyles();
  const handleClose = () => {
    props.onClose(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
      >
        <DialogContent>
          <Button className={classes.button_fileAdd}>저장하고 다음</Button>
          <DialogContentText id="alert-dialog-description">
            <div>
              <Typography>전자책 등록*</Typography>
              <FormControl>
                <BookFileUploader></BookFileUploader>
                <FormHelperText>*PDF 파일 형식만 업로드 가능합니다.</FormHelperText>
              </FormControl>
            </div>
            <div>
              <Typography>상세 소개*</Typography>
              <FormHelperText>*필수입력 항목입니다.</FormHelperText>
              <FormControl>
                <BootstrapInput multiline={true} rows={10}></BootstrapInput>
                <FormHelperText>*최대 3000자 까지 입력 가능합니다.</FormHelperText>
              </FormControl>
            </div>
            <div>
              <Button className={classes.button_fileAdd}>중간 저장</Button>
              <Button className={classes.button_toBack}>이전으로</Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
