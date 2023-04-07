import { Box, Button, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string,
    content: any | Array<any>,
    onClick?: any,
    title?: string
}

function ifOnClickExists(onClick: any, title: any){
    if(onClick && title){
        return(<Button 
            colorScheme="purple" onClick={(onClick)}>{title}</Button>)
    }
}

const CardInfo = ({ mainContent, content, onClick, title }: ICardInfo) => {
    console.log(content)
    return (
        <Box 
            backgroundColor="white" 
            minHeight="120px" 
            padding={8}
            borderRadius="25px"
        >
            <Text fontSize='2xl' fontWeight='bold'>
                { mainContent }
            </Text>
            <Text fontSize='xl'>
                {content.map((item: any, i: number)=>{
                    return (
                        <Text fontSize='xl' key={i}>
                            { item }
                        </Text>
                    )
                })}
            </Text>
            {ifOnClickExists(onClick, title)}
        </Box>
    );
};

export default CardInfo;
