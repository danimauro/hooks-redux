import React, { useState } from "react";
import { connect } from "react-redux";
/* actions redux */
import findSuggestions from "../../redux/actions/findSuggestions";
import findResults from "../../redux/actions/findResults";
/* react router */
import { withRouter } from "react-router-dom";
import Page from "./page";

function AppBar(props) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeText = text => {
    setText(text);
    props.findSuggestions(text);
    setSuggestions(props.suggestions);
  };

  const onChangeSelection = text => {
    setText(text);
    props.findResults(text);
    setSuggestions(props.suggestions);
    props.history.push('/results');
  };

  return (
    <Page
      text={text}
      suggestions={suggestions}
      onChangeText={onChangeText}
      onChangeSelection={onChangeSelection}
    />
  );
}

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions
  };
};

const mapDispatchToProps = {
  findSuggestions,
  findResults
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppBar)
);
