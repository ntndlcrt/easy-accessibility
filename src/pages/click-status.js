export default function ClickStatus() {
    return (
        <>
            <section className="pt-20">
                <div className="row grid-cols-5">
                    <div className="col-span-3 col-start-2 text-center flex flex-col items-center">
                        <h1 className="title big mb-4">Actualisation d'états</h1>
                        <p className='px-6 leading-1_4 text-gray_dark mb-2'>Il est parfois judicieux d'avoir des attributs d'état (aria-pressed, aria-expanded...) pour faciliter la compréhension d'un layout complexe.</p>
                        <p className='px-6 leading-1_4 text-gray_dark mb-2'>Pour les dropdown, renseigner si elles sont dépliées ou non est important, tout comme renseigner si un bouton dévoilant du contenu lorsque cliqué a été, oui ou non, activé.</p>
                        <p className='px-6 leading-1_4 text-gray_dark'>Pour cela, il suffit d'utiliser l'attribut 'click-status' :</p>
                    </div>
                    <div className="col-span-5">
                        <div className="py-3 px-5 w-content rounded-1 bg-gray_darker w-content mx-auto">
                            <span className="text-gray_light">{'<span '}<span className="text-white font-500">{'click-status="true" aria-expanded="false"'}</span>{' >Click to update status</span>'}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row text-center">
                    <div className="col-span-1">
                        <span
                            key-click="Enter"
                            click-status="true"
                            aria-pressed="false"
                            tabIndex="0"
                            className="cursor-pointer text-center mb-2"
                        >
                            Click to update "<b>Pressed</b>" status
                        </span>
                    </div>
                    <div className="col-span-1">
                        <span
                            key-click="Enter"
                            click-status="true"
                            aria-expanded="false"
                            tabIndex="0"
                            className="cursor-pointer text-center mb-2"
                        >
                            Click to update "<b>Expanded</b>" status
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}