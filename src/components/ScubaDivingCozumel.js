import React, {
  Component
} from 'react';


class ScubaDivingCozumel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    // TODO: maybe a api call can happen here to get the information 
    // for this box
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>Text will go here</p>
      </div>
    );
  };
}

export default ScubaDivingCozumel;
