export function limitDescription(description) {
    if(description.length > 20) {
      return description.substring(0, 20) + '...'
    }else{
      return description
    }
}

export function renameHeadingAgronomia(heading) {
  switch(heading) {
    case 'tratosCulturais':
      return 'Tratos Culturais'
      break
    case 'cultivo':
      return 'Cultivo'
      break
    case 'materialMetodos':
      return 'Material e Métodos'
      break
    case 'adubacao':
      return 'Adubação'
      break
    case 'praga':
      return 'Praga'
      break
    case 'irrigacao':
      return 'Irrigação'
      break
  }
}

export function renameHeadingFarmacia(heading) {
  switch (heading) {
    case 'utilizacao':
      return 'Utilização'
      break
    case 'terapeutico':
      return 'Terapêutico'
      break
    case 'contraindicacao':
      return 'Contraindicação'
      break
    case 'modoDeUsar':
      return 'Modo de Usar'
      break
    default:
      break
  }
}