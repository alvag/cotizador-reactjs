import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class App extends Component {

    cotizarSeguro = () => {

    }

    render() {
        return (
            <div className="container">
                <Header title="Cotizador de Seguro de auto" />

                <div className="form-container">
                    <Form cotizarSeguro={this.cotizarSeguro} />
                </div>
            </div>
        );
    }
}

export default App;
