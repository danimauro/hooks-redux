import React from "react";
import { connect } from "react-redux";

/* React router DOM */
import { withRouter } from "react-router-dom";

import Page from "./page";

const Results = props => {

  const { results } = props;

  return (
    <Page
      results={results}
      goTo={path => {
        props.history.push(path);
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default withRouter(connect(mapStateToProps)(Results));
