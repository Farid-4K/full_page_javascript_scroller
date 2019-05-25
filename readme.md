# Full Page Scroller
Small package that performs smooth page turning on vanilla javascript.

# Easing function
example easing function. You can take one in more of this [gist](https://gist.github.com/gre/1650294)

```js
const easeInOutQuad = (t) => 
  (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
```
# Example
I recommend not using the linear function, because it turns out shit
```js
const easing = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
new PageScroller({
  /* container which contains pages | document body */
  container: document.querySelector('.app__scroll'),
  /* pages */
  pages: document.querySelectorAll('.app__page'),
  /* duration in ms */
  duration: 600,
  /* offset from top if you need it */
  offset: 140,
  easing
}).start();
```
# Licence

Copyright 2019, Farid Akhmedov farid5ip50@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.[
