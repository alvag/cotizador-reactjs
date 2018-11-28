import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class Resultado extends Component {

    render() {
        const result = this.props.result;
        const message = !result ? 'Elije marca, año y tipo de seguro' : 'El total es $ ';
        return (

            <div className="gran-total">
                {message}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition
                        classNames="resultado"
                        key={result}
                        timeout={{ enter: 500, exit: 500 }}>
                        <span>{result}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>

        );
    }
}
