import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput,Box,PasswordInput,Stack ,Button,Anchor} from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from 'yup';

export default function Index({setTab}:{setTab:(tab:string)=>void}){
  const hookForm = useForm({
      defaultValues:{
        name:'',
        pwd:'',
        confirmPwd:''
      },
      resolver:yupResolver(
        Yup.object().shape({
          name:Yup.string().required('用户名不能为空'),
          pwd:Yup.string().required('密码不能为空'),
          confirmPwd:Yup.string().required('确认密码不能为空')
        })
      )
    })
  const {register ,formState:{errors},handleSubmit} = hookForm;
  const onSubmit = (values) => {
    console.log(values);
  }
  return(
    <FormProvider {...hookForm}>
      <Box w={400}>
        <TextInput label='用户名' placeholder="请输入用户名" {...register('name')} error={errors.name?.message}/>
        <PasswordInput label='密码' mt={20} placeholder='请输入密码' {...register('pwd')} error={errors.pwd?.message}/>
        <PasswordInput label='确认密码' mt={20} placeholder='请输入密码' {...register('confirmPwd')} error={errors.confirmPwd?.message}/>
      </Box>
      <Stack>
        <Button mt={25} onClick={handleSubmit(onSubmit)}>注册</Button>
        <Anchor mt={10} component='a' onClick={()=>setTab('login')}>已有账号？去登录</Anchor>
      </Stack>
    </FormProvider>
  ) 
}