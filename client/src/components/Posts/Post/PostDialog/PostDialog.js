import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './styles';

export default function PostDialog({ post }) {

  const classes = useStyles();

  return (
    <div>
      <DialogTitle>{post.title} by {post.author}</DialogTitle>
      <DialogContent>
        <img src={post.selectedFile} className={classes.image} />
      </DialogContent>
    </div>
  );
}
