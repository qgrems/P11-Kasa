import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCardHook } from '../Hooks/cardHook'
import { useFirstRender } from './firstrenderer';

export function useIdlogement() {
    let { id } = useParams();
    let nav = useNavigate();
    let premierRendu = useFirstRender()
    const [retour, setRetour] = useState([])
    const datas = useCardHook();
    useEffect(() => {
        let ok = datas.filter((data) => {
            for (let i in data) {
                if (
                    data.id === id
                )

                    return true
            }
            return false
        });
        if (ok.length === 0 && !premierRendu) {
            nav("/404")
        }
        setRetour(ok)
    }, [datas, nav, id, premierRendu])
    return retour
}