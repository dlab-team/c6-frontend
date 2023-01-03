import React from "react"
import img1 from "../../../assets/images/pablita-girls-holding-hourglass 1.png"
import img2 from '../../../assets/images/pablita-636 1.png'
import img3 from '../../../assets/images/pablita-people-holding-pieces-of-puzzle 1.png'

const Section2 = () => {
    return (
        <>
            <section id="como-funcionamos">
                <div className="md:flex container mx-auto">
                    <div className="m-auto">
                        <h3 className="text-black font-bold text-3xl mb-10 text-center mt-10 md:mt-0">¿Cómo funcionamos?</h3>
                        <p className="text-black text-2xl text-center">
                            Da click a nuestro video y en sólo 60 segundos conoce <span className="text-primary font-bold">Devsafio</span> y cómo estamos <span className="text-primary font-bold">cambiando el mundo TI</span>, acelerando y potenciando las células tecnológicas.
                        </p>
                    </div>
                    <div className="m-auto md:p-3">
                        <iframe
                            src="https://youtube.com/embed/z5NPi7WrViU"
                            className="w-[25rem] h-[14rem] md:w-[38rem] md:h-[24rem]"
                            loading="lazy"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        />
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

                <div className="flex flex-col md:flex-row container mx-auto mt-16 pb-16 md:justify-around items-center">
                    <div className="flex flex-col gap-10 text-center items-center max-w-xs px-6">
                        <img src={img1} alt="aceleramos" className="pt-4" />
                        <h4 className="text-black font-bold text-2xl">Aceleramos</h4>
                        <p className="text-black text-xl">
                            <span className="font-bold">Aceleramos el proceso de contratación</span>. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en <span className="font-bold">5 días</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 text-center items-center max-w-xs px-6">
                        <img src={img2} alt="acompañamos" />
                        <h4 className="text-black font-bold text-2xl">Acompañamos</h4>
                        <p className="text-black text-xl">
                            Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates <span className="font-bold">serán guiados y apoyados a nivel técnico</span> por un mentor senior TI experto en tu área <span className="font-bold">sin ningún costo ($0)</span>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 text-center items-center max-w-xs px-6">
                        <img src={img3} alt="potenciamos" className="pt-4" />
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