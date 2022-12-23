import React from "react"

const Section2 = () => {
    return (
        <>
            <section id="como-funcionamos">
                <div className="flex container mx-auto">
                    <div className="w-1/2 m-auto">
                        <h3 className="text-black font-bold text-3xl mb-10 text-center">¿Cómo funcionamos?</h3>
                        <p className="text-black text-2xl text-center">
                            Da click a nuestro video y en sólo 60 segundos conoce <span className="text-primary font-bold">Devsafio</span> y cómo estamos <span className="text-primary font-bold">cambiando el mundo TI</span>, acelerando y potenciando las células tecnológicas.
                        </p>
                    </div>
                    <div className="w-1/2 m-auto p-3">
                        <iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="556" height="340" loading="lazy" />
                    </div>
                </div>
            </section>

            <section className="bg-secondary" id="sin-juniors-no-hay-seniors">
                <div className="flex flex-col container mx-auto">
                    <h3 className="text-black font-bold text-3xl mb-10 pt-10 text-center">Sin Juniors no hay Seniors</h3>
                    <p className="text-black text-2xl text-center">
                        En este programa unimos la <span className="text-primary font-bold">rapidez, eficiencia y visión de un desarrollador junior</span> junto con la <span className="text-primary font-bold">experiencia y liderazgo de un senior TI</span>, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:
                    </p>
                </div>

                <div className="flex container mx-auto mt-16 pb-16 justify-around">
                    <div className="flex flex-col gap-10 text-center items-center max-w-xs">
                        <img src="http://placekitten.com/256/144" alt="aceleramos" />
                        <h4 className="text-black font-bold text-2xl">Aceleramos</h4>
                        <p className="text-black text-xl">
                            <span className="font-bold">Aceleramos el proceso de contratación</span>. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en <span className="font-bold">5 días</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 text-center items-center max-w-xs">
                        <img src="http://placekitten.com/256/144" alt="acompañamos" />
                        <h4 className="text-black font-bold text-2xl">Acompañamos</h4>
                        <p className="text-black text-xl">
                            Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates <span className="font-bold">serán guiados y apoyados a nivel técnico</span> por un mentor senior TI experto en tu área <span className="font-bold">sin ningún costo ($0)</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 text-center items-center max-w-xs">
                        <img src="http://placekitten.com/256/144" alt="potenciamos" />
                        <h4 className="text-black font-bold text-2xl">Potenciamos</h4>
                        <p className="text-black text-xl">
                            Potenciamos y retenemos el talento. Realizamos un <span className="font-bold">seguimiento</span> de alta calidad para <span className="font-bold">potenciar el crecimiento y desarrollo técnico</span> de todos los desarrolladores contratados.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2