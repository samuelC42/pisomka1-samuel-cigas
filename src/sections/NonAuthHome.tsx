import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography>
        Registrujte sa
      </Typography>
    </Container>
  );
}