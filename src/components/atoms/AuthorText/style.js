import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  text: {
    color: '#111111',
    textAlign: 'center',
    fontSize: '25px',
    fontFamily: 'sans-serif',
    fontWeight: '700'
  },
  border: {
    borderBottom: 'solid',
    borderColor: 'white',
    borderWidth: '2.5px',
  }
})