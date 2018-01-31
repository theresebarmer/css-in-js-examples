export const typography = {
  h2: {
    fontFamily: 'Verdana',
    fontSize: '14px'
  }
};

export const palette = {
  softcolor: 'moccasin',
  hardcolor: 'magenta',
  accentuationcolor: 'springgreen'
}

export const explanationBlock = {
  box: {
    borderRadius: "15px",
    padding: "10px",
    border: '2px solid ' + palette.accentuationcolor,
    backgroundColor: palette.softcolor,
    color: palette.hardcolor,
  },
  headline: {
    fontWeight: "normal",
    letterSpacing: "5px",
    paddingLeft: "15px",
    fontStyle: "italic",
    ...typography.h2
  }
};

export const wisdomblockhover = {
  ...explanationBlock,
  box: {
    ...explanationBlock.box,
    ':hover': {
      backgroundColor: 'blue'
    }
  }
};