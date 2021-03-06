import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="keyFilter" showInputStyle>
                        <h1>KeyFilter</h1>
                        <p>KeyFilter feature restricts user input based on a regular expression.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-grid p-fluid">
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="integer">Integers</label>
                                <InputText id="integer" keyfilter="int" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="numbers">Numbers</label>
                                <InputText id="numbers" keyfilter="num" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="money">Hex</label>
                                <InputText id="money" keyfilter="money" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="integer">Integers</label>
                                <InputText id="hex" keyfilter="hex" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="alpha">Alphabetic</label>
                                <InputText id="alpha" keyfilter="alpha"/>
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="alphanum">Alphanumberic</label>
                                <InputText id="alphanum" keyfilter="alphanum" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="block">Block {`< > * !`}</label>
                                <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="spaceblock">Block space key</label>
                                <InputText id="spaceblock" keyfilter={/[^\s]/} />
                            </div>
                        </div>
                    </div>
                </div>

                <KeyFilterDoc />
            </div>
        )
    }
}

class KeyFilterDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <h3>Filtering</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="int" placeholder="Integers"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="num" placeholder="Numbers"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="money" placeholder="Money"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="hex" placeholder="Hex"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                    </div>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <h3>Filtering</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="int" placeholder="Integers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="num" placeholder="Numbers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="money" placeholder="Money"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="hex" placeholder="Hex"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                </div>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <h3>Filtering</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="int" placeholder="Integers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="num" placeholder="Numbers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="money" placeholder="Money"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="hex" placeholder="Hex"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                </div>
            </div>
        </div>
    )
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
import {InputText} from 'primereact/inputtext';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>KeyFilter property is integrated in input components such as InputText using the <i>keyfilter</i> property. The value of the filter
                            can either a built-in regular expression or a custom one. Following input only accepts integers.</p>

                        <CodeHighlight>
                            {`
<InputText keyfilter="int" />

`}
                        </CodeHighlight>

                        <h3>Built-in Filters</h3>
                        <p>Commonly used cases have their own built-in shortcuts.</p>
                        <ul>
                            <li>pint: Positive integers</li>
                            <li>int: Integers</li>
                            <li>pnum: Positive numbers</li>
                            <li>num: Numbers</li>
                            <li>hex: Hexadecimal</li>
                            <li>email: Email</li>
                            <li>alpha: Alphabetic</li>
                            <li>alphanum: Alphanumeric</li>
                        </ul>

                        <h3>Custom Filter</h3>
                        <p>A custom filter is enabled by binding a regular expression, an example that blocks special characters would be;</p>
                        <CodeHighlight>
                            {`
<InputText keyfilter={/^[^#<>*!]+$/}/>

`}
                        </CodeHighlight>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="KeyFilterDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
