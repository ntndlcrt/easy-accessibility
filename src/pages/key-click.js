
export default function KeyClick() {
    return (
        <>
            <section className="pt-20">
                <div className="row grid-cols-5">
                    <div className="col-span-3 col-start-2 text-center flex flex-col items-center">
                        <h1 className="title big mb-4">Touche - Clic</h1>
                        <p className='px-6 leading-1_4 text-gray_dark mb-2'>Il est possible d'associer, pour chaque élément, une touche qui, si elle est pressée tandis que l'élément est focus par l'utilisateur, déclenchera un clic.</p>
                        <p className='px-6 leading-1_4 text-gray_dark'>Pour cela, il suffit d'utiliser l'attribut 'key-click' :</p>
                    </div>
                    <div className="col-span-5">
                        <div className="py-3 px-5 w-content rounded-1 bg-gray_darker w-content mx-auto">
                            <span className="text-gray_light">{'<span '}<span className="text-white font-500">{'key-click="KEYNAME"'}</span>{' onClick={() => {FUNCTION()}}>Press "KEYNAME" to fire a click</span>'}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row text-center">
                    <div className="col-span-1">
                        <span key-click="Enter" onClick={() => {alert('You pressed Enter !')}} tabIndex="0">Press "<b>Enter</b>" to fire a click</span>
                    </div>
                    <div className="col-span-1 row-start-2">
                        <span key-click=" " onClick={() => {alert('You pressed Space !')}} tabIndex="0">Press "<b>Space</b>" to fire a click</span>
                    </div>
                    <div className="col-span-1 row-start-3">
                        <span key-click="Escape" onClick={() => {alert('You pressed Escape !')}} tabIndex="0">Press "<b>Escape</b>" to fire a click</span>
                    </div>
                </div>
            </section>
        </>
    )
}
