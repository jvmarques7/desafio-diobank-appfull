import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => { 
    const [ userData, setUserData ] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            api.then((response: any | UserData)=>{
                setUserData(response)
            })
            if(userData && id !== userData.id) {
                navigate('/')
            }
        }
        getData()
    },[])

    const voltar = () => {
        navigate('/conta/1')
    }

    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ? 
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Dados da conta`} 
                            content={[`Nome: ${userData?.name}`, `Email: ${userData?.email}`]}
                            onClick={(voltar)} title='voltar'/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default ContaInfo
