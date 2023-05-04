import React from 'react'
import styles from '../styles'
import { clients } from '../Constants'

const Clients = () =>
(
    <section className={`${styles.flexCenter} my-4`} id='clients'>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div id={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}>
                    <img src={client.logo} alt="client" className={`sm:w-[192px] 100px object-contain`} />
                </div>
            ))}

        </div>

    </section>
)


export default Clients
