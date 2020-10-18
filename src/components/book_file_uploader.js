import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
//import AddCircleOutlined from '@material-ui/core/AddCircleOutlined';

const useStyles = makeStyles((theme)=>({
  button_book : {
      fontFamily : 'GmarketMedium',
      backgroundColor : '#4287f5',
      color : '#fcfdff',
      height : "3rem",
      outline : '0',
      display : 'inline-block',
      border : 'none'
  },
  icon_add : {

  },
  img_uploaded : {
    width : "100%",
    height : "100%"
  },
  img_name : {
    color : '#BDBDBD',
    position : 'relative',
    textAlign : 'left'
  }
}));

const BookFileUploader = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  const classes = useStyles();
  const [isUploaded, setUploaded] = React.useState(false);
  const [uploadedFile, setFile] = React.useState(null);
  const [fileURL, setURL] = React.useState(null);
  const [fileName, setFileName] = React.useState(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = event => {
    let reader = new FileReader();
    let uploaded_file = event.target.files[0];
    if(uploaded_file == null){
      return;
    }
    reader.onloadend = () => {
      setFile(uploaded_file);
      setURL(reader.result);
      setUploaded(true);
      setFileName(uploaded_file.name);
    };
    reader.readAsDataURL(uploaded_file);
  };
  return (
    <>
      <button onClick={handleClick} className={classes.button_book}>
        <Typography>파일 등록</Typography>
      </button>
      <input
        type="file"
        accept="pdf"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
}

export default BookFileUploader;
