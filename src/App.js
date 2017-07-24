import React, { Component } from 'react';
import marked from 'marked';

const sampleText =
  'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: sampleText,
    };
  }

  renderMarkdown() {
    const rawMarkup = marked(this.state.text, { sanitized: true });
    return <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />;
  }

  render() {
    return (
      <div className="container">
        <h1>Markdown Preview</h1>
        <div className="row content">
          <div className="col-md-6 markdown">
            <textarea
              rows="30"
              className="form-control"
              value={this.state.text}
              onChange={event => {
                this.setState({ text: event.target.value });
              }}
            />
          </div>
          <div className="col-md-6 markup">
            {this.renderMarkdown()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
