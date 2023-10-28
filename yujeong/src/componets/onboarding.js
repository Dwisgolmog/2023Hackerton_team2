import React, { useState } from "react";
import { Slider, Typography, Button, Container } from "@mui/material";

const slides = [
  { label: "첫 번째 슬라이드 설명" },
  { label: "두 번째 슬라이드 설명" },
  { label: "세 번째 슬라이드 설명" },
];

const Onboarding = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        온보딩 화면
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {slides[slideIndex].label}
      </Typography>
      <Slider value={slideIndex} max={slides.length - 1} step={1} onChange={(e, value) => setSlideIndex(value)} />
      {slideIndex === slides.length - 1 ? (
        <Button variant="contained" color="primary" fullWidth onClick={handleNextSlide}>
          시작하기
        </Button>
      ) : (
        <Button variant="contained" color="primary" fullWidth onClick={handleNextSlide}>
          다음으로
        </Button>
      )}
    </Container>
  );
};

export default Onboarding;
