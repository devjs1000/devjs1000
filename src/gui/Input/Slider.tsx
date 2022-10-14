import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const TSlider = ({ defaultValue, value, others }: Props) => {
  return (
    <Slider {...{ defaultValue, value, ...others }}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

interface Props {
  value?: number;
  defaultValue?: number;
  others?: any;
}

export default TSlider;
