import { Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <Container>
      <Typography>{t("title")}</Typography>
    </Container>
  );
}
