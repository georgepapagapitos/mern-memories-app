import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

function Form({ currentId, setCurrentId }) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const post = useSelector((store) => currentId ? store.posts.find((post) => post._id === currentId) : null);

  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch({
        type: 'UPDATE_POST',
        payload: { currentId, postData }
      })
    } else {
      dispatch({
        type: 'CREATE_POST',
        payload: postData
      });
    }
    clearForm();
  }

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      author: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    });
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Edit' : 'Create'} a Memory</Typography>
        <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(event) => setPostData({ ...postData, author: event.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',') })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;
