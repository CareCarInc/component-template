import React from 'react';

interface {{pascal}}Props {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const {{pascal}} = (props: {{pascal}}Props) => {
  return <div className={styles.{{camel}}}>This is a {{pascal}} component {props.value}</div>;
}

export default {{pascal}};
