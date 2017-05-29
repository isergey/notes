import React, { PureComponent } from 'react';
import jsyaml from 'js-yaml';
import Widget from './Widget';

const CONFIG_YML = `
 - id: dashboard-2
   meta:
     name: My Dashboard 2
   widgets:
     - title: Widget 1
       cycles: 50
 - id: dashboard-1
   meta:
     name: My Dashboard 1
   widgets:
     - title: Widget 1
       cycles: 20000
`;

const CONFIG = jsyaml.load(CONFIG_YML);

class Dashboard extends PureComponent {
    renderWidget() {
        const queryDashboard = 'My Dashboard 1';
        let templateWidget = null;

        console.log(CONFIG);
        // todo: (2) rewrite using lodash
        CONFIG.forEach(dashboard => {
            const metaName = (dashboard.meta || {}).name || '';

            if (queryDashboard === metaName) {
                const widgets = dashboard.widgets || [];

                templateWidget = widgets.map((widget, key) => {
                    const title = widget.title || '';
                    const cycles = widget.cycles || 0;

                    return (
                        <Widget
                            key={key}
                            title={title}
                            cycles={cycles}
                        />
                    );
                });
            }
        });
        return templateWidget;
    }
    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    { this.renderWidget() }
                </div>
            </div>
        );
    }
}

export default Dashboard;
