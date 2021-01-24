import React, { Component} from 'react';
import PropTypes from 'prop-types'; 


class Checkbox extends Component{
    state = {
        isChecked: false,
    }

    alternarMudancaCheckbox = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }

    render(){
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.alternarMudancaCheckbox}
                    />
                    {label}

                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;


//colocar no componente que irá renderizar o checkbox

// const itens = [
// 	' conteúdo sexual / impróprio',
// 	' conteúdo violento / repulsivo',
// 	' conteúdo abusivo',
// 	' conteúdo perigoso',
// 	' spam ou enganoso',
// ];




// componentWillMount = () => {
//     this.selecionadoCheckbox = new Set();
// }

// mudarCheckbox = label => {
//     if(this.selecionadoCheckbox.has(label)){
//         this.selecionadoCheckbox.delete(label);
//     } else {
//         this.selecionadoCheckbox.add(label);
//     }
// }

// handleFormSubmit = formSubmitEvent => {
//     formSubmitEvent.preventDefault();

//     for(const checkbox of this.selecionadoCheckbox){
//         console.log(checkbox, 'selecionado');
//     }
// }

// criarCheckbox = label => (
//     <Checkbox
//         label={label}
//         handleCheckboxChange={this.mudarCheckbox}
//         key={label}
//     />
// )

// criandoCheckboxes = () => (
//     itens.map(this.criarCheckbox)
// )




// <Form onSubmit={this.handleFormSubmit}>
//       {this.criandoCheckboxes()}
// <Form/>