import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Growl } from '../../components/growl/Growl';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableReorderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];

        this.productService = new ProductService();
        this.onColReorder = this.onColReorder.bind(this);
        this.onRowReorder = this.onRowReorder.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onColReorder() {
        this.growl.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    onRowReorder(e) {
        this.setState({ products: e.value }, () => {
            this.growl.show({severity:'success', summary: 'Rows Reordered', life: 3000});
        });
    }

    render() {
        const dynamicColumns = this.columns.map((col,i) => {
            return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Reorder</span></h1>
                        <p>Order of the columns and rows can be changed using drag and drop.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <div className="card">
                        <DataTable value={this.state.products} reorderableColumns onRowReorder={this.onRowReorder} onColReorder={this.onColReorder}>
                            <Column rowReorder={true} style={{width: '3em'}} />
                            {dynamicColumns}
                        </DataTable>
                    </div>
                </div>

                <DataTableColReorderDemoDoc />
            </div>
        );
    }
}

export class DataTableColReorderDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableReorderDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.cars} reorderableColumns={true} onRowReorder={(e) => this.setState({cars: e.value})}>
                    <Column rowReorder={true} style={{width: '3em'}} />
                    <Column columnKey="vin" field="vin" header="Vin"/>
                    <Column columnKey="year" field="year" header="Year" />
                    <Column columnKey="brand" field="brand" header="Brand" />
                    <Column columnKey="color" field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableReorderDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} reorderableColumns={true} onRowReorder={(e) => setCars(e.value)}>
                <Column rowReorder={true} style={{width: '3em'}} />
                <Column columnKey="vin" field="vin" header="Vin"/>
                <Column columnKey="year" field="year" header="Year" />
                <Column columnKey="brand" field="brand" header="Brand" />
                <Column columnKey="color" field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableReorderDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <DataTable value={cars} reorderableColumns={true} onRowReorder={(e) => setCars(e.value)}>
                <Column rowReorder={true} style={{width: '3em'}} />
                <Column columnKey="vin" field="vin" header="Vin"/>
                <Column columnKey="year" field="year" header="Year" />
                <Column columnKey="brand" field="brand" header="Brand" />
                <Column columnKey="color" field="color" header="Color" />
            </DataTable>
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTableReorderDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
