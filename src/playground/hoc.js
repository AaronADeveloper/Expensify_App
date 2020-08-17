import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1> Info </h1> <p> The info is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. DO NOT SHARE</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
//the return statement returns a new component which is the HOC

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(
// <AdminInfo info="There are the details" isAdmin={true} />,
//document.getElementById("app")
//);

ReactDOM.render(
  <AuthInfo info="There are the details" isAuthenticated={true} />,
  document.getElementById("app")
);
