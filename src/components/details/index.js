import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Redux */
import findCurrentItem from "../../redux/actions/findCurrentItem";

/* React router DOM */
import { withRouter } from "react-router-dom";

import Page from "./page";

const Details = props => {
  const { currentItem } = props;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    props.findCurrentItem(parseInt(props.match.params.itemId));
  },[]);

  return (
    <Page
      currentItem={currentItem}
      goTo={path => {
        props.history.push(path);
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    currentItem: state.currentItem
  };
};

const mapDispatchToProps = {
  findCurrentItem
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details)
);
