import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Slider } from '../../components/slider/Slider';
import { InputText } from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import './SliderDemo.scss';
import { AppInlineHeader } from '../../AppInlineHeader';

export class SliderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: 50,
            value3: 20,
            value4: [20,80],
            value5: 50
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="slider" showInputStyle>
                        <h1>Slider</h1>
                        <p>Slider is a component to provide input using dragging of a handle.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation slider-demo">
                    <div className="card">
                        <h5>Basic: {this.state.value1}</h5>
                        <Slider value={this.state.value1} onChange={(e) => this.setState({ value1: e.value })} />

                        <h5>Input: {this.state.value2}</h5>
                        <InputText value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                        <Slider value={this.state.value2} onChange={(e) => this.setState({ value2: e.value })} />

                        <h5>Step: {this.state.value3}</h5>
                        <Slider value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} step={20} />

                        <h5>Range: [{this.state.value4[0]}, {this.state.value4[1]}]</h5>
                        <Slider value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} range />

                        <h5>Vertical: {this.state.value5}</h5>
                        <Slider value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} orientation="vertical" />
                    </div>
                </div>

                <SliderDoc />
            </div>
        );
    }
}

class SliderDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';

export class SliderDemo extends Component {

    constructor() {
        super();
        this.state = {
            val1: null,
            val2: 50,
            val3: null,
            val4: null,
            rangeValues: [20, 80]
        };
        this.onChangeSlider1 = this.onChangeSlider1.bind(this);
        this.onChangeSlider2 = this.onChangeSlider2.bind(this);
        this.onChangeSlider3 = this.onChangeSlider3.bind(this);
        this.onChangeSlider4 = this.onChangeSlider4.bind(this);
        this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
    }

    onChangeSlider1(e) {
        this.setState({ val1: e.value });
    }

    onChangeSlider2(e) {
        let newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        this.setState({ val2: newValue });
    }

    onChangeSlider3(e) {
        this.setState({ val3: e.value });
    }

    onChangeSlider4(e) {
        this.setState({ val4: e.value });
    }

    onChangeRangeSlider(e) {
        this.setState({ rangeValues: e.value });
    }

    render() {
        return (
            <div>
                <h3>Basic: {this.state.val1}</h3>
                <Slider value={this.state.val1} onChange={this.onChangeSlider1} style={{width: '14em'}}  />

                <h3>Input: {this.state.val2}</h3>
                <InputText value={this.state.val2} style={{width: '14em'}} type="number" onChange={this.onChangeSlider2} />
                <Slider value={this.state.val2} onChange={this.onChangeSlider2} style={{width: '14em'}} />

                <h3>Step: {this.state.val3}</h3>
                <Slider value={this.state.val3} onChange={this.onChangeSlider3} step={20} style={{width: '14em'}} />

                <h3>Range: {this.state.rangeValues[0]},{this.state.rangeValues[1]}</h3>
                <Slider value={this.state.rangeValues} onChange={this.onChangeRangeSlider} range={true} style={{width: '14em'}} />

                <h3>Vertical: {this.state.val4}</h3>
                <Slider value={this.state.val4} onChange={this.onChangeSlider4} orientation="vertical" style={{height: '14em'}} />
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
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';

const SliderDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(50);
    const [val3, setVal3] = useState(null);
    const [val4, setVal4] = useState(null);
    const [rangeValues, setRangeValues] = useState([20, 80]);

    const onChangeSlider1 = (e) => {
        setVal1(e.value);
    };

    const onChangeSlider2 = (e) => {
        let newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        setVal2(newValue);
    };

    const onChangeSlider3 = (e) => {
        setVal3(e.value);
    };

    const onChangeSlider4 = (e) => {
        setVal4(e.value);
    };

    const onChangeRangeSlider = (e) => {
        setRangeValues(e.value);
    };

    return (
        <div>
            <h3>Basic: {val1}</h3>
            <Slider value={val1} onChange={onChangeSlider1} style={{width: '14em'}}  />

            <h3>Input: {val2}</h3>
            <InputText value={val2} style={{width: '14em'}} type="number" onChange={onChangeSlider2} />
            <Slider value={val2} onChange={onChangeSlider2} style={{width: '14em'}} />

            <h3>Step: {val3}</h3>
            <Slider value={val3} onChange={onChangeSlider3} step={20} style={{width: '14em'}} />

            <h3>Range: {rangeValues[0]},{rangeValues[1]}</h3>
            <Slider value={rangeValues} onChange={onChangeRangeSlider} range={true} style={{width: '14em'}} />

            <h3>Vertical: {val4}</h3>
            <Slider value={val4} onChange={onChangeSlider4} orientation="vertical" style={{height: '14em'}} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';

const SliderDemo = () => {
    const [val1, setVal1] = useState<number|undefined>(undefined);
    const [val2, setVal2] = useState<number|undefined>(50);
    const [val3, setVal3] = useState<number|undefined>(undefined);
    const [val4, setVal4] = useState<number|undefined>(undefined);
    const [rangeValues, setRangeValues] = useState<[number, number]>([20, 80]);

    const onChangeSlider1 = (e: { value: any }) => {
        setVal1(e.value);
    };

    const onChangeSlider2 = (e: any) => {
        let newValue;
        const target = ((e as React.FormEvent).target as HTMLInputElement);
        if (target && target.nodeName === "INPUT") {
            newValue = target.value;
        }
        else {
            newValue = e.value;
        }

        setVal2(newValue);
    };

    const onChangeSlider3 = (e: { value: any }) => {
        setVal3(e.value);
    };

    const onChangeSlider4 = (e: { value: any }) => {
        setVal4(e.value);
    };

    const onChangeRangeSlider = (e: { value: any }) => {
        setRangeValues(e.value);
    };

    return (
        <div>
            <h3>Basic: {val1}</h3>
            <Slider value={val1} onChange={onChangeSlider1} style={{width: '14em'}}  />

            <h3>Input: {val2}</h3>
            <InputText value={val2} style={{width: '14em'}} type="number" onChange={onChangeSlider2} />
            <Slider value={val2} onChange={onChangeSlider2} style={{width: '14em'}} />

            <h3>Step: {val3}</h3>
            <Slider value={val3} onChange={onChangeSlider3} step={20} style={{width: '14em'}} />

            <h3>Range: {rangeValues[0]},{rangeValues[1]}</h3>
            <Slider value={rangeValues} onChange={onChangeRangeSlider} range={true} style={{width: '14em'}} />

            <h3>Vertical: {val4}</h3>
            <Slider value={val4} onChange={onChangeSlider4} orientation="vertical" style={{height: '14em'}} />
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
import {Slider} from 'primereact/slider';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Slider is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<Slider value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

            <h3>Range</h3>
            <p>Range slider provides two handles to define two values. Enable <i>range</i> property and bind an array to implement a range slider.</p>
<CodeHighlight>
{`
<Slider value={this.state.rangeValues} onChange={(e) => this.setState({rangeValues: e.value})} range={true} />

`}
</CodeHighlight>

            <h3>Orientation</h3>
            <p>Default layout of slider is horizontal, use <i>orientation</i> property for the alternative vertical mode.</p>
            <CodeHighlight>
{`
<Slider value={this.state.value} onChange={(e) => this.setState({value: e.value})} orientation="vertical" />

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
                            <td>0</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>animate</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays an animation on click of the slider bar.</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Mininum boundary value.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>100</td>
                            <td>Maximum boundary value.</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>string</td>
                            <td>horizontal</td>
                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                        </tr>
                        <tr>
                           <td>step</td>
                           <td>number</td>
                           <td>1</td>
                           <td>Step factor to increment/decrement the value.</td>
                         </tr>
                        <tr>
                           <td>range</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When speficed, allows two boundary values to be picked.</td>
                         </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                            <td>onChange</td>
                            <td>event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke on value change via slide.</td>
                        </tr>
                        <tr>
                            <td>onSlideEnd</td>
                            <td>event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke when slide ends.</td>
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
                            <td>p-slider</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-slider-handle</td>
                            <td>Handle element.</td>
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
                    <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                        <LiveEditor name="SliderDemo" sources={[key, value]} />
                    </TabPanel>
                );
            })
        }
    </TabView>
</div>
        );
    }
}
