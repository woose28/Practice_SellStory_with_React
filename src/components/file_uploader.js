import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
//import AddCircleOutlined from '@material-ui/core/AddCircleOutlined';

const useStyles = makeStyles((theme)=>({
  button_mainImg : {
      backgroundColor : 'transparent',
      borderColor : '#BDBDBD',
      borderRadius : '0.5rem',
      height : "15rem",
      width : "15rem",
      outline : '0',
      border : '1px solid'
  },
  icon_add : {

  },
  img_uploaded : {

    width : "100%",
    height : "100%"
  }

}));

const FileUploader = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  const classes = useStyles();
  const [isUploaded, setUploaded] = React.useState(false);
  const [uploadedFile, setFile] = React.useState(null);
  const [fileURL, setURL] = React.useState(null);

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
    };
    reader.readAsDataURL(uploaded_file);
  };
  return (
    <>
      <button onClick={handleClick} className={classes.button_mainImg}>
        {isUploaded ? <img src={fileURL} className={classes.img_uploaded}></img> : <Icon color="disabled">add_circle_outlined</Icon>}
      </button>
      <input
        type="file"
        accept=".jpg, .png"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
}

export default FileUploader;
