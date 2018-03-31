import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import { fetchCategories } from './actions';
import { AppStyle } from './AppStyles.js';
import Footer from '../../components/Footer';

export class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div id="page-wrap" style={ { height: '100%' } }>
        <NavBar />
        <AppStyle location={ this.props.router.location.pathname }>
          { React.Children.toArray(this.props.children) }
        </AppStyle>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
