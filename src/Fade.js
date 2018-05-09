import React from 'react';
import Transition from 'react-transition-group/Transition';

class Fade extends React.Component {
  static defaultProps = {
    timeout: 300
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const className = this.props.in ? 'fade in' : 'fade';

    return (
      <Transition
        {...this.props}
        className={className}
        timeout={this.props.timeout}
      />
    );
  }
}

export default Fade;
