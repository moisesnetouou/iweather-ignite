import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from "@assets/clear_day.svg"

describe("Component: NextDays", ()=> {
  it("should be render day", ()=> {
    render(
      <NextDays 
        data={[
          { day: "18/07", min: "30ºc", max: "38ºc", icon: clearDay, weather: "Céu limpo" },
          { day: "19/07", min: "32ºc", max: "39ºc", icon: clearDay, weather: "Nublado" },
          { day: "20/07", min: "40ºc", max: "20ºc", icon: clearDay, weather: "Céu limpo" },
          { day: "21/07", min: "20ºc", max: "10ºc", icon: clearDay, weather: "Chuva fraca" },
          { day: "22/07", min: "10ºc", max: "30ºc", icon: clearDay, weather: "Céu limpo" },
        ]}
      />
    )

    expect(screen.getByText("19/07")).toBeTruthy()
  })
})