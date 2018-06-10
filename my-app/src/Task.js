import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: props.title
    };
  }

  render() {
    return (
      <div>
        <div className="tile box">
            {this.state.title}
        </div>
      </div>
    );
  }
}

export default Task;