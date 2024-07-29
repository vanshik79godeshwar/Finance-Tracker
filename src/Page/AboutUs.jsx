import React, { useEffect, useState }from'react';
import AboutUs from ''

function App() {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(AboutUs.htm)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default App;