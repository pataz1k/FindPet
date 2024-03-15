import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pet, User, defaultPet, defaultUser } from '../../Helper/interfaces'
import { getPetById, getUserById } from '../../Helper/serverRequest'
import loc_icon from '../../assets/location-icon.svg'
import { LoadingContext } from '../../context/LoadingContext'
import classes from './PetDetail.module.css'

const PetDetail = () => {

    let {petID} = useParams()
    const [pet,setPet] = useState<Pet>(defaultPet)
    const [user, setUser] = useState<User>(defaultUser)

    const { setIsLoading } = useContext(LoadingContext)


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getPetById(petID)
            .then((res) => {
                setPet(res);
                getUserById(res.user)
                .then((res) => {setUser(res);console.log(res)})
                .catch((err) => {console.log(err)})
            })
            .catch((err) => {console.log(err)})
            .finally(() => {setIsLoading(false)})
        }, 1500);
    
    }, [])

    /* {
    "id": 1,
    "user": 1,
    "image_url": "http://127.0.0.1:8000/media/images/1635850144_8-krot-info-p-operskii-stil-mashini-mashini-krasivo-foto-9.jpg",
    "description": "test a a sda sda sdasdas da",
    "address": "test",
    "features": "test",
    "number": "+7 123 123 13-13"
        }
    */

    return (
        <div className={classes.wrap}>
            <h3>Номер объявления: {petID}</h3>
            <div className={classes.item}>
                <img className={classes.petImage} src={pet.image_url} alt="pet image" />
                <div className={classes.textBlock}>
                    <div className={classes.petInfo}>
                        <h5 className={classes.blockTitle}>Информация о питомце:</h5>
                        <p className={classes.features}><b>Особенности:</b>  {pet.features}</p>
                        <p className={classes.description}><b>Описание:</b> {pet.description}</p>
                        <p className={classes.address}><img src={loc_icon} className={classes.address_image}/> {pet.address}</p>
                        <p className={classes.number}><b>Номер телефона:</b> <b>{pet.number}</b></p>
                    </div>
                    <div className={classes.userInfo}>
                        <h5 className={classes.blockTitle}>Информация о пользователе:</h5>
                        <p><b>Имя пользователя:</b> {user.first_name}</p>
                        <p><b>Email:</b> {user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetDetail