import {Controller, FormProvider, useForm} from 'react-hook-form'
import { DatePickerInput } from '@mantine/dates';
import { Select,Input,Radio,Group,Checkbox,Textarea,Button,Center, Box } from '@mantine/core';
import './index.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import * as dayjs from 'dayjs'


export default function Index() {
  const formMethods =useForm(
    {
    defaultValues:{
      name:"",
      framework:"",
      birthday:"",
      sex:"",
      hobbies: [],
      comment:""
    },
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('请输入你的名称').min(2,'名称不能少于 2 字').max(10,'名称不能超过 10 字'),
        framework: Yup.string().required('请选择你喜欢的框架'),
        birthday: Yup.string().required('请选择你的生日'),
        sex: Yup.string().required('请选择性别'),
        hobbies: Yup.array().min(1,'请至少选择一项爱好'),
        comment: Yup.string().required('请输入你的评论')
      })
    ),
  }
  )

  const { handleSubmit,register,setValue,watch,formState:{errors} } = formMethods
  watch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (d: unknown) => {
    console.log(JSON.stringify(d));
    alert(JSON.stringify(d))
  }

  return (
    <Box className='form' >
      <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name='name' render={({fieldState:{error}})=>{
          return (
            <Input.Wrapper id={'name'} label="Your name" required maw={500} mx="auto" error={error?.message}>
              <Input
                {...register('name')}
                id={'name'}
                placeholder="Your name"
                
              />
            </Input.Wrapper>
          )
        }}
        />
        <Controller name='framework' render={({fieldState:{error}})=>{
          return (
            <Select
              required
              maw={500}
              error={error?.message}
              onChange={(item)=>{
                setValue('framework',item!)
              }}
              
              mx="auto"
              label="Your favorite framework/library"
              placeholder="Pick one"
              data={[
                { value: 'react', label: 'React' },
                { value: 'angular', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
          />
          )
        }}/>
        
        <Controller name='birthday' render={({fieldState:{error}})=>{
          return(
            <DatePickerInput
              required
              onChange={(item)=>{
              console.log(item);
              setValue('birthday',dayjs(item).format('YYYY-MM-DD HH:mm:ss'))
              }}
              label="Pick date" 
              placeholder="Your Birthday"
              mx="auto"
              maw={500}
              error={error?.message}
            />
          )
        }}/>
        
        <Controller name='sex' render={ ({fieldState:{error}}) => { 
          return(
            <Radio.Group
            onChange={(item)=>{
              
              setValue('sex',item)
            }}
              maw={500}
              mx="auto"
              name="sex"
              label="Select your sex"
              withAsterisk
              error={error?.message}
            >
              <Group mt="xs" >
                <Radio value="male" label="Male"/>
                <Radio value="female" label="Female" />
              </Group>
            </Radio.Group>
          )
        }}
        />

        <Controller name='hobbies' render={ ({fieldState:{error}})=>{
          return(
            <Checkbox.Group
              onChange={(item)=>{
                setValue('hobbies',item)
              }}
              maw={500}
              mx="auto"
              label="Select your hobbies"
              withAsterisk
              error={error?.message}
            >
              <Group mt="xs">
                <Checkbox value="football" label="Football" />
                <Checkbox value="basketball" label="Basketball" />
                <Checkbox value="swimming" label="Swimming" />
                <Checkbox value="running" label="Running" />
              </Group>
            </Checkbox.Group>
          )
        }}/>

        <Textarea
          {...register('comment')}
          maw={500}
          mx="auto"
          placeholder="Your comment"
          label="Your comment"
          withAsterisk
          error={errors.comment?.message}
        />
        <Center>
          <Button w={500} mx="auto" type='submit' bg='red'>Submit</Button>
        </Center>
      </form>
      </FormProvider> 
    </Box>
   )
}
