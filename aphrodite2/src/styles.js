import {StyleSheet} from 'aphrodite';

export const palette = {
  softcolor: 'moccasin',
  hardcolor: 'magenta',
  accentuationcolor: 'springgreen'
}

export const sheet = StyleSheet.create({
  h2: {
    fontFamily: 'Verdana',
    fontSize: '14px'
  },
  box: {
    borderRadius: "15px",
    padding: "10px",
    border: '2px solid ' + palette.accentuationcolor,
    backgroundColor: palette.softcolor,
    color: palette.hardcolor,
  },
  boxHeadline: {
    fontWeight: "normal",
    letterSpacing: "5px",
    paddingLeft: "15px",
    fontStyle: "italic"
  },
  blueHover: {
    ':hover': {
      backgroundColor: 'blue'
    }
  }
});
