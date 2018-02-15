//React Native-style custom components
import React from 'react';

const domReset = {margin: 0, padding: 0};

export const Page = props => <div {...props}>{props.children}</div>;

//React          flexDirection: 'row'
//React Native   flexDirection: 'column'
export const View = props => <div {...props} style={Object.assign({display: 'flex'}, props.style)}>
                               {props.children}
                             </div>;

export const Text = props => <p {...props} style={Object.assign({display: 'flex'}, domReset, props.style)}>
                               {props.children}
                             </p>;

export const TextInput = props => <input {...props} style={Object.assign({display: 'block'}, props.style)}/>;

//React          onClick
//React Native   onPress
export const Button = props => <button {...props} style={Object.assign({cursor: 'pointer'}, props.style)}>
                                 {props.title}
                               </button>;

export class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {error: null};
  }

  componentDidCatch(error) { this.setState({error}); }

  render() { return this.state.error ?
    <Text>{this.state.error.toString()}</Text> : this.props.children;
  }
}
