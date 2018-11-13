- Read [these notes](https://suncoast.io/handbook/curriculum/front-end/react-i/lectures/day-01)

- Install `create-react-app`
- Generate new react app
- How does our React component appear on the page
- `import` statement
- `export` statement
- Every class based React component has a `render()` method
  - `return`s a single element (e.g. a `<div>` or a `<ul>` or a `<p>`) but that element can have children.
  - So this code is valid for a render:

```javascript
render() {
  return (
    <div>
      <p>This is a single element, a div, that has two child p elements</p>
      <p>This is the second p element</p>
    </div>
  )
}
```

However this is not valid

```javascript
render() {
  return (
    <p>This is invalid since the render is trying to return two elements</p>
    <p>This is the second p element</p>
  )
}
```

- The `HTML` in the middle of our `render` method is called [`JSX`](https://reactjs.org/docs/introducing-jsx.html) and it is very sensitive to syntax errors and unbalanced tags.

- A component can use another component if we `import` it and then use it.
- In this way components can be nested and reused.

- To control the content/style/behavior of a component it can accept `properties`, much like a regular HTML tag can.

```html
<p id="maintitle` class="title">Back to the Future</p>
```

- In this case, `class` and `id` are properties we are giving the `<p>` tag. The list of these properties are fixed by the browser

- However, React allow us to create _own own properties_ -- if we had a `<Movie>` component we could send it various properties like so:

```html
<Movie title="Back to the Future" releaseYear="1985" director="Robert Zemeckis"/>
```

- Inside our `Movie` component we could access these properties on an object called `this.props`. For instance we could output the title of the movie via `this.props.title`
- Maybe our render method looks like:

```javascript
render() {
  return (
    <p>
      The movie {this.props.title} was released in {this.props.releaseYear} and was directed by {this.props.director}
    </p>
  )
}
```

- Then in our application we could make a series of `<Movie>` components with different information

```html
<Movie title="Back to the Future" releaseYear="1985" director="Robert Zemeckis"/>
<Movie title="The Breakfast Club" releaseYear="1985" director="John Hughes"/>
<Movie title="E.T. The Extra-Terrestrial" releaseYear="1982" director="Steven Spielberg"/>
```

- When rendered this would give us

```html
<p>
  The movie Back to the Future was released in 1985 and was directed by Robert Zemeckis
</p>
<p>
  The movie The Breakfast Club was released in 1985 and was directed by John Hughes
</p>
<p>
  The movie E.T. The Extra-Terrestrial was released in 1982 and was directed by Steven Spielberg
</p>
```

- This makes components highly customizable and reusable
