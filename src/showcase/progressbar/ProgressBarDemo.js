import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from '../../components/progressbar/ProgressBar';
import { Growl } from '../../components/growl/Growl';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class ProgressBarDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: 0
        };

        this.displayValueTemplate = this.displayValueTemplate.bind(this);
    }

    displayValueTemplate(value) {
        return (
            <>
                {value}/<b>100</b>
            </>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                this.growl.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(this.interval);
            }

            this.setState({
                value1: val
            });
        }, 2000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="progressBar">
                        <h1>ProgressBar</h1>
                        <p>ProgressBar is a process status indicator</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <div className="card">
                        <h5>Dynamic</h5>
                        <ProgressBar value={this.state.value1}></ProgressBar>

                        <h5>Static</h5>
                        <ProgressBar value={50}></ProgressBar>

                        <h5>Custom display value</h5>
                        <ProgressBar value={40} displayValueTemplate={this.displayValueTemplate}></ProgressBar>

                        <h5>Indeterminate</h5>
                        <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
                    </div>
                </div>
                <ProgressBarDoc />
            </div>
        );
    }
}

export class ProgressBarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {ProgressBar} from 'primereact/progressbar';
import {Growl} from 'primereact/growl';

export class ProgressBarDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: 0
        };

        this.displayValueTemplate = this.displayValueTemplate.bind(this);
    }

    displayValueTemplate(value) {
        return (
            <>
                {value}/<b>100</b>
            </>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;

            if(val >= 100) {
                val = 100;
                this.growl.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
                clearInterval(this.interval);
            }

            this.setState({
                value1: val
            });
        }, 2000);
    }

    componentWillUnmount () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el}></Growl>

                <h3 className="first">Dynamic</h3>
                <ProgressBar value={this.state.value1}></ProgressBar>

                <h3>Static</h3>
                <ProgressBar value={50}></ProgressBar>

                <h3>Custom display value</h3>
                <ProgressBar value={40} displayValueTemplate={this.displayValueTemplate}></ProgressBar>

                <h3>Indeterminate</h3>
                <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {ProgressBar} from 'primereact/progressbar';
import {Growl} from 'primereact/growl';

const ProgressBarDemo = () => {
    const [value1, setValue1] = useState(0);
    let growl = useRef(null);
    let interval = setInterval(() => {
        let val = value1;
        val += Math.floor(Math.random() * 10) + 1;

        if(val >= 100) {
            val = 100;
            growl.current.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
            clearInterval(interval);
        }

        setValue1(val);
    }, 2000);

    const displayValueTemplate = (value) => {
        return (
            <>
                {value}/<b>100</b>
            </>
        );
    }

    useEffect(() => {
        return (() => {
            if (interval) {
                clearInterval(interval);
            }
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Growl ref={growl}></Growl>

            <h3 className="first">Dynamic</h3>
            <ProgressBar value={value1}></ProgressBar>

            <h3>Static</h3>
            <ProgressBar value={50}></ProgressBar>

            <h3>Custom display value</h3>
            <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>

            <h3>Indeterminate</h3>
            <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {ProgressBar} from 'primereact/progressbar';
import {Growl} from 'primereact/growl';

const ProgressBarDemo = () => {
    const [value1, setValue1] = useState(0);
    let growl = useRef<any>(null);
    let interval: any = setInterval(() => {
        let val = value1;
        val += Math.floor(Math.random() * 10) + 1;

        if (val >= 100) {
            val = 100;
            growl.current.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
            clearInterval(interval);
        }

        setValue1(val);
    }, 2000);

    const displayValueTemplate = (value: number) => {
        return (
            <>
                {value}/<b>100</b>
            </>
        );
    }

    useEffect(() => {
        return (() => {
            if (interval) {
                clearInterval(interval);
            }
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Growl ref={growl}></Growl>

            <h3 className="first">Dynamic</h3>
            <ProgressBar value={value1}></ProgressBar>

            <h3>Static</h3>
            <ProgressBar value={50}></ProgressBar>

            <h3>Custom display value</h3>
            <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>

            <h3>Indeterminate</h3>
            <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
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
import {ProgressBar} from 'primereact/progressbar';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress.</p>
                        <CodeHighlight>
                            {`
<ProgressBar value={this.state.value} />

`}
                        </CodeHighlight>
                        <p>Indeterminate is simplly enabled using <i>mode</i> property.</p>
                        <CodeHighlight>
                            {`
<ProgressBar mode="indeterminate" />

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
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Current value of the progress.</td>
                                    </tr>
                                    <tr>
                                        <td>showValue</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Show or hide progress bar value.</td>
                                    </tr>
                                    <tr>
                                        <td>unit</td>
                                        <td>string</td>
                                        <td>%</td>
                                        <td>Unit sign appended to the value.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
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
                                        <td>mode</td>
                                        <td>string</td>
                                        <td>determinate</td>
                                        <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
                                    </tr>
                                    <tr>
                                        <td>displayValueTemplate</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Custom display value template</td>
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
                                        <td>p-progressbar</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-determinate</td>
                                        <td>Container element of a determinate progressbar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-indeterminate</td>
                                        <td>Container element of an indeterminate progressbar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-value</td>
                                        <td>Element whose width changes according to value.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-label</td>
                                        <td>Label element that displays the current value.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="ProgressBarDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
