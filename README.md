![Logo](https://basic-tools.vercel.app/static/media/basic-tools.182b331a.png)

# Basic Tools

[Demo](https://basic-tools.vercel.app/?path=/story/readme--page)

Basic Tools is a collection of components made to create [React](www.reactjs.org) application with ease.
It includes all the standard elements we usually need to build a webpage.

It makes use of [Stlyed Components](https://styled-components.com/) and its prop system is based on [Styled System](https://styled-system.com/).

# Theming

Theme has been built using the default Styled System keys plus some useful extra props to have better control on specific elements.
For instance you have the possibility to transform a simple text in anchor element using the `link` prop and assign it to the desired item. Those styles are controlled via the custom prop `linkStyles` in the theme.

<br />

```
 <Text link="cta" href="#">
   Go to another place
 </Text>
```

<br />

If you need to override the standard theme, you can do it updating the keys you want to change in the theme object.
Say you need to update the font family used by the theme, you can ovveride the default `theme` object with your `fonts` and `fontWeights` options.

<br />

```
const theme = {
  ...btTheme,
  mode,
  fontWeights: {
    light: 100,
    regular: 400,
    semibold: 600,
    bold: 700
  },
  fonts: {
    normal: '"Inter", sans-serif',
    title: '"Inter", sans-serif'
  }
};

```

<br />

### Standard Theme Props

| Theme Key   | CSS Properties                                                                                                                                                           |     |     |     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- | --- | --- |
| space       | margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap |
| fontSizes   | font-size                                                                                                                                                                |
| colors      | color, background-color, border-color                                                                                                                                    |
| fonts       | font-family                                                                                                                                                              |
| fontWeights | font-weight                                                                                                                                                              |
| lineHeights | line-height                                                                                                                                                              |
| sizes       | width, height, min-width, max-width, min-height, max-height                                                                                                              |
| radii       | border-radius                                                                                                                                                            |
| shadows     | box-shadow, text-shadow                                                                                                                                                  |
| zIndices    | z-index                                                                                                                                                                  |

<br />

### Custom System Theme Props

| Theme Key    | Component |
| ------------ | --------- |
| buttonStyles | Button    |
| textStyles   | Text      |
| linkStyles   | Text      |

<br />
<br />

> Notes: This library has been made mainly for personal use and with simplicity in mind. If you feel it could fits your needs or if you think it could be improved, do not hesitate to use it or to collaborate to its melioration, you are welcome.
