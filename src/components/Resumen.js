import React, { Component } from 'react';
import { primeraMayuscula } from '../helpers/helper';

export default class Resumen extends Component {

    mostrarResumen = () => {
        const { marca, plan, year } = this.props.data;
        if (marca && plan && year) {
            return (
                <div className="resumen">
                    <h2>Resumen de Cotización</h2>
                    <ul>
                        <li>Marca: {primeraMayuscula(marca)}</li>
                        <li>Plan: {primeraMayuscula(plan)}</li>
                        <li>Año: {year}</li>
                    </ul>
                </div>
            );
        }

    }

    render() {
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        );
    }
}
