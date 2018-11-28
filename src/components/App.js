import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helpers/helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {

    state = {
        result: '',
        data: ''
    }

    cotizarSeguro = (data) => {
        const { marca, plan, year } = data;

        let result = 2000;

        const diff = obtenerDiferenciaAnio(year);

        result -= ((diff * 3) * result) / 100;

        result = calcularMarca(marca) * result;

        result = parseFloat(obtenerPlan(plan) * result).toFixed(2);

        this.setState({ result, data });

    }

    render() {
        return (
            <div className="container">
                <Header title="Cotizador de Seguro de auto" />

                <div className="form-container">
                    <Form cotizarSeguro={this.cotizarSeguro} />
                    <Resumen
                        data={this.state.data}
                        result={this.state.result}
                    />

                    < Resultado result={this.state.result} />
                </div>
            </div>
        );
    }
}

export default App;
