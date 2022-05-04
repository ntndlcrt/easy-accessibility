import { useState } from 'react'

export default function TabTrap() {
    const [isOpened, setIsOpened] = useState(false)

    function handleClick() {
        setIsOpened(!isOpened)
    }

    return (
        <>
            <section className="pt-20">
                <div className="row grid-cols-5">
                    <div className="col-span-3 col-start-2 text-center flex flex-col items-center">
                        <h1 className="title big mb-4">Boucle de tabulation</h1>
                        <p className='px-6 leading-1_4 text-gray_dark mb-2'>Il est possible, dans certains cas, de générer une boucle de tabulation. Par exemple, pour un formulaire en popup, il est parfois préférable de restreindre la navigation clavier au contenu de la popup temps qu'elle est ouverte.</p>
                        <p className='px-6 leading-1_4 text-gray_dark'>Pour cela, il suffit d'utiliser l'attribut 'tab-trap' :</p>
                    </div>
                    <div className="col-span-5">
                        <div className="py-3 px-5 w-content rounded-1 bg-gray_darker w-content mx-auto">
                            <span className="text-gray_light">{'<div class="popup-container" '}<span className="text-white font-500">{'tab-trap'}</span>{'> [...] </div>'}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <button className="button mx-auto" onClick={() => {handleClick()}}>Ouvrir la popup</button>
                </div>
            </section>
            <div className={`popup-container ${isOpened ? 'active' : ''}`} tab-trap="true">
                <div
                    className="popup"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="popup-title"
                    aria-describedby="popup-desc"
                >
                    <span className="title mb-2" id="popup-title">Popup test</span>
                    <p id="popup-desc" className="text-center">Cette popup permet de tester les boucles de tabulation !</p>
                    <form className="flex flex-col mt-6 mb-6">
                        <label className="flex flex-col mb-3">
                            <span className=" text-14 mb-1">Nom :</span>
                            <input type="text" />
                        </label>
                        <label className="flex flex-col mb-3">
                            <span className=" text-14 mb-1">Prénom :</span>
                            <input type="text" />
                        </label>
                        <label className="flex flex-col">
                            <span className=" text-14 mb-1">Adresse email :</span>
                            <input type="text" />
                        </label>
                    </form>
                    <button aria-label="Fermer la popup" className="button" onClick={() => {handleClick()}}>Fermer</button>
                </div>
            </div>
        </>
    )
}
