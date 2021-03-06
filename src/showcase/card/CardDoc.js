import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class CardDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

export class CardDemo extends Component {

    render() {
        const header = (
            <img alt="Card" src='showcase/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
        );
        const footer = (
            <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
            </span>
        );

        return (
            <div>
                <Card title="Simple Card" style={{width: '360px'}}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                </Card>

                <br/><br/>

                <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                </Card>
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
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

const CardDemo = () => {

    const header = (
        <img alt="Card" src='showcase/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>
    );

    return (
        <div>
            <Card title="Simple Card" style={{width: '360px'}}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>

            <br/><br/>

            <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

const CardDemo = () => {

    const header = (
        <img alt="Card" src='showcase/demo/images/usercard.png' srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"/>
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>
    );

    return (
        <div>
            <Card title="Simple Card" style={{width: '360px'}}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>

            <br/><br/>

            <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
            </Card>
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
import {Card} from 'primereact/card';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Card is used as a container.</p>
                        <CodeHighlight>
                            {`
<Card>
    Content
</Card>

`}
                        </CodeHighlight>

                        <h3>Title</h3>
                        <p>Title text of the card is provided using the <i>title</i> property whereas <strong>subTitle</strong> property is available for additional information about the card. Both of these properties accept JSX as well.</p>
                        <CodeHighlight>
                            {`
<Card title="Title" subTitle="SubTitle">
    Content
</Card>
`}
                        </CodeHighlight>

                        <h3>Header and Footer</h3>
                        <p>Header and Footer sections are defined using the properties of the same name.</p>

                        <CodeHighlight>
                            {`
const header = <img alt="Card" src='showcase/demo/images/usercard.png'/>;
const footer = <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
             </span>;

<Card footer={footer} header={header}>
    Content
</Card>

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
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Header of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>title</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Title of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>subTitle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Secondary title of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                        <td>p-card</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-card-title</td>
                                        <td>Title element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-card-subtitle</td>
                                        <td>Subtitle element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-card-content</td>
                                        <td>Content of the card.</td>
                                    </tr>
                                    <tr>
                                        <td>p-card-footer</td>
                                        <td>Footer of the card.</td>
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
                                    <LiveEditor name="CardDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
