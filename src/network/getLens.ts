
export interface GetLensInput {
  cil?: string
  esf?: string
}

export async function getLens({ cil, esf } : GetLensInput) {
  const result = await fetch(`http://localhost:3005/api/lenses/lens?Y=${cil}&X=${esf}`)
  return result.json()
}

