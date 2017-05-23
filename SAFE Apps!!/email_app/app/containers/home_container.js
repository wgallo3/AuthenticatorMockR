import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = state => {
  return {
    coreData: state.initializer.coreData,
    inboxSize: state.initializer.inboxSize,
    savedSize: state.initializer.savedSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
