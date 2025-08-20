import { colors, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, Button } from "@mui/material";

function Principal() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const slides = [
    {
      id: 1,
      img: "https://picsum.photos/id/1015/1600/900",
      text: "Nueva Colección Hombre",
    },
    {
      id: 2,
      img: "https://picsum.photos/id/1021/1600/900",
      text: "Ofertas Mujer hasta -50%",
    },
    {
      id: 3,
      img: "https://picsum.photos/id/1035/1600/900",
      text: "Accesorios Exclusivos",
    },
  ];

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
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay oscuro */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.4)", 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", 
                    alignItems: "center", 
                    textAlign: "center",
                    color: "white",
                    p: 3,
                  }}
                >
                  <Typography variant="h3" fontWeight="bold" mb={2}>
                    {slide.text}
                  </Typography>
                  <Button variant="contained" color="warning">
                    Comprar ahora
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Principal;
