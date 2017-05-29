import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// Pluralsight
class Widget extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        cycles: PropTypes.number.isRequired,
    }

    state = {
        cycles: 0,
    }


    _perform() {
        let cycles = this.state.cycles;
        const ts = new Date().getTime();
        do {
            if (cycles === this.props.cycles) { break; }
            this._job();
            cycles++;
        } while ((new Date().getTime() - ts) < 30);

        this.setState({ cycles });
        if (cycles !== this.props.cycles) {
            setTimeout(this._perform.bind(this), 50);
        }
    }


    componentWillMount() {
        this._perform();


        // todo: (1) make this async to make sure the ui updates in a responsive manner
        // return new Promise((success, fail) => {
        //     for (let i = 0; i <= this.props.cycles; i++) {
        //         this._job();
        //         this.setState({ cycles: i });
        //     }
        // });
        // for (let i = 0; i <= this.props.cycles; i++) {
        //     this._job();
        //     this.setState({cycles: i});
        //     console.log(i);
        // }
        // this.test();

        // Given async function
        // function draw() {
        //     return new Promise((resolve) => {
        //         for (let i = 0; i <= 10; i++) {
        //             this._job();
        //             this.setState({cycles: i});
        //             console.log(i);
        //         }
        //         // setTimeout(() => {
        //         //     console.log('Hi');
        //         //     resolve();
        //         // }, 3000);
        //     });
        // }

        // We create the start of a promise chain
        // let chain = Promise.resolve();
        // chain = chain.then(draw);
        // console.log(123123);
    }

    test() {
        for (let i = 0; i <= this.props.cycles; i++) {
            this._job();
            this.setState({cycles: i});
            console.log(i);
        }
    }

    render() {
        const title = this.props.title;
        const cycles = this.state.cycles;

        return (
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        { title }
                    </div>
                    <div className="card-block">
                        <p className="card-text">
                            <b>Cycles:</b>
                            {' '}
                            { cycles }
                        </p>
                    </div>
                </div>
            </div>
        )
    };


    _job() {
        for (let i = 0; i < 1000000; i++) {
        }
    }
}

export default Widget;
