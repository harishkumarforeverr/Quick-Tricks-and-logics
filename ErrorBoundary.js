import React, { Component } from "react";
// prompt user to confirm refresh
// function forceRefresh(){
//   // 设置只强制刷行一次页面
//   if(location.href.indexOf('#reloaded')===-1){
//     location.href = location.href + '#reloaded';
//     window.location.reload(true);
//     // window.location.reload();
//   }else{
//     alert('请手动刷新页面！');
//   }
// }

const RedirectToHomePage = () => {
  // window.history.pushState({}, "", "/");
  setTimeout(() => {
    window.location.reload();
  }, 200);
};
const a = window.location.hostname === "localhost";
const b = window.location.hostname === "127.0.0.1";
const c = window.location.hostname === "";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, a, b, c };
    window.addEventListener("error", (e) => {
      console.log("something went wrong");
    });
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("error has happedned", error);
    return {
      hasError: true,
      error,
      a,
      b,
      c,
      chunkError: /Loading( CSS)? chunk [\d]+ failed/.test(
        "Loading chunk 8 failed"
      ),
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      hasError: true,
      error,
      a,
      b,
      c,
      chunkError: /Loading( CSS)? chunk [\d]+ failed/.test(
        "Loading chunk 8 failed"
      ),
    });
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    const { error, hasError, chunkError } = this.state;
    console.log(error, hasError, chunkError);
    // if (this.state.a || this.state.b || this.state.c) {
    //   return this.props.children;
    // }
    if (this.state.chunkError) {
      return <RedirectToHomePage />;
    }
    if (error?.name === "ChunkLoadError") {
      return <RedirectToHomePage />;
    }
    if (hasError) {
      return <RedirectToHomePage />;
    }
    try {
      return this.props.children;
    } catch (e) {
      return <RedirectToHomePage />;
    }
  }
}
