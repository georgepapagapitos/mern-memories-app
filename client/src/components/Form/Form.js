import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

function Form() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_POST',
      payload: postData
    });
  }

  const clearForm = () => { console.log('clear'); }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Memory</Typography>
        <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(event) => setPostData({ ...postData, author: event.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form
