import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Messages } from '../../components/messages/Messages';
import { Message } from '../../components/message/Message';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class MessagesDemo extends Component {

    constructor(props) {
        super(props);

        this.addMessages = this.addMessages.bind(this);
        this.clearMessages = this.clearMessages.bind(this);
    }

    componentDidMount() {
        this.msgs1.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);

        this.msgs3.show({
            severity: 'info', sticky: true, content: (
                <>
                    <img alt="logo" src="showcase/images/logo.png" width="32" />
                    <div className="p-ml-2">Always bet on Prime.</div>
                </>
            )
        });
    }

    addMessages() {
        this.msgs2.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }

    clearMessages() {
        this.msgs2.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="messages">
                        <h1>Messages</h1>
                        <p>Messages is used to display inline messages with various severities.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Severities</h5>
                        <Messages ref={(el) => this.msgs1 = el} />

                        <h5>Dynamic</h5>
                        <Button type="button" onClick={this.addMessages} label="Show" className="p-mr-2" />
                        <Button type="button" onClick={this.clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />

                        <Messages ref={(el) => this.msgs2 = el} />

                        <h5>Static Content</h5>
                        <Messages ref={(el) => this.msgs3 = el} />

                        <h5>Inline Message</h5>
                        <p>Message component is used to display inline messages mostly within forms.</p>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-3">
                                <Message severity="info" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="success" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="warn" text="Message Content" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Message severity="error" text="Message Content" />
                            </div>
                        </div>

                        <h5>Validation Message</h5>
                        <div className="p-formgroup-inline p-mb-2">
                            <label htmlFor="username1" className="p-sr-only">Username</label>
                            <InputText id="username1" placeholder="Username" className="p-invalid p-mr-2" />
                            <Message severity="error" text="Username is required" />
                        </div>
                        <div className="p-formgroup-inline">
                            <label htmlFor="email" className="p-sr-only">email</label>
                            <InputText id="email" placeholder="Email" className="p-invalid p-mr-2" />
                            <Message severity="error" />
                        </div>

                        <h5>Form Layout</h5>
                        <div className="p-field p-fluid">
                            <label htmlFor="username2">Username</label>
                            <InputText id="username2" aria-describedby="username-help" className="p-invalid p-mr-2" />
                            <small id="username-help" className="p-invalid">Username is not available.</small>
                        </div>
                    </div>
                </div>

                <MessagesDoc></MessagesDoc>
            </div>
        )
    }
}

export class MessagesDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class MessagesDemo extends Component {

    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    showInfo() {
        this.messages.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    showWarn() {
        this.messages.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError() {
        this.messages.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    showSticky() {
        this.messages.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showMultiple() {
        this.messages.show([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
        ]);
    }

    clear() {
        this.messages.clear();
    }

    render() {
        return (
            <div>
                <Messages ref={(el) => this.messages = el} />

                <h3 style={{marginTop: 0}}>Severities</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-3">
                        <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Button onClick={this.showError} label="Error" className="p-button-danger" />
                    </div>
                </div>

                <h3>Options</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <Button onClick={this.showMultiple} label="Multiple" />
                    </div>
                    <div className="p-col-12 p-md-4">
                        <Button onClick={this.showSticky} label="Sticky" />
                    </div>
                    <div className="p-col-12 p-md-4">
                        <Button onClick={this.clear} icon="pi pi-times" style={{float: 'right'}} label="Clear" />
                    </div>
                </div>

                <h3>Inline Message CSS</h3>
                <p>CSS helpers to display inline messages mostly within forms.</p>
                <div className="p-grid">
                    <div className="p-col-12 p-md-3">
                        <Message severity="info" text="PrimeReact Rocks" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Message severity="success" text="Record Saved" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Message severity="warn" text="Are you sure?" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <Message severity="error" text="Field is required" />
                    </div>
                </div>

                <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                    <InputText placeholder="Username" className="p-error" style={{marginRight: '.25em'}} />
                    <Message severity="error" text="Field is required" />
                </div>
                <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                    <InputText placeholder="Email" className="p-error" style={{marginRight: '.25em'}} />
                    <Message severity="error" />
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
import React, { useRef } from 'react';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const MessagesDemo = () => {
    let messages = useRef(null);

    const showSuccess = () => {
        messages.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    };

    const showInfo = () => {
        messages.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    };

    const showWarn = () => {
        messages.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    };

    const showError = () => {
        messages.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    };

    const showSticky = () => {
        messages.current.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    };

    const showMultiple = () => {
        messages.current.show([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
        ]);
    }

    const clear = () => {
        messages.current.clear();
    }

    return (
        <div>
            <Messages ref={messages} />

            <h3 style={{marginTop: 0}}>Severities</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-3">
                    <Button onClick={showSuccess} label="Success" className="p-button-success" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showInfo} label="Info" className="p-button-info" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showWarn} label="Warn" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showError} label="Error" className="p-button-danger" />
                </div>
            </div>

            <h3>Options</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <Button onClick={showMultiple} label="Multiple" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showSticky} label="Sticky" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={clear} icon="pi pi-times" style={{float: 'right'}} label="Clear" />
                </div>
            </div>

            <h3>Inline Message CSS</h3>
            <p>CSS helpers to display inline messages mostly within forms.</p>
            <div className="p-grid">
                <div className="p-col-12 p-md-3">
                    <Message severity="info" text="PrimeReact Rocks" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="success" text="Record Saved" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="warn" text="Are you sure?" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="error" text="Field is required" />
                </div>
            </div>

            <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                <InputText placeholder="Username" className="p-error" style={{marginRight: '.25em'}} />
                <Message severity="error" text="Field is required" />
            </div>
            <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                <InputText placeholder="Email" className="p-error" style={{marginRight: '.25em'}} />
                <Message severity="error" />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const MessagesDemo = () => {
    let messages = useRef<any>(null);

    const showSuccess = () => {
        messages.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    };

    const showInfo = () => {
        messages.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    };

    const showWarn = () => {
        messages.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    };

    const showError = () => {
        messages.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    };

    const showSticky = () => {
        messages.current.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    };

    const showMultiple = () => {
        messages.current.show([
            {severity: 'info', summary: 'Message 1', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 2', detail: 'PrimeReact rocks'},
            {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'}
        ]);
    }

    const clear = () => {
        messages.current.clear();
    }

    return (
        <div>
            <Messages ref={messages} />

            <h3 style={{marginTop: 0}}>Severities</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-3">
                    <Button onClick={showSuccess} label="Success" className="p-button-success" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showInfo} label="Info" className="p-button-info" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showWarn} label="Warn" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showError} label="Error" className="p-button-danger" />
                </div>
            </div>

            <h3>Options</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <Button onClick={showMultiple} label="Multiple" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showSticky} label="Sticky" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={clear} icon="pi pi-times" style={{float: 'right'}} label="Clear" />
                </div>
            </div>

            <h3>Inline Message CSS</h3>
            <p>CSS helpers to display inline messages mostly within forms.</p>
            <div className="p-grid">
                <div className="p-col-12 p-md-3">
                    <Message severity="info" text="PrimeReact Rocks" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="success" text="Record Saved" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="warn" text="Are you sure?" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Message severity="error" text="Field is required" />
                </div>
            </div>

            <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                <InputText placeholder="Username" className="p-error" style={{marginRight: '.25em'}} />
                <Message severity="error" text="Field is required" />
            </div>
            <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                <InputText placeholder="Email" className="p-error" style={{marginRight: '.25em'}} />
                <Message severity="error" />
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
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>A single message is specified by the Message interface in PrimeReact that defines various properties such as severity,
               summary and detail. Messages are displayed by using the <i>show</i> method on the ref of the Messages instance.</p>

                        <p>Note that for animations, messages requires react-transition-group package.</p>

                        <CodeHighlight>
                            {`
<Messages ref={(el) => this.messages = el}></Messages>

`}
                        </CodeHighlight>

                        <CodeHighlight lang="javascript">
                            {`
this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});

`}
                        </CodeHighlight>

                        <h3>Message API</h3>
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
                                        <td>severity</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Severity of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>summary</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>Summary content of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>detail</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>Detail content of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>closable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether the message can be closed manually using the close icon.</td>
                                    </tr>
                                    <tr>
                                        <td>sticky</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>When enabled, message is not removed automatically.</td>
                                    </tr>
                                    <tr>
                                        <td>life</td>
                                        <td>number</td>
                                        <td>3000</td>
                                        <td>Delay in milliseconds to close the message automatically.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Severities</h3>
                        <p>There are four possible values for the severity of a message.</p>

                        <ul>
                            <li>success</li>
                            <li>info</li>
                            <li>warn</li>
                            <li>error</li>
                        </ul>

                        <h3>Showing Messages</h3>
                        <p>Show method accepts either a single message or an array of messages.</p>

                        <CodeHighlight>
                            {`
<Messages ref={(el) => this.messages = el}></Messages>

<Button onClick={this.showSuccess} label="Success" className="p-button-success" />
<Button onClick={this.showInfo} label="Info" className="p-button-info" />
<Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
<Button onClick={this.showError} label="Error" className="p-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />

`}
                        </CodeHighlight>

                        <CodeHighlight lang="javascript">
                            {`
showSuccess() {
    this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

showInfo() {
    this.messages.show({ severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks' });
}

showWarn() {
    this.messages.show({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
}

showError() {
    this.messages.show({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
}

showMultiple() {
    this.messages.show([
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}

`}
                        </CodeHighlight>

                        <h3>Clearing Messages</h3>
                        <p><i>clear()</i> method removes all messages.</p>

                        <CodeHighlight>
                            {`
this.messages.clear();

`}
                        </CodeHighlight>

                        <h3>Replacing Messages</h3>
                        <p><i>replace(newMessages)</i> method adds new messages after removing all old messages.</p>

                        <CodeHighlight>
                            {`
this.messages.replace(newMessages);

`}
                        </CodeHighlight>

                        <h3>Closable</h3>
                        <p>Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to false.</p>

                        <CodeHighlight lang="javascript">
                            {`
this.messages.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

`}
                        </CodeHighlight>

                        <h3>Sticky</h3>
                        <p>Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until
                they are manually removed.</p>

                        <CodeHighlight lang="javascript">
                            {`
//sticky
this.messages.show({ sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

//automatically removed after 5 seconds
this.messages.show({ life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed' });

`}
                        </CodeHighlight>


                        <h3>Message Component</h3>
                        <p>Message component is useful in cases where a single message needs to be displayed related to an element such as forms. It has two properties, <i>severity</i> and <i>text</i> of the message.</p>
                        <CodeHighlight>
                            {`
<h3>Inline Message CSS</h3>
<p>CSS helpers to display inline messages mostly within forms.</p>
<Message severity="info" text="PrimeNG Rocks"></Message>
<Message severity="success" text="Record Saved"></Message>
<Message severity="warn" text="Are you sure?"></Message>
<Message severity="error" text="Field is required"></Message>

`}
                        </CodeHighlight>

                        <h3>Properties of Message</h3>
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
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>severity</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Severity level of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Message text.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Properties of Messages</h3>
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
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events of Messages</h3>
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
                                        <td>onRemove</td>
                                        <td>message: Removed message </td>
                                        <td>Callback to invoke when a message is removed.</td>
                                    </tr>
                                    <tr>
                                        <td>onClick</td>
                                        <td>message: Clicked message </td>
                                        <td>Callback to invoke when a message gets clicked.</td>
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
                                        <td>p-messages</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-info</td>
                                        <td>Container element when displaying info messages.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-warn</td>
                                        <td>Container element when displaying warning messages.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-error</td>
                                        <td>Container element when displaying error messages.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-success</td>
                                        <td>Container element when displaying success messages.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-close</td>
                                        <td>Close icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-icon</td>
                                        <td>Severity icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-summary</td>
                                        <td>Summary of a message.</td>
                                    </tr>
                                    <tr>
                                        <td>p-messages-detail</td>
                                        <td>Detail of a message.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <ul>
                                <li>react-transition-group</li>
                            </ul>
                        </div>

                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="MessagesDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
