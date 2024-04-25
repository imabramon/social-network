export const withProps = (propName, defaultValue) => (props) => props[propName] ?? defaultValue;
