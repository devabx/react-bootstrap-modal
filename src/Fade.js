import React from 'react';
import Transition from 'react-transition-group/Transition';

class Fade extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const className = this.props.in ? 'fade in' : 'fade';

    return (
      <Transition
        {...this.props}
        className={className}
        enteredClassName="in"
        enteringClassName="in"
      />
    );
  }
}

export default Fade;
