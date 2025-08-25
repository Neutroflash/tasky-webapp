import React, { useEffect } from "react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, Button } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import slides from "./slides.json";
import clothes from "./clothes.json";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid";

function Principal() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <>
      <CssBaseline />
      {/* BANNER */}
      <Container disableGutters maxWidth={false}>
        <Box
          ref={emblaRef}
          sx={{ overflow: "hidden", width: "100%", height: "100vh" }}
        >
          <Box sx={{ display: "flex", height: "100%" }}>
            {slides.map((slide) => (
              <Box
                key={slide.id}
                sx={{
                  flex: "0 0 100%", // cada slide ocupa el 100% del ancho
                  height: "90vh",
                  position: "relative",
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay oscuro - Contenedor del contenido EJEM: letras*/}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    p: 3,
                  }}
                >
                  {/* POSIBLE DIALOGOS EN EL BANNER USAR EL "slides.JSON" para colocar texto */}
                  {/* <Typography variant="h3" fontWeight="bold" mb={2}>
                    {slide.text}
                  </Typography>
                  <Button variant="contained" color="warning">
                    Comprar ahora
                  </Button> */}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      {/* Seccion Vestimenta */}
      <Container disableGutters maxWidth={false}>
        <Grid container spacing={3} justifyContent={'center'} alignContent={'center'}>
          {clothes.map((item) => (
            <Grid key={item.id}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  "&:hover .img": { transform: "scale(1.05)" },
                }}
              >
                <CardActionArea onClick={() => console.log("click", item)}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      className="img"
                      image={`${item.img}?w=900&fit=crop&auto=format`}
                      alt={item.text}
                      loading="lazy"
                      sx={{
                        height: "80vh",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform .35s",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: "auto 0 0 0",
                        bgcolor: "rgba(0,0,0,0.45)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 2,
                        py: 1,
                      }}
                    >
                      <Typography fontWeight={600}>{item.text}</Typography>
                      <IconButton
                        size="small"
                        sx={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Principal;
