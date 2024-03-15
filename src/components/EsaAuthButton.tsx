declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    esa: true;
  }
}

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function EsaButton() {
  return (
    <Button
      variant="contained"
      color="esa"
      onClick={() => {signIn("esa")}}
    >
      <Image alt="esa logo" src="/esa-tori.png" width={40} height={40} />
      <span style={{ marginLeft: 20 }}>Log in with esa.io</span>
    </Button>
  )
}