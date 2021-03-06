import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class EditorDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';

export class EditorDemo extends Component {

    constructor() {
        super();
        this.state = {
            text1 : '<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>',
            text2 : ''
        };
    }

    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <h3 className="first">Default</h3>
                <Editor style={{height:'320px'}} value={this.state.text1} onTextChange={(e)=>this.setState({text1:e.htmlValue})}/>
                <p>Value: {this.state.text1 ||'empty'}</p>
                <Button label="Clear" icon="pi pi-times" onClick={()=> this.setState({text1:''})}/>

                <hr/>

                <h3 className="first">Custom Toolbar</h3>
                <Editor headerTemplate={header} style={{height:'320px'}} value={this.state.text2} onTextChange={(e)=>this.setState({text2:e.htmlValue})}/>
                <p>Value: {this.state.text2 ||'empty'}</p>
                <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({text2:''})}/>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';

const EditorDemo = () => {
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');

    const header = (
        <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold"></button>
            <button className="ql-italic" aria-label="Italic"></button>
            <button className="ql-underline" aria-label="Underline"></button>
        </span>
    );

    return (
        <div>
            <h3 className="first">Default</h3>
            <Editor style={{height:'320px'}} value={text1} onTextChange={(e)=> setText1(e.htmlValue)}/>
            <p>Value: {text1 ||'empty'}</p>
            <Button label="Clear" icon="pi pi-times" onClick={()=> setText1('')}/>

            <hr/>

            <h3 className="first">Custom Toolbar</h3>
            <Editor headerTemplate={header} style={{height:'320px'}} value={text2} onTextChange={(e)=> setText2(e.htmlValue)}/>
            <p>Value: {text2 ||'empty'}</p>
            <Button label="Clear" icon="pi pi-times" onClick={() => setText2('')}/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';

const EditorDemo = () => {
    const [text1, setText1] = useState<any>('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState<any>('');

    const header = (
        <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold"></button>
            <button className="ql-italic" aria-label="Italic"></button>
            <button className="ql-underline" aria-label="Underline"></button>
        </span>
    );

    return (
        <div>
            <h3 className="first">Default</h3>
            <Editor style={{height:'320px'}} value={text1} onTextChange={(e)=> setText1(e.htmlValue)}/>
            <p>Value: {text1 ||'empty'}</p>
            <Button label="Clear" icon="pi pi-times" onClick={()=> setText1('')}/>

            <hr/>

            <h3 className="first">Custom Toolbar</h3>
            <Editor headerTemplate={header} style={{height:'320px'}} value={text2} onTextChange={(e)=> setText2(e.htmlValue)}/>
            <p>Value: {text2 ||'empty'}</p>
            <Button label="Clear" icon="pi pi-times" onClick={() => setText2('')}/>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight lang="javascript">
                            {`
import {Editor} from 'primereact/editor';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Editor is used as a controlled component with <i>value</i> and <i>onTextChange</i> properties.</p>

                        <CodeHighlight>
                            {`
<Editor style={{height:'320px'}} value={this.state.text} onTextChange={(e) => this.setState({text: e.htmlValue})} />

`}
                        </CodeHighlight>

                        <h3>Toolbar</h3>
                        <p>Editor provides a default toolbar with common options, to customize it define your elements with the <i>headerTemplate</i>. Refer to <a href="http://quilljs.com/docs/modules/toolbar/">Quill documentation</a> for available controls.</p>

                        <CodeHighlight>
                            {`
const header = (
    <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
    </span>
);

<Editor style={{height:'320px'}} value={this.state.text} onTextChange={(e) => this.setState({text: e.htmlValue})} headerTemplate={header}/>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Value of the content.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the container.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the container.</td>
                                    </tr>
                                    <tr>
                                        <td>placeholder</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Placeholder text to show when editor is empty.</td>
                                    </tr>
                                    <tr>
                                        <td>readOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to instantiate the editor to read-only mode.</td>
                                    </tr>
                                    <tr>
                                        <td>modules</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Modules configuration, see <a href="http://quilljs.com/docs/modules/">here</a> for available options.</td>
                                    </tr>
                                    <tr>
                                        <td>formats</td>
                                        <td>string[]</td>
                                        <td>null</td>
                                        <td>Whitelist of formats to display, see <a href="http://quilljs.com/docs/formats/">here</a> for available options.</td>
                                    </tr>
                                    <tr>
                                        <td>headerTemplate</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Style and modules of the toolbar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onTextChange</td>
                                        <td>event.delta: Representation of the change.<br />
                                        event.source: Source of change. Will be either "user" or "api".<br />
                                        event.htmlValue: Current value as html.<br />
                                        event.textValue: Current value as text.<br /></td>
                                        <td>Callback to invoke when text of editor changes.</td>
                                    </tr>
                                    <tr>
                                        <td>onSelectionChange</td>
                                        <td>event.range: Object with index and length keys indicating where the selection exists.<br />
                                        event.oldRange: Object with index and length keys indicating where the previous selection was.<br />
                                        event.source: Source of change. Will be either "user" or "api".</td>
                                        <td>Callback to invoke when selected text of editor changes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>Refer to <a href="http://beta.quilljs.com/docs/api/#events">Quill documentation</a> for more information.</p>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-editor-container</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-editor-toolbar</td>
                                        <td>Toolbar of the editor</td>
                                    </tr>
                                    <tr>
                                        <td>p-editor-content</td>
                                        <td>Editable area</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <h3>Dependencies</h3>
                        <p><a href="http://quilljs.com">Quill</a> Editor 1.3+.</p>
                        <p>Resources of quill needs to be added to your application.</p>
                        <CodeHighlight lang="javascript">
                            {`
npm install quill --save

`}
                        </CodeHighlight>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="EditorDemo" sources={[key, value]} dependencies={{ "quill": "1.3.7" }} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
