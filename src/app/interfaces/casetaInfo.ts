import { userInfo} from './userInfo'
export type casetaInfo ={
    info:userInfo,
    name:string,
    CIF:string,
    telefonos:string[],
    dSocial:string,
    cp:string,
    surface:string,
    modality:string

}

export enum modalidades{
    EOP = "Entidad o peña",
    SOLO = "Un solo titular",
    COM = "Comercial",
    JUV= "Juventud / copas"
}