import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 10,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#47B388',
  },
  image: {
    marginLeft: '15px'
  }
}));