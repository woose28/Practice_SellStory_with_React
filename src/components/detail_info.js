import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileUpLoader from './file_uploader';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SubFileUpLoader from './subFile_uploader';
import Button from '@material-ui/core/Button';
import DetailInfoDialog from './detail_info_dialog';

const useStyles = makeStyles((theme) => ({
  cur_step : {
    fontSize : '15px',
    fontFamily : 'GmarketBold'
  },
  step : {
    fontSize : '15px',
    fontFamily : 'GmarketBold',
    color : 'gray'
  },
  component_container : {
    position : "relative",
    boxShadow : '0px 0px 7px gray',
    borderRadius: '5px',
    borderWidth : '2px',
    padding : '20px',
    marginBottom : "5rem",
  },
  container_mainImg : {
    marginBottom : "5rem",
  },
  input_name : {
    fontFamily : 'GmarketMedium',
    width : "8rem",
    position : 'relative',
    left : "1rem",
    flaot : 'left',
    display : 'inline-block',
    whiteSpace : 'pre-line'
  },
  input_mainFile : {

  },
  file_rule : {
    marginLeft : '3rem'
  },
  button_upload : {
    fontFamily : 'GmarketMedium',
    color : '#fcfdff',
    backgroundColor : '#4287f5',
    display : 'inline-block',
    "&:hover" : {
      backgroundColor : '#4287f5'
    }
  },
  button_save : {
    position : 'abosolute',
    fontFamily : 'GmarketMedium',
    marginTop : "3rem",
    backgroundColor : '#4287f5',
    left : 'calc(100% - 8rem)',
    color : '#fcfdff',
    display : 'inline-block',
    height : "3rem",
    "&:hover" : {
      backgroundColor : '#4287f5'
    }
  }
}));

export default function Detail_info(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOnClick = () => {
    props.onNext();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return(
    <div>
      <span className={classes.step}>기본 정보 > </span><span className={classes.cur_step}>상세 정보 > </span><span className={classes.step}>약관동의 > </span><span className={classes.step}>입점신청</span>
      <hr className="step_under_line"/>
      <div className={classes.component_container}>
        <div className={classes.container_mainImg}>
          <Typography className={classes.input_name}>{"전자책 \n대표이미지*"}</Typography>
          <FormControl>
            <FileUpLoader></FileUpLoader>
            <FormHelperText>*필수입력항목입니다.</FormHelperText>
          </FormControl>
          <FormControl className={classes.file_rule}>
            <FormHelperText>-권장규격:</FormHelperText>
            <FormHelperText>-PNG, JPG 형식만 지원합니다.</FormHelperText>
            <FormHelperText>-등록불가 이미지</FormHelperText>
            <FormControl>
              <FormHelperText>-저작권 침해 이미지</FormHelperText>
              <FormHelperText>-개인정보 표기(이름, 주소, 연락처 등)</FormHelperText>
              <FormHelperText>-광고, 홍보, 허위정보 포함내용</FormHelperText>
              <FormHelperText>-검증 불가능하거나 과장된 내용</FormHelperText>
              <FormHelperText>-기타 부적합한 이미지(자체검수)</FormHelperText>
            </FormControl>
          </FormControl>
        </div>
        <div>
          <Typography className={classes.input_name}>{"자료소개 \n이미지 등록"}</Typography>
          <FormControl>
            <SubFileUpLoader></SubFileUpLoader>
            <SubFileUpLoader></SubFileUpLoader>
            <SubFileUpLoader></SubFileUpLoader>
            <SubFileUpLoader></SubFileUpLoader>
            <SubFileUpLoader></SubFileUpLoader>
            <SubFileUpLoader></SubFileUpLoader>
          </FormControl>
          <FormControl className={classes.file_rule}>
            <FormHelperText>-권장규격:</FormHelperText>
            <FormHelperText>-PNG, JPG 형식만 지원합니다.</FormHelperText>
            <FormHelperText>-최대 6개 들옥 가능하며, 위에서 아래 순서로 우선 노출됩니다.</FormHelperText>
            <FormHelperText>-전자책을 설명할 수 있는 사진을 업로드해주세요.</FormHelperText>
            <FormHelperText>-등록불가 이미지</FormHelperText>
            <FormControl>
              <FormHelperText>-저작권 침해 이미지</FormHelperText>
              <FormHelperText>-개인정보 표기(이름, 주소, 연락처 등)</FormHelperText>
              <FormHelperText>-광고, 홍보, 허위정보 포함내용</FormHelperText>
              <FormHelperText>-검증 불가능하거나 과장된 내용</FormHelperText>
              <FormHelperText>-기타 부적합한 이미지(자체검수)</FormHelperText>
            </FormControl>
          </FormControl>
        </div>
        <div>
          <Typography className={classes.input_name}>{"전자책 등록"}</Typography>
          <Button className={classes.button_upload} onClick={handleOpen}>등록</Button>
        </div>
        <Button className={classes.button_save} onClick={handleOnClick}>저장하고 다음</Button>
      </div>
      <DetailInfoDialog open={open} onClose={handleClose}></DetailInfoDialog>
    </div>
  );
}
