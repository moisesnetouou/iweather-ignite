import {SelectList} from "@components/SelectList"
import { render, screen, fireEvent} from "@testing-library/react-native"

describe("Component: SelectList", ()=> {
  it("should be return city details selected", ()=> {
    const data = [
      {id: "1", name: "Campinas", latitude: 123, longitude: 456},
      {id: "2", name: "Campo Grande", latitude: 789, longitude: 987},
    ]

    const onPress = jest.fn()
    
    render(
      <SelectList 
        data={data} 
        onChange={()=> {}}
        onPress={onPress}
      />)

      const selectedCity = screen.getByText(/Campo/i)
      fireEvent.press(selectedCity)

      expect(onPress).toBeCalledTimes(1)
  })
})