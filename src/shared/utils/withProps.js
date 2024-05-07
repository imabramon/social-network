export const withProps = (propName, defaultValue) => (props) =>
  (props[propName] === 'no-change' ? defaultValue : props[propName]) ??
  defaultValue
