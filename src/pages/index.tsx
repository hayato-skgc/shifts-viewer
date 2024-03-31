import EsaButton from '@/components/EsaAuthButton';
import { Alert, Box, Container, Paper, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const router = useRouter();

  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
  const userName = session?.user?.name

  if (status === "loading") {
    return <p>Now Loading</p>
  }

  if (status === "authenticated") {
    return (
      router.replace('/views')
    )
  }

  const { error } = router.query;
  console.log(error)
  const errorMsg = loginError(error);

  return (
    <div style={{
      backgroundColor: '#eef2f7',
      width: '100%',
      height: '100vh',
      position: 'fixed'
    }}>
      <Container maxWidth="sm"
        sx={{
          py: 4
        }}
      >
        <Paper
          elevation={3}
          sx={{
            my: 2,
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
          }}
        >
          {errorMsg}
          <h1 style={{fontSize: 24}}>シフト閲覧サイト</h1>
          <Typography sx={{
            position: 'relative',
            top: -10,
            fontSize: 14,
            color: 'text.secondary'
          }}>
            2024年度東京理科大学野田地区新歓実行委員会
          </Typography>
          <Image alt='新歓のロゴ' src="/shinkan_logo.jpg" width={200} height={200} />
          <p style={{ paddingTop: 32 }}>閲覧にはログインが必要です。</p>
          <Box sx={{
            py: 4
          }}>
            <EsaButton />
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

const loginError = (error: string | string[] | undefined) => {
  if (!error) return null
  if (error === 'unauthorized') {
    return <Alert severity='error' sx={{textAlign: 'left'}}>アカウントの登録がされていません。お手数ですが、システム管理者に連絡してください。</Alert>
  }
  return <Alert severity='error' sx={{textAlign: 'left'}}>エラーが発生しました。</Alert>
}