import fetch from 'node-fetch';

export async function validaRuc(id) {
  const url = `https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    return 'Usuario no Encontrado, verifique el Ruc';
  }

  const data = await response.json();
  return data;
}
