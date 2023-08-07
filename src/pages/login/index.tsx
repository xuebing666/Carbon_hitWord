import { Center,createStyles,Stack, Title, Flex, Tabs} from "@mantine/core";
import Carousel from './Carousel'
// import LoginImg from 'src/images/login.jpg'
import { useState } from "react";
import Login from './Login';
import SignUp from './SignUp'
const useStyles = createStyles((theme)=>({
  root:{
   height:'100vh',
  //  background:`url(${LoginImg}) no-repeat center fixed`,
   backgroundSize:'cover',
  },
  right:{
    width:'55%',
    height:"100%",
    backgroundColor:theme.colors.gray[0],
    borderRadius:6,
    opacity:0.9,
  },
  content:{
    width:1000,
    height:600,
    backgroundColor:'#fff',
    borderRadius:6,
    display:'flex',
    justifyContent:'center'
  }
}))
export default function Index(){
  const {classes} = useStyles();
  const [tab,setTab]=useState<string|null>('login')
  return(
    <Center className={classes.root}>
      <Center className={classes.content}>     
        <Flex w='45%'>
          <Carousel/>
        </Flex>
        <Center className={classes.right}>
          <Stack>
            <Title order={2}>XXX系统</Title>
            <Stack h={400}>
              <Tabs value={tab} onTabChange={setTab}>
                <Tabs.List mb={20}>
                  <Tabs.Tab value="login" w='50%'>
                    Login
                  </Tabs.Tab>
                  <Tabs.Tab value="signUp" w='50%'>
                    SignUp
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="login">
                  <Login setTab={setTab}/>
                </Tabs.Panel>
                <Tabs.Panel value="signUp">
                  <SignUp setTab={setTab}/>
                </Tabs.Panel>
              </Tabs>
            </Stack>
          </Stack>
        </Center>
      </Center>
    </Center>
  )
}