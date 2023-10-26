import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

describe("Storage: CityStorage", ()=> {
  it("should be return null when dont't have a city storaged", async ()=> {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should be return city storaged", async ()=> {
    const newCity: CityProps = {
      id: "1",
      latitude: 123,
      longitude: 456,
      name: "São Paulo"
    }

    saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })
})