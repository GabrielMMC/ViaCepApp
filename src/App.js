import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [state, setState] = React.useState({
    cep: { value: '', label: 'Cep', error: false, type: 'number', col: 'col-sm-6' },
    logradouro: { value: '', label: 'Rua', error: false, type: 'text', col: 'col-sm-6' },
    complemento: { value: '', label: 'Complemento', error: false, type: 'text', col: 'col-sm-12' },
    bairro: { value: '', label: 'Bairro', error: false, type: 'text', col: 'col-sm-6' },
    localidade: { value: '', label: 'Cidade', error: false, type: 'text', col: 'col-sm-6' },
    uf: { value: '', label: 'Estado', error: false, type: 'text', col: 'col-sm-4' },
    ibge: { value: '', label: 'Ibge', error: false, type: 'number', col: 'col-sm-4' },
    gia: { value: '', label: 'Gia', error: false, type: 'number', col: 'col-sm-4' },
    ddd: { value: '', label: 'DDD', error: false, type: 'number', col: 'col-sm-6' },
    siafi: { value: '', label: 'Siafi', error: false, type: 'number', col: 'col-sm-6' }
  })

  React.useEffect(() => {
    handleCepChange(state.cep.value)
  }, [state.cep.value])

  function renderInput() {
    let keys = Object.keys({ ...state })
    return keys.map(item => (
      <div key={state[item].label} className={`${state[item].col} col-12 my-4 justify-content-center`}>
        <TextField helperText={state[item]?.msg} fullWidth label={state[item].label} value={state[item].value} onChange={(e) => setState({ ...state, [item]: { ...state[item], value: e.target.value, error: false, msg: '' } })} error={state[item].error} />
      </div>
    ))
  }

  function handleCepChange(val) {
    if (Array.from(val).length >= 8) {
      validateCep();
    } else if (val === '') {
      clearCEP()
    }
  }

  async function validateCep() {
    const endereco = await fetch(`https://viacep.com.br/ws/${state.cep.value}/json/`)
      .then(response => {
        return response;
      })
      .catch((error) => {
        clearCEP();
        setState({ ...state, cep: { ...state.cep, value: '', error: true, msg: 'CEP inválido' } })
      })
    const data = await endereco.json();
    if (data.hasOwnProperty('erro')) {
      clearCEP();
      setState({ ...state, cep: { ...state.cep, value: '', error: true, msg: 'CEP não encontrado!' } })
    } else {
      let state2 = { ...state }
      let keys = Object.keys({ ...state })
      keys.forEach(item => {
        if (state2[item].value !== undefined) state2[item].value = data[item]
      })
      setState(state2)
    }
  }

  function clearCEP() {
    let state2 = { ...state };
    let keys = Object.keys(state2)
    keys.forEach(item => {
      state2[item].value = '';
      state2[item].disabled = false;
    })
    setState(state2);
  }

  return (
    <>
      <div className="vh-100 bg-light">
        <Navbar />
        <div className="content mt-5">
          <div className="row p-sm-5">
            {renderInput()}
          </div>
          <div className="d-flex px-sm-5 mb-5">
            <div className="align-self-center">
              <Button variant='contained' size='large' onClick={() => console.log('voltou')}> Voltar</Button>
            </div>
            <div className="align-self-center ms-auto">
              <Button variant='contained' size='large' onClick={() => console.log('salvou')}>Salvar</Button>
            </div>
          </div>
        </div>
        <div className="col-12 text-center bg-info text-white mt-5" style={{ height: 50 }}>
          <Typography variant='h6'>Trabalho do Jorge - Rafaela - ©2022</Typography>
        </div>
      </div>
    </>
  );
}

export default App;
