import {Form} from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

export default function LoginPage() {
  return (
    <div className=' min-w-max'>
      <h1>Login</h1>
      <Form
        method='POST'
        id='wallet-form'
        className='flex flex-col items-center justify-center'>
        <Input
          type='text'
          name='wallet'
          id='wallet'
          label='Wallet Address'
          icon='@'
          placeholder='Enter your wallet address'
          autoComplete='off'
        />
        <Button form='wallet-form' type='submit' className='w-full'>
          Login
        </Button>
      </Form>
    </div>
  );
}
