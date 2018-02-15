import React from 'react';
import { connect } from 'react-redux';
import { Text } from '../utils/elements';
import { visitProfile } from '../actions/visit';

const mapStateToProps = ({ users }, { match }) => {
  const pageId = match.params.id;
  return ({user: users[pageId], pageId});
};

const mapDispatchToProps = dispatch => ({
  VisitProfile: id => dispatch(visitProfile(id)),
});

class Profile extends React.Component {
  componentWillMount() { this.props.VisitProfile(this.props.pageId); }

  render() {
    return [
      <Text key='Details' style={{fontStyle: 'italic'}}>
        {this.props.user ? this.props.user.email : null}
      </Text>,

      <Text key='page'>profile page</Text>
    ];
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
