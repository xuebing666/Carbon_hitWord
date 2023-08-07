import { TextInput,Box,PasswordInput,Stack ,Button,Anchor, Group} from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Index({setTab}:{setTab:(tab:string)=>void}){
  const navigate = useNavigate();
  const hookForm = useForm({
    defaultValues:{
      name:'',
      psd:''
    },
    resolver:yupResolver(
      Yup.object().shape({
        name:Yup.string().required('用户名不能为空'),
        psd:Yup.string().required('密码不能为空')
      })
    )
  })
  const { register, formState:{ errors },handleSubmit} = hookForm;
  const onSubmit = (values) => {
    console.log(values);
  }
  return <FormProvider {...hookForm}>
    <Box w={400}>
      <TextInput label='用户名' placeholder="请输入用户名" {...register('name')} error={errors.name?.message}/>
      <PasswordInput label='密码' mt={20} placeholder='请输入密码' {...register('psd')} error={errors.psd?.message}/>
    </Box>
    <Stack>
      <Button mt={25} onClick={handleSubmit(onSubmit)}>登录</Button>
      <Group noWrap sx={{justifyContent:'space-between'}}>
        <Anchor mt={10} component='a' onClick={()=>setTab('signUp')}>还没有账号？去注册</Anchor>
        <Anchor mt={10} component='a' onClick={()=>navigate('/forgetPwd')}>忘记密码？</Anchor>
      </Group>
    </Stack>
  </FormProvider>
}