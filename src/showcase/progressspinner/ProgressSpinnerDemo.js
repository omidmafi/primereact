import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProgressSpinner} from '../../components/progressspinner/ProgressSpinner';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="progressSpinner">
                        <h1>ProgressSpinner</h1>
                        <p>ProgressSpinner is a process status indicator.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <ProgressSpinner />

                        <h5>Custom</h5>
                        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
                    </div>
                </div>

                <ProgressSpinnerDoc/>
            </div>
        );
    }
}

class ProgressSpinnerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <h3>Basic</h3>
                <ProgressSpinner/>

                <h3>Custom</h3>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {

    return (
        <div>
            <h3>Basic</h3>
            <ProgressSpinner/>

            <h3>Custom</h3>
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {

    return (
        <div>
            <h3>Basic</h3>
            <ProgressSpinner/>

            <h3>Custom</h3>
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
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
import {ProgressSpinner} from 'primereact/progressspinner';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ProgressSpinner is defined using ProgressSpinner element.</p>
                        <CodeHighlight>
                            {`
<ProgressSpinner/>

`}
                        </CodeHighlight>

                        <h3>Colors</h3>
                        <p>Colors of the spinner can be changed by overriding the keyframes animation</p>
                        <CodeHighlight lang="markup">
                            {`
@keyframes ui-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}

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
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>strokeWidth</td>
                                        <td>string</td>
                                        <td>2</td>
                                        <td>Width of the circle stroke.</td>
                                    </tr>
                                    <tr>
                                        <td>fill</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Color for the background of the circle.</td>
                                    </tr>
                                    <tr>
                                        <td>animationDuration</td>
                                        <td>string</td>
                                        <td>2s</td>
                                        <td>Duration of the rotate animation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                        <td>p-progress-spinner</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progress-circle</td>
                                        <td>SVG element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progress-path</td>
                                        <td>Circle element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <LiveEditor name="ProgressSpinnerDemo" sources={[key, value]} />
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}
