
import { useState } from 'react';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, Badge, Dialog } from '@material-ui/core';
import PostDialog from './PostDialog/PostDialog';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({ post, setCurrentId }) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    console.log(post);
    setOpenDialog(true);
  }

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} onClick={() => handleOpen(post)} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.author}</Typography>
          <Typography variant="body2">{moment(post.dateCreated).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch({ type: 'LIKE_POST', payload: { id: post._id } })}>
            <Badge badgeContent={post.likeCount} color="secondary">
              <ThumbUpAltIcon fontSize="large" />
            </Badge>
          </Button>
          <Button size="small" color="secondary" onClick={() => dispatch({ type: 'DELETE_POST', payload: { id: post._id } })}>
            <DeleteIcon fontSize="large" />
          </Button>
        </CardActions>
      </Card>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} scroll="paper" className={classes.image}>
        <PostDialog post={post} setOpenDialog={setOpenDialog} />
      </Dialog>
    </>
  );
}

export default Post
