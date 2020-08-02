import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  text: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: '26px',
    fontWeight: '550',
    color: '#444444',
  }
})