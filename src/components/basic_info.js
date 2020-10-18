import React from 'react';
//import { InputGroup, FormControl} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import "../css/index.css";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { fade, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles((theme)=>({
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
  input_name : {
    fontFamily : 'GmarketMedium',
    width : "8rem",
    position : 'relative',
    left : "1rem",
    flaot : 'left',
    display : 'inline-block'
  },
  input_lineOne : {
    fontFamily : 'GmarketMedium',
    position: 'relative',
    left : "3rem",
    flaot : 'left',
    display : 'inline-block',
    width: 'calc(100% - 5rem)'
  },
  input_container : {
    marginTop : '2rem'
  },
  input_formControl : {
    width : "calc(100% - 8rem)"
  },
  input_helper : {
    fontFamily : 'GmarketMedium',
    position : 'relative',
    left : '3rem'
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

export default function Basic_info(props){
  const classes = useStyles();
  const handleOnClick = () => {
    props.onNext();
  };
  return(
    <div>
      <span className={classes.cur_step}>기본 정보 > </span><span className={classes.step}>상세 정보 > </span><span className={classes.step}>약관동의 > </span><span className={classes.step}>입점신청</span>
      <hr className="step_under_line"/>
      <div className={classes.component_container}>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>전자책 제목*</Typography>
          <FormControl className={classes.input_formControl}>
            <FormHelperText className={classes.input_helper}>*필수입력항목입니다.</FormHelperText>
            <BootstrapInput  placeholder="최소 7자 이상 입력해주세요" className={classes.input_lineOne}></BootstrapInput>
            <FormHelperText className={classes.input_helper}>-특수문자는 사용 불가능합니다.</FormHelperText>
            <FormHelperText className={classes.input_helper}>-특정 분야에 대한 '노하우, 비법'인 경우 -했던 노하우 -했던 경험; 등의 형태로 적어주세요.</FormHelperText>
            <FormHelperText className={classes.input_helper}>-검증되지 않은 내용에대해 최초, 오직, 유일한 등의 단어 사용시 허위사실 유포에 해당 될 수 있습니다.</FormHelperText>
          </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>카테고리*</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="최소 7자 이상 입력해주세요" className={classes.input_lineOne}></BootstrapInput>
              <FormHelperText className={classes.input_helper}>*필수입력 항목입니다.</FormHelperText>
            </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>이 책을 읽으면 좋은 사람들*</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="이 전자책을 좋아할 만 한 사람은 누구인가요?" className={classes.input_lineOne} multiline={true} rows={4}></BootstrapInput>
            </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>집필하게 된 이유</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="해당 전자책을 쓰게 된 이유가 무엇인가요?" className={classes.input_lineOne} multiline={true} rows={5}></BootstrapInput>
            </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>목차*</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="전차잭의 목차를 적어주세요" className={classes.input_lineOne} multiline={true} rows={5}></BootstrapInput>
              <FormHelperText className={classes.input_helper}>*필수입력 항목입니다.</FormHelperText>
            </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>분량*</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="전자책이 총 몇 쪽인가요?" className={classes.input_lineOne}></BootstrapInput>
              <FormHelperText className={classes.input_helper}>*필수입력 항목입니다.</FormHelperText>
            </FormControl>
        </div>
        <div className={classes.input_container}>
          <Typography className={classes.input_name}>가격*</Typography>
            <FormControl className={classes.input_formControl}>
              <BootstrapInput  placeholder="판매 가격을 적어주세요." className={classes.input_lineOne}></BootstrapInput>
              <FormHelperText className={classes.input_helper}>*필수입력 항목입니다.</FormHelperText>
            </FormControl>
        </div>
        <Button className={classes.button_save} onClick={handleOnClick}>저장하고 다음</Button>
      </div>
    </div>
  );
}
